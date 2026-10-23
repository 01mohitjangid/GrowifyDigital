# Step 1: Research, audit and positioning

Checked on 23 Oct 2026. I loaded the live site in headless Chrome, ran Lighthouse 12 once each for mobile and desktop (lab data), and read the sitemap, the supplied Growth Deck and the brief. Nothing on growify.in was changed.

## 1. What the site says today

- **The hero says "We change brands through Marketing."** That reads like a marketing agency, which is the exact position the brief wants to move away from.
- **One service model, three names.**
  - The homepage uses Setup / Show / Start / Sky / Suggest.
  - The services page calls it "6 S's".
  - The deck uses S-C-A-L-E.
- **The homepage never mentions AI.** The word "AI" appears 0 times.
- **The products are hidden.**
  - Lookify is missing from both the nav and the homepage.
  - The AAINA try-on app lives at `/pages/anina`.
  - The Mudra Shopify theme lives at `/pages/theme`.
  - Rossify and Craftify do not appear anywhere.

## 2. Audit findings, ranked by impact

| # | Area | Problem | Evidence | Fix in redesign |
|---|------|---------|----------|-----------------|
| 1 | Positioning | The site reads as a marketing agency, not a growth + commerce + AI + product company | Hero copy; "AI" appears 0 times on the homepage | Lead with the integrated system and give products their own section |
| 2 | Speed (mobile) | Lighthouse performance score is **51**; LCP is **18.1 s** (Google's target is 2.5 s) | The LCP element is the animated hero heading; about 1 MB of tag scripts (3 gtag IDs, each loaded twice); Shopify checkout JS on a site with nothing to buy | Static hero text, one tag manager, no cart |
| 3 | Mobile UX | Within about 12 seconds, a QuickReply newsletter popup covers the whole phone screen. The hero behind it is still blank | [evidence/mobile-home-popup.jpg](evidence/mobile-home-popup.jpg) (iPhone-size emulation, 390 × 844) | No popup on load; one inline enquiry |
| 4 | Products | The Lookify page is only a demo form, about 53 words long, with the button text "Book a DemO". It has no link to lookify.in | `/pages/lookify` | One Products hub with a page for each product |
| 5 | Proof | Stat labels ("revenue generated for brands in 2024") render without numbers until a script runs; the same 4 logos repeat across 8 carousels; 2 of 3 testimonials are unattributed | Rendered homepage DOM | Static, sourced numbers and structured case studies |
| 6 | Navigation | The nav has 11 items, including Referral Program, Media, Podcasts and PR Activities, but no Industries or Products. There is also a cart icon | Nav menu | Five top-level items and a single "Work with us" CTA |
| 7 | Conversion | Five separate enquiry routes: `/contact`, `/enquire-now`, a "What brings you here?" popup, a newsletter popup and the footer form | Page dumps | One short form, with service-specific variants and WhatsApp |
| 8 | Content errors | The Razorpay partner card describes Shiprocket; there are typos ("faser", "DemO"); the footer says © 2025; the client name is spelled three ways (Ridhi Suri / Ridhiee Suuri / Ridhiiee Suuri) | `/pages/tech`, homepage | Copy review and a single source for client names |
| 9 | SEO basics | Every page's H1 is the logo text "Growify Digital"; 4 pages have no meta description (About, Lookify, Enquire Now, Why Growify); 79 of 111 homepage images have no alt text; the sitemap lists theme-document and theme-support pages and mixed-case URLs (`/services/Shoot`); posts are split across 3 blogs | Page dumps, sitemap | A unique H1 and meta per page, one blog, a clean URL plan (Step 3) |
| 10 | Case studies | They are short (the Masaba study is about 272 words) and have no problem → approach → outcome structure; the meta description is auto-cut ("THE BRAND Launched…") | `/blogs/case-studies/house-of-masaba` | Case-study template (Step 3) |

**Why Lighthouse SEO shows 100.** It only checks the basics, such as crawlable links and a valid canonical. Findings 9 and 10 are the gaps it misses.

**Keep these:**
- Strong client names.
- Real numbers in the Masaba study (Magento → Shopify move; +69.8% sales in 2021 and +70.2% in 2022).
- Accessibility scores of 93–96.
- Near-zero layout shift (CLS 0.002).
- WhatsApp contact.
- Press coverage (afaqs, BW, mid-day) and the Outlook Business Spotlight 2026 award.

## 3. Competitor lessons

I reviewed six live homepages on 23 Oct 2026. Eastside Co and Domaine failed to load, so they were replaced.

| Company | Type | Hero (verbatim) | What Growify should take |
|---------|------|-----------------|--------------------------|
| [We Make Websites](https://www.wemakewebsites.com) | Luxury Shopify agency (UK) | "The Shopify agency for international brands." | Tag long relationships as **"Ongoing Success"**, so clients stay instead of buying one-off builds |
| [Swanky](https://swankyagency.com) | Shopify Platinum agency | "Compelling digital experiences for international brands on Shopify Plus." | A two-word top menu (**Launch / Grow**) makes the offer clear in one glance |
| [Schbang](https://www.schbang.com) | Indian integrated agency | "Your Creative, Media & Technology Transformation Partner" | Put the **result in the case-study title**, not just the logo |
| [GoKwik](https://www.gokwik.co) | Indian D2C commerce platform | "Built for D2C. Powered by AI." | **One tab for each funnel stage**, each with one offer and one metric; "Book a demo" on every screen |
| [Pattern](https://www.pattern.com) | Services + own AI product (US) | "Win on every Marketplace." | Show a **real product screen** (a sample dashboard) and a client login, which proves "we build tech" |
| [Fynd](https://www.fynd.com) | AI commerce platform + services | "AI native unified commerce" | Name the job first, then the product: **"Virtual try-on — Lookify"** |

**Five lessons for the redesign:**
1. Claim a category in the H1 instead of listing services.
2. Show numbers under the hero, in case-study titles and next to each offer.
3. Give every product a plain job name, a demo screen and a "Book a demo" button.
4. Put services and products on one visible journey, so "integrated" is shown, not just claimed.
5. Lead with luxury client names and verified partner badges.

**The gap Growify can own:** none of the six says it **handles customer conversations and closes sales** for its clients. Growify does.

## 4. Proposed positioning

**Recommended line:** *Growth systems for luxury brands.*
**Supporting line:** *Shopify storefronts, performance marketing, sales support and our own AI products, run as one system by one team.*

The line comes from the deck's own "Growth Systems for high value clients". It tells visitors that Growify builds and runs the whole engine, not just campaigns.

**Four pillars.** These match the brief's "growth + commerce + AI + product".

1. **Commerce:** Shopify builds, from fully custom to template. The deck claims 500+ websites.
2. **Growth:** Meta and Google ads, SEO and social media.
3. **Sales and retention:** WhatsApp and email journeys, plus a team that handles customer conversations. The deck mentions 18+ hours of CRM support.
4. **AI and products:** Lookify (virtual try-on), Rossify, Craftify and AI workflow automation.

**What sets Growify apart: it is sales-led.** Most agencies stop at traffic. Growify's team answers customer enquiries and closes sales for its clients. The deck's Mahima Mahajan and Ridhi Mehra stories, with international WhatsApp sales teams, prove this. No competitor in section 3 claims it.

**One service model.** Use S-C-A-L-E (Setup, Capture, Activate, Lead, Establish) from the deck everywhere. Retire the "5/6 S's".

**Proof points we can use.** All come from the supplied deck and must be checked before publishing:
- 476+ brands
- 7 countries
- 7 years in business
- 100+ team members
- 87% average sales growth in FY25

## 5. Target audiences and journeys

| Audience | What they need to see | Main journey |
|----------|----------------------|--------------|
| **Founder of a luxury, couture or jewellery label** (primary) | Peers they recognise, a growth story like theirs, and who will run the work | Home → Industry: Luxury fashion → Case study → Book a growth call |
| **E-commerce head moving platform or going international** | Shopify depth, migration proof (Masaba: Magento → Shopify), international results (Mahima Mahajan: US and Middle East) | Search "Shopify agency for luxury brands" → Shopify service page → Case study → Scoped enquiry form |
| **Retail or omnichannel head** | What Lookify does in-store and online, plus a demo | Products → Lookify → Demo video → Book a demo / lookify.in |
| **Candidate** | Team, culture, office | Life at Growify (office tour) → Careers → Apply |

Partners and the press are secondary audiences. They are served by the Partners page and an awards and press strip.

## 6. Open questions for Growify

These must be confirmed before any of this content goes live:

1. Is Lookify the renamed AAINA app? Is **lookify.in** the official site? It is titled "Lookify — Virtual Try-On" but does not mention Growify. Note that lookify.app is a different company.
2. What are Rossify and Craftify? Are they live or in beta, and do they have URLs? craftify.in is an "Art of India" handcraft site, so is it related?
3. Is the Mudra Shopify theme still a product?
4. Which number is primary: WhatsApp 97171 66586 (site) or 88004 61296 (deck)?
5. What are the official partner designations, for example Shopify Partner tier and the Meta partnership? What is the LimeChat relationship? LimeChat is not on the current site.
6. Can the deck's client numbers be published?
