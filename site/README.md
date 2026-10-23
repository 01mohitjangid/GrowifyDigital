# Growify website prototype

A working prototype of the redesigned growify.in, built for the Growify AI Generalist assignment. It is not the live site.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Checks: `npm run lint`, `npm run typecheck`, `npm run check` (form validation), `npm run build`. Needs Node 22.18+ (`npm run check` runs TypeScript directly).

## Where things live

- `content/site.ts` holds all repeatable content: services, case studies, products, partners and blueprint pages. To add a service, case study or product, add an entry there. Its page, sitemap entry and links are generated from it.
- `app/` contains one folder per route. `[slug]` folders render the entries in `content/site.ts`.
- `components/` holds the header, footer, enquiry form, office tour (`OfficeTour.tsx`), analytics listener and shared UI.
- `next.config.ts` holds the redirect map from the old growify.in URLs (52 of 53; the privacy policy still needs a page) to their new pages.
- `app/api/enquiry/route.ts` validates enquiries. It does **not** store or send them yet. Connect it to the CRM or email before launch.

## Launch switches

- Set `SITE_ENV=production` at **build time**, and only for the real domain (pages are prerendered, so a runtime-only change does nothing). Until then, every page is `noindex` and `robots.txt` blocks crawlers, so previews never compete with growify.in in search.
- Analytics events (`cta_click`, `enquiry_submit`, `whatsapp_click`, `tour_video_start`, `tour_stop`) are pushed to `window.dataLayer`. Add a Google Tag Manager container to send them on.
- Finish About, Careers and Insights before launch. Old URLs redirect there, and blueprint pages are `noindex`, so launching early would drop those rankings.
- For production, move the tour videos to Vercel Blob or a video host to save repo size and bandwidth.
- Figures marked † come from the Growth Deck, growify.in or lookify.in and need confirming before launch.

## Images

All images come from material Growify supplied for this assignment. `founders.jpg`, `team.jpg` and `shopify-store.jpg` (a Gaurav Gupta storefront) are crops from the Growify Growth Deck. `office-*.jpg` are frames from the supplied office video. `public/tour/tour-540.mp4` (5.5 MB) and `tour-720.mp4` (9.9 MB) are H.264 re-encodes of that video, which was HEVC and does not play in every browser. Confirm usage rights, including the client storefront, before launch.
