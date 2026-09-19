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
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
