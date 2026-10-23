# Task 4: SEO, content and AI-search plan

The new site was built with search in mind from the start. This plan covers what is already built into the prototype and what happens at and after launch.

**About the data.** No keyword-volume tool was connected for this work. The search phrases below are real Google Autocomplete suggestions (India, English, pulled on 23 Oct 2026), which show how people actually phrase their searches. Before choosing priorities, pull volume and difficulty for each phrase from Google Search Console, Keyword Planner or Ahrefs.

## 1. Keyword and search-intent map

| Topic cluster | Real searches (Google Autocomplete) | Intent | Target page |
|---|---|---|---|
| Fashion and luxury e-commerce agency | "digital marketing agency for fashion brands in india", "best ecommerce agency for d2c fashion brands", "luxury ecommerce marketing agency" | Hire an agency | `/services` and `/` |
| Shopify | "shopify development agency india", "shopify agency in india", "best shopify plus agency in india", "jewellery ecommerce website development" | Hire an agency | `/services/shopify-development` |
| Paid media | "performance marketing agency for fashion brands", "meta ads for clothing brands", "meta ads strategy for clothing brand" | Hire an agency, or learn | `/services/performance-marketing`, plus guides |
| Retention | "email marketing for fashion brands" | Hire an agency, or learn | `/services/email-whatsapp-marketing` |
| SEO | "seo for fashion ecommerce" | Hire an agency, or learn | `/services/seo-social-media` |
| AI and virtual try-on | "virtual try on shopify app", "ai virtual try on shopify", "virtual try on for clothes", "ai virtual try on for clothes", "ai in fashion ecommerce" | Buy a product, or research | `/products/lookify`, `/services/ai-automation` |
| Selling designer and bridal wear online | "how to sell designer clothes online", "sell lehenga online", "sell lehenga online uk" | Learn (top of funnel) | `/insights` guides |
| Brand (brand terms, not from the autocomplete pull) | "growify", "growify digital", "lookify" (note: "lookify" also matches unrelated businesses) | Find the company | `/`, `/products/lookify` |

Two rules for every cluster:
- One page owns each cluster, so pages don't compete with each other.
- Supporting guides link up to that owner page.

## 2. Landing pages and metadata

These are already live in the prototype. Each page has one H1, a unique title and description, a canonical URL and a lowercase, hyphenated URL.

| URL | Title tag (suffix " \| Growify Digital" added) | H1 |
|---|---|---|
| `/` | Growify Digital: Growth Systems for Luxury Brands (homepage: no suffix) | Growth systems for luxury brands. |
| `/services` | Digital Marketing Agency for Fashion Brands | One growth system. Five moves. |
| `/services/shopify-development` | Luxury Shopify Development Agency, India | Shopify storefronts built to sell, not just to look good. |
| `/services/performance-marketing` | Performance Marketing Agency for Fashion Brands | Meta and Google ads that find high-intent luxury buyers. |
| `/services/email-whatsapp-marketing` | Email & WhatsApp Marketing for Fashion Brands | Email and WhatsApp journeys that turn buyers into regulars. |
| `/services/seo-social-media` | SEO & Social Media for Fashion Ecommerce | Search and social presence that compounds over time. |
| `/services/ai-automation` | AI Automation for Fashion Ecommerce | Data, AI and automation under every move. |
| `/products/lookify` | Lookify: AI Virtual Try-On Shopify App | Lookify: AI virtual try-on for luxury brands |
| `/case-studies/house-of-masaba` | House of Masaba: Magento to Shopify | House of Masaba: from Magento to a Shopify store that sells |

**Sample meta description** (`/services/shopify-development`): "Custom, semi-custom and template Shopify stores for luxury, couture and jewellery brands, built for conversion and international sales."

**Planned next: industry pages.** These are blueprint pages today:
- `/industries/couture`
- `/industries/bridal`
- `/industries/fine-jewellery`
- `/industries/home-lifestyle`

Each one will carry a matching case study and its own search phrase, for example "jewellery ecommerce website development".

**Internal linking, already built:**
- Every service page links to a related case study.
- Every case study links back to the services it used.
- The footer links every service and product.
- Breadcrumbs sit on every service, case-study and product page. Hub pages will get them at launch.

New guides will link to one service page and one case study each.

## 3. Technical SEO

| Area | What's built | What happens at launch |
|---|---|---|
| Crawling and indexing | `sitemap.xml` lists only finished pages (15 URLs). Placeholder and blueprint pages are `noindex`. | Set `SITE_ENV=production` at build time. That lifts the preview block, and robots.txt then allows crawling and points to the sitemap. |
| Redirects | 52 of the 53 URLs in the old growify.in sitemaps (pages, services, blogs and articles) redirect permanently (308) through 18 rules in `next.config.ts`, and all 52 destinations return 200. Examples: `/pages/services/sky` → `/services/sales-support`, `/blogs/case-studies/house-of-masaba` → `/case-studies/house-of-masaba`, `/pages/anina` → `/products/lookify`. `/pages/privacy-policy` returns 404 until a policy page exists. | Build privacy and terms pages (`/pages/privacy-policy` has no new home yet). Once Insights posts move over, point `/blogs/the-scoop/:post` at `/insights/:post`. |
| Schema | Organization (name, founders, address, phone), Service on each service page, Article on case studies, SoftwareApplication on Lookify. | Add BreadcrumbList. Keep name, address and phone identical everywhere. |
| Images | Every image has alt text (the old homepage had 79 of 111 missing). Images are resized for each screen size and served as WebP. | Get usage rights confirmed for client imagery. |
| Mobile | No sideways scroll on any page at 390 px (tested with real phone emulation). | — |
| Core Web Vitals (lab, Lighthouse mobile) | Old site: performance 51, LCP 18.1 s. New site (current build, 3 runs): performance 95, LCP 2.9 s, CLS 0, total blocking 10 ms. | Get LCP under 2.5 s by trimming render-blocking CSS and font load. Re-measure on the real domain. |

## 4. Content that helps people find us in search and AI assistants

**Editorial topics.** Each topic links to its owner page.
1. How to sell bridal lehengas to customers in the UK, US and UAE. Links to international growth and the Mahima Mahajan story.
2. Shopify vs Magento for luxury fashion brands. Links to Shopify development and the Masaba migration.
3. Shopify Plus: when a designer label actually needs it. Links to Shopify development.
4. Virtual try-on for Indian ethnic wear: what works and what doesn't. Links to Lookify.
5. Click-to-WhatsApp ads for high-value fashion. Links to performance marketing and sales support.
6. COD rules and ready-to-ship strategy for high-AOV stores. Links to Shopify development.
7. Meta ads strategy for clothing brands, with a sale-season playbook. Links to performance marketing.
8. Email and WhatsApp flows every fashion store needs. Links to retention.
9. SEO for fashion e-commerce: collection pages, filters and duplicate content. Links to SEO.
10. A glossary of 30 terms luxury e-commerce teams use, such as AOV, RTS and LTV. Links to services.

**Proof-led content.** Turn each future case study into a short "how we did it" post. Write the result in the title (lesson from Schbang). Only publish numbers that have been checked: † figures need sign-off first.

**Comparison pages.** Virtual try-on apps for Shopify compared, with Lookify listed honestly alongside the alternatives.

**FAQs.** Service pages already answer real buyer questions in plain text. Add more from sales-call notes.

**For AI assistants** (ChatGPT, Gemini, Perplexity):
- Keep the facts that AI assistants pick up identical everywhere: company name, founders, location, services and product names. That means on the site, in the schema, on LinkedIn and in Google Business Profile.
- Open each page with a one-sentence answer to "what is this", as the service pages already do.
- Cite where every number comes from, as the case studies do with their "Source:" lines.
- Earn mentions on trade sites (afaqs, exchange4media, Shopify partner directory). Assistants lean on those.

**What we avoid:** keyword stuffing, location pages with copied text, and any claim without a source.

## 5. Measuring results after launch

**Before launch:**
- Export 16 months of Google Search Console data for the old site, as the baseline.
- Note the top 50 pages and queries, so the redirects can be checked against them.

| When | What to check | Tool |
|---|---|---|
| Daily, week 1 | 404s, redirect hits, indexing errors, sitemap read | Search Console (Pages and Sitemaps reports), server logs |
| Weekly, month 1 | Impressions and clicks for each page group (services, case studies, products, insights). Rankings for the cluster phrases above. | Search Console |
| Monthly | Organic sessions → `cta_click` → `enquiry_submit`, by landing page and service | GA4 via the site's dataLayer events and GTM |
| Monthly | Core Web Vitals field data (real users) | PageSpeed Insights and CrUX |
| Monthly | AI visibility: ask the same 10 prompts (e.g. "best Shopify agency for luxury brands in India", "virtual try-on app for Shopify") in ChatGPT, Gemini and Perplexity. Record whether Growify or Lookify is mentioned or cited. | Manual log |

**What counts as success:**
- More organic enquiries per month than the old site's baseline.
- Rising impressions for the cluster phrases.
- No drop in branded clicks during the migration.

Targets will be set once the baseline numbers are in. We aren't inventing targets.
