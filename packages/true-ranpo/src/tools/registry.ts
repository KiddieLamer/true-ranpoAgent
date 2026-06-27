import type { ToolDefinition } from "../shared/types"

const tools: Map<string, ToolDefinition> = new Map()

function define(tool: ToolDefinition): void {
  tools.set(tool.name, tool)
}

define({
  name: "ssh_exec",
  description: "Execute SSH command ke remote server",
  category: "infra",
  parameters: { host: "string", command: "string", port: "number" },
  requiredParams: ["host", "command"],
  execute: async (params) => {
    return `[ssh_exec] Would run '${params.command}' on ${params.host}`
  },
})

define({
  name: "http_api",
  description: "HTTP request ke REST API",
  category: "api",
  parameters: { method: "string", url: "string", headers: "object", body: "string" },
  requiredParams: ["method", "url"],
  execute: async (params) => {
    return `[http_api] Would ${params.method} ${params.url}`
  },
})

define({
  name: "db_query",
  description: "Execute SQL query against database",
  category: "database",
  parameters: { query: "string", database: "string" },
  requiredParams: ["query"],
  execute: async (params) => {
    return `[db_query] Would execute: ${params.query}`
  },
})

define({
  name: "ping_test",
  description: "Ping a host to check connectivity",
  category: "network",
  parameters: { host: "string", count: "number" },
  requiredParams: ["host"],
  execute: async (params) => {
    return `[ping_test] Would ping ${params.host}`
  },
})

define({
  name: "traceroute",
  description: "Traceroute to host",
  category: "network",
  parameters: { host: "string" },
  requiredParams: ["host"],
  execute: async (params) => {
    return `[traceroute] Would trace ${params.host}`
  },
})

define({
  name: "call_agent",
  description: "Call another agent in the team",
  category: "communication",
  parameters: { agentId: "string", message: "string" },
  requiredParams: ["agentId", "message"],
  execute: async (params) => {
    return `[call_agent] Would send message to ${params.agentId}`
  },
})

define({
  name: "session_list",
  description: "List active sprint sessions",
  category: "communication",
  parameters: {},
  requiredParams: [],
  execute: async () => {
    return "[session_list] Active sessions: none"
  },
})

define({
  name: "task",
  description: "Create or update a task/story",
  category: "communication",
  parameters: { action: "string", title: "string", assignee: "string" },
  requiredParams: ["action", "title"],
  execute: async (params) => {
    return `[task] ${params.action}: ${params.title}`
  },
})

export function getTools(): ToolDefinition[] {
  return Array.from(tools.values())
}

export function getTool(name: string): ToolDefinition | undefined {
  return tools.get(name)
}
