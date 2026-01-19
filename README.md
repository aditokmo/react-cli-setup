# @aditokmo/react-setup-cli 🚀

[![npm version](https://img.shields.io/npm/v/@aditokmo/react-setup-cli?color=blue)](https://www.npmjs.com/package/@aditokmo/react-setup-cli)

A React CLI built with Vite that helps you build and structure your projects in seconds. It eliminates manual setup by configuring your favorite tools into a **clean, modular architecture** automatically.

**Note:** This package is a CLI tool. Do not install it with `npm i`. Instead check `Quick Start` down below.

---

## Quick Start

Run the following command in your terminal to start CLI

```bash
# Using NPM
npx @aditokmo/react-setup-cli

# Using PNPM
pnpm dlx @aditokmo/react-setup-cli

# Using Yarn
yarn dlx @aditokmo/react-setup-cli
```

---

## How it saves your time

- **Minimal Installation:** No more manual `npm install` for 10 different packages. The CLI detects your package manager and handles everything.
- **Architecture:** Instead of a messy folder structure, you get a **modular (feature-based)** structure that is ready for large-scale production.
- **Smart Boilerplate Injection:** It doesn't just create files it also wires them. It sets up Axios interceptors, TanStack Query providers, and Router wrappers so you can jump straight into the code that actually matters.

---

## Use Cases when this CLI is useful:

- **Starting a Professional Project:** When you need a project that follows "Clean Architecture" and industry standards from the very first commit.
- **Focusing on a Specific Feature:** When you want to test a new library or a specific piece of logic, but you need a proper environment to do it. This CLI lets you focus on what you are testing instead of wasting time on a setup.
- **Prototyping & MVP:** When you have a startup idea and want to to build actual features right away without sacrificing code quality.
- **Hackathons:** When every second counts. You can get all your configuration and setup ready before the competition start.

---

## Decisions About Arhitecture

This CLI isn't just a downloader it is architectural choice designed to enforce professional standards.

### Feature-Based Structure

This architecture uses a modular approach to help you build large-scale projects. Instead of mixing all components and hooks into global folders, everything is grouped by domain, such as Auth or Dashboard. This method makes it much easier to navigate the codebase and ensures your project remains maintainable as it grows.

### Global State Management (Zustand)

Zustand is currently the only option in CLI for global state management. It is the most popular and easiest-to-use library today. I believe Redux is overkill for most modern projects. Most "global state" is now handled as server-state by TanStack Query. Global state should be reserved for things like authentication and UI stuff, and Zustand handles this perfectly with zero boilerplate.

### Axios

The CLI generates a pre-configured Axios client that serves as your central API bridge. It includes ready-to-use interceptors for handling authorization tokens and global error responses, saving you from writing the same repetitive setup every time. Axios is set by default beacause it is better choice then fetch, Axios is more user-friendly, has better error handling out of the box, and is overall a safer and more robust choice for production apps.

### TanStack Query

TanStack Query is integrated to handle server-state management. It is optional, but if selected, the CLI automatically wires up the necessary providers and configurations so you can start fetching data immediately. If you select to not use react query, you still get a traditional boilerplate for manual data handling.

### Styling

You can choose between CSS, SCSS (soon), or Tailwind CSS. While I personally recommend Tailwind for modern and faster development, the CLI ensures that regardless of your choice, the project is configured with a global styles directory and a consistent entry point. If you select TailwindCSS you will also have option to use Shadcn/UI, and with that you will have option to choose components that you want to install instead of doing it manually.

### Routing

The CLI offers two powerful options: React Router and TanStack Router.

- **React Router** is the industry standard that most developers are familiar with.
- **TanStack Router** is included for those who want a fully type-safe routing experience with built-in data loading capabilities. Whichever you choose, the CLI doesn't just install the library it will generate a `routes/` directory system to help you easily separate your public pages from protected pages.

### Package Manager Detection

To make the workflow even smoother, the tool has an automatic package manager detector. It identifies whether you are using npm, pnpm, or yarn based on the command you used to execute the CLI, and it handles all installations using your preferred package manager to ensure consistency and avoid conflicts.

---

## Folder Structure

Note: This is the complete folder structure. The actual folders generated will depend on the libraries and options you select during the setup process.

```text
src/
├── api/                # Global API client & Axios config
├── components/         # Shared UI components
├── hooks/              # Global reusable custom hooks
├── providers/          # Providers (React Query, Tanstack Router)
├── routes/             # Route definitions
├── styles/             # Styles (Tailwind, CSS, SCSS)
├── layout/             # Layout to split protected and unprotected routes
│   ├── MainLayout.tsx
│   ├── AuthLayout.tsx
├── modules/            # Feature-based modules (The core of your app)
|   ├── common/         # Shared components & pages (404 Page, Navbar, Sidebar)
│   │   ├── pages/
│   │   └── components/
│   └── auth/           # Example: Auth module
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── services/
│       └── types/
├── store/              # Global State Managemenet (Zustand)
│   ├── useAuthStore.ts
│   └── useThemeStore.ts
└── utils/              # Helper functions
```

---

## Features

| Category             | Options                                 |
| :------------------- | :-------------------------------------- |
| **Folder Structure** | Feature-based                           |
| **Modules**          | Common, Auth                            |
| **Routing**          | React Router, TanStack Router           |
| **Data Fetching**    | TanStack Query (React Query) & Axios    |
| **State Management** | Zustand                                 |
| **Form**             | React Hook Form, TanStack Form          |
| **Schema**           | Zod, Yup                                |
| **Styling**          | CSS, SCSS, Tailwind CSS                 |
| **UI Components**    | Shadcn                                  |
| **Icons**            | React Icons, Font Awesome               |
| **Toast**            | React Toastify, React Hot Toast, Sonner |
| **Custom Hooks**     |                                         |
| **Helpers**          |                                         |

---

## Future of CLI

Some of my ideas

- Options to choose between React, Next.js and TanStack Start
- Testing tools
- i18next pre-setup.
- Supabase & Firebase integration templates
- Global custom hooks & helper functions
- Pre-commit linters
- Github Action workflow
- TanStack Table (if your app has some kind of tables)

---

## Local Setup

To do your own changes and use this CLI locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aditokmo/react-cli.git
   cd react-cli

   ```

2. **Install dependencies:**

   ```bash
   pnpm install

   ```

3. **Build the project:**

   ```bash
   pnpm run build

   ```

4. **Link globally:**

   ```bash
   pnpm link --global

   ```

5. **Run command in your terminal to start CLI locally:**

```bash
react-setup-cli
```

---

## Project Structure

- `cli/` - Logic for the CLI.
- `templates/` - Pre-defined boilerplates and configurations.

---
