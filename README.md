# true-ranpoAgent

> **Your AI-Powered Scrum Team — From PRD to Delivery.**
> Open Source. OpenCode Plugin. 30 Specialized Agents.

---

## Overview

**true-ranpoAgent** adalah plugin [OpenCode](https://opencode.ai) yang mengubah AI agent menjadi **tim Scrum lengkap** — dari Project Manager yang bikin PRD, Scrum Master yang breakdown stories, sampe FE/BE/QA/DevOps yang deliver.

### Filosofi

- **30 agent = 30 role IT nyata.** Masing-masing punya domain knowledge, tools, dan batasan sendiri.
- **Guardrails ketat.** Agent gak bisa kerja di luar scope. Forward ke SM → validasi → PM → BA kalo perlu.
- **Scrum murni.** Sprint planning, daily standup, review, retrospective — semua ceremony dijalanin.
- **Bahasa ngikut user.** User pake Bahasa Indonesia? Agent jawab Bahasa Indonesia. User pake English? Agent jawab English.
- **Open source.** Pahala jariyah buat semua yang berkontribusi dan yang pake.

## Quick Start

```bash
# Clone
git clone https://github.com/<your-org>/true-ranpoAgent.git
cd true-ranpoAgent

# Install
bun install

# Build
bun run build

# Run Dashboard
bun run dashboard
```

## Architecture

```
                          USER
                           │
                           ▼
                    ┌──────────────┐
                    │      PM      │
                    │   (Product   │
                    │   Owner +    │
                    │   Manager)   │
                    └──────┬───────┘
                           │ vision, PRD, backlog
                           ▼
                    ┌──────────────┐
                    │      SM      │
                    │    Scrum     │
                    │   Master     │
                    └──────┬───────┘
                           │ breakdown, assign, tracking
     ┌─────────────────────┼──────────────────────────┐
     │                     │                          │
     ▼                     ▼                          ▼
┌──────────┐       ┌──────────────┐          ┌──────────────┐
│ ANALYSIS │       │ DEVELOPMENT  │          │  INFRA & OPS │
├──────────┤       ├──────────────┤          ├──────────────┤
│ BA       │       │ FE Engineer  │          │ DevOps       │
│ System   │       │ BE Engineer  │          │ Cloud Eng    │
│ Analyst  │       │ Mobile Dev   │          │ Network Admin│
│ UI/UX    │       │ Full Stack   │          │ SRE          │
│ Architect│       │ API Dev      │          │ Config Mgr   │
└──────────┘       │ DBA          │          │ IT Support   │
                   │ Security Eng │          └──────────────┘
                   │ Performance  │
                   │ Data Eng     │          ┌──────────────┐
                   │ Data Sci     │          │ GOVERNANCE   │
                   └──────────────┘          ├──────────────┤
                          │                  │ Tech Lead    │
     ┌──────────────┐     │                  │ IT Compl.    │
     │   QUALITY    │     │                  │ Enterp. Arch │
     ├──────────────┤     │                  │ CISO         │
     │ QA           │◄────┘                  └──────────────┘
     │ Tech Writer  │
     │ Release Mgr  │          ┌──────────────┐
     │ Perf Eng     │          │   SUPPORT    │
     └──────────────┘          ├──────────────┤
                               │ IT Asset Mgr │
                               │ IT Compliance│
                               └──────────────┘
```

## 30 Agents

| # | Agent | Role | Category |
|---|-------|------|----------|
| 1 | **PM** | Product Owner + Manager | Management |
| 2 | **Scrum Master** | Ceremony & Flow | Management |
| 3 | **Delivery PM** | Timeline & Risk | Management |
| 4 | **BA** | Business Analyst | Analysis |
| 5 | **System Analyst** | System Design | Analysis |
| 6 | **Architect** | Solutions Architect | Analysis |
| 7 | **UI/UX** | User Interface Design | Design |
| 8 | **FE** | Frontend Engineer | Development |
| 9 | **BE** | Backend Engineer | Development |
| 10 | **Mobile** | Mobile Developer | Development |
| 11 | **Full Stack** | Full Stack Engineer | Development |
| 12 | **API Dev** | API Developer | Development |
| 13 | **DBA** | Database Admin | Development |
| 14 | **Security Eng** | Security Engineer | Development |
| 15 | **Perf Eng** | Performance Engineer | Development |
| 16 | **Data Eng** | Data Engineer | Data |
| 17 | **Data Sci** | Data Scientist | Data |
| 18 | **QA** | Quality Assurance | Quality |
| 19 | **DevOps** | DevOps Engineer | Infra & Ops |
| 20 | **Cloud Eng** | Cloud Engineer | Infra & Ops |
| 21 | **Network Admin** | Network Admin | Infra & Ops |
| 22 | **SRE** | Site Reliability Eng | Infra & Ops |
| 23 | **Config Mgr** | Config Manager | Infra & Ops |
| 24 | **IT Support** | IT Support | Infra & Ops |
| 25 | **Release Mgr** | Release Manager | Infra & Ops |
| 26 | **Tech Lead** | Tech Lead | Governance |
| 27 | **IT Compl** | IT Compliance | Governance |
| 28 | **CISO** | CISO | Governance |
| 29 | **Enterp Arch** | Enterprise Architect | Governance |
| 30 | **Tech Writer** | Technical Writer | Support |

## Guardrails

Setiap agent HARUS menolak permintaan di luar scope sprint, dan WAJIB forward ke SM.

```
User → Agent → SM (validasi sprint) → PM (validasi scope) → BA (analisa impact)
```

## Project Structure

```
project/
├── AGENTS.md                  # Master reference (baca ini!)
├── docs/                      # PRD, TSD, BST, sprint artifacts
│   ├── PRD/<feature>/PRD.md
│   ├── TSD/<feature>/TSD.md
│   ├── BST/<feature>/BST.md
│   └── sprint/sprint-<n>/
├── dashboard/                 # HTML static dashboard
│   ├── index.html           # Main dashboard (30 agents)
│   ├── sprint.html          # Kanban sprint board
│   └── docs.html            # Document viewer
├── packages/                  # Monorepo packages
└── .omo/                      # Agent workspace
```

## Dashboard

Static HTML dashboard dengan Tailwind CSS + Alpine.js. Dibuka pake browser langsung:

```bash
bunx serve dashboard/
# atau tinggal double klik dashboard/index.html
```

## License

MIT — Open Source. Pahala jariyah buat semua yang berkontribusi dan yang pake. 🤲

---

*Generated: 2026-06-27*
