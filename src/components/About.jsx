import { Link } from "react-router-dom";

const coreCapabilities = [
  {
    title: "Core Practices",
    items: [
      "CRM & RevOps Strategy",
      "Data Architecture & Integrations",
      "Product Design & Engineering",
      "Change Management & Enablement",
    ],
  },
  {
    title: "Operating Principles",
    items: [
      "Outcomes over outputs",
      "Document everything",
      "Security from day zero",
      "Adoption equals success",
    ],
  },
];

const stats = [
  { number: "120+", label: "CRM Programs" },
  { number: "9", label: "Industries Served" },
  { number: "4.8/5", label: "CSAT Across Engagements" },
  { number: "24/7", label: "Global Support" },
];

const values = [
  {
    title: "Research First",
    text: "Workshops, ride-alongs, and data audits ensure we are solving the right problem before we write code.",
  },
  {
    title: "Build in Public",
    text: "Live demos every week, async recordings, and transparent roadmaps keep stakeholders confident.",
  },
  {
    title: "Adoption Obsessed",
    text: "Enablement kits, in-app guidance, and feedback loops so teams truly embrace the platform.",
  },
  {
    title: "Security Always",
    text: "Zero-trust defaults, SOC2-ready controls, and compliance documentation at every stage.",
  },
];

const podRoles = [
  "RevOps Architects",
  "Product Designers",
  "Full-stack Engineers",
  "Data Engineers",
  "QA Automation",
];

const podCadence = [
  "Weekly roadmap sync",
  "Daily async updates",
  "Monthly value reviews",
  "Quarterly North Star reset",
];

const About = () => {
  return (
    <div className="abp-page">

      {/* ── HERO SECTION ── */}
      <section className="abp-hero">
        <div className="container">
          <div className="abp-breadcrumb">
            <Link to="/">Home</Link> / <span>About</span>
          </div>
          <h1 className="abp-hero-title">
            People-first CRM studio for modern revenue teams.
          </h1>
          <p className="abp-hero-desc">
            We exist to orchestrate data, design, and technology into CRM experiences that feel effortless—for your teams and your customers.
          </p>
          <div className="abp-hero-buttons">
            <Link to="/services" className="btn btn-primary">View Services</Link>
            <a href="/#contact-section" className="btn btn-secondary">Meet the Team</a>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="abp-section">
        <div className="container abp-split-grid">
          <div>
            <span className="abp-section-tag">Our Story</span>
            <h2 className="abp-section-title">
              Born inside complex CRM implementations.
            </h2>
            <p className="abp-section-text">
              Midcoder started as a strike team fixing under-performing CRM rollouts. Today we are a full-stack studio shipping data-driven experiences that power revenue, retention, and support.
            </p>
            <p className="abp-section-text">
              We blend product thinking with RevOps discipline. Every build begins with workshops, journey maps, and a clear measurement framework so we can tie every sprint to outcomes.
            </p>
          </div>

          <div className="abp-panel abp-panel-split">
            {coreCapabilities.map((group) => (
              <div key={group.title} className="abp-panel-block">
                <h3 className="abp-panel-title">{group.title}</h3>
                <ul className="abp-panel-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="abp-section abp-bg-surface">
        <div className="container">
          <div className="abp-stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="abp-stat-item">
                <div className="abp-stat-number">{stat.number}</div>
                <div className="abp-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="abp-section">
        <div className="container">
          <div className="abp-section-header">
            <span className="abp-section-tag">Values</span>
            <h2 className="abp-section-title">How we operate.</h2>
            <p className="abp-section-desc">
              Consistent rituals keep distributed teams aligned, fast, and transparent.
            </p>
          </div>

          <div className="abp-value-grid">
            {values.map((value) => (
              <div key={value.title} className="abp-value-card">
                <h3 className="abp-value-title">{value.title}</h3>
                <p className="abp-value-text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP PODS ── */}
      <section className="abp-section abp-bg-surface">
        <div className="container abp-split-grid">
          <div>
            <span className="abp-section-tag">Leadership Pods</span>
            <h2 className="abp-section-title">
              Cross-functional squads tuned for velocity.
            </h2>
            <p className="abp-section-text">
              Each engagement includes a RevOps strategist, solution architect, UX/product lead, and engineering pod. We embed with your teams and ship value every sprint.
            </p>
            <ul className="abp-pill-list">
              {podRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>

          <div className="abp-panel abp-panel-highlight">
            <h3 className="abp-panel-title">Pod Cadence</h3>
            <ul className="abp-panel-list">
              {podCadence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href="/#contact-section"
              className="btn btn-primary"
              style={{ marginTop: "1.5rem", display: "inline-block" }}
            >
              Book a chemistry call
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
