import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { categories } from "@/content/categories";

const baseUrl = "https://auksaf.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/rooh`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/order`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/review`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/return-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/articles/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/articles/ur`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/categories/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/categories/ur`,
      lastModified: new Date(),
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.flatMap(
    (article) => [
      {
        url: `${baseUrl}/articles/en/${article.slug}`,
        lastModified: `${article.publishedDate}-01`,
      },
      {
        url: `${baseUrl}/articles/ur/${article.slug}`,
        lastModified: `${article.publishedDate}-01`,
      },
    ]
  );

  const categoryRoutes: MetadataRoute.Sitemap = categories.flatMap(
    (category) => [
      {
        url: `${baseUrl}/categories/en/${category.slug}`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/categories/ur/${category.slug}`,
        lastModified: new Date(),
      },
    ]
  );

  return [...publicRoutes, ...articleRoutes, ...categoryRoutes];
}
