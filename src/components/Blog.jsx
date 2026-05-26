import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";
import powerOfAiImg from "../assets/powerofai.webp";
import crmKeepingImg from "../assets/crmkeeping.webp";
import sugarCrmImg from "../assets/sugarcrm.webp";

const featuredStats = [
  { number: "6 signals", label: "That your CRM is outdated" },
  { number: "4 steps", label: "To start modernizing" },
  { number: "1 goal", label: "Adoption + outcomes" },
];

const featuredFacts = [
  "Stack: Salesforce · HubSpot · Notion",
  "Team: RevOps · Product · CS",
];

const categories = [
  "All",
  "CRM Strategy",
  "RevOps",
  "Integrations",
  "Change Management",
  "Enablement",
];

const posts = [
  {
    category: "AI & Automation",
    date: "November 25, 2024",
    readTime: "9 min read",
    image: powerOfAiImg,
    imageAlt: "Unlock the Power of AI blog thumbnail",
    title: "Unlock the Power of AI: Transforming Customer Relationships",
    excerpt:
      "How AI upgrades CRM analytics, automation, personalization, and real-time support.",
    href: "/blog/blog-ai",
    featured: true,
  },
  {
    category: "CRM Strategy",
    date: "November 26, 2024",
    readTime: "7 min read",
    image: crmKeepingImg,
    imageAlt: "Is Your CRM Keeping Up blog thumbnail",
    title: "Is Your CRM Keeping Up?",
    excerpt:
      "Signs your CRM is outdated and a practical framework to reevaluate and modernize.",
    href: "/blog/blog-crm-keeping-up",
  },
  {
    category: "CRM Review",
    date: "November 24, 2024",
    readTime: "6 min read",
    image: sugarCrmImg,
    imageAlt: "Is SugarCRM Any Good blog thumbnail",
    title: "Is SugarCRM Any Good?",
    excerpt:
      "A comprehensive review: customization, AI insights, scalability, and trade-offs.",
    href: "/blog/blog-sugarcrm-review",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="blp-page">
      <Seo
        title="Blog | Field Notes from Hundreds of CRM Launches"
        description="Curated guidance on CRM strategy, RevOps, automation, integrations, change management, and building lovable CRM experiences. Playbooks and reviews from the Midcoders team."
        path="/blog"
      />

      {/* ── HERO SECTION ── */}
      <section className="blp-hero">
        <div className="container">
          <div className="blp-breadcrumb">
            <Link to="/">Home</Link> / <span>Blog</span>
          </div>
          <h1 className="blp-hero-title">
            Field notes from hundreds of CRM launches.
          </h1>
          <p className="blp-hero-desc">
            Curated guidance on RevOps, automation, change management, and building lovable CRM experiences.
          </p>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="blp-section">
        <div className="container blp-split-grid">
          <div>
            <span className="blp-section-tag">Featured</span>
            <h2 className="blp-section-title">
              Is your CRM keeping up?
            </h2>
            <p className="blp-section-desc">
              Key signs your CRM is falling behind, what it costs to wait, and how to future-proof your strategy with better data, automation, and adoption.
            </p>
            <ul className="blp-pill-list">
              {featuredFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <div className="blp-button-row">
              <Link to="/blog/blog-crm-keeping-up" className="btn btn-primary">
                Read the guide
              </Link>
              <a href="/#contact-section" className="btn btn-secondary">
                Book a workshop
              </a>
            </div>
          </div>

          <div className="blp-panel blp-panel-highlight">
            <h3 className="blp-panel-title">Inside the guide</h3>
            <ul className="blp-panel-list">
              {featuredStats.map((stat) => (
                <li key={stat.number}>
                  <span className="blp-stat-number">{stat.number}</span>
                  <span className="blp-stat-label">{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── LATEST POSTS ── */}
      <section id="latest" className="blp-section blp-bg-surface">
        <div className="container">
          <div className="blp-section-header">
            <span className="blp-section-tag">Latest</span>
            <h2 className="blp-section-title">Field notes & playbooks.</h2>
            <p className="blp-section-desc">
              Pick a topic to filter the feed.
            </p>
          </div>

          <div className="blp-categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`blp-category-chip${activeCategory === category ? " is-active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="blp-empty">
              <p>
                No posts in <strong>{activeCategory}</strong> yet — check back soon.
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setActiveCategory("All")}
              >
                View all posts
              </button>
            </div>
          ) : (
            <div className="blp-card-grid">
              {filteredPosts.map((post) => (
                <article
                  key={post.title}
                  className={`blp-card${post.featured ? " is-featured" : ""}`}
                >
                  <div className="blp-card-image-wrap">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="blp-card-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="blp-card-body">
                    <div className="blp-card-label">{post.category}</div>
                    <h3 className="blp-card-title">{post.title}</h3>
                    <p className="blp-card-text">{post.excerpt}</p>
                    <div className="blp-card-meta">
                      {post.date} · {post.readTime}
                    </div>
                    <Link to={post.href} className="blp-card-link">
                      Read article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Blog;
