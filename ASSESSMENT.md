# true-ranpoAgent — Assessment & Blueprint

> **Source:** https://github.com/code-yeongyu/oh-my-openagent (v4.13.0)
> **Our Project:** oh-my-ranpo-agent — AI Agent Harness for **IT Domain**
> **Fokus:** MVP 1 — IT Support & Operations Automation

---

## Daftar Isi

- [1. Ringkasan Eksekutif](#1-ringkasan-eksekutif)
- [2. Apa Itu oh-my-openagent?](#2-apa-itu-oh-my-openagent)
- [3. Arsitektur Inti](#3-arsitektur-inti)
- [4. Komponen Kunci](#4-komponen-kunci)
- [5. Feature Matrix: OMO vs Kita](#5-feature-matrix-omo-vs-kita)
- [6. Adaptasi untuk IT Domain](#6-adaptasi-untuk-it-domain)
- [7. MVP 1 — Definisi & Scope](#7-mvp-1--definisi--scope)
- [8. Arsitektur yang Diusulkan](#8-arsitektur-yang-diusulkan)
- [9. Agent Blueprint untuk IT](#9-agent-blueprint-untuk-it)
- [10. Tools & MCP untuk IT](#10-tools--mcp-untuk-it)
- [11. Skills & Commands untuk IT](#11-skills--commands-untuk-it)
- [12. Hooks & Lifecycle](#12-hooks--lifecycle)
- [13. Tech Stack](#13-tech-stack)
- [14. Roadmap MVP 1](#14-roadmap-mvp-1)
- [15. Risiko & Mitigasi](#15-risiko--mitigasi)
- [16. Kesimpulan](#16-kesimpulan)

---

## 1. Ringkasan Eksekutif

**oh-my-openagent** adalah agent harness tercanggih di ekosistem open-source AI coding saat ini (~64k stars). Bukan sekadar plugin, ini adalah **Agent Operating System** dengan 11 agent, ~60 lifecycle hooks, 20-39 tools, 3-tier MCP system, team mode, dan multi-harness support (OpenCode, Codex, Claude Code, Cursor).

**Tujuan kita:** Membangun versi yang sama, tetapi untuk **IT Domain** — bukan untuk coding, melainkan untuk **IT Support, IT Operations, System Administration, Infrastructure Management, dan DevOps Automation.**

**Strategi:** Copy the architecture, replace the domain. Kita tidak perlu reinvent the wheel. Arsitektur OMO sudah terbukti. Tugas kita adalah:
1. Mengadopsi pola agent, hooks, tools, skills, MCPs dari OMO
2. Mengganti domain knowledge dari **software engineering** → **IT operations**
3. Fokus MVP 1 pada **IT Support & Operations Automation**

---

## 2. Apa Itu oh-my-openagent?

OMO adalah ekstensi/plugin untuk OpenCode (dan harness lain) yang mengubahnya dari "single agent coding assistant" menjadi **multi-agent orchestration system** dengan kemampuan:

| Dimensi | OMO Capability |
|---------|---------------|
| **Agents** | 11 agent terpisah dengan peran spesifik (orchestrator, deep worker, planner, researcher, dll) |
| **Hooks** | 53-60 lifecycle hooks yang menyelip di setiap fase session agent |
| **Tools** | 20-39 tools config-gated (LSP, grep, glob, session tools, team tools, dll) |
| **MCPs** | 3-tier: built-in, `.mcp.json`, skill-embedded |
| **Team Mode** | Multi-agent parallel dengan dedicated tools |
| **Hashline** | LINE#ID content hash untuk zero stale-line errors |
| **IntentGate** | Keyword detection untuk mode berbeda (ultrawork, search, analyze, team) |
| **Skills** | Domain-specific instructions + embedded MCPs |
| **Multi-harness** | Berjalan di OpenCode, Codex CLI, Claude Code, Cursor |

### Filosofi Kunci OMO

```
"The agent is the worker. The human does not stay in the loop."
```

OMO dirancang untuk **handoff besar** — tugas yang biasanya membutuhkan human-in-the-loop berjam-jam, dikerjakan agent secara autonomous.

---

## 3. Arsitektur Inti

### 3.1 Layer Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    PLATFORM BINARIES                          │
│        (Bun compile → darwin/linux/windows)                   │
├──────────────────────────────────────────────────────────────┤
│                     ADAPTERS                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────────────┐   │
│  │ omo-opencode  │  │  omo-codex   │  │  (Pi, Claude, ...)│   │
│  │ (Ultimate)    │  │ (Light)      │  │  (future)         │   │
│  └──────────────┘  └──────────────┘  └───────────────────┘   │
├──────────────────────────────────────────────────────────────┤
│                  SKILLS (SKILL.md)                            │
│  20 shared skills + project-scope skills                      │
├──────────────────────────────────────────────────────────────┤
│               MCP SERVERS (stdio/HTTP)                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │  LSP     │ │ Git Bash │ │ codegraph│ │ websearch│        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
├──────────────────────────────────────────────────────────────┤
│                     CORE PACKAGES                             │
│  utils│model-core│prompts-core│rules-engine│agents-md-core    │
│  comment-checker│hashline-core│boulder-state│telemetry-core   │
│  lsp-core│mcp-stdio-core│tmux-core│team-core│delegate-core    │
│  claude-code-compat│skills-loader│mcp-client│openclaw-core    │
└──────────────────────────────────────────────────────────────┘
```

### 3.2 Inisialisasi Plugin Pipeline

```
serverPlugin(input, options)
  1. installAgentSortShim()         → canonical agent order
  2. initConfigContext()            → detect config layout
  3. migrateLegacyWorkspace()       → .sisyphus/ → .omo/
  4. detectDuplicateOmoPlugin()     → safety check
  5. injectServerAuthIntoClient()   → auth headers
  6. loadPluginConfig()             → JSONC → merge → Zod validate
  7. selectRuntimeSecuritySkills()  → security skills
  8. initI18n()                     → locale loading
  9. setAgentSortOrder()            → configured order
  10. initializeOpenClaw()          → Discord/Telegram daemon
  11. checkTeamModeDependencies()   → tmux check
  12. createManagers()              → Tmux, Background, SkillMCP, Config
  13. createTools()                 → ToolRegistry (18-39 tools)
  14. createHooks()                 → 5-tier composition (53-60 hooks)
  15. createPluginInterface()       → 12-14 OpenCode hook handlers
  16. createPluginDispose()         → cleanup
```

### 3.3 5-Tier Hook Composition

```
createHooks()
├── createCoreHooks()
│   ├── createSessionHooks()      # 22 hooks
│   ├── createToolGuardHooks()    # 17 [+1] hooks
│   └── createTransformHooks()    # 4 [+2] hooks
├── createContinuationHooks()     # 7 hooks
└── createSkillHooks()            # 2 hooks
```

### 3.4 11 Agents & Perannya

| Agent | Model | Mode | Peran |
|-------|-------|------|-------|
| **Sisyphus** | claude-opus-4-7 / kimi-k2.6 | primary | Main orchestrator |
| **Hephaestus** | gpt-5.5 | primary | Autonomous deep worker |
| **Prometheus** | claude-opus-4-7 | primary | Strategic planner |
| **Atlas** | claude-sonnet-4-6 | primary | Todo orchestrator |
| **Oracle** | gpt-5.5 | subagent | Knowledge consultation |
| **Librarian** | gpt-5.4-mini-fast | subagent | Docs/code search |
| **Explore** | gpt-5.4-mini-fast | subagent | Codebase grep |
| **Metis** | claude-sonnet-4-6 | subagent | Pre-planning consultant |
| **Momus** | gpt-5.5 | subagent | Plan reviewer |
| **Multimodal-Looker** | gpt-5.5 | subagent | Image/PDF analysis |
| **Sisyphus-Junior** | claude-sonnet-4-6 | subagent | Category-spawned executor |

---

## 4. Komponen Kunci

### 4.1 Tools (18 always-on + conditional)

**Always-on tools:**
- LSP tools (goto_definition, find_references, symbols, diagnostics, rename)
- `grep`, `glob` — file/content search
- `session_list/read/search/info` — session management
- `background_output/cancel` — background task management
- `call_omo_agent` — cross-agent invocation
- `task` (delegate) — task delegation
- `skill`, `skill_mcp` — skill execution

**Conditional:**
- `look_at` — multimodal (image/PDF analysis)
- `interactive_bash` — tmux interactive terminal
- `task_create/get/list/update` — experimental task system
- `edit` (hashline) — LINE#ID anchored edits
- 12 `team_*` tools — team mode coordination

### 4.2 3-Tier MCP System

| Tier | Source | Contoh |
|------|--------|--------|
| 1. Built-in | `packages/omo-opencode/src/mcp/` | websearch (Exa), context7 (docs), grep_app, lsp, codegraph |
| 2. Claude Code | `.mcp.json` project + user | Custom MCP servers |
| 3. Skill-embedded | SKILL.md YAML frontmatter | Per-skill, per-session MCPs |

### 4.3 Skills

Skill di OMO bukan sekadar prompt. Setiap skill membawa:
- **System instructions** yang domain-specific
- **Embedded MCP servers** yang spin up on demand
- **Scoped permissions** — agent stay in bounds

Contoh built-in skills: `playwright` (browser automation), `git-master` (atomic commits), `start-work` (planning), `refactor` (code restructuring), `programming` (general coding).

### 4.4 Commands

Duplikat dari skill, bisa berupa file markdown sederhana:
- `/hyperplan` — 5 hostile critics tear apart your plan
- `/security-research` — 3 hunters + 2 PoC engineers
- `/publish` — publish automation
- `/remove-deadcode` — dead code removal
- `/handoff` — task handoff
- `/start-work` — Prometheus planner

---

## 5. Feature Matrix: OMO vs Kita

| Feature | OMO (Software Engineering) | Kita (IT Domain) | MVP 1? |
|---------|---------------------------|-------------------|--------|
| **Orchestrator Agent** | Sisyphus — coding orchestrator | **Dispatcher** — IT task orchestrator | ✅ |
| **Deep Worker Agent** | Hephaestus — autonomous coder | **Engineer** — autonomous IT executor | ✅ |
| **Planner Agent** | Prometheus — strategic planner | **Strategist** — IT ops planner | ✅ |
| **Researcher Agent** | Oracle/Librarian — code/docs | **Knowledge Miner** — IT docs/runbooks | ✅ |
| **Explorer Agent** | Explore — codebase grep | **Scanner** — infra/network scan | ✅ |
| **LSP Tools** | Code navigation/refactoring | **Infra Tools** — SSH, K8s, DB, API | ✅ |
| **Hashline Edit** | LINE#ID content hash edits | N/A (tidak needed untuk IT config) | ❌ |
| **AST-Grep** | Pattern-aware code search | **Config parser** — YAML/XML/JSON parser | ❌ |
| **Git Integration** | Git-master skill, atomic commits | **Change Management** — config versioning | ✅ |
| **Tmux Integration** | Interactive terminal | **Remote Shell** — SSH sessions | ✅ |
| **Team Mode** | Parallel multi-agent coding | **Incident Response** — parallel diagnosis | ❌ |
| **Telemetry** | PostHog anonymous usage | **Audit Log** — IT compliance logging | ✅ |
| **Multi-harness** | OpenCode, Codex, Claude, Cursor | **Multi-platform** — Slack, Teams, Web UI | ❌ |
| **Skill System** | Domain-specific coding skills | **IT Domain Skills** — network, infra, security | ✅ |
| **Background Agents** | Parallel research/coding | **Parallel monitoring/diagnosis** | ✅ |
| **IntentGate** | ultrawork/search/analyze/team | **IT Modes** — troubleshoot/deploy/monitor/audit | ✅ |
| **MCP System** | Web search, docs, code search | **IT MCPs** — monitoring, ticketing, CMDB | ✅ |
| **Config Injection** | AGENTS.md, rules | **Runbooks & SOPs** injection | ✅ |

---

## 6. Adaptasi untuk IT Domain

### 6.1 Domain Mapping

| OMO Concept | IT Domain Adaptation |
|-------------|---------------------|
| Software project | IT Infrastructure / Environment |
| Codebase | Configuration management (Ansible, Terraform, Helm) |
| Git repository | IT ticket system (Jira, ServiceNow, Zendesk) |
| LSP (Language Server) | Infra API connectors (K8s API, vSphere, AWS SDK) |
| AST-Grep | Config structure scanner (YAML/JSON/HCL validator) |
| Code review | Change advisory board (CAB) approval workflow |
| Test suite | IT compliance checks / SLA validation |
| CI/CD pipeline | IT automation pipeline (runbooks) |
| Bug fix | Incident resolution |
| Feature request | Service request fulfillment |
| Code refactor | Infrastructure migration |
| Deployment | Change deployment / rollout |

### 6.2 IT Domain Verticals untuk MVP 1

```
IT Domain untuk MVP 1
├── IT Support / Help Desk
│   ├── Ticket triage & routing
│   ├── Password reset, account unlock
│   ├── Software installation requests
│   ├── Hardware provisioning
│   └── Knowledge base search
│
├── IT Operations
│   ├── Server monitoring & alerting
│   ├── Log analysis & correlation
│   ├── Backup verification
│   ├── Patch management
│   └── Incident response
│
├── System Administration
│   ├── User/Group management (AD/LDAP)
│   ├── Filesystem management
│   ├── Process management
│   ├── Service restart & recovery
│   └── Config file management
│
├── Network Administration
│   ├── Connectivity testing (ping, traceroute)
│   ├── DNS management
│   ├── Firewall rule audit
│   ├── Port scanning
│   └── Bandwidth monitoring
│
└── IT Asset Management
    ├── Inventory tracking
    ├── License compliance
    ├── Warranty & lifecycle
    └── Software license audit
```

---

## 7. MVP 1 — Definisi & Scope

### 7.1 Vision Statement

> Seorang IT staff bisa mengetik "troubleshoot server X yang down" atau "reset password user Y" dalam bahasa Indonesia, dan agent secara autonomous akan: memahami intent, mencari runbook/SOP terkait, mengeksekusi langkah-langkah diagnostik, menyelesaikan issue, dan mencatat semua tindakan ke audit log.

### 7.2 Scope MVP 1

**IN SCOPE:**
- ✅ Arsitektur dasar (plugin harness untuk OpenCode)
- ✅ 5 IT Domain Agents (Dispatcher, Engineer, Strategist, Knowledge Miner, Scanner)
- ✅ IntentGate untuk IT modes (troubleshoot, deploy, monitor, audit)
- ✅ 10 IT-specific tools (SSH, K8s, API, DB, Ping, Traceroute, AD/LDAP, File System, Process, Config Parser)
- ✅ 3 built-in MCPs (IT Documentation, Monitoring API, CMDB)
- ✅ 5 IT Skills (troubleshoot-network, deploy-service, audit-security, backup-verify, user-management)
- ✅ Rules & SOPs injection
- ✅ Telemetry & Audit Log
- ✅ Background tasks
- ✅ Session management

**OUT OF SCOPE (MVP 1):**
- ❌ Team Mode (parallel multi-agent)
- ❌ Hashline editing
- ❌ Multi-harness support (hanya OpenCode)
- ❌ Claude Code compatibility
- ❌ Tmux integration (basic shell sudah cukup)
- ❌ Skill-embedded MCPs (hanya built-in)
- ❌ LSP tools (tidak relevan untuk IT)
- ❌ Full multi-model orchestration (1-2 model cukup)

### 7.3 Target User Persona

| Persona | Kebutuhan |
|---------|-----------|
| **IT Support L1** | Password reset, account unlock, KB search, ticket triage |
| **IT Support L2** | Server troubleshooting, log analysis, service restart |
| **System Admin** | User/group management, config changes, patch deployment |
| **Network Admin** | Connectivity test, firewall audit, DNS check |
| **IT Manager** | Audit log, compliance check, asset inventory |

---

## 8. Arsitektur yang Diusulkan

### 8.1 High-Level Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                   oh-my-ranpo-agent                           │
│                    Plugin untuk OpenCode                       │
├──────────────────────────────────────────────────────────────┤
│                      CORE PACKAGES                            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │  utils   │ │model-core│ │prompts-  │ │rules-    │        │
│  │          │ │          │ │core      │ │engine    │        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │agents-md-│ │telemetry-│ │boulder-  │ │skills-   │        │
│  │core      │ │core      │ │state     │ │loader    │        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                     │
│  │mcp-client│ │mcp-stdio │ │delegate- │                     │
│  │-core     │ │-core     │ │core      │                     │
│  └──────────┘ └──────────┘ └──────────┘                     │
├──────────────────────────────────────────────────────────────┤
│                      IT MCPS                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │ IT Docs  │ │Monitoring│ │  CMDB    │ │  ITSM    │        │
│  │ (Conflu.)│ │ (PromQL) │ │          │ │ (Jira)   │        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
├──────────────────────────────────────────────────────────────┤
│                      IT SKILLS                                │
│  troubleshoot-network | deploy-service | audit-security       │
│  backup-verify | user-management | patch-management           │
│  incident-response | log-analysis | config-management        │
├──────────────────────────────────────────────────────────────┤
│                   AGENTS (5 IT Roles)                         │
│  Dispatcher | Engineer | Strategist | Knowledge Miner | Scanner│
├──────────────────────────────────────────────────────────────┤
│                TOOLS (10 IT-specific)                         │
│  ssh_exec | k8s_api | http_api | db_query | ping_test         │
│  traceroute | ldap_query | file_ops | process_mgmt | config_parse│
├──────────────────────────────────────────────────────────────┤
│                 HOOKS (15-20 lifecycle)                       │
│  Session | ToolGuard | Transform | Continuation | Skill       │
├──────────────────────────────────────────────────────────────┤
│                        CLI                                    │
│  install | doctor | run | audit                              │
└──────────────────────────────────────────────────────────────┘
```

### 8.2 Package Structure yang Diusulkan

```
oh-my-ranpo-agent/
├── packages/
│   ├── omo-ranpo/                    # Main plugin adapter (OpenCode)
│   │   └── src/
│   │       ├── index.ts              # Plugin entry
│   │       ├── plugin-interface.ts   # OpenCode hook handlers
│   │       ├── create-{managers,tools,hooks}.ts
│   │       ├── agents/              # 5 IT agent factories
│   │       ├── hooks/               # 15-20 lifecycle hooks
│   │       ├── tools/               # 10 IT tools
│   │       ├── features/            # Feature modules
│   │       ├── shared/              # Cross-cutting utilities
│   │       ├── config/             # Zod schema
│   │       ├── cli/                 # Commander.js CLI
│   │       └── mcp/                 # 3-4 built-in IT MCPs
│   │
│   ├── utils/                       # Shared utilities
│   ├── model-core/                  # Model resolution pipeline
│   ├── prompts-core/                # Prompt loading & routing
│   ├── rules-engine/                # Rule discovery & injection
│   ├── agents-md-core/              # AGENTS.md discovery
│   ├── telemetry-core/              # Audit & telemetry
│   ├── skills-loader-core/          # Skill loading
│   ├── mcp-stdio-core/              # MCP stdio framing
│   ├── mcp-client-core/             # MCP client lifecycle
│   ├── boulder-state/               # Work tracking
│   └── delegate-core/               # Task delegation
│
├── skills/                          # IT domain skills
│   ├── troubleshoot-network/
│   ├── deploy-service/
│   ├── audit-security/
│   ├── backup-verify/
│   ├── user-management/
│   ├── patch-management/
│   ├── incident-response/
│   ├── log-analysis/
│   └── config-management/
│
├── commands/                        # Slash commands
│   ├── troubleshoot.md
│   ├── deploy.md
│   ├── audit.md
│   ├── backup.md
│   └── handoff.md
│
├── docs/
│   ├── guide/
│   ├── reference/
│   └── runbooks/                    # IT SOP templates
│
├── AGENTS.md                        # Master reference
├── .omo/
│   ├── rules/                       # IT rules
│   ├── plans/
│   ├── evidence/
│   └── notepads/
│
└── package.json
```

---

## 9. Agent Blueprint untuk IT

### 9.1 Dispatcher (IT Orchestrator)

**Analogi:** Sisyphus → **Dispatcher**

```
┌──────────────────────────────────────────┐
│              DISPATCHER                    │
│        Main IT Orchestrator Agent          │
├──────────────────────────────────────────┤
│ Model: claude-opus-4-7 / gemini-2.5-pro   │
│ Mode: primary                              │
│ Purpose: Orchestrate IT workflows           │
├──────────────────────────────────────────┤
│ Responsibilities:                          │
│ 1. Analyze user request (troubleshoot/     │
│    deploy/monitor/audit)                   │
│ 2. Intent classification via IntentGate    │
│ 3. Delegate to Engineer / Knowledge Miner /│
│    Scanner                                  │
│ 4. Monitor execution                       │
│ 5. Report results to user                  │
├──────────────────────────────────────────┤
│ Delegates to:                              │
│ → Engineer (execution tasks)               │
│ → Knowledge Miner (research tasks)         │
│ → Scanner (discovery tasks)                │
│ → Strategist (planning tasks)              │
└──────────────────────────────────────────┘
```

### 9.2 Engineer (IT Executor)

**Analogi:** Hephaestus → **Engineer**

```
┌──────────────────────────────────────────┐
│              ENGINEER                      │
│        Autonomous IT Operations Agent      │
├──────────────────────────────────────────┤
│ Model: gpt-5.5 / claude-sonnet-4-6        │
│ Mode: primary                              │
│ Purpose: Execute IT tasks autonomously      │
├──────────────────────────────────────────┤
│ Capabilities:                              │
│ • SSH into servers & run commands          │
│ • Execute SQL/NoSQL queries               │
│ • Call REST APIs (monitoring, CMDB, ITSM)  │
│ • Run kubectl commands                     │
│ • Modify config files                      │
│ • Restart services                         │
│ • Create users/groups in AD/LDAP          │
│ • Execute runbook steps                    │
├──────────────────────────────────────────┤
│ Tools: ssh_exec, k8s_api, http_api,        │
│        db_query, file_ops, process_mgmt    │
└──────────────────────────────────────────┘
```

### 9.3 Strategist (IT Planner)

**Analogi:** Prometheus → **Strategist**

```
┌──────────────────────────────────────────┐
│              STRATEGIST                    │
│        IT Ops Planning Agent              │
├──────────────────────────────────────────┤
│ Model: claude-opus-4-7 / gemini-2.5-pro   │
│ Mode: primary                              │
│ Purpose: Plan complex IT operations         │
├──────────────────────────────────────────┤
│ Capabilities:                              │
│ • Interview user for requirements          │
│ • Build maintenance plans                  │
│ • Create runbook steps                     │
│ • Risk assessment & rollback planning      │
│ • Change management documentation          │
│ • Compliance checklists                    │
├──────────────────────────────────────────┤
│ Constraint: May ONLY edit .md files        │
└──────────────────────────────────────────┘
```

### 9.4 Knowledge Miner (IT Researcher)

**Analogi:** Oracle + Librarian → **Knowledge Miner**

```
┌──────────────────────────────────────────┐
│           KNOWLEDGE MINER                  │
│        IT Documentation & Research Agent   │
├──────────────────────────────────────────┤
│ Model: gpt-5.4-mini-fast                  │
│ Mode: subagent                             │
│ Purpose: Search IT knowledge, docs, logs   │
├──────────────────────────────────────────┤
│ Capabilities:                              │
│ • Search Confluence / SharePoint           │
│ • Query knowledge base                     │
│ • Search runbook library                   │
│ • Grep config repositories                 │
│ • Parse log files & correlate              │
│ • Search error code databases              │
├──────────────────────────────────────────┤
│ Tools: grep, glob, http_api, it_docs_mcp   │
└──────────────────────────────────────────┘
```

### 9.5 Scanner (IT Discovery)

**Analogi:** Explore → **Scanner**

```
┌──────────────────────────────────────────┐
│               SCANNER                      │
│        Infrastructure Discovery Agent      │
├──────────────────────────────────────────┤
│ Model: gpt-5.4-mini-fast                  │
│ Mode: subagent                             │
│ Purpose: Scan & discover IT infrastructure  │
├──────────────────────────────────────────┤
│ Capabilities:                              │
│ • Ping sweep network segments             │
│ • Port scan specified hosts               │
│ • DNS resolution & lookup                 │
│ • Traceroute network paths                │
│ • Check service health endpoints          │
│ • Discover running services               │
│ • Query monitoring system                 │
├──────────────────────────────────────────┤
│ Tools: ping_test, traceroute, http_api,    │
│        process_mgmt, grep, glob            │
└──────────────────────────────────────────┘
```

### 9.6 Agent Interaction Flow

```
User: "Server production-db-01 down, cek!"
                    │
                    ▼
┌─────────────────────────────────────┐
│         INTENTGATE                   │
│  Detect mode: troubleshoot           │
└─────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────┐
│         DISPATCHER                   │
│  1. Parse request: server=prod-db-01 │
│     symptom=down                     │
│  2. Create plan:                     │
│     Phase 1 - Ping check             │
│     Phase 2 - SSH + service check    │
│     Phase 3 - Log analysis           │
│     Phase 4 - Remediation            │
│     Phase 5 - Report                 │
│  3. Delegate to Scanner → ping check │
│  4. Delegate to Engineer → SSH + log │
│  5. Delegate to Knowledge → KB search│
└─────────────────────────────────────┘
                    │
                    ▼
    ┌──────────────────────────────┐
    │  SCANNER: ping prod-db-01    │
    │  → Host unreachable          │
    └──────────────────────────────┘
    ┌──────────────────────────────┐
    │  ENGINEER: SSH via jump host │
    │  → service nginx status: down│
    │  → journalctl: OOM killer    │
    └──────────────────────────────┘
    ┌──────────────────────────────┐
    │  KNOWLEDGE: search "oom      │
    │  killer nginx remediation"   │
    │  → increase swap, adjust     │
    │    vm.overcommit_memory      │
    └──────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────┐
│         DISPATCHER                   │
│  Compile results → report to user   │
│  Log all actions to audit           │
└─────────────────────────────────────┘
```

---

## 10. Tools & MCP untuk IT

### 10.1 IT Tools (MVP 1 — 10 tools)

| Tool | Name | Fungsi | Analogi OMO |
|------|------|--------|-------------|
| `ssh_exec` | SSH Execute | Run commands via SSH on remote servers | `interactive_bash` |
| `k8s_api` | Kubernetes API | kubectl commands (get, describe, logs, exec) | - |
| `http_api` | HTTP API Call | REST API calls to any service | - |
| `db_query` | Database Query | SQL queries (SELECT, INSERT, UPDATE) | - |
| `ping_test` | Ping Test | ICMP ping to target host | - |
| `traceroute` | Traceroute | Network path tracing | - |
| `ldap_query` | LDAP Query | AD/LDAP user & group queries | - |
| `file_ops` | File Operations | Read, write, edit config files | `read` / `edit` |
| `process_mgmt` | Process Management | List, kill, restart processes | - |
| `config_parse` | Config Parser | Parse YAML/JSON/XML/INI configs | `grep` / `glob` |

### 10.2 Tool Implementation Pattern (contoh: ssh_exec)

```typescript
// packages/omo-ranpo/src/tools/ssh-exec/tool.ts
export const createSshExecTool = (): ToolDefinition => ({
  name: "ssh_exec",
  description: "Execute SSH command on remote server",
  parameters: {
    type: "object",
    properties: {
      host: { type: "string", description: "Target hostname or IP" },
      command: { type: "string", description: "Command to execute" },
      timeout: { type: "number", default: 30 },
      jump_host: { type: "string", description: "Optional jump host" }
    },
    required: ["host", "command"]
  },
  execute: async ({ host, command, timeout, jump_host }) => {
    // Implementation using ssh2 or Node native
    // - Connect via SSH
    // - Execute command
    // - Return stdout/stderr/exitCode
    // - Sanitize output (remove secrets)
    // - Log to audit trail
  }
})
```

### 10.3 Built-in MCPs (MVP 1 — 4 MCPs)

| MCP | Nama | Fungsi | Type |
|-----|------|--------|------|
| `it_docs` | IT Documentation | Search Confluence, SharePoint, KB | Remote HTTP |
| `monitoring` | Monitoring API | Query Prometheus, Datadog, Grafana | Remote HTTP |
| `cmdb` | CMDB/ITSM | Query ServiceNow, Jira, Zendesk | Remote HTTP |
| `config_repo` | Config Repository | Search & read config repos (Git) | Local stdio |

---

## 11. Skills & Commands untuk IT

### 11.1 IT Skills (MVP 1 — 9 skills)

```
skills/
├── troubleshoot-network/          # Network troubleshooting runbook
│   ├── SKILL.md                   # YAML frontmatter + instructions
│   └── runbook.md                 # Step-by-step SOP
├── deploy-service/                # Service deployment runbook
├── audit-security/                # Security audit checklist
├── backup-verify/                 # Backup verification procedure
├── user-management/               # AD/LDAP user management
├── patch-management/              # Patch deployment SOP
├── incident-response/             # Incident response playbook
├── log-analysis/                  # Log analysis patterns
└── config-management/             # Config file management SOP
```

### 11.2 Contoh Skill Structure

```yaml
# skills/troubleshoot-network/SKILL.md
---
name: troubleshoot-network
description: >
  Troubleshoot network connectivity issues.
  Trigger: network, connection, ping, dns, latency, timeout
mcp_servers:
  monitoring:
    command: python
    args: ["-m", "mcp_monitoring"]
    env:
      PROMETHEUS_URL: "${PROMETHEUS_URL}"
---

# Network Troubleshooting Runbook

## Prerequisites
- SSH access to affected hosts
- Monitoring system credentials
- Network diagram / CMDB access

## Phase 1 — Connectivity Check
1. Ping target host → tool `ping_test`
2. Traceroute to target → tool `traceroute`
3. DNS resolution → tool `ssh_exec` with `nslookup`

## Phase 2 — Service Health
1. Check service status via SSH → tool `ssh_exec`
2. Query monitoring system → MCP `monitoring`
3. Check recent alerts → MCP `monitoring`

## Phase 3 — Log Analysis
1. Check system logs → tool `ssh_exec` `journalctl -n 50`
2. Check application logs → tool `ssh_exec`
3. Correlate with monitoring data → MCP `monitoring`

## Phase 4 — Remediation
1. Based on findings, execute fix
2. Verify fix → repeat Phase 1
3. Document resolution → write report

## Anti-patterns
- Jangan restart service tanpa log check
- Jangan ignore monitoring alerts
- Jangan edit config tanpa backup

## Output
- Root cause analysis summary
- Timeline of events
- Remediation steps taken
- Verification results
```

### 11.3 Commands (MVP 1 — 5 commands)

```markdown
# commands/troubleshoot.md
---
description: Troubleshoot IT infrastructure issues
argument-hint: "<host> [service] [timeout]"
---

<command-instruction>
You are an IT Troubleshooting Agent.

Step 1 — Analyze the user request
- Identify affected host/service
- Determine issue type (connectivity, performance, availability)

Step 2 — Deploy troubleshooting workflow
- Ping the target host
- SSH for service/process check
- Query monitoring system
- Analyze logs

Step 3 — Report findings
- Root cause
- Timeline  
- Remediation taken

<user-request>$ARGUMENTS</user-request>
</command-instruction>
```

### 11.4 IntentGate untuk IT

```
User Input
    │
    ▼
┌─────────────────────────────────────┐
│          INTENTGATE (IT)             │
├─────────────────────────────────────┤
│                                     │
│  Kata Kunci → Mode                  │
│  ─────────────────────────          │
│  troubleshoot, down, error,         │
│  fail, crash, slow     → TROUBLESHOOT│
│                                     │
│  deploy, rollout, install,          │
│  upgrade, migrate       → DEPLOY    │
│                                     │
│  monitor, check, status,            │
│  health, alert          → MONITOR   │
│                                     │
│  audit, compliance, review,         │
│  security, scan         → AUDIT     │
│                                     │
│  reset, create, add, remove,        │
│  configure, setup       → EXECUTE   │
│                                     │
│  (no match)              → STRATEGIST│
│                                     │
└─────────────────────────────────────┘
```

---

## 12. Hooks & Lifecycle

### 12.1 Session Hooks (MVP 1 — 12 hooks)

| Hook | Fungsi |
|------|--------|
| `it-keyword-detector` | IntentGate untuk IT modes |
| `it-model-fallback` | Fallback antar IT model |
| `it-config-injector` | Inject config/credentials aman |
| `audit-logger` | Log semua action ke audit trail |
| `runbook-injector` | Inject relevant SOPs ke context |
| `sensitive-data-filter` | Filter IP, credentials dari output |
| `command-guard` | Validasi command sebelum eksekusi |
| `output-sanitizer` | Sanitasi output (hapus secrets) |
| `session-recovery` | Recovery dari error session |
| `context-truncator` | Truncate context jika overload |
| `todo-continuation` | Todo enforcer (keep agent on task) |
| `session-recorder` | Rekam session untuk audit |

### 12.2 Contintuation Hooks (MVP 1 — 3 hooks)

| Hook | Fungsi |
|------|--------|
| `it-background-agent-completion` | Handle background task completion |
| `it-todo-continuation-enforcer` | Paksa agent selesaikan task |
| `it-error-handler` | Handle API/SSH failures gracefully |

### 12.3 Skill Hooks (MVP 1 — 2 hooks)

| Hook | Fungsi |
|------|--------|
| `it-skill-reminder` | Remind agent of available IT skills |
| `it-auto-slash-command` | Auto-trigger command by keyword |

---

## 13. Tech Stack

### 13.1 Runtime & Language

| Komponen | Pilihan | Alasan |
|----------|---------|--------|
| Runtime | **Bun** (1.3+) | Sama dengan OMO, kompatibel OpenCode |
| Language | **TypeScript** (strict, ESNext) | Sama dengan OMO |
| Package Manager | **Bun** | Bun native |
| Test Framework | **bun:test** | Bun native, given/when/then style |

### 13.2 Dependencies Utama

| Package | Versi | Fungsi |
|---------|-------|--------|
| `@opencode-ai/plugin` | ^1.15 | OpenCode plugin SDK |
| `@opencode-ai/sdk` | ^1.15 | OpenCode SDK |
| `@modelcontextprotocol/sdk` | ^1.29 | MCP SDK |
| `commander` | ^14 | CLI framework |
| `zod` | ^4 | Schema validation |
| `ssh2` | ^1.15 | SSH client |
| `@kubernetes/client-node` | - | K8s API client |
| `pg` / `mysql2` | - | Database clients |
| `js-yaml` | ^4 | YAML parsing |
| `jsonc-parser` | ^3 | JSONC parsing |
| `picocolors` | ^1 | Terminal colors |

### 13.3 Dev Tools

| Tool | Fungsi |
|------|--------|
| `typescript` ^6 | Type checker |
| `bun-types` | Bun type declarations |
| `biome` | Linter & formatter |

---

## 14. Roadmap MVP 1

### Phase 1: Foundation (Week 1-2)

```
[Week 1] Project setup & architecture
├── Initialize monorepo (Bun workspaces)
├── Create package structure
├── Implement core packages (utils, model-core, prompts-core)
├── Set up OpenCode plugin skeleton
├── Implement config loading (JSONC → Zod)
├── Create AGENTS.md master reference
└── Set up CI (typecheck, build, test)

[Week 2] Plugin lifecycle
├── Implement plugin entry point (index.ts)
├── Create 5-tier hook composition (skeleton)
├── Create 14 OpenCode hook handlers (skeleton)
├── Implement session manager
├── Implement config pipeline
└── Build CLI (install, doctor, run)
```

### Phase 2: Agents (Week 3-4)

```
[Week 3] Core agents
├── Implement Dispatcher agent (IT orchestrator)
│   ├── Agent factory
│   ├── Delegation logic
│   └── Intent classification
├── Implement Engineer agent (IT executor)
│   ├── SSH execution capability
│   ├── API calling capability
│   └── Tool routing
└── Implement Strategist agent (IT planner)

[Week 4] Sub-agents
├── Implement Knowledge Miner agent
├── Implement Scanner agent
├── Subagent orchestration
├── Background agent system
└── Task delegation framework
```

### Phase 3: Tools & MCPs (Week 5-6)

```
[Week 5] IT Tools
├── ssh_exec tool (SSH command execution)
├── k8s_api tool (Kubernetes API)
├── http_api tool (REST API calls)
├── db_query tool (SQL queries)
├── ping_test tool
├── traceroute tool
├── ldap_query tool
├── file_ops tool
├── process_mgmt tool
└── config_parse tool

[Week 6] MCPs & Integration
├── IT Documentation MCP (Confluence/SharePoint)
├── Monitoring API MCP (Prometheus/Datadog)
├── CMDB/ITSM MCP (ServiceNow/Jira)
├── Config Repository MCP (Git)
└── Tool security & validation
```

### Phase 4: Skills, Hooks & Polish (Week 7-8)

```
[Week 7] Skills & Commands
├── 9 IT domain skills
│   ├── troubleshoot-network
│   ├── deploy-service
│   ├── audit-security
│   ├── backup-verify
│   ├── user-management
│   ├── patch-management
│   ├── incident-response
│   ├── log-analysis
│   └── config-management
├── 5 slash commands
├── IntentGate IT modes
└── Runbook/SOP injection

[Week 8] Hooks & Testing
├── 17 lifecycle hooks
├── Audit logging system
├── Telemetry (optional)
├── Integration testing
├── QA evidence recording
├── Documentation
└── MVP 1 release
```

### Timeline Gantt

```
Week 1  ████████░░░░░░░░░░░░░░░░░░░░░░  Foundation Setup
Week 2  ░░░░░░░░████████░░░░░░░░░░░░░░  Plugin Lifecycle
Week 3  ░░░░░░░░░░░░░░░░████████░░░░░░  Core Agents
Week 4  ░░░░░░░░░░░░░░░░░░░░░░████████  Sub-Agents
Week 5  ████████░░░░░░░░░░░░░░░░░░░░░░  IT Tools (batch 1)
Week 6  ░░░░░░░░████████░░░░░░░░░░░░░░  MCPs + more Tools
Week 7  ░░░░░░░░░░░░░░░░████████░░░░░░  Skills & Commands
Week 8  ░░░░░░░░░░░░░░░░░░░░░░████████  Hooks, Testing, Release
```

---

## 15. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| **SSH credentials management** | HIGH — security risk | Use env vars + `.env` gitignored; never log credentials; implement credential vault |
| **Command injection via SSH** | HIGH — RCE risk | Sanitize all inputs; use parameterized commands; whitelist allowed commands |
| **API rate limiting** | MEDIUM — degraded performance | Implement retry with backoff; queue non-urgent requests |
| **OpenCode breaking changes** | MEDIUM — plugin breakage | Pin OpenCode version; CI test against multiple versions; follow OMO pattern |
| **Model inconsistency** | MEDIUM — unreliable output | Implement fallback chains; validate JSON output; retry on parse failure |
| **Context window limits** | MEDIUM — truncated reasoning | Implement context truncation hooks; prioritize recent/important context |
| **Multi-tenant isolation** | LOW — data leakage | Sandbox per-session; never share state between sessions |
| **Network timeout** | LOW — hanging operations | Implement timeouts on all network tools; default 30s SSH timeout |

---

## 16. Kesimpulan

**Oh-my-openagent** adalah referensi arsitektur yang sangat matang untuk membangun AI agent harness. Dengan 64k GitHub stars, 37 packages, 11 agents, ~60 hooks, dan ribuan commit, arsitekturnya sudah teruji di production.

Untuk **oh-my-ranpo-agent**, strategi kita adalah:

1. **Adopsi arsitektur OMO** — pola package layering, 5-tier hooks, config pipeline, agent factory, tool registry, MCP system
2. **Replace domain knowledge** — dari software engineering ke IT operations
3. **Simplify untuk MVP 1** — hanya 5 agent, 10 tools, 4 MCPs, 9 skills, 17 hooks
4. **Fokus pada** — IT Support, IT Operations, System Admin, basic Network Admin

**MVP 1 deliverable:** Plugin OpenCode yang memungkinkan IT staff untuk memberikan instruksi bahasa Indonesia dan agent secara autonomous menjalankan troubleshooting, deployment, monitoring, dan audit tasks.

### Perbandingan dengan OMO

| Dimensi | OMO | Ranpo MVP 1 |
|---------|-----|-------------|
| **Agents** | 11 | 5 |
| **Hooks** | 53-60 | 17 |
| **Tools** | 20-39 | 10 |
| **MCPs** | 5 built-in + .mcp.json + skill-embedded | 4 built-in |
| **Skills** | 20+ shared + project | 9 IT domain |
| **Team Mode** | ✅ | ❌ |
| **Multi-harness** | OpenCode, Codex, Claude, Cursor | OpenCode only |
| **Domain** | Software Engineering | IT Operations |
| **Target User** | Software Developers | IT Staff / System Admin |

**Langkah selanjutnya:** Clone arsitektur, implement Phase 1 (Foundation), validasi dengan prototype sederhana (Dispatcher + SSH tool + troubleshooting skill).

---

*Document generated: 2026-06-27*
*Source assessment: oh-my-openagent v4.13.0 (commit 065534023)*
