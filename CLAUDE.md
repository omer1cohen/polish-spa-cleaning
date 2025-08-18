# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern React TypeScript application for Plasto-Polish, a professional cleaning products company. The project features a futuristic landing page with glassmorphism design, advanced animations using Framer Motion, and a premium 2030-style aesthetic.

## Development Commands

```bash
# Start development server (runs on port 5173, opens browser automatically)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install
```

## Technology Stack & Architecture

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 7.1.2 with React plugin
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for advanced animations and micro-interactions
- **Icons**: Lucide React icon library
- **Forms**: @tailwindcss/forms plugin for enhanced form styling

## Project Structure

```
src/
├── App.tsx                     # Main application component (single-file architecture)
├── main.tsx                    # Application entry point
├── index.css                   # Global styles and Tailwind utilities
├── components/
│   └── AnimatedElements.tsx    # Reusable animation components
└── vite-env.d.ts              # TypeScript environment definitions
```

## Architecture Pattern

The application uses a **single-file component architecture** where all major sections (Navigation, Hero, Features, Products, Contact, Footer) are defined as components within `App.tsx`. This approach is suitable for landing pages where components are tightly coupled to the specific design.

## Design System

### Custom Color Palette
- **Primary**: Blue gradient (#0c4a6e to #0369a1) - Professional, industrial feel
- **Accent**: Amber/Orange (#f59e0b to #b45309) - Energy and innovation
- **Typography**: Inter (sans) and Outfit (display) font families

### Key Design Components
- **Glassmorphism Effects**: `glass` and `glass-dark` utility classes
- **Gradient Text**: `gradient-text` class for brand elements
- **Glow Buttons**: Interactive buttons with animated glow effects
- **Floating Orbs**: Animated background elements for depth

### Animation System
- Scroll-based animations using Framer Motion's `useScroll` and `useTransform`
- Progressive reveal animations with staggered timing
- Interactive hover states and micro-interactions
- Particle systems and floating elements for ambiance

## Component Patterns

### Animation Components (src/components/AnimatedElements.tsx)
Reusable animation primitives including:
- `FloatingParticles`: Ambient particle effects
- `RippleEffect`: Interactive ripple animations
- `MorphingBlob`: Fluid background shapes
- `TextReveal`: Progressive text animations
- `MagneticButton`: Interactive magnetic button effects
- `Card3D`: Three-dimensional card hover effects

### Form Handling
Contact form uses controlled components with TypeScript interfaces. Form submission currently logs to console - implement backend integration as needed.

## Styling Conventions

- **Utility-first approach** with Tailwind CSS
- **Custom CSS layers**: Base, components, and utilities properly organized
- **Responsive design**: Mobile-first with `md:` and `lg:` breakpoints
- **Animation performance**: Using transform and opacity for smooth animations

## Content & Branding

The application represents Plasto-Polish as a premium industrial cleaning company with:
- 50+ years of expertise positioning
- Focus on non-scratch, innovative technology
- Professional B2B and premium consumer market appeal
- Israeli company with international reach

## Development Guidelines

### Adding New Sections
When adding new sections to the landing page:
1. Follow the existing component pattern within `App.tsx`
2. Use Framer Motion for consistency with animations
3. Apply the established glassmorphism design language
4. Maintain responsive design principles

### Animation Best Practices
- Use `whileInView` with `viewport={{ once: true }}` for scroll animations
- Implement staggered animations with delays (0.2s increments)
- Apply `will-change` optimizations for performance-critical animations
- Use `useTransform` for scroll-based parallax effects

### Performance Considerations
- Animations use GPU-accelerated properties (transform, opacity)
- Lazy loading implemented for heavy animation components
- Window dimension handling includes SSR-safe defaults
- Particle counts are configurable for performance tuning

## Browser Compatibility
- Modern browsers supporting ES2020
- CSS backdrop-filter for glassmorphism effects
- Framer Motion animations require JavaScript enabled