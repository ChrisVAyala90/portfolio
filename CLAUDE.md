# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Application
```bash
npm install        # Install dependencies
npm run dev        # Start development server at http://localhost:5173 with HMR
npm run preview    # Preview production build locally after building
```

### Building and Code Quality
```bash
npm run build      # Vite production build with TypeScript compilation
npm run lint       # ESLint for .ts/.tsx files (max-warnings: 0)
```

## Architecture Overview

This is Christopher Ayala's portfolio website built with React, TypeScript, and HeroUI components. The application showcases professional experience through About, Resume, and Case Studies sections.

### Tech Stack
- **React 18.3.1** with TypeScript 5.7.3
- **Vite 6.0** build tool with custom Babel plugin for development debugging
- **HeroUI 2.8.2** component library (with CDN scripts for chat functionality)
- **Tailwind CSS 4.1.11** with HeroUI plugin integration
- **Framer Motion 11.18.2** for animations

### Project Structure

```
src/
├── main.tsx              # Entry point - wraps app in HeroUIProvider & ToastProvider
├── App.tsx               # Main app component - renders page sections
├── index.css             # Global styles and Tailwind directives
└── components/
    ├── header.tsx        # Navigation header
    ├── about-section.tsx # Personal introduction
    ├── resume-section.tsx # Professional experience
    └── case-studies-section.tsx # Project showcases
```

### Key Implementation Details

1. **HeroUI Integration**: 
   - Root provider wrapping in `src/main.tsx`
   - CDN scripts loaded in `index.html` for chat functionality
   - Components use HeroUI's design system

2. **Styling Configuration**:
   - Tailwind CSS with HeroUI theme plugin
   - Dark mode support enabled (`darkMode: "class"`)
   - Component classes follow HeroUI conventions

3. **Build & Development**:
   - Custom Vite plugin (`vite-plugin-inject-data-locator`) for dev debugging
   - TypeScript strict mode disabled in `tsconfig.json`
   - ES modules throughout the codebase
   - Netlify deployment configured with proper headers and redirects

4. **Component Patterns**:
   - Named exports for all components
   - Functional components with TypeScript
   - Components accept standard React props

5. **Deployment**:
   - Netlify deployment via `netlify.toml`
   - Build output to `dist/` directory
   - Client-side routing with catch-all redirect