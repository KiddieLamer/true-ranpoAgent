// ─── Agent Types ───

export type AgentMode = "primary" | "subagent"

export type AgentCategory =
  | "management"
  | "analysis"
  | "design"
  | "development"
  | "data"
  | "quality"
  | "infra-ops"
  | "governance"
  | "support"

export interface AgentDefinition {
  id: string
  name: string
  role: string
  model: string
  mode: AgentMode
  category: AgentCategory
  description: string
  scope: string
  guard: string
  tools: string[]
  triggers: string[]
  reportingTo?: string
  priority: number
}

// ─── Tool Types ───

export type ToolCategory = "infra" | "network" | "database" | "file" | "api" | "communication"

export interface ToolDefinition {
  name: string
  description: string
  category: ToolCategory
  parameters: Record<string, unknown>
  requiredParams: string[]
  execute: (params: Record<string, unknown>) => Promise<string>
}

// ─── Guardrail Types ───

export type ScopeValidationResult = {
  allowed: boolean
  reason: string
  forwardTo?: string
}

export interface GuardrailRule {
  name: string
  description: string
  validate: (request: string, agentId: string, currentSprint: SprintContext) => ScopeValidationResult
}

// ─── Sprint Types ───

export interface SprintContext {
  number: number
  status: "planning" | "active" | "review" | "retro" | "closed"
  stories: Story[]
}

export interface Story {
  id: string
  title: string
  assignee: string
  status: "backlog" | "in-progress" | "review" | "done"
  priority: "high" | "medium" | "low"
}

// ─── Document Types ───

export type DocumentType = "BRD" | "SOW" | "PRD" | "TSD" | "UAT" | "BST" | "RELEASE" | "SLA"

export interface DocumentMeta {
  type: DocumentType
  projectId: string
  version: string
  createdBy: string
  approvedBy?: string
  status: "draft" | "review" | "approved"
}

// ─── Message Types ───

export interface AgentMessage {
  from: string
  to: string
  type: "request" | "response" | "forward" | "report" | "escalation"
  content: string
  timestamp: number
  metadata?: Record<string, unknown>
}
