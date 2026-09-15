import type { MetadataRoute } from "next";

const baseUrl = "https://auksaf.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/test",
        "/portfolio/nursery-demo",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
