<div align="center">

# ⚡ Abdou-dashbord
### Full-Stack Smart E-Commerce Platform & High-Performance Admin Dashboard

[![Node.js Version](https://img.shields.io/badge/Node.js-v18%2B-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-Enabled-E10098?logo=graphql&logoColor=white)](https://graphql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)

<p align="center">
  A modern, modular, production-ready e-commerce solution with custom branding, an intuitive back-office dashboard, server-side rendered storefront, and robust PostgreSQL persistence.
</p>

[Explore Storefront](http://localhost:3000) • [Admin Dashboard](http://localhost:3000/admin) • [Report Bug](https://github.com/arabiabdou453-cpu/abdou-dashbord/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Brand Identity & Customization](#-brand-identity--customization)
- [Prerequisites](#-prerequisites)
- [Local Setup & Development](#-local-setup--development)
- [Hosting & Deployment Guide](#-hosting--deployment-guide)
  - [Option A: Docker & Docker Compose (Recommended)](#option-a-docker--docker-compose-recommended)
  - [Option B: Railway / Render / Cloud Hosting](#option-b-railway--render--cloud-hosting)
  - [Option C: VPS / Traditional Server](#option-c-vps--traditional-server)
- [Environment Configuration](#-environment-configuration)
- [Database Schema & Migrations](#-database-schema--migrations)
- [Author](#-author)
- [License](#-license)

---

## 🌟 Overview

**Abdou-dashbord** is an open-source, full-stack headless commerce platform engineered for ultra-fast performance, maximum developer flexibility, and frictionless store management. 

Equipped with a clean, high-contrast admin dashboard and an SEO-optimized storefront, it combines the developer freedom of modern TypeScript and React with the enterprise stability of PostgreSQL.

---

## ✨ Key Features

### 🛍️ Storefront Experience
- **Lightning Fast SSR**: Server-Side Rendering (SSR) with React hydration for instantaneous page loads and optimal search engine indexing.
- **Responsive & Modern UI**: Built with Tailwind CSS, supporting mobile-first viewports and fluid navigation.
- **Dynamic Catalog**: Multi-attribute filtering (pricing, colors, sizes, categories), instant search, and sorting.
- **Optimized Media Pipeline**: Dynamic on-the-fly image optimization serving modern WebP/AVIF formats via Sharp.
- **Localized for Algeria & Global Markets**: Integrated Algerian Dinar (DZD) currency and `Africa/Algiers` (GMT+1) timezone handling.

### 📊 Admin Control Center
- **Product & Inventory Management**: Manage variants, SKU attributes, pricing matrices, and inventory levels in real-time.
- **Order Lifecycle & Tracking**: Process customer checkouts, track shipping providers, and manage fulfillment stages.
- **Promotions & Coupon Engine**: Flexible discount rules, percentage-based promos, and custom promotional banners.
- **Visual Branding Suite**: Built-in asset management for store logos, responsive favicons (16px, 32px, Apple touch 180px), and Open Graph social preview cards.
- **Clean Modern Theme**: Minimalist, high-contrast interface with custom electric indigo accents (`#4f46e5`).

---

## 🛠️ Architecture & Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Store** | React 18, Tailwind CSS, Lucide Icons, Server-Side Rendering |
| **Admin Dashboard**| React, Custom Component System, Tailwind CSS, Webpack 5 |
| **Backend Core**   | Node.js 20+, Express, Modular Middleware System |
| **API & Query**    | GraphQL (Typed Resolvers & Schemas), REST Endpoints |
| **Database**       | PostgreSQL 16+ (ACID compliant, JSONB attributes) |
| **Image Processing** | Sharp (WebP, PNG, JPEG, SVG transformation) |
| **Containerization** | Docker, Docker Compose |

---

## 🎨 Brand Identity & Customization

The platform is customized with the signature **Abderrahmane Arabi (Abdou)** brand identity:

- **BrandMark**: Futuristic `A / A` typographic monogram with an electric indigo slash (`#4f46e5`).
- **Primary Color**: Modern Royal Indigo (`#4f46e5`) replacing default template colors.
- **Store Name**: **Abdou Store**
- **Default Locale**: `en` / `fr` with full support for Arabic / RTL locales.
- **Default Timezone**: `Africa/Algiers` (W. Central Africa Standard Time).
- **Default Currency**: Algerian Dinar (`DZD`).

---

## 📦 Prerequisites

Before running the application locally, ensure you have installed:

- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm** or **yarn**
- **PostgreSQL**: v13.0 or higher
- **Docker & Docker Compose** *(optional, for containerized run)*

---

## 🚀 Local Setup & Development

### 1. Clone the Repository
```bash
git clone https://github.com/arabiabdou453-cpu/abdou-dashbord.git
cd abdou-dashbord
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Copy `.env.example` to `.env` and fill in your PostgreSQL credentials:
```bash
cp .env.example .env
```

Example `.env`:
```env
DB_HOST="127.0.0.1"
DB_PORT="5432"
DB_NAME="evershop"
DB_USER="postgres"
DB_PASSWORD="your_secure_password"
DB_SSLMODE="disable"
PORT=3000
```

### 4. Build Assets & Start
```bash
# Build the client & server bundles
npm run build

# Start production server
npm run start

# Or run development mode with live watch
npm run dev
```

Visit the application:
- **Storefront**: `http://localhost:3000`
- **Admin Dashboard**: `http://localhost:3000/admin`

---

## 🌐 Hosting & Deployment Guide

### Option A: Docker & Docker Compose (Recommended)

Deploy the full application and PostgreSQL database with a single command:

```bash
# Start all services in the background
docker-compose up -d --build

# View real-time logs
docker-compose logs -f

# Stop services
docker-compose down
```

The stack automatically provisions:
1. Isolated PostgreSQL 16 container with persistent volume storage.
2. Node.js multi-stage production container with health checks.
3. Media volume for persistent uploaded branding and product images.

---

### Option B: Railway / Render / Cloud Hosting

#### Deploying on Railway
1. Fork or push this repository to GitHub: `arabiabdou453-cpu/abdou-dashbord`.
2. In [Railway.app](https://railway.app/), click **New Project** → **Provision PostgreSQL**.
3. Click **New Service** → **GitHub Repo** → select `abdou-dashbord`.
4. Add the following Environment Variables in the service settings:
   - `DB_HOST`: `${{Postgres.PGHOST}}`
   - `DB_PORT`: `${{Postgres.PGPORT}}`
   - `DB_NAME`: `${{Postgres.PGDATABASE}}`
   - `DB_USER`: `${{Postgres.PGUSER}}`
   - `DB_PASSWORD`: `${{Postgres.PGPASSWORD}}`
   - `PORT`: `3000`
5. Railway will automatically build and deploy using the included `Dockerfile`!

#### Deploying on Render
1. Create a **PostgreSQL** instance on [Render.com](https://render.com/).
2. Create a **Web Service** pointing to your repository.
3. Set **Environment** to `Docker`.
4. Add the PostgreSQL connection variables and attach a persistent disk mounted to `/app/media`.

---

### Option C: VPS / Traditional Server (Ubuntu / Debian)

```bash
# 1. Update and install PM2 process manager
sudo npm install -g pm2

# 2. Build the project
npm run build

# 3. Start with PM2
pm2 start npm --name "abdou-dashbord" -- run start

# 4. Save PM2 configuration to restart on boot
pm2 save
pm2 startup
```

Configure Nginx as a reverse proxy forwarding port `80/443` to `http://127.0.0.1:3000`.

---

## ⚙️ Environment Configuration

| Variable | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `DB_HOST` | String | `127.0.0.1` | Hostname of the PostgreSQL instance |
| `DB_PORT` | Number | `5432` | Port of the PostgreSQL instance |
| `DB_NAME` | String | `evershop` | Database name |
| `DB_USER` | String | `postgres` | Database username |
| `DB_PASSWORD` | String | *(empty)* | Database password |
| `DB_SSLMODE` | String | `disable` | SSL mode (`disable`, `require`, `prefer`) |
| `PORT` | Number | `3000` | Port on which the HTTP server listens |

---

## 🗄️ Database Schema & Migrations

The database leverages native PostgreSQL features:
- Automatic UUID generation (`gen_random_uuid()`).
- JSONB columns for flexible product attributes, variant configurations, and metafields.
- Automatic database migrations executed on application boot.

---

## 👨‍💻 Author

**Abderrahmane Arabi (Abdou)**
- 🌐 Portfolio: [Abdou Portfolio](https://github.com/arabiabdou453-cpu)
- 🐙 GitHub: [@arabiabdou453-cpu](https://github.com/arabiabdou453-cpu)
- 💼 LinkedIn: [Abderrahmane Arabi](https://linkedin.com)

---

## 📄 License

This project is licensed under the **GPL-3.0 License** — see the [LICENSE](LICENSE) file for details.

<div align="center">
  <sub>Crafted with passion by Abderrahmane Arabi. © 2026 Abdou-dashbord. All Rights Reserved.</sub>
</div>
