import type { MetadataRoute } from "next";

import { products, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: MetadataRoute.Sitemap = ["/", "/productos", "/nosotros", "/contacto"].map(
    (route) => ({
      url: `${siteConfig.siteUrl}${route}`,
      lastModified,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : 0.8,
    }),
  );

  const productRoutes = products.map((product) => ({
    url: `${siteConfig.siteUrl}/productos/${product.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...productRoutes];
}