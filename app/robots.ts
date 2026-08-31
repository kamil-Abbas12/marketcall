import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/dashboard/",
          "/private/",
        ],
      },
      // Block AI training crawlers only
      {
        userAgent: [
          "GPTBot",
          "CCBot",
          "anthropic-ai",
          "Omgilibot",
          "Google-Extended",
        ],
        disallow: "/",
      },
      // Allow AI search/citation and live-browsing bots
      {
        userAgent: ["ChatGPT-User", "Claude-Web"],
        allow: "/",
      },
    ],
    sitemap: "https://hawksmediallc.com/sitemap.xml",
    host: "https://hawksmediallc.com",
  };
}