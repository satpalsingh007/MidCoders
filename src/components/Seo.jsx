import siteConfig from "../lib/siteConfig";

/**
 * Per-page SEO/meta tags.
 *
 * Uses React 19's native metadata hoisting — any <title>, <meta>, <link>, or
 * <script> rendered here is automatically lifted into <head> by React. No
 * extra library (react-helmet) needed.
 *
 * Usage:
 *   <Seo
 *     title="CRM Solutions"
 *     description="..."
 *     path="/solutions"
 *   />
 *
 *   <Seo
 *     title="Unlock the Power of AI"
 *     description="..."
 *     path="/blog/blog-ai"
 *     image={powerOfAiImg}
 *     type="article"
 *     publishedTime="2024-11-25"
 *   />
 */
const Seo = ({
  title,
  description = siteConfig.description,
  path = "",
  image = siteConfig.ogImage,
  type = "website",
  publishedTime,
  modifiedTime,
  author = siteConfig.name,
  jsonLd,
}) => {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.tagline}`;
  const url = `${siteConfig.url}${path}`;
  const fullImage = image && image.startsWith("http")
    ? image
    : `${siteConfig.url}${image}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn, Slack, WhatsApp, iMessage previews) */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={siteConfig.locale} />
      {fullImage && <meta property="og:image" content={fullImage} />}
      {fullImage && <meta property="og:image:alt" content={title || siteConfig.name} />}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {fullImage && <meta name="twitter:image" content={fullImage} />}
      {siteConfig.twitterHandle && (
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
      )}

      {/* Article metadata (for blog posts) */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Structured data (rich results in Google search) */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </>
  );
};

export default Seo;
