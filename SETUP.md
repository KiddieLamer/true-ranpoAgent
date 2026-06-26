# Setup GitHub Repository

## 1. Create GitHub Repo

```bash
# Di GitHub.com:
# 1. Klik New Repository
# 2. Nama: true-ranpo-agent
# 3. Description: Your AI-Powered Scrum Team — From PRD to Delivery. 30 Specialized Agents.
# 4. Public
# 5. Jangan centang README/LICENSE/.gitignore (udah ada)
```

## 2. Push ke GitHub

```bash
cd /Users/admin/funproject/true-ranpo-agent

git init
git add .
git commit -m "Initial commit: 30 agent AI Scrum Team for IT domain"

git remote add origin https://github.com/<username>/true-ranpo-agent.git
git branch -M main
git push -u origin main
```

## 3. Setup GitHub Pages (Dashboard)

Settings → Pages → Source: `main` → Folder: `/dashboard`

## 4. Setup GitHub Actions (Coming Soon)

- CI: typecheck + build + test
- Publish: npm publish

## 5. Done!

Langganan berikutnya:
- Bikin template PRD/BST/TSD
- Implementasi agent guardrails
- Plugin OpenCode integration
