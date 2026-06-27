import { loadConfig, getMergedAgents } from "../packages/true-ranpo/src/config"
import { createTrueRanpoPlugin } from "../packages/true-ranpo/src/index"

const config = loadConfig()
console.log("Config loaded:", JSON.stringify(config.options, null, 2))

const agents = getMergedAgents(config)
console.log(`Agents merged: ${agents.length}`)
console.log("First 3 agents:")
agents.slice(0, 3).forEach((a) => console.log(`  ${a.id} (${a.role}) — ${a.model}`))

const plugin = createTrueRanpoPlugin({
  customAgents: agents,
  debug: true,
})

console.log(`\nPlugin: ${plugin.name} v${plugin.version}`)
console.log(`Tools: ${plugin.tools.length}`)
console.log(`Hooks: ${Object.keys(plugin.hooks).length}`)
