# Deployment Guide

This portfolio is a static site that can be deployed for free on multiple platforms. Here's how to deploy:

## Quick Deploy Options

### 1. Netlify (Recommended)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings are auto-configured (netlify.toml included)
6. Click "Deploy site"
7. Add your custom domain in Site settings → Domain management

### 2. Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Build settings are auto-configured (vercel.json included)
6. Click "Deploy"
7. Add your custom domain in Project Settings → Domains

### 3. Cloudflare Pages
1. Push your code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Create a project → Connect to Git
4. Select your repository
5. Build configuration:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy"
7. Add custom domain in Custom domains tab

### 4. GitHub Pages
1. In your repository settings, enable GitHub Pages
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`
5. Set custom domain in repository settings

## Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Custom Domain Setup

All platforms above support custom domains for free:
1. Add your domain in the platform's settings
2. Update your domain's DNS records:
   - For apex domain (example.com): Add A records pointing to platform IPs
   - For subdomain (www.example.com): Add CNAME record pointing to platform URL
3. SSL certificates are automatically provisioned

## Environment Variables

If you add any environment variables later:
- Netlify: Add in Site settings → Environment variables
- Vercel: Add in Project Settings → Environment Variables
- Cloudflare Pages: Add in Settings → Environment variables
- GitHub Pages: Use GitHub Secrets for Actions

## Continuous Deployment

All platforms automatically redeploy when you push to your main branch.