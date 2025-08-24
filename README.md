# Express TypeScript Starter

A modern **Express.js + TypeScript** starter kit. Ready-to-use project structure with development scripts, path aliases, and type safety. Designed for quick setup and growth.

---

## Features

- TypeScript + Node 22
- Express 5
- Hot-reload dev with `tsx`
- Path aliases (`@/routes/...`)
- ESLint + Prettier for code quality
- `nviron` for environment variables
- Ready to build (`tsc`) into `dist/`

---

## Getting Started

### Clone / Scaffold

```bash
npx degit ubeyidah/express-ts-starter my-app
cd my-app
```

### Install Dependencies

```bash
pnpm install    # or npm install / yarn install
```

### Development

```bash
pnpm run dev    # starts dev server with hot reload
```

### Build & Run

```bash
pnpm run build  # compile TS → dist
pnpm run start  # run production build
```

### Type Check / Lint / Format

```bash
pnpm run type-check
pnpm run lint
pnpm run lint:fix
pnpm run format
pnpm run format:check
```

---

## Path Aliases

Use `@` for cleaner imports:

```ts
import { healthCheck } from "@/controllers/healthController";
```

`tsc-alias` fixes aliases after build, so they work in production.

---

## Contributing

Contributions, feedback, or improvements are welcome!

- Fork the repo or use `degit` to start fresh
- Open issues or submit PRs for new features (auth, CI/CD, etc.)

---

## Roadmap

- Better Auth setup
- CI/CD integration
- Additional starter branches for features
