# SPIDXR Concierge Website

## Overview

SPIDXR is a premium urban concierge service platform offering package collection, food delivery, grocery shopping, and personal assistance services in Manchester. The application is built as a modern web platform with a React-based frontend and Express backend, designed to connect customers with concierge services through a professional, luxury-branded interface.

The platform serves multiple audiences: end customers seeking concierge services, potential investors interested in the business opportunity, and features membership tiers (Lightning, Platinum, Executive) for different service levels.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework and Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast compilation and hot module replacement
- Client-side routing using Wouter (lightweight alternative to React Router)
- Mobile-first responsive design approach

**UI Component System**
- Radix UI primitives for accessible, unstyled component foundations (accordions, dialogs, dropdowns, navigation menus, tabs, toasts, tooltips, etc.)
- shadcn/ui design system with Tailwind CSS for styling
- Class Variance Authority (CVA) and clsx for managing component variants and conditional classes
- Custom brand theming with gold (#C3B091) as primary color and dark tones for text
- Montserrat as primary typography with system font fallbacks

**State Management and Data Fetching**
- TanStack Query (React Query) for server state management and caching
- React Hook Form with Zod for form handling and validation
- Context API for global UI state (modals, authentication context)

**Animation and Interactions**
- Framer Motion for smooth page transitions and scroll-triggered animations
- Custom scroll animation components (ScrollAnimation, ScrollSequence) for coordinated reveal effects
- Embla Carousel for image/content carousels

**Design Patterns**
- Component composition pattern with reusable UI primitives
- Custom hooks for responsive behavior (use-mobile) and toast notifications
- Separation of pages into distinct routes (Home, About, Services, Contact, Investors, and target pages)
- Modular component structure with shared navbar and footer components

### Backend Architecture

**Server Framework**
- Express.js as the web server framework
- TypeScript for type safety across the stack
- ESBuild for production bundling with dependency allowlisting for optimized cold starts
- Custom middleware for request logging and error handling

**Development Environment**
- Vite dev server integration in development mode
- Hot module replacement (HMR) for rapid development
- Custom error overlay plugin for runtime error visibility
- Environment-based configuration (development vs. production)

**API Structure**
- RESTful API endpoints under `/api` prefix
- Health check endpoint for monitoring
- Session-based request tracking with response logging
- Static file serving for production builds

**Data Layer**
- In-memory storage implementation (MemStorage) as the current data persistence layer
- Interface-based storage abstraction (IStorage) allowing for future database integration
- User management with username/password schema defined but not actively used

**Routing Strategy**
- Express routes for API endpoints
- SPA fallback routing that serves index.html for all non-API routes
- Static asset serving from dist/public directory in production

### Database and Persistence

**Current State**
- No active database connection in production
- Schema defined using Drizzle ORM for PostgreSQL
- Database configuration prepared for future integration
- Users table schema with serial ID, username, and password fields

**Planned Architecture**
- PostgreSQL as the target relational database
- Drizzle ORM for type-safe database queries and migrations
- Connection pooling via connect-pg-simple for session management
- Migration system configured with drizzle-kit

### Email and Communication

**EmailJS Integration**
- Browser-based email service using @emailjs/browser
- Contact form submissions routed through EmailJS
- Service requires public key configuration (currently placeholder)
- Template-based email formatting for consistency

**Communication Channels**
- Multi-channel contact system (email, phone, subject-based routing)
- Mailing list modal for newsletter subscriptions (UI implemented, backend integration pending)
- Form validation using Zod schemas before submission

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Comprehensive suite of accessible component primitives including accordion, alert-dialog, aspect-ratio, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, slot, switch, tabs, toast, toggle, and tooltip
- **Framer Motion**: Animation library for page transitions and micro-interactions
- **Embla Carousel**: Touch-friendly carousel component
- **React Day Picker**: Date selection component (via calendar UI component)

### Form and Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: Integration layer between React Hook Form and Zod

### Styling and Design
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer
- **class-variance-authority**: Type-safe component variant management
- **tailwind-merge**: Utility for merging Tailwind classes intelligently

### Development Tools
- **Replit Plugins**: vite-plugin-runtime-error-modal, vite-plugin-cartographer (development only), vite-plugin-dev-banner (development only), vite-plugin-shadcn-theme-json
- **TypeScript**: Static type checking across frontend and backend
- **ESBuild**: Fast JavaScript bundler for production builds

### Email Services
- **EmailJS (@emailjs/browser)**: Client-side email delivery service
- **emailjs-com**: Alternative email service library (legacy, possibly unused)

### Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **cmdk**: Command palette component (for search/command interfaces)

### Potential Future Integrations
- **Neon Database (@neondatabase/serverless)**: Serverless PostgreSQL (dependency present but not actively used)
- **SendGrid (@sendgrid/mail)**: Transactional email service (dependency present but not configured)
- **Stripe**: Payment processing (mentioned in build configuration allowlist but not implemented)
- **Passport/JWT**: Authentication system (dependencies present but not implemented)