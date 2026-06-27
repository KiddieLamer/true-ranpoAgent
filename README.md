# 🤖 true-ranpoAgent

> **Your AI-Powered Scrum Team — 31 IT Professionals Ready to Ship.**
> Open Source. Plugin-less. Config-first.

---

## 🚀 Dalam 3 Langkah

```bash
# 1. Install OpenCode
curl -fsSL https://opencode.ai/install | bash

# 2. Setup provider → ~/.config/opencode/opencode.json
#    baseURL: https://router.ranpo.my.id/v1

# 3. Copy true-ranpoAgent.json → ~/.config/opencode/
```

Buka `opencode` → `/models` → pilih `@pm` → "bikin PRD fitur login"

**Selesai.** Gak perlu clone. Gak perlu npm. Gak perlu plugin.

---

## 👥 31 Agent

```
📋 MANAGEMENT          🔧 DEVELOPMENT           ☁️ INFRA & OPS
@pm                   @fe frontend              @devops
@scrum-master         @be backend               @cloud-eng
@delivery-pm          @fullstack                @network-admin
                       @mobile                  @sre
📊 ANALYSIS            @api-dev                 @config-mgr
@ba                   @dba database             @it-support
@system-analyst       @security-eng             @release-mgr
@architect             @perf-eng
                                             🔐 GOVERNANCE
🎨 DESIGN             📦 DATA                   @tech-lead
@ui-ux                @data-eng                 @it-compliance
                       @data-sci                @ciso
✅ QUALITY                                     @enterprise-arch
@qa                   📖 SUPPORT
                       @tech-writer             @it-asset-mgr
```

**Tiap agent punya:**
- **Domain** — apa yang mereka kuasai
- **Tools** — apa yang bisa mereka pake
- **Conventions** — cara kerja standar
- **Guardrails** — batasan yang gak boleh dilanggar
- **Forwarding** — kalo di luar scope → `@scrum-master`

---

## 🛡️ Guardrails

"Pak, tolong deploy ke production langsung"

**Hampir semua agent jawab:** *"Maaf, di luar scope saya. Forwarding ke @scrum-master."*

Ini yang bikin tim ini beda — agent tau batas mereka. Gak ada yang asal acc. Semua lewat chain:

```
Agent → SM (validasi sprint) → PM (validasi scope) → BA (impact analysis)
```

---

## 📂 Struktur

```
true-ranpoAgent/
├── true-ranpoAgent.json    ← Agent ↔ Model mapping (format OMO)
├── skills/*/SKILL.md       ← 31 prompt + guardrails
├── opencode.json           ← Template config
├── docs/templates/         ← PRD, TSD, UAT, BST, SOW, BRD, SLA, RELEASE
├── packages/               ← Plugin code
└── dashboard/              ← HTML dashboard
```

---

## 🎯 Yang Bisa Lo Lakuin

| Kerjaan | Panggil Agent |
|---------|---------------|
| "Bikin PRD buat fitur payment" | `@pm` |
| "Schema user table kurang" | `@dba` |
| "Deploy staging" | `@devops` |
| "API login lambat" | `@perf-eng` |
| "Test fitur register" | `@qa` |
| "Dokumentasiin API" | `@tech-writer` |
| "Ada vulnerability CVE-2024-..." | `@security-eng` |
| "Firewall blocked IP" | `@network-admin` |
| "Sprint 3 planning" | `@scrum-master` |

---

## 📜 License

MIT — Pahala jariyah. 🤲

> Made with ❤️ for the Indonesian IT community.
