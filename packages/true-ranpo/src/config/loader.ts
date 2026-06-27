import { readFileSync, existsSync } from "fs"
import { join } from "path"
import { getAllAgents } from "../agents/registry"
import type { AgentDefinition } from "../shared/types"

export interface TrueRanpoConfig {
  agents?: Record<string, Partial<AgentDefinition>>
  providers?: Record<string, { apiKey: string; baseURL: string }>
  options?: {
    defaultAgent?: string
    debug?: boolean
  }
}

function findConfigFile(): string | null {
  const candidates = [
    ".opencode/true-ranpo.json",
    ".opencode/true-ranpo.jsonc",
    "true-ranpo.json",
    "true-ranpo.jsonc",
  ]
  for (const candidate of candidates) {
    const fullPath = join(process.cwd(), candidate)
    if (existsSync(fullPath)) return fullPath
  }
  return null
}

function parseJSONC(text: string): unknown {
  try {
    return JSON.parse(text)
  } catch {
    const lines = text.split("\n").filter((l) => !l.trimStart().startsWith("//"))
    return JSON.parse(lines.join("\n"))
  }
}

export function loadConfig(): TrueRanpoConfig {
  const configPath = findConfigFile()
  if (!configPath) return {}

  const raw = readFileSync(configPath, "utf-8")
  const parsed = configPath.endsWith(".jsonc") ? parseJSONC(raw) : JSON.parse(raw)
  return parsed as TrueRanpoConfig
}

export function getMergedAgents(config?: TrueRanpoConfig): AgentDefinition[] {
  const defaults = getAllAgents()
  const overrides = config?.agents
  if (!overrides) return defaults

  return defaults.map((agent) => {
    const override = overrides[agent.id]
    if (!override) return agent
    return { ...agent, ...override }
  })
}
