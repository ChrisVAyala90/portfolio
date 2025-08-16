# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Application
```bash
npm run dev        # Start development server with hot module replacement (HMR)
npm run preview    # Preview production build locally
```

### Building
```bash
npm run build      # TypeScript compilation + Vite production build
```

### Code Quality
```bash
npm run lint       # Run ESLint on TypeScript/TSX files
```

## Architecture Overview

### Tech Stack
- **React 18.3.1** with TypeScript for the frontend framework
- **Vite 6.0** as the build tool and development server
- **HeroUI 2.8.2** as the primary component library
- **Tailwind CSS 4.1.11** for utility-first styling
- **Framer Motion 11.18.2** for animations

### Project Structure
The application is a portfolio website with the following component organization:

```
src/components/
├── header.tsx               # Navigation header
├── hero-section.tsx         # Landing hero section
├── about-section.tsx        # About information
├── features-section.tsx     # Features showcase
├── case-studies-section.tsx # Portfolio case studies
├── resume-section.tsx       # Resume/CV section
├── testimonials-section.tsx # Client testimonials
├── pricing-section.tsx      # Service pricing
└── cta-section.tsx         # Call-to-action section
```

### Key Architectural Decisions

1. **Component Architecture**: All components are functional React components using hooks, located in `src/components/`.

2. **Styling Strategy**: Uses Tailwind CSS utility classes with HeroUI components. The Tailwind config includes HeroUI plugin for consistent theming.

3. **Build Pipeline**: Vite handles both development and production builds with custom plugins:
   - `vite-plugin-inject-data-locator` - Injects data attributes for development debugging
   - React plugin for JSX transformation
   - Tailwind CSS plugin for style processing

4. **TypeScript Configuration**: 
   - Main config targets ES2020 with React JSX
   - Strict mode is disabled (`"strict": false`)
   - Separate config for Node.js build tools

5. **External Dependencies**: The application loads HeroUI chat scripts from CDN in the HTML file.

### Development Considerations

- **No Testing Framework**: Currently no test infrastructure is set up. Consider adding Vitest or Jest if testing is required.
- **Data Locator Plugin**: Custom Babel/Vite plugins inject data-locator attributes into JSX elements for debugging purposes during development.
- **Module System**: Project uses ES modules (`"type": "module"` in package.json).
- **HeroUI Integration**: The app relies heavily on HeroUI components which provide built-in toast notifications and theme support.