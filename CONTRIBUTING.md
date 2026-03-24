# Contributing to RJ Credit Outsourcing

First off — thank you. Every contribution makes this better. 🙏

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)

---

## Code of Conduct

This project follows our [Code of Conduct](./CODE_OF_CONDUCT.md).
By contributing, you agree to uphold it.

---

## Getting Started

```bash
# Fork, then clone your fork
git clone https://github.com/rjbizsolution23-wq/rj-credit-outsourcing.git
cd rj-credit-outsourcing

# Install dependencies (pnpm only)
pnpm install

# Set up environment
cp .env.example .env.local

# Start dev environment
pnpm dev
```

---

## Development Workflow
- Always branch from `main`
- Branch naming: `feat/`, `fix/`, `chore/`, `docs/`, `refactor/`
- One feature or fix per branch
- Write tests alongside code
- Run the full test suite before pushing:
```bash
pnpm lint
pnpm typecheck
```

---

## Commit Convention
We use Conventional Commits:

| Prefix | Use for |
|---|---|
| feat: | New features |
| fix: | Bug fixes |
| chore: | Maintenance, deps |
| docs: | Documentation only |
| refactor: | Code restructuring |
| test: | Tests only |
| perf: | Performance improvements |
| security: | Security fixes |

Example: `feat: add ROI calculation logic for bulk clients`

---

## Pull Request Process
- Fill out the PR template completely
- Link the issue your PR resolves (Fixes #123)
- Ensure all CI checks pass
- Request review from `@rjbizsolution23-wq`
- Squash commits before merging

---

## Coding Standards
- TypeScript strict: `true` — no `any`, ever
- Functions max 50 lines — extract if longer
- Comment WHY, never WHAT
- No TODOs in committed code
- Use `pnpm` exclusively

Questions? Open a discussion or email support@rjbusinesssolutions.org.
