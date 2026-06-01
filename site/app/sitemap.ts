import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/data";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://ruwaa.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "portfolio", "companies", "individuals"].map((p) => ({
    url: p ? `${SITE}/${p}` : SITE,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p ? 0.7 : 1,
  }));
  const projectPages = PROJECTS.map((p) => ({
    url: `${SITE}/portfolio/${p.id}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...staticPages, ...projectPages];
}
