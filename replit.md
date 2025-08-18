# ArgonLanding - Business Automation Platform

This is a business automation and process optimization platform built for Covemind, a company that specializes in designing, building, and managing automations for small to medium-sized businesses. The platform serves as both a marketing website and consultation request system.

The application showcases Covemind's services including automation audits, process blueprints, custom implementations, and managed automation services. It features a comprehensive landing page with service descriptions, process visualizations, technology stack information, testimonials, and a contact form for consultation requests.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

**Frontend Architecture**
- React 18 with TypeScript for type safety and modern development
- Vite as the build tool and development server for fast hot reloading
- Wouter for lightweight client-side routing instead of React Router
- Tailwind CSS for utility-first styling with custom design system
- Shadcn/ui components for consistent, accessible UI components
- React Hook Form with Zod validation for robust form handling
- TanStack Query for server state management and API interactions

**Backend Architecture**
- Express.js server with TypeScript for the REST API
- In-memory storage implementation with interface for future database migration
- RESTful API endpoints for consultation request management
- Middleware for request logging and error handling
- Development-only Vite integration for seamless full-stack development

**Database Design**
- Drizzle ORM with PostgreSQL schema definitions in shared directory
- Two main entities: users and consultation requests
- Consultation requests include contact information, company details, and process descriptions
- Status tracking for request lifecycle management
- UUID primary keys with database-generated defaults

**Component Architecture**
- Modular component structure with separation of concerns
- Reusable UI components in dedicated ui directory
- Business logic components for different page sections
- Custom hooks for mobile detection and toast notifications
- Form components with validation and error handling

**Styling System**
- CSS custom properties for theming with light/dark mode support
- Gradient-heavy design with professional color palette
- Responsive design with mobile-first approach
- Custom animations and transitions for enhanced user experience
- Typography system using Inter font family

**Development Workflow**
- TypeScript configuration with path mapping for clean imports
- ESBuild for production server bundling
- Development and production environment configurations
- Hot reloading in development with error overlay

## External Dependencies

**UI and Styling**
- Radix UI primitives for accessible component foundations
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Class Variance Authority for component variant management

**Form and Validation**
- React Hook Form for performant form state management
- Zod for runtime type validation and schema definitions
- Hookform resolvers for seamless integration

**Database and ORM**
- Neon Database serverless PostgreSQL for cloud database hosting
- Drizzle ORM for type-safe database operations
- Drizzle Kit for schema migrations and database management

**Development Tools**
- Vite with React plugin for development server and building
- TSX for TypeScript execution in development
- Replit-specific plugins for development environment integration

**State Management**
- TanStack Query for server state, caching, and API interactions
- Built-in React state for local component state management

**Fonts and Assets**
- Google Fonts integration for Inter, DM Sans, Fira Code, and Geist Mono
- Custom CSS for font loading and typography system