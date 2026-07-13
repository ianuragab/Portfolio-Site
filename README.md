# Anurag Bhardwaj Portfolio

Static-first personal authority website for Anurag Bhardwaj (`ianuragab`), Software Engineer at bijnis in New Delhi, India.

The site is built with Vite, React and TypeScript. Public pages are prerendered to HTML during the production build so the core content, metadata and structured data are available without JavaScript.

## Route Structure

- `/` - Homepage
- `/about` - Professional profile
- `/projects` - Project index
- `/projects/bijnis-retailer-platform` - Bijnis retailer B2B e-commerce website case study
- `/projects/ai-mock-interview-app` - Case study
- `/projects/medi-reminder-app` - Case study
- `/projects/expense-tracker-app` - Case study
- `/projects/bank-transaction-system` - Bank Transaction System case study
- `/experience` - Professional experience
- `/writing` - Writing index
- `/writing/[slug]` - Generated when a published article exists in `src/content/articles.ts`
- `/contact` - Contact and social profiles

## Content Source Of Truth

- `src/content/profile.ts` - identity, role, company, location, social links, site URL, contact details and content TODOs
- `src/content/projects.ts` - project data and case-study content
- `src/content/experience.ts` - professional experience
- `src/content/articles.ts` - Markdown-ready article records and planned topics

Set `VITE_SITE_URL` when moving from the current Vercel URL to a custom domain.

```bash
VITE_SITE_URL=https://anuragdev-omega.vercel.app
VITE_GOOGLE_SITE_VERIFICATION=
```

Do not hard-code a fake Search Console token. Set `VITE_GOOGLE_SITE_VERIFICATION` only after Google provides the real value.

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

`npm run build` runs TypeScript, builds the Vite client assets, builds the SSR renderer, prerenders every public route, and writes final `dist/sitemap.xml` and `dist/robots.txt`.

## Search Console Deployment Checklist

1. Deploy the production build.
2. Confirm the canonical production URL in `VITE_SITE_URL`.
3. Verify that `/robots.txt` loads.
4. Verify that `/sitemap.xml` loads.
5. Test the homepage and article schema with Google Rich Results Test or Schema Markup Validator.
6. Connect Google Search Console.
7. Submit the sitemap.
8. Inspect the homepage URL.
9. Request indexing after meaningful updates.
10. Monitor indexing, Core Web Vitals and search queries.

## Factual Content Still Needed

- Exact start and end months for each professional role.
- Public live or GitHub links for MediReminder and Expense Tracker if available.
- Verified article drafts before publishing writing detail pages.
- A real professional profile image if a photo-led identity is preferred over the AB monogram.
