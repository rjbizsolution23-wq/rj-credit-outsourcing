<div align="center">
  <img src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg" 
       alt="RJ Business Solutions" width="200" />

  <h1>RJ Credit Outsourcing</h1>

  <p><strong>Built by RJ Business Solutions</strong></p>

  <!-- STATUS BADGES -->
  [![CI/CD](https://img.shields.io/github/actions/workflow/status/rjbizsolution23-wq/rj-credit-outsourcing/deploy.yml?branch=main&label=CI%2FCD&style=flat-square)](https://github.com/rjbizsolution23-wq/rj-credit-outsourcing/actions)
  [![Tests](https://img.shields.io/github/actions/workflow/status/rjbizsolution23-wq/rj-credit-outsourcing/test.yml?branch=main&label=Tests&style=flat-square)](https://github.com/rjbizsolution23-wq/rj-credit-outsourcing/actions)
  [![Security Scan](https://img.shields.io/github/actions/workflow/status/rjbizsolution23-wq/rj-credit-outsourcing/security-scan.yml?branch=main&label=Security&style=flat-square&color=green)](https://github.com/rjbizsolution23-wq/rj-credit-outsourcing/actions)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)

  <!-- TECH STACK BADGES -->
  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
  [![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
  [![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?style=flat-square&logo=stripe&logoColor=white)](https://stripe.com)

  <br />
  <br />

  <p><strong>Supreme B2B Credit Repair SaaS Platform for Professionals.</strong></p>

  <a href="https://rj-credit-outsourcing.pages.dev/">🌐 Live Demo</a> ·
  <a href="./docs/API.md">📖 API Docs</a> ·
  <a href="./docs/ARCHITECTURE.md">🏗️ Architecture</a> ·
  <a href="https://github.com/rjbizsolution23-wq/rj-credit-outsourcing/issues/new?template=bug_report.yml">🐛 Report Bug</a> ·
  <a href="https://github.com/rjbizsolution23-wq/rj-credit-outsourcing/issues/new?template=feature_request.yml">✨ Request Feature</a>
</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Reference](#api-reference)
- [Architecture](#architecture)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Security](#security)
- [Roadmap](#roadmap)
- [License](#license)

---

## 🏛️ About RJ Business Solutions

**RJ Business Solutions** is a premier AGI-level architecture and data engineering firm led by **Rick Jefferson**. We specialize in:
- **Autonomous Agent Clusters** (201-Agent framework)
- **Edge-Computing Solutions** (Cloudflare-native architecture)
- **Professional B2B Credit Processing**
- **Military-Grade Data Security**

**Location:** 1342 NM 333, Tijeras, New Mexico 87059  
**Expertise:** AGI-Level Prompt Architecture | Full Stack Dev | Cloud & Cybersecurity Expert

---

## ✨ Features

- 🚀 **Edge-Native** — Deployed on Cloudflare Pages for sub-100ms latency worldwide.
- 🔐 **Secure Lead Capture** — Automated credit repair lead processing with high-conversion funnels.
- 💳 **ROI Calculator** — Interactive tool for partners to calculate processing profitability.
- 📊 **Real-time Analytics** — Integrated Cloudflare Analytics for tracking conversion performance.
- 🌙 **Modern Design** — Sleek, dark-mode first UI built with Tailwind CSS 4.
- ⚡ **Automated CI/CD** — 100% automated deployments via GitHub Actions.

---

## ⚡ Quick Start

```bash
# 1. Clone
git clone https://github.com/rjbizsolution23-wq/rj-credit-outsourcing.git
cd rj-credit-outsourcing

# 2. Install dependencies
pnpm install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Start local dev
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — you're live. 🔥

---

## 🛠️ Installation

### Prerequisites
| Tool | Version | Install |
|---|---|---|
| Node.js | 22+ | `fnm install 22` |
| pnpm | 9+ | `npm i -g pnpm` |
| Wrangler | Latest | `pnpm add -g wrangler` |

---

## ⚙️ Configuration

Copy `.env.example` to `.env.local` and fill in your values:

| Variable | Required | Description |
|---|---|---|
| NEXT_PUBLIC_APP_URL | ✅ | Your app's public URL |
| RESEND_API_KEY | ✅ | API key for automated lead responder emails |

---

## 🏗️ Architecture

[Client] → [Cloudflare Edge / Next.js 15]
               ↓
        [Cloudflare Workers API]
               ↓
        [Cloudflare KV / R2]

---

## 🚢 Deployment

### Cloudflare (Production)
```bash
# Deploy Pages (Next.js frontend)
wrangler pages deploy .next
```

---

## 🤝 Contributing

Contributions are welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines.

---

## 🔐 Security

This project follows a zero-trust security model. For vulnerability reporting, see [SECURITY.md](./SECURITY.md).

---

## 🗺️ Roadmap
- [x] Core B2B Infrastructure
- [x] ROI Calculator & Lead Capture
- [x] Cloudflare Edge Deployment
- [ ] CRM Integration (DisputeFox)
- [ ] Advanced Portal Dashboard
- [ ] Multi-tenant Support

---

## 📄 License

MIT © RJ Business Solutions

---

<div align="center">
  Built with 🔥 by <a href="https://rjbusinesssolutions.org">RJ Business Solutions</a><br/>
  <a href="https://twitter.com/ricksolutions1">Twitter</a> · <a href="https://linkedin.com/in/rick-jefferson-314998235">LinkedIn</a> · <a href="https://www.tiktok.com/@rick_jeff_solution">TikTok</a>
</div>
