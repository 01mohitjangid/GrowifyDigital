# Step 2: Sitemap and page plan

This plan builds on the positioning in [01-research.md](01-research.md): *Growth systems for luxury brands*.

## Main navigation

**Services · Work · Products · Partners · About**, plus a **Work with us** button. The button stays visible on every page.

That cuts the menu from 11 items to 5. Referral Program, Media, Podcasts and PR Activities move to the footer and to Insights.

## Sitemap

```
/                                   Home
├── /services                       Services hub (S-C-A-L-E + AI layer)
│   ├── /services/shopify-development        S: Setup
│   ├── /services/performance-marketing      C: Capture
│   ├── /services/email-whatsapp-marketing   A: Activate
│   ├── /services/sales-support              L: Lead
│   ├── /services/seo-social-media           E: Establish
│   └── /services/ai-automation              Data, AI and automation layer
├── /case-studies                   Work hub + future case-study pipeline
│   ├── /case-studies/mahima-mahajan          International D2C expansion
│   └── /case-studies/house-of-masaba         Shopify replatform and conversion
├── /products                       Products hub
│   ├── /products/lookify                     AI virtual try-on (live)
│   ├── /products/rossify                     Placeholder: inputs needed
│   └── /products/craftify                    Placeholder: inputs needed
├── /partners                       Partners and integrations, by category
├── /industries                     Luxury fashion, couture, bridal, fine jewellery, lifestyle
├── /about                          Story, founders, numbers, awards
├── /life-at-growify                Culture and office tour (bonus)
├── /careers                        Open roles (5 live role pages today)
├── /insights                       One blog (merges the 3 current blogs) + press
└── /contact                        "Work with us" enquiry
```

## Priority order

The order follows what wins enquiries and what the brief scores.

| Priority | Page | Why it comes first | Built in prototype |
|---|---|---|---|
| 1 | Home | Every visitor sees it, and it sets the new positioning | Full |
| 2 | Contact / Work with us | Every CTA lands here, so a weak form loses every lead | Full |
| 3 | Case studies (2) | Proof is the main reason a luxury founder says yes | Full |
| 4 | Services hub + 6 service pages | Paid and search traffic lands here; each page has its own SEO keyword | Full (one template) |
| 5 | Products hub + Lookify | This is what makes Growify more than an agency | Full |
| 6 | Partners | Builds trust and is a brief requirement | Full |
| 7 | About, Industries, Life at Growify, Careers, Insights | Supporting pages | Page blueprint (sections listed on the page) |

## Page sections and search plan

Each page gets exactly one H1, a unique title and a unique meta description. URLs are lowercase, use hyphens and have no `/pages/` prefix. Every old URL gets a permanent redirect (308, treated like a 301 by Google) to its new address, once the policy pages exist, for example `/pages/services` → `/services` and `/blogs/case-studies/house-of-masaba` → `/case-studies/house-of-masaba`.

| URL | H1 | Main search intent | Key sections |
|---|---|---|---|
| `/` | Growth systems for luxury brands. | "ecommerce growth agency for luxury brands India" | Hero → proof numbers → client names → S-C-A-L-E system → sales-led difference → 2 case studies → products → partners → founders and team → enquiry |
| `/services` | One growth system. Five moves. | "luxury ecommerce agency services" | S-C-A-L-E cards → AI layer → how we engage → CTA |
| `/services/[service]` | Service name | e.g. "Shopify development agency for luxury brands" | Outcome → what's included → how we work → related case study → FAQs → service-specific enquiry |
| `/case-studies` | Work that moved the numbers | "luxury fashion ecommerce case study" | Featured studies → pipeline of upcoming studies → CTA |
| `/case-studies/[brand]` | Brand: the result in one line | "[brand] ecommerce case study" | Context → problem → approach → scope → proof → outcomes (with validation flags) → CTA |
| `/products` | We build technology too | "virtual try-on for fashion brands" | Lookify (live) → Rossify, Craftify (coming) → how products and services connect |
| `/products/lookify` | Lookify: AI virtual try-on for luxury brands | "virtual try-on Shopify app" | What it does → how it works → in-store → proof → pricing link → demo CTA → lookify.in |
| `/partners` | The stack behind the system | "Shopify WhatsApp Razorpay agency" | Categories (commerce, payments, engagement, ads and measurement, CRM, logistics) → what each category does for customers → partnership vs integration label |
| `/contact` | Tell us about your brand | "contact ecommerce agency Delhi" | Short form (service pre-selected) → WhatsApp → email and phone → office address |

## How the remaining pages are structured

The prototype shows these five pages as **blueprints**. Each blueprint lists the sections, the H1 and the inputs still needed from Growify, so the nav never leads to a dead end:

- **About:** story since 2019 → founders (Rishab Mehra, Disha Bhatnagar) → numbers → awards and press → values → CTA.
- **Industries:** one block per vertical (couture, bridal, fine jewellery, home and lifestyle, wellness) → matching case study → CTA.
- **Life at Growify:** the office tour is **built** (5 stops; photos by default, the video only on request) → teams → rituals → people stories → careers CTA.
- **Careers:** why join → open roles (pulled from the 5 role pages that exist today) → hiring process → apply.
- **Insights:** one blog that merges `news`, `growify-blogs` and `the-scoop` → press and awards → newsletter.

## Measuring enquiries

Every CTA, form and WhatsApp link sends a named event to `window.dataLayer`, so Google Tag Manager can pick it up without code changes:

| Event | Fires when | Main properties |
|---|---|---|
| `cta_click` | Any CTA button is clicked | `label`, `location` |
| `enquiry_submit` | The contact form is sent successfully | `service` |
| `whatsapp_click` | A WhatsApp link is clicked | `location` |
| `tour_video_start` | The office tour video is started | none |
| `tour_stop` | A tour stop is opened | `stop` |

Funnel to watch: page view → `cta_click` → contact page view → `enquiry_submit`. Split it by landing page and by service.
