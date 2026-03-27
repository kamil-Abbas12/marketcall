import { MetadataRoute } from "next";

/**
 * Next.js App Router sitemap.ts
 * Place this file at: app/sitemap.ts
 * It will be served at: https://hawksmediallc.com/sitemap.xml
 *
 * Add new routes to the `staticRoutes` array as your site grows.
 * For dynamic pages (e.g. blog posts), fetch them from your CMS/DB
 * inside this function and spread them into the returned array.
 */

const BASE_URL = "https://hawksmediallc.com";

// Static pages — update priority & changeFrequency to match your content cadence
const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: `${BASE_URL}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/industries`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/company`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/help-center`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/privacy-policy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ─── Dynamic routes example (e.g. blog posts from a CMS) ────────────────
  // Uncomment and adapt when you have dynamic content:
  //
  // const posts = await fetch("https://your-cms.io/api/posts").then(r => r.json());
  // const blogRoutes: MetadataRoute.Sitemap = posts.map((post: { slug: string; updatedAt: string }) => ({
  //   url: `${BASE_URL}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: "weekly",
  //   priority: 0.7,
  // }));
  //
  // return [...staticRoutes, ...blogRoutes];
  // ─────────────────────────────────────────────────────────────────────────

  return staticRoutes;
}