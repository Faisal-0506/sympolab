# Software Company Website Starter

A responsive single-page React + Vite website based on the six sections requested:

1. Home — headline, description, conversation CTA and services CTA
2. Services — service cards and project CTA
3. Project Demo — project descriptions, feature lists and demo links
4. Build Process — requirements, planning, build, testing and updates
5. About — who we are, philosophy, engineering mindset and approach to technology
6. Contact — inquiry form, email, WhatsApp, GitHub and LinkedIn

## 1. Run locally

Install Node.js (LTS), then open this folder in VS Code and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

To create a production build:

```bash
npm run build
npm run preview
```

## 2. Add your real company information

Edit `src/config.js`:

- `name` and `descriptor`
- `email`
- `whatsapp` (digits only, include Bangladesh country code 880)
- `github`
- `linkedin`
- `location`

Update the page title and meta description in `index.html`.

## 3. Replace demo portfolio content

Edit `PROJECTS` in `src/config.js`. Replace demo project names, descriptions, features, technology stacks and `demo` URLs with real projects. Do not present starter concepts as completed client work. The current demo links intentionally point to the contact section until you add real demos.

## 4. Contact form note

The current contact form uses `mailto:`. It opens the visitor's default email application with the inquiry filled in. It does not save submissions to a database. For a production form that works even when a visitor has no email app configured, connect a backend/API or a form service and add spam protection.

## 5. Free static hosting

This project is a static frontend and can be deployed to Cloudflare Pages. A free Cloudflare Pages plan currently supports static-site hosting; see the official limits and Git integration docs:

- https://developers.cloudflare.com/pages/platform/limits/
- https://developers.cloudflare.com/pages/get-started/git-integration/

Typical deployment steps:

1. Create a GitHub repository and push this project.
2. Sign in to Cloudflare Dashboard.
3. Go to Workers & Pages → Create → Pages → Connect to Git.
4. Select your repository.
5. Framework preset: Vite (or React).
6. Build command: `npm run build`.
7. Build output directory: `dist`.
8. Deploy. Cloudflare will provide a `*.pages.dev` address.

A free subdomain is provided by the hosting platform. A custom domain such as `yourcompany.com` normally has to be purchased separately.

## Notes

- No backend or database is included yet; this is the first frontend release.
- Do not put passwords, API secrets or private keys in frontend files.
- Verify all contact links, legal pages, project claims and company details before public launch.
