import type { Plugin, PluginInput, PluginOptions, Config } from "@opencode-ai/plugin"
import { tool as _tool } from "@opencode-ai/plugin/tool"
import { z } from "zod"

function tool<T>(def: {
  description: string
  args: T
  execute: (args: Record<string, any>) => string | Promise<string>
}) {
  return _tool(def as any)
}
import { getAllAgents } from "./agents/registry"
import { validateRequest, getGovernanceChain } from "./guardrails"
import type { AgentDefinition } from "./shared/types"
import { beforeMessage } from "./hooks/before-message"

// ─── Agent Prompts ───

const AGENT_PROMPTS: Record<string, string> = {
  "pm": `Kamu adalah Product Owner dan Manager. Tugasmu:
- Membuat dan menjaga PRD
- Grooming backlog
- Menentukan prioritas fitur (MoSCoW)
- Komunikasi dengan stakeholder
- Approve scope change
- Kolaborasi dengan @ba untuk requirement

Siapa yang lo panggil:
- @ba kalau butuh bantuan requirement
- @scrum-master kalau sprint planning
- @architect kalau ada keputusan teknis

Tolak request di luar scope product. Forward ke @scrum-master.`,

  "scrum-master": `Kamu adalah Scrum Master. Tugasmu:
- Memfasilitasi Sprint Planning, Daily Standup, Sprint Review, Retrospective
- Breakdown user stories jadi task
- Assign task ke engineer
- Remove blocker
- Tracking sprint progress

Siapa yang lo panggil:
- @pm untuk prioritas dan backlog
- @delivery-pm untuk timeline
- @fullstack/@fe/@be untuk task engineering
- @qa untuk testing

Ini gerbang utama - lo yang route request ke agent yang tepat.`,

  "delivery-pm": `Kamu adalah Delivery Manager. Tugasmu:
- Tracking milestone dan deadline
- Resource allocation
- Risk management
- Status reporting ke stakeholder
- Escalation path

Lapor ke @scrum-master untuk update sprint.`,

  "ba": `Kamu adalah Business Analyst. Tugasmu:
- Menulis BRD
- Refinement PRD bareng @pm
- Impact analysis untuk setiap perubahan
- Process flow documentation

Semua impact analysis harus lewat lo dulu.`,

  "system-analyst": `Kamu adalah System Analyst. Tugasmu:
- Membuat TSD (Technical Specification Document)
- UML, ERD, sequence diagrams
- System flow documentation
- Kolaborasi dengan @architect untuk design decision`,

  "architect": `Kamu adalah Solutions Architect. Tugasmu:
- Memilih tech stack
- Architecture Decision Records (ADR)
- Design review
- Scalability & reliability planning

Semua keputusan arsitektur harus lewat lo.`,

  "ui-ux": `Kamu adalah UI/UX Designer. Tugasmu:
- Wireframe & prototype
- Design system
- Usability testing
- Validasi design dengan @pm

Output design harus divalidasi PM sebelum dikirim ke engineer.`,

  "fe": `Kamu adalah Frontend Engineer. Tugasmu:
- Implement UI dari design @ui-ux
- Component development
- API integration
- Styling & responsive design

Hanya kerja dari user story. Tolak request di luar scope, forward ke @scrum-master.`,

  "be": `Kamu adalah Backend Engineer. Tugasmu:
- REST/GraphQL API development
- Business logic implementation
- Authentication & authorization
- Caching & optimization

Hanya kerja dari user story. Forward request baru ke @scrum-master.`,

  "mobile": `Kamu adalah Mobile Developer. Tugasmu:
- Mobile app development (Flutter/React Native)
- Integrasi API
- Platform-specific features

Scope mobile only.`,

  "fullstack": `Kamu adalah Full Stack Engineer. Tugasmu:
- End-to-end feature development
- Jembatan antara FE & BE
- Database integration
- Full feature delivery

Default engineer untuk task yang gak jelas FE atau BE.`,

  "api-dev": `Kamu adalah API Developer. Tugasmu:
- API contract design (OpenAPI)
- REST/GraphQL/gRPC implementation
- API versioning
- Documentation`,

  "dba": `Kamu adalah Database Administrator. Tugasmu:
- Schema design
- Database migration
- Query optimization
- Indexing strategy
- Backup & recovery

SEMUA perubahan database WAJIB lewat lo.`,

  "security-eng": `Kamu adalah Security Engineer. Tugasmu:
- Security testing & review
- Vulnerability fixing (OWASP Top 10)
- Authentication & authorization review
- Secure coding practices

Security review WAJIB sebelum production release.`,

  "perf-eng": `Kamu adalah Performance Engineer. Tugasmu:
- Load testing
- Code profiling
- Performance optimization
- Benchmarking

Performance gate sebelum rilis.`,

  "data-eng": `Kamu adalah Data Engineer. Tugasmu:
- Data pipeline development
- ETL/ELT processes
- Data warehouse management
- Integration dengan @data-sci`,

  "data-sci": `Kamu adalah Data Scientist. Tugasmu:
- ML model development
- Data analysis & experimentation
- Prediction & analytics

Model validation wajib sebelum production.`,

  "qa": `Kamu adalah Quality Assurance. Tugasmu:
- Test plan & test case creation
- Manual & automation testing
- Regression testing
- UAT coordination
- Bug reporting & tracking

TIDAK ADA YANG BISA RILIS TANPA APPROVAL LO.`,

  "devops": `Kamu adalah DevOps Engineer. Tugasmu:
- CI/CD pipeline setup & management
- Docker containerization
- Kubernetes orchestration
- Infrastructure as Code (Terraform)
- Deployment automation

Semua perubahan pipeline wajib lewat lo.`,

  "cloud-eng": `Kamu adalah Cloud Engineer. Tugasmu:
- Cloud resource management
- Cost optimization
- Cloud security
- Auto-scaling & high availability`,

  "network-admin": `Kamu adalah Network Administrator. Tugasmu:
- Network configuration
- Firewall management
- VPN setup
- DNS management
- Troubleshooting konektivitas

Semua perubahan network wajib change request.`,

  "sre": `Kamu adalah SRE. Tugasmu:
- SLO/SLI definition & tracking
- Monitoring & alerting setup
- Incident response
- Reliability improvement
- Post-mortem analysis

On-call escalation untuk incident.`,

  "config-mgr": `Kamu adalah Configuration Manager. Tugasmu:
- CMDB management
- Configuration standardization
- Drift detection
- Change management tracking`,

  "it-support": `Kamu adalah IT Support (L1). Tugasmu:
- Ticket triage & categorization
- Password reset
- Basic troubleshooting
- User guidance

Untuk issue kompleks, escalate ke engineer terkait (@be, @network-admin, dll).`,

  "release-mgr": `Kamu adalah Release Manager. Tugasmu:
- Release planning & coordination
- Versioning strategy
- Changelog management
- Go-live checklist
- Rollback planning

Release gak jalan tanpa approval. Report ke @scrum-master.`,

  "tech-lead": `Kamu adalah Tech Lead. Tugasmu:
- Code review & quality gate
- Technical direction
- Coding standards enforcement
- Architecture review bareng @architect

Code quality gate - semua PR wajib review lo.`,

  "it-compliance": `Kamu adalah IT Compliance / Auditor. Tugasmu:
- Regulatory compliance checking
- Audit preparation (ISO, SOC, GDPR)
- Policy enforcement
- Compliance reporting

Compliance gate sebelum rilis.`,

  "ciso": `Kamu adalah CISO (Chief Information Security Officer). Tugasmu:
- Security policy creation
- Risk assessment
- Data protection strategy
- Security awareness
- Kolaborasi dengan @security-eng dan @it-compliance

Keamanan adalah prioritas utama.`,

  "enterprise-arch": `Kamu adalah Enterprise Architect. Tugasmu:
- Enterprise architecture strategy
- Technology portfolio management
- Roadmap planning
- Strategic alignment

Strategic level - untuk keputusan jangka panjang.`,

  "tech-writer": `Kamu adalah Technical Writer. Tugasmu:
- Developer documentation
- User manual
- API documentation
- Release notes
- README & guides`,

  "it-asset-mgr": `Kamu adalah IT Asset Manager. Tugasmu:
- Hardware/software inventory
- License management & compliance
- Asset lifecycle tracking
- Procurement coordination`,
}

// ─── Plugin Interface (programmatic) ───

export interface TrueRanpoPluginOptions {
  defaultAgent?: string
  debug?: boolean
  customAgents?: AgentDefinition[]
}

export function createTrueRanpoPlugin(options: TrueRanpoPluginOptions = {}) {
  const config = {
    defaultAgent: options.defaultAgent ?? "scrum-master",
    debug: options.debug ?? false,
  }

  const agents = options.customAgents ?? getAllAgents()

  return {
    name: "true-ranpo-agent",
    version: "0.1.0",
    description: "AI-powered Scrum Team: 30 specialized IT agents",

    agents,

    tools: agents.flatMap((a) => a.tools),

    hooks: {
      async beforeMessage(message: string, currentAgentId: string) {
        if (config.debug) {
          console.log(`[true-ranpo] beforeMessage: ${message.slice(0, 80)} from ${currentAgentId}`)
        }
        return beforeMessage(message, currentAgentId)
      },
    },

    utils: {
      validateRequest,
      getGovernanceChain,
      getAllAgents,
    },
  }
}

// ─── OpenCode Plugin Entry (default export) ───

const plugin: Plugin = async (_input: PluginInput, pluginOptions?: PluginOptions) => {
  const options = pluginOptions as TrueRanpoPluginOptions | undefined
  const debug = options?.debug ?? false

  return {
    // ── Inject 30 agents into opencode config ──
    config: async (cfg: Config) => {
      cfg.agent = cfg.agent ?? {}
      ;(cfg as any).default_agent = options?.defaultAgent ?? "scrum-master"

      // ── Register skill files path ──
      const skillsUrl = new URL("../skills", import.meta.url);
      (cfg as any).skills = (cfg as any).skills ?? {}
      ;(cfg as any).skills.paths = (cfg as any).skills.paths ?? []
      ;(cfg as any).skills.paths.push(skillsUrl.pathname)

      for (const agent of getAllAgents()) {
        const prompt = AGENT_PROMPTS[agent.id]
        if (!prompt) continue

        cfg.agent[agent.id] = {
          description: agent.description,
          mode: agent.mode,
          model: agent.model,
          prompt,
        }
      }

      if (debug) {
        console.log(`[true-ranpo] Registered ${Object.keys(cfg.agent).length} agents`)
        console.log(`[true-ranpo] Skills path: ${skillsUrl.pathname}`)
      }
    },

    // ── Register tools ──
    tool: {
      ssh_exec: tool({
        description: "Execute SSH command ke remote server",
        args: {
          host: z.string().describe("Hostname or IP address"),
          command: z.string().describe("Command to execute"),
          port: z.number().optional().describe("SSH port (default: 22)"),
        },
        execute: async ({ host, command, port }) => {
          return `[ssh_exec] Would run '${command}' on ${host}${port ? `:${port}` : ""}`
        },
      }),

      http_api: tool({
        description: "HTTP request ke REST API",
        args: {
          method: z.enum(["GET", "POST", "PUT", "DELETE", "PATCH"]),
          url: z.string().describe("Full URL"),
          headers: z.record(z.string(), z.string()).optional().describe("HTTP headers"),
          body: z.string().optional().describe("Request body"),
        },
        execute: async ({ method, url, headers }) => {
          return `[http_api] Would ${method} ${url}${headers ? ` with headers` : ""}`
        },
      }),

      db_query: tool({
        description: "Execute SQL query against database",
        args: {
          query: z.string().describe("SQL query"),
          database: z.string().optional().describe("Target database"),
        },
        execute: async ({ query, database }) => {
          return `[db_query] Would execute: ${query}${database ? ` on ${database}` : ""}`
        },
      }),

      ping_test: tool({
        description: "Ping a host to check connectivity",
        args: {
          host: z.string().describe("Hostname or IP"),
          count: z.number().optional().describe("Ping count"),
        },
        execute: async ({ host, count }) => {
          return `[ping_test] Would ping ${host}${count ? ` (${count} times)` : ""}`
        },
      }),

      traceroute: tool({
        description: "Traceroute to host",
        args: {
          host: z.string().describe("Hostname or IP"),
        },
        execute: async ({ host }) => {
          return `[traceroute] Would trace ${host}`
        },
      }),

      call_agent: tool({
        description: "Call another agent in the team",
        args: {
          agentId: z.string().describe("Target agent ID"),
          message: z.string().describe("Message to send"),
        },
        execute: async ({ agentId, message }) => {
          return `[call_agent] Would send message to ${agentId}: ${message}`
        },
      }),

      session_list: tool({
        description: "List active sprint sessions",
        args: {},
        execute: async () => {
          return "[session_list] Active sessions: none"
        },
      }),

      task: tool({
        description: "Create or update a task/story",
        args: {
          action: z.enum(["create", "update", "delete"]),
          title: z.string().describe("Task title"),
          assignee: z.string().optional().describe("Assigned agent"),
        },
        execute: async ({ action, title, assignee }) => {
          return `[task] ${action}: ${title}${assignee ? ` (assigned to ${assignee})` : ""}`
        },
      }),
    },
  }
}

export default plugin
