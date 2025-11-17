# E-Club Polimi Website

![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-06B6D4?logo=tailwindcss)

The official E-Club Polimi website's source code. See it live at [eclubpolimi.it](https://www.eclubpolimi.it/).

## 🚀 Tech Stack

- **Frontend**: [React 18](https://reactjs.org/) with [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **CMS**: [Contentful](https://www.contentful.com/) with GraphQL
- **Icons**: [Heroicons](https://heroicons.com/) & [FontAwesome](https://fontawesome.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ...
├── pages/              # Next.js pages and routing
│   └── ...
├── data/               # GraphQL queries and fragments
│   └── ...
├── generated/          # Auto-generated GraphQL types
│   └── ...
├── hooks/              # Custom React hooks
│   └── ...
├── types/              # TypeScript type definitions
│   └── ...
└── utils/              # Utility functions
│   └── ...
```

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** - Get the latest LTS version [here](https://nodejs.org/it/download/)
- **npm** (recommended) or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/eclubpolimi/eclubpolimi.it.git
   cd eclubpolimi.it
   ```

2. **Install dependencies**

   ```bash
   npm ci
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   CMS_GRAPHQL_ENDPOINT=https://graphql.contentful.com/content/v1/spaces/YOUR_SPACE_ID
   CMS_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
   ```

   > Contact the repository maintainers for the actual API keys.

4. **Generate GraphQL types**

   ```bash
   npm run gql-codegen
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command                | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Starts the development server on port 3000        |
| `npm run build`        | Creates an optimized production build             |
| `npm run start`        | Runs the production build locally                 |
| `npm run gql-codegen`  | Generates TypeScript types from GraphQL schema    |
| `npm run gql-watch`    | Watches for GraphQL changes and regenerates types |
| `npm run format`       | Formats code using Prettier                       |
| `npm run format-check` | Checks code formatting                            |

## 🔧 Development

### Getting Started with Development

1. **Follow the installation steps above** to set up the project
2. **Check the development conventions** - See [`DEVELOPMENT_CONVENTIONS.md`](./DEVELOPMENT_CONVENTIONS.md) for coding standards and component usage guidelines
3. **Start coding** - The project uses modern React patterns with TypeScript

### GraphQL & CMS

The website uses Contentful as a headless CMS:

- Run `npm run gql-codegen` after making changes to GraphQL queries
- Generated types are automatically created in `src/generated/cms/`
- Content and images are loaded dynamically from Contentful

### Code Formatting

- Run `npm run format` (or `npx prettier --write .`) to format your code before committing
- The project uses Prettier for consistent code formatting

## 🔄 Git Workflow

We use GitHub Pull Requests for all contributions:

1. **Create a feature branch** from `master`

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the development conventions

3. **Format your code**

   ```bash
   npm run format
   ```

4. **Create a Pull Request** to `master` branch

5. **Code Review** - After review by a colleague/admin and approval, the PR will be merged

### Branch Naming Convention (not strict, but recommended)

- `feature/component-name` - New features
- `fix/issue-description` - Bug fixes
- `refactor/component-name` - Code improvements
- `docs/update-readme` - Documentation updates

## 🚀 Deployment

The website is automatically deployed via CI/CD pipeline when changes are merged to `master`.

## 🔑 Environment Variables

Required environment variables for development:

```env
# Contentful CMS - NEXT_PUBLIC_ prefix required for browser access
NEXT_PUBLIC_CMS_GRAPHQL_ENDPOINT=https://graphql.contentful.com/content/v1/spaces/YOUR_SPACE_ID
NEXT_PUBLIC_CMS_ACCESS_TOKEN=YOUR_ACCESS_TOKEN

# Alternative server-side only variables (if using server-side rendering)
CMS_GRAPHQL_ENDPOINT=https://graphql.contentful.com/content/v1/spaces/YOUR_SPACE_ID
CMS_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
```

> **Note**: The `NEXT_PUBLIC_` prefix is required for environment variables that need to be accessible in the browser. Everything else you need (e.g. tokens) can be found on the inherited accounts and emails.

## 🤝 Contributing

1. Read the [Development Conventions](./DEVELOPMENT_CONVENTIONS.md) for coding standards
2. Follow the Git workflow described above
3. Format your code with `npm run format` before committing (otherwise dedicated automated tests will fail)
4. Write clear commit messages and PR descriptions

## 📄 License

This project is proprietary to E-Club Polimi.

---

_Built with ❤️ by the Ever-lasting E-Club Polimi IT team_
