# Three Star Traders LLC — Corporate Website

A complete React + TypeScript corporate website prepared for GitHub Pages.

## Included

- Home, About, Products, Brands, Services, Distribution, News, Careers and Contact pages
- Responsive desktop, tablet and mobile design
- Framer Motion scroll animations
- Searchable and filterable product portfolio
- Contact form with optional Formspree integration and email fallback
- Free Google Maps embed
- WhatsApp shortcut
- Privacy and Terms starter pages
- GitHub Actions deployment workflow

## Run locally

```bash
npm install
npm run dev
```

## Important customisation

Edit `src/data/site.ts` first. Replace:

- phone number
- email and WhatsApp number
- address and map query
- statistics
- product categories and product list
- brands, services and news

Replace placeholder career email addresses in `src/pages/Careers.tsx`.

## Enquiry form

The form works in two modes:

1. **No configuration:** opens the visitor's email application.
2. **Formspree:** copy `.env.example` to `.env`, create a Formspree form, then add the endpoint.

Never place private Supabase service-role keys in a GitHub Pages project. Only public anonymous keys may be used in frontend code, protected by Row Level Security.

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload all project files or push using Git.
3. Keep the default branch named `main`.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **GitHub Actions**.
6. Push a commit. The included workflow builds and deploys the site.

This project uses `HashRouter`, so page refreshes work on GitHub Pages without a custom 404 file.

## Custom domain

Add the domain under **Settings → Pages → Custom domain**. Then configure the DNS records at your domain provider. Keep `base: '/'` in `vite.config.ts` when using a custom domain.

## Repository subpath note

The current GitHub Actions deployment normally works as supplied. If you manually deploy to a repository URL and assets do not load, change Vite's `base` in `vite.config.ts` to `/your-repository-name/`.

## Build

```bash
npm run build
```
