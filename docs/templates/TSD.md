# TECHNICAL SPECIFICATION DOCUMENT (TSD)

| Atribut | Keterangan |
| :--- | :--- |
| **Nama Proyek** | |
| **Kode Dokumen** | TSD-[PROJECT]-[VERSI] |
| **Versi** | 1.0 |
| **Tanggal** | |
| **Lead Engineer** | |
| **PRD Reference** | PRD-[PROJECT]-[VERSI] |

---

## Revision History

| Versi | Tanggal | Penulis | Perubahan |
|-------|---------|---------|-----------|
| 0.1 | | | Draft awal |
| 1.0 | | | Approved |

---

## Daftar Isi

- [1. System Architecture](#1-system-architecture)
- [2. Tech Stack](#2-tech-stack)
- [3. Data Model](#3-data-model)
- [4. API Specifications](#4-api-specifications)
- [5. Integrations](#5-integrations)
- [6. Security Architecture](#6-security-architecture)
- [7. Performance Requirements](#7-performance-requirements)
- [8. Deployment Strategy](#8-deployment-strategy)
- [9. Environments](#9-environments)
- [10. Monitoring & Observability](#10-monitoring--observability)
- [11. Rollback Strategy](#11-rollback-strategy)
- [12. Open Questions](#12-open-questions)
- [13. Sign-Off](#13-sign-off)

---

## 1. System Architecture

### 1.1 Architecture Overview
[Diagram dan deskripsi arsitektur sistem.]

```
[Component diagram / C4 level 1-2]
```

### 1.2 Architecture Style

| Aspek | Keputusan | Alasan |
|-------|-----------|--------|
| Pattern | Monolith / Microservices / Modular monolith | |
| Frontend | SPA / SSR / SSG | |
| Backend | REST / GraphQL / gRPC | |
| Database | Relational / Document / Graph | |

### 1.3 System Context Diagram

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│   User/Browser  │────▶│   Frontend     │────▶│   Backend API   │
│                 │     │   (Next.js)     │     │   (Express)     │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                          │
                                                          ▼
                                                  ┌─────────────────┐
                                                  │                 │
                                                  │   Database      │
                                                  │   (PostgreSQL)  │
                                                  └─────────────────┘
```

---

## 2. Tech Stack

### 2.1 Core Technologies

| Layer | Technology | Version | Justification |
|-------|-----------|---------|---------------|
| Frontend | | | |
| Backend | | | |
| Database | | | |
| Cache | | | |
| Object Storage | | | |
| CI/CD | | | |
| Hosting | | | |

### 2.2 Development Tools

| Tool | Version | Purpose |
|------|---------|---------|
| Runtime | | |
| Package Manager | | |
| Linter | | |
| Test Framework | | |

### 2.3 External Services

| Service | Purpose | Cost |
|---------|---------|------|
| | | |
| | | |

---

## 3. Data Model

### 3.1 Entity Relationship Diagram (ERD)

```
[ERD diagram]

Users ──── Posts
  │          │
  │          │
  └──────────┘
```

### 3.2 Table Definitions

#### Table: `[table_name]`

| Column | Type | Constraint | Default | Description |
|--------|------|------------|---------|-------------|
| id | UUID | PK, NOT NULL | gen_random_uuid() | Primary key |
| created_at | TIMESTAMP | NOT NULL | NOW() | |
| updated_at | TIMESTAMP | NOT NULL | NOW() | |

**Indexes:**
- `idx_[table]_[column]` on `[column]`

**Relations:**
- `[column]` → FK to `[parent_table].[column]`

### 3.3 Data Migration Plan

| Migration | Description | Estimated Rows | Risk Level |
|-----------|-------------|----------------|------------|
| V1__init.sql | Initial schema | - | Low |
| V2__seed.sql | Seed data | [X] | Low |
| V3__[name].sql | [Description] | | |

**Rollback plan untuk tiap migration:**
[Down migration atau prosedur rollback.]

---

## 4. API Specifications

### 4.1 API Style & Conventions
- **Base URL:** `https://api.[domain].com/v1`
- **Format:** JSON (request & response)
- **Auth:** [JWT / API Key / OAuth2]
- **Pagination:** Cursor-based / Offset-based

### 4.2 Endpoints

#### `[METHOD] /api/v1/[resource]`

| Item | Detail |
|------|--------|
| **Description** | |
| **Auth Required** | Yes/No |
| **Rate Limit** | [X] req/min |

**Request:**
```json
{
  "field": "value"
}
```

**Response (200):**
```json
{
  "data": {},
  "meta": {}
}
```

**Error Response:**
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}
```

### 4.3 Webhook Events (if applicable)

| Event | Trigger | Payload | Destination |
|-------|---------|---------|-------------|
| | | | |

---

## 5. Integrations

| System | Integration Type | Data Direction | Protocol | SLA |
|--------|-----------------|----------------|----------|-----|
| | REST API | Inbound | HTTPS | |
| | Webhook | Outbound | HTTPS | |
| | File Upload | Both | SFTP | |

---

## 6. Security Architecture

### 6.1 Authentication & Authorization
- **Auth Method:** [JWT / Session / OAuth / SSO]
- **Token Expiry:** Access [X] menit, Refresh [X] hari
- **Role Model:** [RBAC / ABAC]
- **Password Policy:** [Minimum length, complexity, hash algorithm]

### 6.2 Data Protection
- **Encryption at Rest:** [AES-256 / RDS encryption]
- **Encryption in Transit:** TLS [1.2 / 1.3]
- **PII Data:** [Data apa yang termasuk PII, bagaimana handlingnya]
- **Data Retention:** [Kebijakan penyimpanan data]

### 6.3 Security Checklist
- [ ] Input validation & sanitization
- [ ] CSRF protection
- [ ] XSS prevention
- [ ] Rate limiting
- [ ] SQL injection prevention (parameterized queries)
- [ ] CORS configuration
- [ ] Security headers (CSP, HSTS, X-Frame-Options)

---

## 7. Performance Requirements

| Aspek | Target | Tools |
|-------|--------|-------|
| API Response Time (p95) | ≤ [X] ms | k6 / Postman |
| Page Load Time | ≤ [X] detik | Lighthouse |
| Database Query (p95) | ≤ [X] ms | PG Explain / Slow Query Log |
| Max Concurrent Users | [X] | k6 load test |
| Cache Hit Ratio | ≥ [X]% | Redis / CDN stats |

---

## 8. Deployment Strategy

### 8.1 Strategy
[Blue-green / Canary / Rolling / Recreate]

### 8.2 CI/CD Pipeline

| Stage | Tools | Actions |
|-------|-------|---------|
| Commit | | Lint, typecheck, unit test |
| Build | | Build artifact |
| Test | | Integration test, E2E test |
| Staging | | Deploy to staging |
| Production | | Deploy to production |

### 8.3 Infrastructure as Code
- **Provisioning:** [Terraform / Pulumi / CloudFormation]
- **Configuration:** [Ansible / Chef / manual]

---

## 9. Environments

| Environment | URL | Specs | Access | Data |
|-------------|-----|-------|--------|------|
| Development | localhost | Local machine | Developer | Seed data |
| Staging | staging.[domain] | [CPU/RAM] | Internal | Anonymized prod |
| Production | [domain] | [CPU/RAM] | Public | Real data |

---

## 10. Monitoring & Observability

| Aspek | Tool | Metrik |
|-------|------|--------|
| APM | New Relic / Datadog / Sentry | Response time, error rate |
| Infrastructure | Grafana + Prometheus | CPU, Memory, Disk |
| Logging | ELK / Loki | Centralized logs |
| Uptime | Statuspage / Better Uptime | Availability |
| Alerting | PagerDuty / Slack bot | On-call notification |

### 10.1 Alert Thresholds

| Metrik | Warning | Critical | Action |
|--------|---------|----------|--------|
| CPU Usage | > 70% | > 90% | Scale up |
| API Error Rate | > 1% | > 5% | Rollback |
| Disk Usage | > 80% | > 95% | Cleanup |

---

## 11. Rollback Strategy

### 11.1 Rollback Trigger
[Kondisi yang memicu rollback, misal: error rate > 5% dalam 10 menit.]

### 11.2 Rollback Procedure

```
1. Git revert commit [hash]
2. Re-run CI/CD pipeline
3. Verify health endpoint
4. Notify stakeholders
```

### 11.3 Rollback Testing
[Frekuensi dan skenario uji rollback.]

---

## 12. Open Questions

| # | Question | Owner | Status |
|---|----------|-------|--------|
| 1 | | | Open |
| 2 | | | Resolved |

---

## 13. Sign-Off

| Role | Nama | Jabatan | Tanggal | Tanda Tangan |
|------|------|---------|---------|--------------|
| **Lead Engineer** | | | | |
| **Tech Lead** | | | | |
| **PM** | | | | |
