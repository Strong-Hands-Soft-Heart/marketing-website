# Strong Hands, Soft Heart LLC

_Automatically synced with your [v0.dev](https://v0.dev) deployments_

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/antoniwans-projects/v0-strong-hands-soft-heart-llc)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/TVPtmuEc48p)
[![Version](https://img.shields.io/badge/Version-1.2.1-blue?style=for-the-badge)]()

## Overview

This repository contains the website for Strong Hands, Soft Heart LLC, a platform dedicated to building enduring legacies through quiet strength and genuine care.

## Changelog

### v1.2.1 (Current)

- Fixed navigation scroll behavior for hash links
- Improved mobile menu interaction
- Enhanced accessibility in navigation components

### v1.2.0

- Added dedicated logo page with detailed explanation and symbolism
- Updated canonical URLs to use www subdomain
- Enhanced SEO metadata and sitemap structure
- Improved brand consistency across documentation

### v1.1.0

- Implemented Formspree integration for contact form handling
- Enhanced form submission reliability and error handling

### v1.0.0

- Initial stable release
- Add missing share images
- Final UI/UX polish
- Performance optimizations
- SEO improvements
- Working contact form

### v0.9.0

- Initial public release
- Implemented core website functionality
- Added contact form with validation
- Optimized for mobile and desktop viewing
- Integrated with Vercel for deployment
- Set up automated deployment pipeline
- Implemented proper loading states and error handling
- Optimized dependencies and removed unused packages
- Enhanced layout and component architecture

## Technology Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React 19
- **Deployment**: Vercel

## Project Structure

```
├── app/              # Next.js app directory (pages and layouts)
├── components/       # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configurations
├── public/          # Static assets
├── styles/          # Global styles and Tailwind configuration
└── types/           # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm (package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

## Development

### Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm start`: Start the production server
- `npm run lint`: Run ESLint to check code quality

### Deployment

The site is automatically deployed to Vercel on every push to the main branch. For manual deployment:

```bash
npm run build
npm run start
```

## License

All rights reserved. © 2025 Strong Hands, Soft Heart LLC
