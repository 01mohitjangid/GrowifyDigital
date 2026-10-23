import type { MetadataRoute } from "next";
import { SITE_URL, isLive } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  if (!isLive) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: `${SITE_URL}/sitemap.xml` };
}
