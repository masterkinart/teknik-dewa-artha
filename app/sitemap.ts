const siteUrl = process.env.SITE_URL || "https://www.example.com";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFreq: "weekly",
      priority: 0.8,
    },
  ];
}
