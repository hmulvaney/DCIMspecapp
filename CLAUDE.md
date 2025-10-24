# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Start Development Server
```bash
npm run dev
```
Starts Vite dev server with Hot Module Replacement (HMR). The app will be available at `http://localhost:5173` by default.

### Build for Production
```bash
npm run build
```
Runs TypeScript compiler check (`tsc -b`) followed by Vite production build. Output goes to `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build.

### Linting
```bash
npm run lint
```
Runs ESLint on all TypeScript/TSX files.

## Project Architecture

### Tech Stack
- **React 19.1.1**: Latest React with modern features and improved performance
- **TypeScript 5.9.3**: Type-safe JavaScript with strict type checking
- **Vite 7.1.7**: Fast build tool with native ESM support and optimized HMR
- **ESLint 9.36.0**: Flat config format with React-specific rules

### Build System
This project uses **Vite** as the build tool and dev server:
- Uses `@vitejs/plugin-react` for Fast Refresh via Babel/oxc
- Module type: ESM (`"type": "module"` in package.json)
- Dev server runs on port 5173 by default
- Production builds use Rollup for optimized bundling

### TypeScript Configuration
The project uses a **composite TypeScript setup** with project references:
- `tsconfig.json`: Root config that references app and node configs
- `tsconfig.app.json`: Configuration for application source code
- `tsconfig.node.json`: Configuration for Vite config files

### ESLint Configuration
Uses the **new flat config format** (`eslint.config.js`):
- Recommended rules for JavaScript, TypeScript, React Hooks, and React Refresh
- Ignores `dist/` directory
- Configured for browser globals and ES2020

## Application Structure

### Entry Point
- **`src/main.tsx`**: Application entry point that renders the root `App` component into `#root` DOM element with `StrictMode` enabled

### Core Components
- **`src/App.tsx`**: Main application component (currently a demo counter app)
- **`src/index.css`**: Global styles
- **`src/App.css`**: Component-specific styles

### Assets
- **`src/assets/`**: Static assets like images and SVGs
- **`public/`**: Public static assets served at root (e.g., `vite.svg`)

## Development Notes

### React 19 Features
This project uses React 19, which includes:
- Enhanced performance optimizations
- Improved TypeScript support
- Modern concurrent features

### Hot Module Replacement
Vite provides instant HMR during development. Changes to `.tsx` files will reflect immediately without full page reload.

### Styling Approach
Currently uses plain CSS with CSS modules support available through Vite. Component styles can be imported directly into components.

### Production Optimization
The build process includes:
1. TypeScript compilation check (`tsc -b`)
2. Vite production build with optimizations (minification, tree-shaking, code splitting)
3. Output to `dist/` directory ready for deployment
