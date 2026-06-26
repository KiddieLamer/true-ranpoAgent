# IT Role Taxonomy — true-ranpoAgent

> Daftar lengkap role IT yang akan di-agentify. Setiap role punya domain knowledge, tools, dan pola kerja sendiri.

---

## Daftar Role

- [1. DevOps Engineer](#1-devops-engineer)
- [2. Database Administrator (DBA)](#2-database-administrator-dba)
- [3. Project Manager (PM)](#3-project-manager-pm)
- [4. Quality Assurance (QA)](#4-quality-assurance-qa)
- [5. Frontend Engineer (FE)](#5-frontend-engineer-fe)
- [6. Backend Engineer (BE)](#6-backend-engineer-be)
- [7. UI/UX Designer](#7-uiux-designer)
- [8. System Analyst](#8-system-analyst)
- [9. Business Analyst (BA)](#9-business-analyst-ba)
- [10. Security Engineer](#10-security-engineer)
- [11. SRE (Site Reliability Engineer)](#11-sre-site-reliability-engineer)
- [12. Data Engineer](#12-data-engineer)
- [13. Data Scientist](#13-data-scientist)
- [14. Mobile Developer](#14-mobile-developer)
- [15. Scrum Master](#15-scrum-master)
- [16. Product Owner (PO)](#16-product-owner-po)
- [17. Solutions Architect](#17-solutions-architect)
- [18. Technical Writer](#18-technical-writer)
- [19. Release Manager](#19-release-manager)
- [20. IT Support / Help Desk](#20-it-support--help-desk)
- [21. Network Administrator](#21-network-administrator)
- [22. Cloud Engineer](#22-cloud-engineer)
- [23. IT Compliance / Auditor](#23-it-compliance--auditor)
- [24. Tech Lead](#24-tech-lead)
- [25. Full Stack Engineer](#25-full-stack-engineer)
- [26. API Developer](#26-api-developer)
- [27. Performance Engineer](#27-performance-engineer)
- [28. IT Asset Manager](#28-it-asset-manager)
- [29. Configuration Manager](#29-configuration-manager)
- [30. Enterprise Architect](#30-enterprise-architect)
- [31. Table Ringkasan](#31-table-ringkasan)

---

## 1. DevOps Engineer

| Atribut | Detail |
|---------|--------|
| **Domain** | Infrastructure as Code, CI/CD, Automation |
| **Tools** | Docker, Kubernetes, Terraform, Ansible, Jenkins, GitHub Actions, ArgoCD, Helm, Prometheus, Grafana |
| **Responsibilities** | Build & maintain CI/CD pipelines, automate infrastructure, manage container orchestration, implement GitOps, monitoring & alerting, disaster recovery |
| **Knowledge** | Linux, networking, cloud platforms, scripting (bash/python), YAML/HCL, Git |
| **Agent Pattern** | **Executor** — autonomous deployment & infra management |
| **Triggers** | "deploy", "rollout", "pipeline", "infra", "ci/cd", "terraform" |
| **Priority** | P1 |

## 2. Database Administrator (DBA)

| Atribut | Detail |
|---------|--------|
| **Domain** | Database management, performance tuning |
| **Tools** | PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, pgAdmin, DBeaver, Percona Toolkit, pt-query-digest |
| **Responsibilities** | DB installation & configuration, backup & recovery, performance tuning, query optimization, migration, replication setup, capacity planning |
| **Knowledge** | SQL, indexing strategies, transaction isolation, replication, sharding, ACID vs BASE |
| **Agent Pattern** | **Specialist** — database-focused executor |
| **Triggers** | "db", "database", "query", "slow query", "migrate", "backup db", "restore" |
| **Priority** | P2 |

## 3. Project Manager (PM)

| Atribut | Detail |
|--------|--------|
| **Domain** | Project planning, tracking, reporting |
| **Tools** | Jira, Asana, Trello, Microsoft Project, Notion, Confluence, Slack, Excel |
| **Responsibilities** | Create project plans, track milestones, manage resources, risk management, status reporting, stakeholder communication, budget tracking |
| **Knowledge** | Agile, Scrum, Waterfall, risk management, resource planning, budget management |
| **Agent Pattern** | **Strategist/Planner** — planning & tracking |
| **Triggers** | "project", "timeline", "milestone", "sprint", "deadline", "status", "report" |
| **Priority** | P1 |

## 4. Quality Assurance (QA)

| Atribut | Detail |
|--------|--------|
| **Domain** | Software testing, quality engineering |
| **Tools** | Selenium, Cypress, Playwright, JUnit, pytest, Postman, JMeter, TestRail, BrowserStack |
| **Responsibilities** | Test planning, test case creation, manual testing, automation testing, regression testing, performance testing, bug reporting |
| **Knowledge** | Test methodologies (black-box, white-box), BDD/TDD, boundary analysis, exploratory testing |
| **Agent Pattern** | **Verifier** — test execution & validation |
| **Triggers** | "test", "qa", "quality", "bug", "regression", "verify", "uat" |
| **Priority** | P1 |

## 5. Frontend Engineer (FE)

| Atribut | Detail |
|--------|--------|
| **Domain** | User interface development |
| **Tools** | React, Vue, Angular, Next.js, Tailwind, Webpack, Vite, Figma (integration), Storybook |
| **Responsibilities** | Implement UI components, responsive design, state management, API integration, performance optimization, accessibility |
| **Knowledge** | HTML/CSS/JavaScript, TypeScript, browser APIs, web performance, responsive design, accessibility (a11y) |
| **Agent Pattern** | **Crafter** — UI implementation |
| **Triggers** | "frontend", "ui", "component", "page", "layout", "style", "responsive" |
| **Priority** | P2 |

## 6. Backend Engineer (BE)

| Atribut | Detail |
|--------|--------|
| **Domain** | Server-side logic, API development |
| **Tools** | Node.js, Go, Python, Java, NestJS, Express, FastAPI, gRPC, GraphQL, RabbitMQ, Kafka |
| **Responsibilities** | API design & implementation, business logic, data modeling, authentication/authorization, caching, message queue integration |
| **Knowledge** | RESTful APIs, microservices, design patterns, SOLID principles, ORM, caching strategies |
| **Agent Pattern** | **Crafter** — backend implementation |
| **Triggers** | "backend", "api", "service", "endpoint", "microservice", "server" |
| **Priority** | P2 |

## 7. UI/UX Designer

| Atribut | Detail |
|--------|--------|
| **Domain** | User experience & interface design |
| **Tools** | Figma, Sketch, Adobe XD, Framer, Zeplin, Maze, Hotjar |
| **Responsibilities** | User research, wireframing, prototyping, visual design, design system creation, usability testing, interaction design |
| **Knowledge** | Design thinking, usability heuristics, color theory, typography, design systems, responsive design principles |
| **Agent Pattern** | **Designer** — visual & UX design |
| **Triggers** | "design", "ui", "ux", "wireframe", "prototype", "figma", "mockup" |
| **Priority** | P2 |

## 8. System Analyst

| Atribut | Detail |
|--------|--------|
| **Domain** | System analysis & specification |
| **Tools** | Draw.io, Lucidchart, Enterprise Architect, Jira, Confluence, BPMN tools |
| **Responsibilities** | Requirements gathering, system design documentation, process modeling, use case creation, feasibility analysis, stakeholder liaison |
| **Knowledge** | UML, BPMN, ERD, software development lifecycle, business process modeling |
| **Agent Pattern** | **Analyst** — requirements & specification |
| **Triggers** | "analysis", "requirement", "specification", "flow", "process", "srs", "documentation" |
| **Priority** | P1 |

## 9. Business Analyst (BA)

| Atribut | Detail |
|--------|--------|
| **Domain** | Business process & requirements |
| **Tools** | Jira, Confluence, BPMN tools, Excel, Tableau, Power BI |
| **Responsibilities** | Business requirements gathering, stakeholder management, process improvement, cost-benefit analysis, solution assessment, BRD/FRD creation |
| **Knowledge** | Business process modeling, BABOK, requirements engineering, data analysis, industry domain knowledge |
| **Agent Pattern** | **Analyst** — business-side analysis |
| **Triggers** | "business", "requirement", "brd", "stakeholder", "process improvement", "cost" |
| **Priority** | P1 |

## 10. Security Engineer

| Atribut | Detail |
|--------|--------|
| **Domain** | Cybersecurity |
| **Tools** | OWASP ZAP, Burp Suite, Metasploit, Wireshark, Nmap, SonarQube, Vault, Trivy |
| **Responsibilities** | Security assessment, penetration testing, vulnerability management, security architecture, incident response, compliance auditing, security training |
| **Knowledge** | OWASP Top 10, network security, encryption, IAM, zero trust, SIEM, threat modeling |
| **Agent Pattern** | **Guardian** — security enforcement |
| **Triggers** | "security", "vulnerability", "cve", "penetration test", "audit", "firewall", "encrypt" |
| **Priority** | P1 |

## 11. SRE (Site Reliability Engineer)

| Atribut | Detail |
|--------|--------|
| **Domain** | Reliability, observability, incident management |
| **Tools** | Prometheus, Grafana, Datadog, New Relic, PagerDuty, OpsGenie, Terraform, Istio, Envoy |
| **Responsibilities** | Define SLO/SLI/SLA, incident response, capacity planning, chaos engineering, error budget management, on-call rotation, performance optimization |
| **Knowledge** | Reliability engineering, observability, distributed systems, incident management, SRE principles (Google SRE) |
| **Agent Pattern** | **Guardian/Monitor** — reliability & incident response |
| **Triggers** | "incident", "outage", "slo", "sli", "reliability", "pagerduty", "alert", "on-call" |
| **Priority** | P1 |

## 12. Data Engineer

| Atribut | Detail |
|--------|--------|
| **Domain** | Data pipeline, ETL/ELT |
| **Tools** | Apache Spark, Airflow, dbt, Kafka, Flink, Snowflake, BigQuery, Redshift, Fivetran |
| **Responsibilities** | Build data pipelines, ETL/ELT processes, data warehouse management, data lake architecture, data quality monitoring, streaming data processing |
| **Knowledge** | Data modeling (star/snowflake), distributed computing, SQL/NoSQL, schema evolution, data governance |
| **Agent Pattern** | **Engineer** — data pipeline construction |
| **Triggers** | "data pipeline", "etl", "elt", "spark", "airflow", "warehouse", "data lake" |
| **Priority** | P2 |

## 13. Data Scientist

| Atribut | Detail |
|--------|--------|
| **Domain** | Machine learning, statistical analysis |
| **Tools** | Python, R, Jupyter, TensorFlow, PyTorch, scikit-learn, MLflow, SageMaker, Kubeflow |
| **Responsibilities** | Model development, feature engineering, experiment tracking, A/B testing, model deployment, data visualization, insight generation |
| **Knowledge** | ML algorithms, statistics, probability, feature engineering, model evaluation, NLP, computer vision |
| **Agent Pattern** | **Researcher** — data exploration & modeling |
| **Triggers** | "ml", "model", "training", "prediction", "classification", "recommendation" |
| **Priority** | P3 |

## 14. Mobile Developer

| Atribut | Detail |
|--------|--------|
| **Domain** | Mobile application development |
| **Tools** | Flutter, React Native, Swift, Kotlin, Xcode, Android Studio, Firebase |
| **Responsibilities** | Build mobile apps, platform-specific features, push notifications, offline storage, app store deployment, performance optimization |
| **Knowledge** | Mobile UI patterns, platform guidelines (iOS HIG, Material Design), app lifecycle, mobile security |
| **Agent Pattern** | **Crafter** — mobile implementation |
| **Triggers** | "mobile", "app", "ios", "android", "flutter", "react native" |
| **Priority** | P3 |

## 15. Scrum Master

| Atribut | Detail |
|--------|--------|
| **Domain** | Agile facilitation |
| **Tools** | Jira, Confluence, Miro, Slack, Trello, Retrium |
| **Responsibilities** | Facilitate ceremonies (daily standup, sprint planning, review, retro), remove impediments, coach agile practices, track sprint metrics, foster team collaboration |
| **Knowledge** | Scrum Guide, Kanban, SAFe, LeSS, facilitation techniques, conflict resolution, coaching |
| **Agent Pattern** | **Facilitator** — agile process guide |
| **Triggers** | "scrum", "sprint", "retro", "standup", "ceremony", "agile", "impediment" |
| **Priority** | P2 |

## 16. Product Owner (PO)

| Atribut | Detail |
|--------|--------|
| **Domain** | Product management, backlog management |
| **Tools** | Jira, Productboard, Aha!, Amplitude, Mixpanel, Intercom |
| **Responsibilities** | Define product vision, manage backlog, prioritize features, write user stories, accept/reject deliverables, stakeholder management, value delivery |
| **Knowledge** | Product strategy, user story mapping, prioritization (MoSCoW, RICE), market analysis, customer development |
| **Agent Pattern** | **Strategist** — product direction |
| **Triggers** | "backlog", "story", "feature", "priority", "roadmap", "product" |
| **Priority** | P2 |

## 17. Solutions Architect

| Atribut | Detail |
|--------|--------|
| **Domain** | Solution design, technology selection |
| **Tools** | AWS/Azure/GCP, Draw.io, Lucidchart, TOGAF tools, ArchiMate |
| **Responsibilities** | Design end-to-end solutions, technology evaluation, architecture decision records, integration design, non-functional requirements, proof of concept |
| **Knowledge** | Architecture patterns (microservices, event-driven, hexagon), cloud native, security architecture, scalability, cost optimization |
| **Agent Pattern** | **Architect** — solution design & ADRs |
| **Triggers** | "architecture", "solution", "adr", "design decision", "technology" |
| **Priority** | P1 |

## 18. Technical Writer

| Atribut | Detail |
|--------|--------|
| **Domain** | Technical documentation |
| **Tools** | Markdown, AsciiDoc, Docusaurus, GitBook, ReadTheDocs, Swagger/OpenAPI |
| **Responsibilities** | Write API docs, user manuals, developer guides, release notes, onboarding docs, knowledge base articles |
| **Knowledge** | Information architecture, technical communication, doc-as-code, API documentation standards |
| **Agent Pattern** | **Scribe** — documentation generation |
| **Triggers** | "documentation", "docs", "guide", "manual", "api doc", "readme", "wiki" |
| **Priority** | P2 |

## 19. Release Manager

| Atribut | Detail |
|--------|--------|
| **Domain** | Release management, versioning |
| **Tools** | GitHub, GitLab, Jira, Jenkins, Artifactory, Nexus, LaunchDarkly |
| **Responsibilities** | Release planning, version control, change management, release coordination, deployment scheduling, release notes, go/no-go decisions |
| **Knowledge** | Semantic versioning, change management (ITIL), release strategies (blue-green, canary), feature flags |
| **Agent Pattern** | **Coordinator** — release orchestration |
| **Triggers** | "release", "version", "tag", "changelog", "deploy schedule", "go-live" |
| **Priority** | P2 |

## 20. IT Support / Help Desk

| Atribut | Detail |
|--------|--------|
| **Domain** | End-user IT support |
| **Tools** | ServiceNow, Zendesk, Jira Service Desk, Remote Desktop, AD/LDAP, VPN clients |
| **Responsibilities** | Ticket triage, password reset, account management, software installation, hardware troubleshooting, remote desktop support, knowledge base management |
| **Knowledge** | Windows/macOS/Linux desktop support, Active Directory, Office 365, networking basics, common enterprise apps |
| **Agent Pattern** | **Triage** — first-line support |
| **Triggers** | "help", "support", "ticket", "issue", "error", "can't", "problem", "reset", "install" |
| **Priority** | P0 (MVP 1) |

## 21. Network Administrator

| Atribut | Detail |
|--------|--------|
| **Domain** | Network infrastructure |
| **Tools** | Cisco IOS, Wireshark, Nmap, PRTG, SolarWinds, pfSense, VyOS, LibreNMS |
| **Responsibilities** | Network configuration, firewall management, VLAN setup, routing, bandwidth monitoring, VPN management, network security |
| **Knowledge** | TCP/IP, OSI model, BGP, OSPF, DNS, DHCP, VLAN, VPN, NAT, firewall rules, network security |
| **Agent Pattern** | **Operator** — network operations |
| **Triggers** | "network", "vlan", "firewall", "routing", "dns", "dhcp", "bandwidth", "latency" |
| **Priority** | P1 |

## 22. Cloud Engineer

| Atribut | Detail |
|--------|--------|
| **Domain** | Cloud platform management |
| **Tools** | AWS (EC2, S3, Lambda, RDS), GCP, Azure, Terraform, Pulumi, CloudFormation, Vault |
| **Responsibilities** | Cloud resource provisioning, cost optimization, security compliance, auto-scaling, disaster recovery, migration to cloud |
| **Knowledge** | AWS/Azure/GCP services, cloud pricing models, cloud security (CIS benchmarks), Well-Architected Framework |
| **Agent Pattern** | **Architect/Operator** — cloud management |
| **Triggers** | "cloud", "aws", "gcp", "azure", "s3", "ec2", "lambda", "cloud migration" |
| **Priority** | P1 |

## 23. IT Compliance / Auditor

| Atribut | Detail |
|--------|--------|
| **Domain** | Regulatory compliance, IT audit |
| **Tools** | GRC tools (ServiceNow GRC, RSA Archer), compliance scanners, Splunk, audit management tools |
| **Responsibilities** | Compliance assessment (ISO 27001, SOC 2, PCI-DSS, GDPR), policy enforcement, audit preparation, risk assessment, control testing, remediation tracking |
| **Knowledge** | ISO 27001, SOC 2, PCI-DSS, GDPR, SOX, COBIT, ITIL, risk management frameworks |
| **Agent Pattern** | **Auditor** — compliance checking |
| **Triggers** | "compliance", "audit", "iso", "soc", "gdpr", "pci", "regulation", "policy" |
| **Priority** | P2 |

## 24. Tech Lead

| Atribut | Detail |
|--------|--------|
| **Domain** | Technical leadership, code quality |
| **Tools** | GitHub, Code Review tools, SonarQube, architecture tools |
| **Responsibilities** | Code review, technical direction, mentoring, architecture decisions, coding standards, technical debt management, sprint planning support |
| **Knowledge** | Broad technical stack, design patterns, system design, team mentorship, code review best practices |
| **Agent Pattern** | **Lead/Reviewer** — technical oversight |
| **Triggers** | "review", "tech lead", "code quality", "standard", "best practice", "mentoring" |
| **Priority** | P2 |

## 25. Full Stack Engineer

| Atribut | Detail |
|--------|--------|
| **Domain** | End-to-end development |
| **Tools** | Kombinasi FE + BE tools: React/Next.js + Node.js + PostgreSQL + Docker |
| **Responsibilities** | Build features end-to-end, database design, API + UI implementation, deployment, troubleshooting across stack |
| **Knowledge** | Frontend + Backend + Database + DevOps (full spectrum) |
| **Agent Pattern** | **Generalist** — full-spectrum implementation |
| **Triggers** | "fullstack", "feature", "end-to-end", "full stack" |
| **Priority** | P2 |

## 26. API Developer

| Atribut | Detail |
|--------|--------|
| **Domain** | API design & development |
| **Tools** | OpenAPI/Swagger, Postman, GraphQL, gRPC, API Gateway (Kong, Apigee), Rate limiting tools |
| **Responsibilities** | REST/GraphQL/gRPC API design, API documentation, versioning, authentication/authorization, rate limiting, API testing |
| **Knowledge** | REST maturity model, OpenAPI spec, API security (OAuth, JWT), API gateways, backward compatibility |
| **Agent Pattern** | **Crafter** — API implementation |
| **Triggers** | "api", "endpoint", "rest", "graphql", "grpc", "openapi", "swagger" |
| **Priority** | P2 |

## 27. Performance Engineer

| Atribut | Detail |
|--------|--------|
| **Domain** | Performance testing & optimization |
| **Tools** | JMeter, k6, Gatling, Lighthouse, WebPageTest, perf, flame graph tools |
| **Responsibilities** | Load testing, stress testing, performance profiling, bottleneck identification, optimization recommendations, capacity planning, SLI/SLO validation |
| **Knowledge** | Performance patterns, caching, CDN, database query optimization, memory management, async processing |
| **Agent Pattern** | **Analyzer** — performance analysis |
| **Triggers** | "performance", "load test", "benchmark", "slow", "latency", "throughput", "optimize" |
| **Priority** | P2 |

## 28. IT Asset Manager

| Atribut | Detail |
|--------|--------|
| **Domain** | IT asset lifecycle management |
| **Tools** | ServiceNow, Snipe-IT, Lansweeper, Flexera, Excel, barcode/RFID systems |
| **Responsibilities** | Asset tracking (hardware & software), license management, warranty tracking, procurement planning, disposal, inventory audit |
| **Knowledge** | ITIL asset management, software licensing models, hardware lifecycle, procurement processes |
| **Agent Pattern** | **Clerk** — asset tracking & inventory |
| **Triggers** | "asset", "inventory", "license", "hardware", "warranty", "procurement" |
| **Priority** | P3 |

## 29. Configuration Manager

| Atribut | Detail |
|--------|--------|
| **Domain** | Configuration management |
| **Tools** | Ansible, Puppet, Chef, SaltStack, Terraform, AWS SSM, Git |
| **Responsibilities** | Config standardization, CMDB management, configuration drift detection, automation of config deployment, compliance checking, version control of configs |
| **Knowledge** | CMDB (ITIL), idempotent configuration, declarative vs imperative, config drift, GitOps |
| **Agent Pattern** | **Operator** — configuration enforcement |
| **Triggers** | "config", "configuration", "cmdb", "drift", "ansible", "puppet", "standardize" |
| **Priority** | P2 |

## 30. Enterprise Architect

| Atribut | Detail |
|--------|--------|
| **Domain** | Enterprise-wide architecture |
| **Tools** | TOGAF, ArchiMate, LeanIX, Sparx Enterprise Architect |
| **Responsibilities** | Enterprise architecture strategy, technology portfolio management, architecture governance, roadmaps, standards definition, cross-domain integration |
| **Knowledge** | TOGAF, Zachman, ArchiMate, business architecture, information architecture, application portfolio management |
| **Agent Pattern** | **Strategist** — enterprise-level planning |
| **Triggers** | "enterprise", "architecture", "strategy", "roadmap", "portfolio", "governance" |
| **Priority** | P3 |

---

## 31. Table Ringkasan

| # | Role | Pattern | Priority | Domain Utama |
|---|------|---------|----------|-------------|
| 1 | **DevOps Engineer** | Executor | P1 | CI/CD, Infra as Code |
| 2 | **DBA** | Specialist | P2 | Database management |
| 3 | **Project Manager** | Planner/Strategist | P1 | Planning, Tracking, Reporting |
| 4 | **QA** | Verifier | P1 | Testing, Quality |
| 5 | **Frontend Engineer** | Crafter | P2 | UI development |
| 6 | **Backend Engineer** | Crafter | P2 | Server-side logic |
| 7 | **UI/UX Designer** | Designer | P2 | Visual & UX design |
| 8 | **System Analyst** | Analyst | P1 | Requirements, Specification |
| 9 | **Business Analyst** | Analyst | P1 | Business requirements |
| 10 | **Security Engineer** | Guardian | P1 | Cybersecurity |
| 11 | **SRE** | Guardian/Monitor | P1 | Reliability, Incident |
| 12 | **Data Engineer** | Engineer | P2 | Data pipeline, ETL |
| 13 | **Data Scientist** | Researcher | P3 | ML, Analytics |
| 14 | **Mobile Developer** | Crafter | P3 | Mobile apps |
| 15 | **Scrum Master** | Facilitator | P2 | Agile ceremonies |
| 16 | **Product Owner** | Strategist | P2 | Backlog, Vision |
| 17 | **Solutions Architect** | Architect | P1 | Solution design |
| 18 | **Technical Writer** | Scribe | P2 | Documentation |
| 19 | **Release Manager** | Coordinator | P2 | Release management |
| 20 | **IT Support** | Triage | **P0** | Help desk |
| 21 | **Network Admin** | Operator | P1 | Network infra |
| 22 | **Cloud Engineer** | Architect/Operator | P1 | Cloud platforms |
| 23 | **IT Compliance** | Auditor | P2 | Compliance, Audit |
| 24 | **Tech Lead** | Lead/Reviewer | P2 | Technical oversight |
| 25 | **Full Stack** | Generalist | P2 | End-to-end dev |
| 26 | **API Developer** | Crafter | P2 | API dev |
| 27 | **Performance Engineer** | Analyzer | P2 | Performance |
| 28 | **IT Asset Manager** | Clerk | P3 | Asset tracking |
| 29 | **Config Manager** | Operator | P2 | Config management |
| 30 | **Enterprise Architect** | Strategist | P3 | Enterprise strategy |

### Legend Prioritas

| Priority | Arti | Jumlah Role |
|----------|------|-------------|
| **P0** | MVP 1 — harus ada dari awal | 1 |
| **P1** | Core — selesai setelah MVP 1 | 15 |
| **P2** | Growth — fitur setelah stabil | 10 |
| **P3** | Advanced — masa depan | 4 |

### Legend Agent Pattern

| Pattern | Perilaku | Contoh Role |
|---------|----------|-------------|
| **Triage** | First response, classify, basic fix | IT Support |
| **Executor** | Execute commands, automation | DevOps, Engineer |
| **Specialist** | Deep domain expertise | DBA |
| **Planner/Strategist** | Planning, strategy, roadmap | PM, PO, Enterp. Arch |
| **Verifier** | Testing, validation, QA | QA |
| **Crafter** | Building, implementing | FE, BE, Mobile, API |
| **Designer** | Visual/UX creation | UI/UX Designer |
| **Analyst** | Analysis, requirements | System Analyst, BA |
| **Guardian** | Security, reliability | Security Eng, SRE |
| **Researcher** | Data exploration, modeling | Data Scientist |
| **Facilitator** | Process facilitation | Scrum Master |
| **Architect** | Design decisions, ADRs | Solutions Arch, Cloud |
| **Scribe** | Documentation | Technical Writer |
| **Coordinator** | Orchestration, scheduling | Release Manager |
| **Operator** | Operations, maintenance | Network Admin, Config Mgr |
| **Lead/Reviewer** | Oversight, code review | Tech Lead |
| **Generalist** | Full spectrum | Full Stack |
| **Analyzer** | Analysis & optimization | Performance Eng |
| **Clerk** | Tracking, inventory | IT Asset Manager |
| **Auditor** | Compliance checking | IT Compliance |

---

## Cara Kolaborasi Antar Role (Team Topology)

```
                   ┌──────────────────┐
                   │   PRODUCT OWNER   │
                   │    (Strategist)    │
                   └────────┬─────────┘
                            │ vision & backlog
                            ▼
┌─────────────────────────────────────────────────┐
│               PROJECT MANAGER                    │
│                 (Planner)                        │
│   planning, tracking, reporting, risk            │
└──┬──────────┬──────────┬──────────┬────────────┘
   │          │          │          │
   ▼          ▼          ▼          ▼
┌──────┐ ┌────────┐ ┌──────┐ ┌──────────┐
│  BA  │ │System  │ │Scrum │ │ Solutions │
│      │ │Analyst │ │Master│ │ Architect │
└──┬───┘ └───┬────┘ └──┬───┘ └────┬─────┘
   │         │         │          │
   ▼         ▼         ▼          ▼
┌─────────────────────────────────────────┐
│         DEVELOPMENT TEAM                │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐   │
│  │ FE │ │ BE │ │ API│ │Mob │ │Full│   │
│  │    │ │    │ │ Dev│ │Dev │ │Stck│   │
│  └────┘ └────┘ └────┘ └────┘ └────┘   │
│  ┌────┐ ┌────┐ ┌────────┐ ┌────┐      │
│  │UI/ │ │Data│ │Performance Engineer│ │
│  │UX  │ │Eng │ └────────┘ └────┘      │
│  └────┘ └────┘                        │
└─────────────────────────────────────────┘
   │         │         │         │
   ▼         ▼         ▼         ▼
┌──────┐ ┌────────┐ ┌──────┐ ┌──────────┐
│  QA  │ │  DBA   │ │Security│ │Technical │
│      │ │        │ │Engineer│ │  Writer  │
└──────┘ └────────┘ └──────┘ └──────────┘
   │         │         │         │
   ▼         ▼         ▼         ▼
┌─────────────────────────────────────────┐
│         INFRASTRUCTURE & OPS            │
│  ┌──────┐ ┌────┐ ┌────┐ ┌──────┐      │
│  │DevOps│ │SRE │ │Cloud│ │Network│      │
│  └──────┘ └────┘ └────┘ └──────┘      │
│  ┌──────────┐ ┌──────────┐ ┌──────┐   │
│  │ Config   │ │  IT      │ │  IT  │   │
│  │ Manager  │ │ Support  │ │Asset │   │
│  └──────────┘ └──────────┘ └──────┘   │
│  ┌──────────┐ ┌──────────┐            │
│  │IT Compl. │ │ Enterprise│           │
│  │ /Auditor │ │ Architect │           │
│  └──────────┘ └──────────┘            │
└─────────────────────────────────────────┘
```

---

*Document generated: 2026-06-27*
*Next: Scaffold true-ranpoAgent project structure*
