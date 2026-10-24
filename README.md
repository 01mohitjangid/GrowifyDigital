# Growify Digital: website redesign

A redesign and working prototype of [growify.in](https://growify.in), made for the Growify Digital AI Generalist . It positions Growify as one growth, commerce, AI and product company for luxury, couture and jewellery brands.

This is not the live Growify website.

## File structure

```
GrowifyDigital/
├── docs/                        Strategy and planning
│   ├── 01-research.md           Site audit, competitor research, positioning
│   ├── 02-sitemap.md            Sitemap, page plan, analytics events
│   ├── 03-seo-plan.md           Keyword map, technical SEO, content and measurement plan
│   └── evidence/                Screenshots used in the audit
└── site/                        The website (Next.js)
    ├── app/                     One folder per page
    │   ├── page.tsx             Homepage
    │   ├── services/            Services hub and 6 service pages
    │   ├── case-studies/        Case studies hub and 2 case studies
    │   ├── products/            Lookify, Rossify, Craftify
    │   ├── partners/            Partners and integrations
    │   ├── contact/             Enquiry page
    │   ├── [slug]/              About, Industries, Life at Growify (office tour), Careers, Insights
    │   └── api/enquiry/         Enquiry form endpoint
    ├── components/              Header, footer, enquiry form, office tour, shared UI
    ├── content/site.ts          All site text and data in one place
    ├── lib/                     Form validation
    ├── public/                  Images and office-tour videos
    └── scripts/                 Self-checks
```

## Run the website

```bash
cd site
npm install
npm run dev
```

Requires Node 22.18 or newer.
