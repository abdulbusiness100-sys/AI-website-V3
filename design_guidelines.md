# SPIDXR Concierge Website - Existing Design Documentation

## User Request
**Display existing website as-is without any modifications or improvements.** This documentation captures the current design implementation to ensure accurate reproduction.

## Design Approach
**System-Based + Custom Brand Identity** - The website uses Radix UI component primitives with Tailwind CSS, customized for the SPIDXR luxury concierge brand.

## Existing Color Scheme (From README)
- **Primary Gold**: `#C3B091` (brand color throughout)
- **Dark Tones**: `#1A1A1A`, `#2C2C2C` (text and backgrounds)
- **Light**: `#F8F8F8` (light backgrounds)

## Typography
- **Primary Font**: Montserrat
- **Fallback**: System UI fonts

## Layout System
Uses Tailwind CSS spacing utilities with consistent patterns across the site.

## Component Library (From package.json)
The website implements:
- **Radix UI Components**: Accordion, Dialog, Dropdown Menu, Navigation Menu, Tabs, Toast, Tooltip, Avatar, Checkbox, Radio Group, Select, Slider, Switch, Progress
- **Custom Components**: Built with class-variance-authority and clsx for variant management
- **Animations**: Framer Motion for smooth transitions
- **Forms**: React Hook Form with Zod validation
- **Carousels**: Embla Carousel React

## Key Pages (From Files)
- Home/Landing page
- Services catalog
- Membership tiers (Lightning, Platinum, Executive)
- Investors presentation page
- Contact page

## Existing Features
- Multi-channel contact system with EmailJS integration
- Service booking/request system
- Responsive mobile-first design
- Professional business presentation materials
- Smooth animations with Framer Motion

## Images
The current website has images that are not loading properly on the live site. These should be loaded from the provided files exactly as they are currently referenced.

**Hero Section**: The website likely uses hero images for main landing sections given the premium concierge service nature.

## Critical Note
**NO CHANGES OR IMPROVEMENTS** - Reproduce the exact current state of the website, including any non-loading images, to allow the user to see the current state before making any modifications.