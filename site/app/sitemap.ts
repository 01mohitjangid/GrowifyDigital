import type { MetadataRoute } from "next";
import { SITE_URL, caseStudies, products, services } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    ...services.map((s) => `/services/${s.slug}`),
    "/case-studies",
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
    "/products",
    ...products.filter((p) => p.live).map((p) => `/products/${p.slug}`),
    "/partners",
    "/contact",
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
