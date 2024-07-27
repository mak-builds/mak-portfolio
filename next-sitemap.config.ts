import { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://mak-portfolio.vercel.app/",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 1.0,
  sitemapSize: 5000,
  exclude: [
    // Add any paths you want to exclude from the sitemap
  ],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [
      // Add any additional sitemaps here
    ],
  },
};

export default config;
