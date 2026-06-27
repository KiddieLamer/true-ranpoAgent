import { findAgentsByTrigger } from "../agents/registry"
import { validateRequest } from "../guardrails/chain"
import type { SprintContext } from "../shared/types"

export interface BeforeMessageResult {
  handled: boolean
  response?: string
  forwardTo?: string
}

let currentSprint: SprintContext = {
  number: 0,
  status: "planning",
  stories: [],
}

export function setSprintContext(ctx: SprintContext): void {
  currentSprint = ctx
}

export function beforeMessage(userMessage: string, currentAgentId: string): BeforeMessageResult {
  // 1. Find matching agents by trigger keywords
  const matches = findAgentsByTrigger(userMessage)

  if (matches.length === 1) {
    const target = matches[0]!
    if (target.id === currentAgentId) {
      const validation = validateRequest(userMessage, currentAgentId, currentSprint)
      if (!validation.allowed && validation.forwardTo) {
        return {
          handled: true,
          forwardTo: validation.forwardTo,
          response: `Request di luar scope. Forward ke ${validation.forwardTo}.`,
        }
      }
      return { handled: false }
    }
    return {
      handled: true,
      forwardTo: target.id,
      response: `Ini jobnya ${target.name}. Forwarding...`,
    }
  }

  if (matches.length > 1) {
    // Multiple matches — disambiguate via SM
    return {
      handled: true,
      forwardTo: "scrum-master",
      response: "Beberapa agent cocok. SM akan assign.",
    }
  }

  // No match — default to SM
  return {
    handled: true,
    forwardTo: "scrum-master",
    response: "Gak cocok agent mana pun. Forward ke SM.",
  }
}
