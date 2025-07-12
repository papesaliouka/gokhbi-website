# GokhBI Public Website

This is the standalone public website for GokhBI, designed to be deployed to the apex domain (gokhbi.com).

## Features

- **Marketing Landing Page**: Showcases GokhBI's features and benefits
- **About Page**: Company mission and vision
- **Features Page**: Detailed platform capabilities
- **Contact Page**: Contact form and information
- **Legal Pages**: Privacy Policy and Terms of Service
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags and semantic HTML

## Tech Stack

- **React 18** with TypeScript
- **Material-UI v5** for components
- **Vite** for build tooling
- **React Router** for navigation

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set the root directory to `public-website`
3. Deploy automatically on push to main

### Netlify

1. Set build command: `npm run build`
2. Set publish directory: `dist`
3. Set base directory: `public-website`

### Manual Deployment

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## Domain Configuration

- **Apex Domain** (gokhbi.com): This public website
- **App Subdomain** (app.gokhbi.com): Main GokhBI application
- **API Subdomain** (api.gokhbi.com): Backend API (if needed)

## Customization

### Branding
- Update colors in `src/main.tsx` theme configuration
- Replace logo and icons in `public/` folder
- Update company information in footer

### Content
- Modify page content in `src/pages/`
- Update navigation in `src/components/Layout.tsx`
- Add new pages by creating files in `src/pages/` and updating routes in `src/App.tsx`

### Redirects
The website automatically redirects `/app`, `/admin`, and `/login` routes to the main application subdomain.

## SEO

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Schema.org markup ready

## Performance

- Code splitting for optimal loading
- Optimized Material-UI imports
- Image optimization
- Caching headers for static assets
