import { siteUrl } from "./layout";
import { services } from "@/data/site";
import { contestCategories } from "@/data/contests";

export default function sitemap() {
  const now = new Date();
  const paths = ["/", "/contests", ...services.map((s) => `/services/${s.slug}`), ...contestCategories.map((c) => `/contests/${c.slug}`)];
  return paths.map((p) => ({ url: `${siteUrl}${p}`, lastModified: now, changeFrequency: "weekly", priority: p === "/" ? 1 : 0.7 }));
}
