import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/data";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/portfolio", "/companies", "/individuals", "/brief"];
  const staticPages = routes.map((r) => ({
    url: `${SITE.url}${r}`,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
  const projectPages = PROJECTS.map((p) => ({
    url: `${SITE.url}/portfolio/${p.id}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...staticPages, ...projectPages];
}
