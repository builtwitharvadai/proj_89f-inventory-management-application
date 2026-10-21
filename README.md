# proj_89f-inventory-management-application

A comprehensive inventory management application designed to help businesses track products, stock levels, and inventory movements. The system will enable users to add, update, and monitor inventory items, manage stock quantities, and generate basic reports to maintain optimal inventory levels and prevent stockouts or overstocking.

## Tech Stack

- **Language:** TypeScript
- **Frontend:** React (Vite), Tailwind CSS, React Router, TanStack Query
- **Backend:** Express.js (Node.js)
- **Database:** PostgreSQL
- **Cache / Queues:** Redis
- **Tooling:** ESLint, Prettier, Husky, lint-staged

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (includes npm)
- [Docker](https://www.docker.com/) and Docker Compose

## Getting Started

1. Clone the repository and move into the project directory:

   ```bash
   git clone <repository-url>
   cd proj_89f-inventory-management-application
   ```

2. Install dependencies for all workspaces:

   ```bash
   npm install
   ```

3. Start PostgreSQL and Redis:

   ```bash
   docker-compose up -d
   ```

4. Start the frontend and backend development servers:

   ```bash
   npm run dev
   ```

## Available Scripts

Run these from the repository root:

| Script           | Description                                         |
| ---------------- | --------------------------------------------------- |
| `npm run dev`    | Runs the frontend and backend dev servers together  |
| `npm run build`  | Builds the frontend and backend workspaces          |
| `npm test`       | Runs the test suites for both workspaces            |
| `npm run lint`   | Lints the codebase with ESLint                      |
| `npm run format` | Formats the codebase with Prettier                  |

## Project Structure

This repository is an npm workspaces monorepo:

```
.
├── frontend/            # React + Vite client application (@inventory/frontend)
├── backend/             # Express.js API server
├── eslint.config.js     # Shared ESLint flat config
├── tsconfig.json        # Base TypeScript configuration
├── .prettierrc.json     # Prettier formatting rules
├── .lintstagedrc.json   # lint-staged configuration
├── .husky/              # Git hooks
└── package.json         # Root workspace configuration and shared scripts
```

## Development Workflow

- A Husky pre-commit hook runs lint-staged, which applies `eslint --fix` and `prettier --write` to staged TypeScript files and formats staged JSON and Markdown files.
- Run `npm run lint` and `npm test` before opening a pull request.

## Contributing

1. Create a feature branch from `main`.
2. Make your changes, keeping commits small and focused.
3. Ensure linting, formatting, and tests pass.
4. Open a pull request describing the change and its motivation.
