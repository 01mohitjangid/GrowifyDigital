import type { NextConfig } from "next";

const legacy: [string, string][] = [
  ["/pages/services", "/services"],
  ["/pages/services/web-development", "/services/shopify-development"],
  ["/pages/services/digital-marketing", "/services/performance-marketing"],
  ["/pages/:page(paid-ads|google-ads)", "/services/performance-marketing"],
  ["/pages/services/sky", "/services/sales-support"],
  ["/pages/services/:page(social-media|Shoot)", "/services/seo-social-media"],
  ["/pages/services/Suggest", "/services"],
  ["/pages/case-study", "/case-studies"],
  ["/blogs/case-studies/house-of-masaba", "/case-studies/house-of-masaba"],
  ["/blogs/case-studies/:slug*", "/case-studies"],
  ["/pages/:page(lookify|anina)", "/products/lookify"],
  ["/pages/:page(theme|timeless|contemporary|theme-document|theme-support)", "/products"],
  ["/pages/tech", "/partners"],
  ["/pages/:page(about|meet-the-founders|why-growify-digital)", "/about"],
  ["/pages/:page(contact|enquire-now|referral-program)", "/contact"],
  [
    "/pages/:page(careers|sr-brand-manager-digital-marketing|email-push-marketing-specialist|associate-business-development|shopify-website-developer|videographer-video-editor)",
    "/careers",
  ],
  ["/pages/podcasts", "/insights"],
  ["/blogs/:blog(news|growify-blogs|the-scoop)/:post*", "/insights"],
];

const nextConfig: NextConfig = {
  redirects: async () => legacy.map(([source, destination]) => ({ source, destination, permanent: true })),
  cacheComponents: true,
  partialPrefetching: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
