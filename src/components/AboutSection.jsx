const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+",  label: "Happy Clients" },
  { value: "5+",   label: "Years Experience" },
];

const highlights = [
  { icon: "⚡", text: "Fast delivery without cutting corners" },
  { icon: "🔒", text: "Security-first development approach" },
  { icon: "🤝", text: "Long-term partnerships, not one-off projects" },
];

const AboutSection = () => {
  return (
    <section className="abt-section">
      <div className="abt-wrapper">

        {/* ── LEFT ── */}
        <div className="abt-left">
          <span className="abt-tag">Who We Are</span>

          <h2 className="abt-title">
            Innovation Meets<br />
            <span className="abt-accent">Expertise</span>
          </h2>

          <p className="abt-body">
            At Midcoders, we're passionate about creating digital solutions that
            make a real difference. With years of experience in software
            development, we've helped businesses of all sizes transform their
            ideas into reality.
          </p>

          <p className="abt-body">
            Our team blends technical depth with creative thinking — delivering
            solutions that are functional, beautiful, and built to last. We
            believe in partnerships, not projects.
          </p>

          {/* HIGHLIGHTS */}
          <ul className="abt-highlights">
            {highlights.map((h) => (
              <li key={h.text}>
                <span className="abt-highlight-icon">{h.icon}</span>
                <span>{h.text}</span>
              </li>
            ))}
          </ul>

          {/* STATS */}
          <div className="abt-stats">
            {stats.map((s) => (
              <div key={s.label} className="abt-stat">
                <span className="abt-stat-value">{s.value}</span>
                <span className="abt-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — visual panel ── */}
        <div className="abt-right">

          {/* main card */}
          <div className="abt-card abt-card--main">
            <div className="abt-card-header">
              <span className="abt-card-dot" />
              <span className="abt-card-dot" />
              <span className="abt-card-dot" />
            </div>
            <p className="abt-card-label">Client Satisfaction</p>
            <p className="abt-card-big">98%</p>
            <div className="abt-bar-track">
              <div className="abt-bar-fill" style={{ width: "98%" }} />
            </div>
            <p className="abt-card-sub">Based on post-project surveys</p>
          </div>

          {/* floating badge — top right */}
          <div className="abt-badge abt-badge--tr">
            <span className="abt-badge-icon">🚀</span>
            <div>
              <p className="abt-badge-title">On-time Delivery</p>
              <p className="abt-badge-sub">97% of all projects</p>
            </div>
          </div>

          {/* floating badge — bottom left */}
          <div className="abt-badge abt-badge--bl">
            <span className="abt-badge-icon">🌍</span>
            <div>
              <p className="abt-badge-title">Global Clients</p>
              <p className="abt-badge-sub">12+ countries served</p>
            </div>
          </div>

          {/* decorative ring */}
          <div className="abt-ring" aria-hidden="true" />

        </div>
      </div>
    </section>
  );
};

export default AboutSection;