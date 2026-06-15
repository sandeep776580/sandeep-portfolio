This repository contains a premium portfolio template for Sandeep built with Next.js, TypeScript, Tailwind CSS, and modern tools.

## Getting Started

Install and run locally:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Environment Variables

- `RESEND_API_KEY` — API key for Resend email sending (used by `/api/contact`).

## API endpoints

- `POST /api/contact` — accepts JSON `{ name, email, subject, message }` and sends an email via Resend.

## Deployment

Deploy to Vercel and set `RESEND_API_KEY` in project environment variables.

For best results, connect the repository to Vercel and use the provided build settings.

Analytics (Google Analytics)

- Add your GA4 Measurement ID to the Vercel environment variable `NEXT_PUBLIC_GA_ID` (e.g. `G-XXXXXXXXXX`).
- The site injects gtag automatically when `NEXT_PUBLIC_GA_ID` is present.

Vercel setup

1. Push your repository to GitHub.
2. Import the project on Vercel and set the following Environment Variables in the Vercel dashboard (Project Settings → Environment Variables):
   - `RESEND_API_KEY` — your Resend API key
   - `NEXT_PUBLIC_GA_ID` — your GA4 Measurement ID (optional)

3. Deploy the project; Vercel will build and serve the app.

If you'd like Plausible or Vercel Analytics instead, tell me which and I'll swap the integration.
