# Task Manager App

A modern React task management application featuring persistence, theming, and drag-and-drop.

## Key Features

- Task Management: Add, complete, delete, and filter (All/Pending/Done).
- Persistence: Custom useLocalStorage hook and Context API for global state.
- Theming: Full Dark/Light mode support implemented with shadcn/ui and next-themes.
- UX & Motion: Polished micro-interactions and keyframe animations for task lifecycle events.
- Drag-and-Drop: Reordering powered by @hello-pangea/dnd.
  - Note: Used @hello-pangea/dnd as react-beautiful-dnd is deprecated.

## Tech Stack

- Framework: React 19 + TypeScript + Vite
- Components & Theming: shadcn/ui (Radix UI + Tailwind CSS)
- Icons: Lucide React
- Drag & Drop: @hello-pangea/dnd
- Package Manager: pnpm

## Getting Started

### Prerequisites

- Node.js (18+)
- pnpm

### Run Locally

```bash
pnpm install
pnpm dev
```

### Build

```bash
pnpm build
pnpm preview
## Live Demo

You can view the live application at [https://advanced-task-manager-app-git-main-iamprincer3-9901s-projects.vercel.app/](https://advanced-task-manager-app-git-main-iamprincer3-9901s-projects.vercel.app/)

