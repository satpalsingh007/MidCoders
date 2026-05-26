import { Link } from "react-router-dom";
import Seo from "./Seo";
import siteConfig from "../lib/siteConfig";
import powerOfAiImg from "../assets/powerofai.webp";
import crmKeepingImg from "../assets/crmkeeping.webp";
import sugarCrmImg from "../assets/sugarcrm.webp";

/**
 * Central registry for the long-form blog posts.
 * Each page wrapper (BlogAi, BlogCRMKeepingUp, BlogSugarCRMReview) refers to its
 * post by `slug`; the layout uses this registry to render the header, footer
 * CTA, and related-posts cards consistently.
 */
export const BLOG_POSTS = [
  {
    slug: "ai",
    href: "/blog/blog-ai",
    category: "AI & Automation",
    title: "Unlock the Power of AI: Transforming Customer Relationships",
    cardTitle: "Unlock the Power of AI",
    cardExcerpt: "How AI changes CRM analytics, automation, and support.",
    breadcrumb: "Unlock the Power of AI",
    date: "November 25, 2024",
    publishedAt: "2024-11-25",
    readTime: "9 min read",
    image: powerOfAiImg,
    imageAlt: "Unlock the Power of AI blog thumbnail",
    cta: {
      heading: "Want help building AI-ready CRM workflows?",
      body: "We design CRM strategy, integrations, automation, and enablement so AI improvements stick.",
      label: "Talk to us",
    },
  },
  {
    slug: "crm-keeping-up",
    href: "/blog/blog-crm-keeping-up",
    category: "CRM Strategy",
    title: "Is Your CRM Keeping Up? Why It's Time to Reevaluate Your CRM Strategy",
    cardTitle: "Is Your CRM Keeping Up?",
    cardExcerpt: "A checklist to evaluate your CRM strategy and modernize.",
    breadcrumb: "Is Your CRM Keeping Up?",
    date: "November 26, 2024",
    publishedAt: "2024-11-26",
    readTime: "7 min read",
    image: crmKeepingImg,
    imageAlt: "Is Your CRM Keeping Up blog thumbnail",
    cta: {
      heading: "Want an honest CRM assessment?",
      body: "We can map your current stack, identify bottlenecks, and design a modernization roadmap.",
      label: "Book a workshop",
    },
  },
  {
    slug: "sugarcrm-review",
    href: "/blog/blog-sugarcrm-review",
    category: "CRM Review",
    title: "Is SugarCRM Any Good? A Comprehensive Review",
    cardTitle: "Is SugarCRM Any Good?",
    cardExcerpt: "A comprehensive review of SugarCRM's fit and trade-offs.",
    breadcrumb: "Is SugarCRM Any Good?",
    date: "November 24, 2024",
    publishedAt: "2024-11-24",
    readTime: "6 min read",
    image: sugarCrmImg,
    imageAlt: "Is SugarCRM Any Good blog thumbnail",
    cta: {
      heading: "Choosing between SugarCRM vs alternatives?",
      body: "We help teams compare platforms and implement the one that fits their GTM motion.",
      label: "Get advice",
    },
  },
];

/**
 * Small reusable quote block used inside long-form articles.
 *   <QuoteCard author="Midcoder">Some quote text...</QuoteCard>
 */
export const QuoteCard = ({ children, author }) => (
  <blockquote className="bpd-quote">
    <p className="bpd-quote-text">{children}</p>
    {author && <cite className="bpd-quote-author">— {author}</cite>}
  </blockquote>
);

const BlogPost = ({ slug, children }) => {
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bpd-page">
        <div className="container">
          <p>Post not found.</p>
        </div>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug);

  const absoluteImage = `${siteConfig.url}${post.image}`;
  const absoluteUrl = `${siteConfig.url}${post.href}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.cardExcerpt,
    image: [absoluteImage],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/android-chrome-512x512.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl,
    },
    articleSection: post.category,
  };

  return (
    <div className="bpd-page">
      <Seo
        title={post.cardTitle}
        description={post.cardExcerpt}
        path={post.href}
        image={post.image}
        type="article"
        publishedTime={post.publishedAt}
        jsonLd={articleJsonLd}
      />

      <article className="bpd-article">
        <div className="container">
          <div className="bpd-shell">

            <nav className="bpd-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link> /{" "}
              <Link to="/blog">Blog</Link> /{" "}
              <span>{post.breadcrumb}</span>
            </nav>

            <header className="bpd-header">
              <div className="bpd-image-wrap">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="bpd-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="bpd-category">{post.category}</span>
              <h1 className="bpd-title">{post.title}</h1>
              <div className="bpd-meta">
                <span className="bpd-date">{post.date}</span>
                <span className="bpd-meta-sep" aria-hidden="true">·</span>
                <span className="bpd-read-time">{post.readTime}</span>
              </div>
            </header>

            <div className="bpd-body">
              {children}
            </div>

            <section className="bpd-cta">
              <div className="bpd-cta-content">
                <h3 className="bpd-cta-heading">{post.cta.heading}</h3>
                <p className="bpd-cta-body">{post.cta.body}</p>
              </div>
              <a href="/#contact-section" className="btn btn-primary">
                {post.cta.label}
              </a>
            </section>

          </div>
        </div>
      </article>

      <section className="bpd-related-section">
        <div className="container">
          <h2 className="bpd-related-heading">Keep reading</h2>
          <div className="bpd-related-grid">
            {relatedPosts.map((related) => (
              <article key={related.slug} className="bpd-related-card">
                <div className="bpd-related-image-wrap">
                  <img
                    src={related.image}
                    alt={related.imageAlt}
                    className="bpd-related-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="bpd-related-category">{related.category}</span>
                </div>
                <div className="bpd-related-body">
                  <h3 className="bpd-related-title">{related.cardTitle}</h3>
                  <p className="bpd-related-excerpt">{related.cardExcerpt}</p>
                  <Link to={related.href} className="bpd-related-link">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogPost;
