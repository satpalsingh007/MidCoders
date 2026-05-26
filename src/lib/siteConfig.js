/**
 * Single source of truth for site-wide SEO defaults.
 * Update `url` when you move from the Render URL to a custom domain.
 */
const siteConfig = {
  name: "Midcoders",
  shortName: "Midcoders",

  // ⚠️ Update this to your actual production URL (no trailing slash).
  // Examples:
  //   "https://midcoders.com"          ← custom domain
  //   "https://midcoders.onrender.com" ← default Render URL
  url: "https://midcoders.onrender.com",

  // Default meta description shown when a page doesn't pass its own.
  description:
    "Midcoders is a CRM-first studio designing data-driven CRM ecosystems that connect marketing, sales, and support. Strategy, integrations, AI automation, and managed RevOps for SaaS, FinTech, Healthcare, and Education.",

  // Default tagline used after the page title, e.g. "Blog | Midcoders".
  tagline: "Next-Gen CRM Experiences Built for Growth",

  // Default Open Graph image (1200×630 recommended). Place the file in
  // /public so it's served from the site root.
  // TODO: add /public/og-image.png (1200×630). For now we fall back to the
  // favicon, which is fine but not ideal for social previews.
  ogImage: "/og-image.png",

  // Optional. Leave empty if you don't have a Twitter handle yet.
  twitterHandle: "",

  locale: "en_US",
};

export default siteConfig;
