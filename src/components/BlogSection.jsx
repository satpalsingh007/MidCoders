import { Link } from "react-router-dom";
import powerOfAiImg from "../assets/powerofai.webp";
import crmKeepingImg from "../assets/crmkeeping.webp";
import sugarCrmImg from "../assets/sugarcrm.webp";

const posts = [
  {
    title: "Unlock the Power of AI: Transforming Customer Relationships",
    excerpt: "How AI upgrades CRM analytics, automation, personalization, and real-time support.",
    category: "AI & Automation",
    date: "Nov 25, 2024",
    readTime: "9 min read",
    href: "/blog/blog-ai",
    image: powerOfAiImg,
  },
  {
    title: "Is Your CRM Keeping Up?",
    excerpt: "Signs your CRM is outdated and a practical framework to reevaluate and modernize.",
    category: "CRM Strategy",
    date: "Nov 26, 2024",
    readTime: "7 min read",
    href: "/blog/blog-crm-keeping-up",
    image: crmKeepingImg,
  },
  {
    title: "Is SugarCRM Any Good?",
    excerpt: "A comprehensive review: customization, AI insights, scalability, and trade-offs.",
    category: "CRM Review",
    date: "Nov 24, 2024",
    readTime: "6 min read",
    href: "/blog/blog-sugarcrm-review",
    image: sugarCrmImg,
  },
];

const BlogSection = () => {
  return (
    <section className="bl-section">
      <div className="bl-wrapper">

        {/* HEADER */}
        <div className="bl-header">
          <span className="bl-tag">Latest Insights</span>
          <h2 className="bl-title">Our Blog</h2>
          <p className="bl-desc">
            Practical guidance on CRM strategy, automation, and platform choices.
          </p>
        </div>

        {/* GRID */}
        <div className="bl-grid">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className="bl-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* IMAGE */}
              <Link to={post.href} className="bl-image-wrap">
                <img
                  src={post.image}
                  alt={post.title}
                  className="bl-image"
                  loading="lazy"
                  decoding="async"
                />
                <span className="bl-category">{post.category}</span>
              </Link>

              {/* CONTENT */}
              <div className="bl-content">
                <div className="bl-meta">
                  <span className="bl-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8"  y1="2" x2="8"  y2="6" />
                      <line x1="3"  y1="10" x2="21" y2="10" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="bl-meta-dot" />
                  <span className="bl-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>

                <h3 className="bl-post-title">{post.title}</h3>
                <p className="bl-excerpt">{post.excerpt}</p>

                <Link to={post.href} className="bl-link">
                  Read More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;