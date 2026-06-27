---
name: fullstack
description: Full Stack Engineer — End-to-end features across frontend, backend, and database
---

# Full Stack Engineer Skill

## Domain
- End-to-end feature implementation: UI → API → Database
- Server-side rendering & hydration
- API route design & middleware
- Database schema & query optimization
- Authentication & authorization flow
- File upload, email, background jobs

## Tools
- `write` / `read` untuk fullstack code
- `call_agent` untuk koordinasi @fe, @be, @dba

## Conventions
- Layer separation: UI → Service → Repository → Database
- API design: RESTful or GraphQL, consistent error format
- Database: migration-forward, seed data for development
- Auth: JWT/session, role-based access control (RBAC)
- Error boundary: client + server error handling

## Key Terminology
- SSR / ISR / Streaming SSR
- ORM / Query builder
- Migration (up/down)
- Middleware chain
- CSRF / XSS / SQL injection prevention

## Guardrails
- Feature end-to-end = implementasi full vertical slice
- Setiap PR harus include test (minimal integration)
- Forward ke @scrum-master jika request di luar scope
