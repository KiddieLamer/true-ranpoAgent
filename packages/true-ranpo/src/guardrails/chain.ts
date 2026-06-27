import { getAgentById } from "../agents/registry"
import type { AgentDefinition, ScopeValidationResult, SprintContext, GuardrailRule } from "../shared/types"

// ─── Built-in Guardrail Rules ───

const scopeOverlapCheck: GuardrailRule = {
  name: "scope-overlap",
  description: "Cek apakah request masuk dalam scope agent",
  validate: (request: string, agentId: string, _sprint: SprintContext): ScopeValidationResult => {
    const agent = getAgentById(agentId)
    if (!agent) return { allowed: false, reason: `Agent ${agentId} tidak ditemukan di registry` }

    const lower = request.toLowerCase()
    const matched = agent.triggers.some((t) => lower.includes(t))

    if (!matched) {
      return {
        allowed: false,
        reason: `Request "${request.slice(0, 60)}..." tidak cocok dengan trigger ${agent.name}. Forward ke SM.`,
        forwardTo: "scrum-master",
      }
    }

    return { allowed: true, reason: "Scope cocok" }
  },
}

const outOfScopeForward: GuardrailRule = {
  name: "out-of-scope-forward",
  description: "Forward ke SM kalo request di luar scope",
  validate: (_request: string, _agentId: string, _sprint: SprintContext): ScopeValidationResult => {
    return { allowed: true, reason: "Pass-through" }
  },
}

const governanceChain: GuardrailRule = {
  name: "governance-chain",
  description: "Pastikan chain governance: agent -> SM -> PM -> BA",
  validate: (_request: string, agentId: string, _sprint: SprintContext): ScopeValidationResult => {
    const skipCheck = ["pm", "scrum-master", "ba"]
    if (skipCheck.includes(agentId)) {
      return { allowed: true, reason: "Governance agent, skip chain check" }
    }
    return { allowed: true, reason: "Chain OK (akan di-validate downstream)" }
  },
}

const globalGuardrails: GuardrailRule[] = [
  scopeOverlapCheck,
  outOfScopeForward,
  governanceChain,
]

// ─── Guardrail Engine ───

export function validateRequest(
  request: string,
  agentId: string,
  sprint: SprintContext,
): ScopeValidationResult {
  for (const rule of globalGuardrails) {
    const result = rule.validate(request, agentId, sprint)
    if (!result.allowed) return result
  }
  return { allowed: true, reason: "Lolos semua guardrail" }
}

// ─── Governance Chain ───

export type ChainStep = {
  step: number
  agentId: string
  action: "validate" | "approve" | "execute"
}

export function getGovernanceChain(fromAgentId: string): ChainStep[] {
  const chain: ChainStep[] = []

  chain.push({ step: 1, agentId: fromAgentId, action: "execute" })

  if (!["pm", "scrum-master", "ba"].includes(fromAgentId)) {
    chain.push({ step: 2, agentId: "scrum-master", action: "validate" })
    chain.push({ step: 3, agentId: "pm", action: "approve" })
    chain.push({ step: 4, agentId: "ba", action: "validate" })
  }

  return chain
}

// ─── Forwarding ───

export function forwardRequest(
  request: string,
  fromAgent: AgentDefinition,
  toAgentId: string,
): { to: string; message: string } {
  return {
    to: toAgentId,
    message: `[Forward dari ${fromAgent.name}] Request: "${request}"\nAlasan: Di luar scope agent ini.`,
  }
}
