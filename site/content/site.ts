export const SITE_URL = "https://growify.in";

export const isLive = process.env.SITE_ENV === "production";

export const orgRef = { "@type": "Organization", name: "Growify Digital LLP", url: SITE_URL };

export const contact = {
  email: "info@growify.in",
  phone: "+91 88004 61296",
  whatsapp: "919717166586",
  address: "D-112, 60 Feet Road, Near Dhan Mill, Chattarpur, New Delhi",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Work" },
  { href: "/products", label: "Products" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
];

export type Stat = { value: string; label: string; verify?: boolean };

export const stats: Stat[] = [
  { value: "476+", label: "brands served", verify: true },
  { value: "500+", label: "websites delivered", verify: true },
  { value: "7", label: "countries", verify: true },
  { value: "100+", label: "people in New Delhi", verify: true },
];

export const clients = [
  "Tarun Tahiliani",
  "Gaurav Gupta",
  "House of Masaba",
  "Ridhi Mehra",
  "Mahima Mahajan",
  "Drzya by Ridhiiee Suuri",
  "Aisha Rao",
  "Anmol Jewellers",
  "Meena Bazaar",
  "Hazoorilal Legacy",
  "Torani",
];

export type Service = {
  slug: string;
  letter: string;
  move: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  summary: string;
  signature?: boolean;
  includes: string[];
  process: string[];
  caseStudy?: string;
  image?: { src: string; alt: string; width: number; height: number };
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "shopify-development",
    letter: "S",
    move: "Setup",
    name: "Shopify development",
    h1: "Shopify storefronts built to sell, not just to look good.",
    title: "Luxury Shopify Development Agency, India",
    description:
      "Custom, semi-custom and template Shopify stores for luxury, couture and jewellery brands, built for conversion and international sales.",
    summary:
      "We design and build Shopify stores that work as high-conversion storefronts, not catalogues.",
    signature: true,
    includes: [
      "Fully custom design and build, crafted around the brand",
      "Semi-custom: a proven theme with brand-led sections",
      "Template launches when speed matters most",
      "Migrations from Magento and other platforms",
      "International storefronts, currencies and markets",
      "Conversion features: ready-to-ship, loyalty, referral and COD rules",
      "Ongoing maintenance and speed work after launch",
    ],
    process: ["Discover", "Design", "Build", "Launch", "Optimise"],
    caseStudy: "house-of-masaba",
    image: { src: "/images/shopify-store.jpg", alt: "A Gaurav Gupta Shopify storefront shown on a phone", width: 700, height: 930 },
    faqs: [
      {
        q: "Custom, semi-custom or template: which do I need?",
        a: "Custom suits brands whose site is their flagship store. Semi-custom gives a brand-led look on a proven base. Template is for fast, cost-efficient launches. We recommend one after a short discovery call.",
      },
      {
        q: "Can you move my store from Magento to Shopify?",
        a: "Yes. House of Masaba moved from Magento to a custom Shopify store with us, then upgraded to Shopify 2.0.",
      },
      {
        q: "Who looks after the site after launch?",
        a: "We can. Website maintenance, speed work and new features are part of our services.",
      },
    ],
  },
  {
    slug: "performance-marketing",
    letter: "C",
    move: "Capture",
    name: "Performance marketing",
    h1: "Meta and Google ads that find high-intent luxury buyers.",
    title: "Performance Marketing Agency for Fashion Brands",
    description:
      "Meta and Google campaigns for luxury and couture brands: catalogue, Click-to-WhatsApp, Search and Shopping, run market by market.",
    summary: "We bring in buyers who are ready to spend, in India and abroad.",
    signature: true,
    includes: [
      "Meta conversion and catalogue campaigns",
      "Click-to-WhatsApp ads for high-value enquiries",
      "Google Search and Shopping",
      "Market-by-market campaigns for international buyers",
      "Sale and end-of-season playbooks",
      "Budgets moved between markets based on live returns",
    ],
    process: ["Audit", "Plan", "Launch", "Measure", "Reallocate"],
    caseStudy: "mahima-mahajan",
    faqs: [
      {
        q: "Do you run campaigns outside India?",
        a: "Yes. For Mahima Mahajan we run region-wise campaigns for the US and the Middle East, with messaging and imagery tuned to each market.",
      },
      {
        q: "How do you report results?",
        a: "Through a live dashboard showing sales by market, channel performance and spend against returns, so budget decisions are based on data.",
      },
    ],
  },
  {
    slug: "email-whatsapp-marketing",
    letter: "A",
    move: "Activate",
    name: "Email and WhatsApp marketing",
    h1: "Email and WhatsApp journeys that turn buyers into regulars.",
    title: "Email & WhatsApp Marketing for Fashion Brands",
    description:
      "Lifecycle email and WhatsApp journeys, retargeting and loyalty programmes for luxury and fashion brands.",
    summary: "We turn visitors into buyers, and buyers into repeat customers.",
    includes: [
      "Welcome, abandoned-cart and post-purchase journeys",
      "WhatsApp broadcasts and automated flows",
      "Pre-sale buzz and sale-time retargeting",
      "Loyalty and referral programmes",
      "Segmentation and CRM hygiene",
    ],
    process: ["Map the journey", "Segment", "Build flows", "Test", "Refine"],
    caseStudy: "house-of-masaba",
    faqs: [
      {
        q: "Which tools do you work with?",
        a: "Klaviyo for email, plus WhatsApp platforms such as Interakt, QuickReply.ai and LimeChat. See our partners page for the full stack.",
      },
      {
        q: "Will this feel like spam to my customers?",
        a: "No. Messages are segmented by what each customer has browsed and bought, so people get fewer, more relevant messages.",
      },
    ],
  },
  {
    slug: "sales-support",
    letter: "L",
    move: "Lead",
    name: "Sales handling and conversion support",
    h1: "A sales team that answers every enquiry, and closes.",
    title: "Sales Support for Luxury Brands",
    description:
      "Trained sales teams that handle customer enquiries across WhatsApp, social and email for luxury and couture brands, across time zones.",
    summary:
      "We manage customer conversations across channels. Every query is handled with the intent of closing, not just responding.",
    signature: true,
    includes: [
      "Enquiry handling across WhatsApp, Instagram, email and calls",
      "International sales teams across time zones",
      "Deep product training for high-value selling",
      "Lead-to-order tracking",
      "Escalation workflows that protect the brand",
    ],
    process: ["Learn the brand", "Train", "Go live", "Track", "Coach"],
    caseStudy: "mahima-mahajan",
    faqs: [
      {
        q: "Is this outsourced customer service?",
        a: "No. The team is trained on your product and focuses on converting high-value enquiries, while keeping your brand's tone.",
      },
      {
        q: "Can you cover international customers?",
        a: "Yes. Teams work across time zones. Mahima Mahajan's international buyers are served this way.",
      },
    ],
  },
  {
    slug: "seo-social-media",
    letter: "E",
    move: "Establish",
    name: "SEO and social media",
    h1: "Search and social presence that compounds over time.",
    title: "SEO & Social Media for Fashion Ecommerce",
    description:
      "Technical SEO, search-friendly site structure, content and social media management for luxury, bridal and couture brands.",
    summary: "We build long-term visibility through search and a consistent social presence.",
    includes: [
      "Technical SEO: site structure, schema and speed",
      "Content for luxury search intent: bridal, couture, jewellery",
      "Social media management and content calendars",
      "Brand storytelling and creative strategy",
      "Shoots and visual content",
    ],
    process: ["Audit", "Prioritise", "Fix and publish", "Measure", "Expand"],
    caseStudy: "house-of-masaba",
    faqs: [
      {
        q: "How long before SEO shows results?",
        a: "Technical fixes can show within weeks. Content usually takes several months to build momentum. Progress is tracked in Google Search Console.",
      },
    ],
  },
  {
    slug: "ai-automation",
    letter: "AI",
    move: "Underneath it all",
    name: "Data, AI and automation",
    h1: "Data, AI and automation under every move.",
    title: "AI Automation for Fashion Ecommerce",
    description:
      "Live dashboards, AI-assisted selling, virtual try-on and workflow automation for luxury e-commerce brands.",
    summary:
      "Dashboards, AI-assisted selling and automation that make every other service faster and smarter.",
    includes: [
      "Live dashboards: sales by market, channel performance, spend against returns",
      "AI- and chat-led assisted selling",
      "Lookify virtual try-on on product pages",
      "Workflow automation across Shopify, CRM and support",
      "Automated reporting",
    ],
    process: ["Find the bottleneck", "Prototype", "Measure", "Roll out"],
    caseStudy: "mahima-mahajan",
    faqs: [
      {
        q: "Do you build AI tools yourselves?",
        a: "Yes. Lookify, our AI virtual try-on, is a live Shopify app. We also build automations for our clients' sales and reporting workflows.",
      },
    ],
  },
];

export type Outcome = { value: string; label: string; source: string; verify?: boolean };

export type CaseStudy = {
  slug: string;
  brand: string;
  theme: string;
  h1: string;
  result: string;
  resultVerify?: boolean;
  title: string;
  description: string;
  context: string;
  problem: string[];
  approach: { heading: string; points: string[] }[];
  scope: string[];
  outcomes: Outcome[];
  proofNeeded: string;
  validation: string[];
  services: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mahima-mahajan",
    brand: "Mahima Mahajan",
    theme: "International D2C expansion",
    h1: "Mahima Mahajan: building a global couture business",
    result: "81% year-on-year online growth, with campaigns and sales teams built for the US and the Middle East.",
    resultVerify: true,
    title: "Mahima Mahajan: Scaling Couture Abroad",
    description:
      "How Growify built the campaigns, sales teams, operations and data behind Mahima Mahajan's growth in the US and Middle East.",
    context:
      "Mahima Mahajan is an Indian couture label. Growify did more than market the brand. We built the systems, teams and global engine that let it scale across borders.",
    problem: [
      "Grow the online business consistently, year after year",
      "Expand internationally, starting with the US and the Middle East",
      "Keep the brand experience, delivery speed and margins intact at scale",
    ],
    approach: [
      {
        heading: "Market-by-market growth",
        points: [
          "US: region-wise awareness and conversion campaigns, a product mix tuned to US buying behaviour, and simple, confidence-led messaging",
          "Middle East: market-specific imagery and styling, culturally tuned messaging, and AI- and chat-led assisted selling",
        ],
      },
      {
        heading: "Merchandising and operations",
        points: [
          "Different product mixes for domestic and international buyers",
          "Ready-to-ship optimisation for faster dispatch",
          "Standardised order processing and escalation workflows",
          "A dedicated merchandiser working directly at the factory",
        ],
      },
      {
        heading: "Sales enablement",
        points: [
          "International sales teams across time zones",
          "Deep product training for high-value selling",
        ],
      },
      {
        heading: "Data and ROI",
        points: [
          "A custom dashboard tracking sales by market, channel performance and spend against returns",
          "Budgets reallocated by geography based on live returns",
        ],
      },
    ],
    scope: ["Performance marketing", "International expansion", "Sales support", "Merchandising and ops", "Dashboards"],
    outcomes: [
      { value: "81%", label: "year-on-year online growth", source: "Growth Deck", verify: true },
      { value: "2.54×", label: "AOV growth, 2021 to 2025", source: "Growth Deck", verify: true },
      { value: "US · India · Canada", label: "top-performing markets", source: "Growth Deck", verify: true },
      { value: "2×", label: "ROI against industry benchmark", source: "Growth Deck", verify: true },
    ],
    proofNeeded: "Anonymised dashboard screenshot, plus 2–3 product pages from the US and Middle East storefronts.",
    validation: [
      "The deck lists international contribution as \"251% of total online revenue\". A share cannot exceed 100%, so this figure is left out until it is re-checked.",
      "The deck's yearly growth chart shows four values across five years. The year mapping needs confirming before it is charted.",
      "\"2× industry benchmark\" needs the benchmark's source.",
      "Written client approval to publish these figures.",
    ],
    services: ["performance-marketing", "sales-support", "ai-automation"],
  },
  {
    slug: "house-of-masaba",
    brand: "House of Masaba",
    theme: "Shopify replatform and conversion",
    h1: "House of Masaba: from Magento to a Shopify store that sells",
    result: "Sales up 69.8% in 2021 and 70.2% in 2022 after the move to Shopify.",
    title: "House of Masaba: Magento to Shopify",
    description:
      "How Growify moved House of Masaba from Magento to a custom Shopify store, added conversion features and scaled multichannel marketing.",
    context:
      "Launched in 2009, House of Masaba is Masaba Gupta's label, known for vibrant prints and unconventional silhouettes, with buyers in India and abroad.",
    problem: [
      "The store ran on Magento",
      "Growth needed a faster platform, stronger conversion features and more channels bringing in buyers",
    ],
    approach: [
      {
        heading: "Phase 1: Replatform",
        points: [
          "Moved the store from Magento to a custom-designed Shopify build",
          "Added spin-the-wheel, a ready-to-ship process, loyalty and referral programmes and a geo currency converter",
          "Designed a custom COD strategy and process to lift conversions",
          "Upgraded to Shopify 2.0 for performance and speed",
        ],
      },
      {
        heading: "Phase 2: Multichannel growth",
        points: [
          "Added Google Ads, push notifications, Facebook catalogue ads, Instagram and email marketing",
          "Scaled the marketing budget 4× over 18 months",
        ],
      },
    ],
    scope: ["Shopify development", "Performance marketing", "Email and push", "SEO"],
    outcomes: [
      { value: "+69.8%", label: "sales growth in 2021", source: "growify.in case study" },
      { value: "+70.2%", label: "sales growth in 2022", source: "growify.in case study" },
      { value: "75%", label: "brand scale-up over 18 months", source: "growify.in case study", verify: true },
    ],
    proofNeeded: "Before and after screenshots of the store, and the conversion rate and page speed before and after the move.",
    validation: [
      "The problem statement is inferred from the public case study. Confirm it with the account team.",
      "Confirm what \"scaled the brand by 75%\" measures (revenue or orders).",
      "A client quote would need written approval.",
    ],
    services: ["shopify-development", "performance-marketing", "email-whatsapp-marketing"],
  },
];

export const pipeline = [
  { brand: "Ridhi Mehra", theme: "High-AOV bridal sales over WhatsApp", needs: "Verified revenue growth, the currency of the \"72M\" figure, the Hyderabad store-lead story, lead-to-order data" },
  { brand: "Drzya by Ridhiiee Suuri", theme: "Retention-led growth through email and WhatsApp", needs: "Repeat-revenue share (deck says 45–55%), how CLV was measured, flow screenshots" },
  { brand: "Tarun Tahiliani", theme: "Commerce development and site optimisation", needs: "Core Web Vitals and conversion rate before and after, project dates" },
  { brand: "Gaurav Gupta", theme: "Search-friendly site architecture (SEO)", needs: "Organic sessions and rankings before and after, Search Console access" },
  { brand: "Lookify pilot", theme: "Virtual try-on online and in-store", needs: "Pilot brand, try-on counts, effect on conversion and returns, approval" },
  { brand: "Luxury acquisition", theme: "Meta and Google for high-value buyers", needs: "ROAS by market, acquisition cost trend, creative examples" },
  { brand: "Reporting automation", theme: "CRM and reporting automation", needs: "Hours saved, workflow before and after, dashboard screenshots" },
  { brand: "AI workflows", theme: "AI in sales and operations", needs: "Use case, tools used, time or revenue impact" },
];

export type Product = {
  slug: string;
  name: string;
  job: string;
  status: string;
  live: boolean;
  h1: string;
  title: string;
  description: string;
  summary: string;
  url?: string;
  steps?: string[];
  features?: string[];
  proof?: Outcome[];
  pricing?: string;
  panels?: { title: string; text: string; placeholder?: boolean }[];
  inputsNeeded: string[];
};

export const products: Product[] = [
  {
    slug: "lookify",
    name: "Lookify",
    job: "AI virtual try-on",
    status: "Live on Shopify",
    live: true,
    h1: "Lookify: AI virtual try-on for luxury brands",
    title: "Lookify: AI Virtual Try-On Shopify App",
    description:
      "Lookify lets shoppers see how products look on them before they buy. A Shopify app built by Growify for luxury and fashion brands.",
    summary: "Let shoppers see how products look on them before they buy, with a personalised try-on in seconds.",
    url: "https://lookify.in",
    steps: [
      "The shopper taps Virtual Try-On on a product page",
      "They upload one photo",
      "AI fits the garment and shows their look",
      "They add it to the bag, or share it",
    ],
    features: [
      "Built into Shopify product and collection pages",
      "Works with Shopify Flow, Klaviyo and Mailchimp",
      "WhatsApp lead capture on higher plans",
      "White-label option for enterprise brands",
    ],
    proof: [
      { value: "100K+", label: "virtual try-ons", source: "lookify.in", verify: true },
      { value: "50+", label: "brands", source: "lookify.in", verify: true },
      { value: "25K", label: "shopper shares", source: "lookify.in", verify: true },
      { value: "5.0", label: "rating on the Shopify App Store", source: "lookify.in", verify: true },
    ],
    pricing: "From a free plan to enterprise. Paid plans start at ₹1,999 a month (as listed on lookify.in, October 2026).",
    panels: [
      { title: "In-store experience", text: "Lookify also powers try-on in physical stores. This section will show the in-store set-up once the details below are confirmed." },
      { title: "Demo video", text: "Placeholder for a 30–60 second walkthrough: product page, then photo upload, then the shopper's look.", placeholder: true },
    ],
    inputsNeeded: [
      "In-store set-up: kiosk, tablet or mirror, and the hardware involved",
      "A short demo video we can host",
      "Confirmation that lookify.in is the official product site",
    ],
  },
  {
    slug: "rossify",
    name: "Rossify",
    job: "Details to confirm",
    status: "Inputs needed",
    live: false,
    h1: "Rossify",
    title: "Rossify by Growify",
    description: "Rossify is part of Growify's proprietary product portfolio. Product details are being confirmed.",
    summary: "Part of Growify's product portfolio. This page is a placeholder until the product inputs below are supplied.",
    inputsNeeded: [
      "What it does, and for whom, in one line",
      "Status: live, beta or internal",
      "3 to 5 key features",
      "Screens or a demo video",
      "Pricing model",
      "Proof: pilot brands or usage",
      "Official URL and logo",
    ],
  },
  {
    slug: "craftify",
    name: "Craftify",
    job: "Details to confirm",
    status: "Inputs needed",
    live: false,
    h1: "Craftify",
    title: "Craftify by Growify",
    description: "Craftify is part of Growify's proprietary product portfolio. Product details are being confirmed.",
    summary: "Part of Growify's product portfolio. This page is a placeholder until the product inputs below are supplied.",
    inputsNeeded: [
      "What it does, and for whom, in one line",
      "Status: live, beta or internal",
      "3 to 5 key features",
      "Screens or a demo video",
      "Pricing model",
      "Proof: pilot brands or usage",
      "Official URL and logo. Is craftify.in related?",
    ],
  },
];

export type Partner = { name: string; does: string; relation: "Partnership" | "Integration"; confirmed: boolean };

export const partnerGroups: { category: string; value: string; partners: Partner[] }[] = [
  {
    category: "Commerce",
    value: "Where the store lives. A fast, flexible base for every brand we build.",
    partners: [{ name: "Shopify", does: "Commerce platform, including Shopify Plus", relation: "Integration", confirmed: false }],
  },
  {
    category: "Payments",
    value: "More completed checkouts, through UPI, cards and international payments.",
    partners: [
      { name: "Razorpay", does: "Payment gateway for UPI, cards and international payments", relation: "Integration", confirmed: false },
      { name: "Easebuzz", does: "Payment gateway", relation: "Integration", confirmed: false },
    ],
  },
  {
    category: "Conversations and engagement",
    value: "Turns chats into orders, and first-time buyers into repeat customers.",
    partners: [
      { name: "LimeChat", does: "AI chat and WhatsApp commerce for D2C brands", relation: "Integration", confirmed: false },
      { name: "QuickReply.ai", does: "WhatsApp marketing and automation", relation: "Integration", confirmed: false },
      { name: "Interakt", does: "WhatsApp Business API and broadcasts", relation: "Integration", confirmed: false },
      { name: "Klaviyo", does: "Email and SMS automation", relation: "Integration", confirmed: false },
    ],
  },
  {
    category: "Advertising and measurement",
    value: "Finds the right buyers, and shows what is working.",
    partners: [
      { name: "Meta", does: "Facebook, Instagram and WhatsApp ads. Partnership announced in the press (afaqs, indiantelevision).", relation: "Partnership", confirmed: false },
      { name: "Google", does: "Search, Shopping and analytics", relation: "Integration", confirmed: false },
    ],
  },
  {
    category: "CRM",
    value: "Every lead tracked from first message to final order.",
    partners: [{ name: "Kommo", does: "CRM for messaging-led sales", relation: "Integration", confirmed: false }],
  },
  {
    category: "Logistics",
    value: "Faster, cheaper delivery, with simpler returns.",
    partners: [{ name: "Shiprocket", does: "Shipping and courier management", relation: "Integration", confirmed: false }],
  },
];

export type Photo = { src: string; alt: string };

export type Blueprint = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  sections: { name: string; detail: string }[];
  inputs: string[];
  images?: Photo[];
  tour?: Tour;
};

export type Tour = {
  video: { mobile: string; desktop: string };
  stops: { title: string; start: number; text: string; image: string; alt: string }[];
};

export const blueprints: Blueprint[] = [
  {
    slug: "about",
    name: "About",
    h1: "Built by operators, since 2019.",
    title: "About Us",
    description: "Growify Digital is a New Delhi e-commerce growth company for luxury, fashion and jewellery brands, founded by Rishab Mehra and Disha Bhatnagar.",
    sections: [
      { name: "Story", detail: "From a small team in 2019 to helping brands move online through COVID, to the full team today." },
      { name: "Founders", detail: "Rishab Mehra and Disha Bhatnagar, operators who design growth systems across brand, UX, sales and revenue." },
      { name: "Numbers", detail: "Brands served, websites delivered, countries, years in business." },
      { name: "Awards and press", detail: "Outlook Business Spotlight Achievers Award 2026, plus coverage in afaqs, BW and mid-day." },
      { name: "Values", detail: "Precision over volume. Ownership of outcomes. Always one step ahead." },
    ],
    inputs: ["Approved founder bios", "Award logos and press links to feature", "Final verified numbers"],
    images: [
      { src: "/images/founders.jpg", alt: "Growify co-founders Rishab Mehra and Disha Bhatnagar" },
      { src: "/images/team.jpg", alt: "The Growify team outside the New Delhi office" },
    ],
  },
  {
    slug: "industries",
    name: "Industries",
    h1: "Made for brands where the details matter.",
    title: "Industries: Luxury Fashion, Couture & Jewellery",
    description: "Growify works with couture fashion, bridal, fine jewellery, home décor, wellness and lifestyle brands.",
    sections: [
      { name: "Couture and designer fashion", detail: "High-value products, international buyers, assisted selling." },
      { name: "Bridal", detail: "Long consideration cycles, WhatsApp-led sales, store appointments." },
      { name: "Fine jewellery", detail: "Trust, certification and high-AOV checkout." },
      { name: "Home décor, wellness and lifestyle", detail: "Repeat purchase and content-led discovery." },
    ],
    inputs: ["One case study for each vertical", "Vertical-specific numbers from account teams"],
  },
  {
    slug: "life-at-growify",
    name: "Life at Growify",
    h1: "Life at Growify.",
    title: "Life at Growify: Culture & Office",
    description: "Inside Growify's Chattarpur office in New Delhi: the teams, the culture and the people behind the work.",
    sections: [
      { name: "Teams", detail: "Strategy, development, marketing, creative, sales and client success." },
      { name: "Rituals", detail: "How the team plans, learns and celebrates." },
      { name: "People stories", detail: "Short profiles from each team." },
    ],
    inputs: ["Which team sits in each area of the tour", "Team names and leads", "2–3 people stories with consent", "Consent from people visible in the office video"],
    tour: {
      video: { mobile: "/tour/tour-540.mp4", desktop: "/tour/tour-720.mp4" },
      stops: [
        {
          title: "Reception",
          start: 0,
          text: "The front desk and the illuminated Growify logo: \"Your Growth Partner\". Every visit to our Chattarpur office in New Delhi starts here.",
          image: "/images/office-2.jpg",
          alt: "Growify office reception with the illuminated Growify logo",
        },
        {
          title: "Cabins and meeting rooms",
          start: 5,
          text: "Glass-walled cabins and meeting rooms line the main corridor, beside the open floor.",
          image: "/images/office-13.jpg",
          alt: "A corridor of glass-walled cabins at the Growify office",
        },
        {
          title: "The open floor",
          start: 18,
          text: "Long rows of shared desks, split by open shelving, run the length of the main floor.",
          image: "/images/office-26.jpg",
          alt: "Open-plan floor with rows of desks at the Growify office",
        },
        {
          title: "Conference room",
          start: 30,
          text: "A glass conference room off the main floor, for meetings.",
          image: "/images/office-31.jpg",
          alt: "A glass-walled conference room at the Growify office",
        },
        {
          title: "The team at work",
          start: 33,
          text: "Where the work happens every day: storefronts, campaigns and customer conversations for brands in India and abroad.",
          image: "/images/office-38.jpg",
          alt: "Growify team members working together at a shared desk",
        },
      ],
    },
  },
  {
    slug: "careers",
    name: "Careers",
    h1: "Do the best work of your career, for brands you admire.",
    title: "Careers",
    description: "Open roles at Growify Digital in New Delhi: Shopify development, digital marketing, email and push marketing, business development and video.",
    sections: [
      { name: "Why join", detail: "Work on India's leading designer brands with a team that owns outcomes." },
      { name: "Open roles", detail: "Shopify developer, senior brand manager, email and push specialist, business development associate, videographer." },
      { name: "Hiring process", detail: "The steps from application to offer, to be confirmed with HR." },
    ],
    inputs: ["Current open roles and descriptions", "Benefits", "Hiring contact"],
  },
  {
    slug: "insights",
    name: "Insights",
    h1: "Insights on luxury e-commerce.",
    title: "Insights: Luxury E-commerce, Shopify & Growth",
    description: "Guides, playbooks and news on luxury e-commerce, Shopify, performance marketing and AI from the Growify team.",
    sections: [
      { name: "Guides", detail: "One blog replacing the current three (news, growify-blogs, the-scoop)." },
      { name: "Comparisons", detail: "For example: Shopify vs Magento for luxury brands; virtual try-on options." },
      { name: "Press and awards", detail: "Coverage and recognition in one place." },
      { name: "Newsletter", detail: "A single, low-friction sign-up, not a popup." },
    ],
    inputs: ["Author bylines", "Editorial calendar owner", "Which existing posts to keep and redirect"],
  },
];

export const enquiryTopics = [
  ...services.map((s) => ({ value: s.slug, label: s.name })),
  ...products.filter((p) => p.live).map((p) => ({ value: p.slug, label: `${p.name} demo` })),
  { value: "not-sure", label: "Not sure yet" },
];

const lifeTour = blueprints.find((b) => b.slug === "life-at-growify")!.tour!;
export const officePhotos: Photo[] = [...lifeTour.stops].reverse().map((s) => ({ src: s.image, alt: s.alt }));

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const blueprintBySlug = (slug: string) => blueprints.find((b) => b.slug === slug);
