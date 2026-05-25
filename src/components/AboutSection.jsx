const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+",  label: "Happy Clients" },
  { value: "5+",   label: "Years Experience" },
];

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ZapIcon = () => (
  <svg {...iconProps} aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const LockIcon = () => (
  <svg {...iconProps} aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const UsersIcon = () => (
  <svg {...iconProps} aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SendIcon = () => (
  <svg {...iconProps} aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const GlobeIcon = () => (
  <svg {...iconProps} aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const highlights = [
  { icon: <ZapIcon />,   text: "Fast delivery without cutting corners" },
  { icon: <LockIcon />,  text: "Security-first development approach" },
  { icon: <UsersIcon />, text: "Long-term partnerships, not one-off projects" },
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
            <span className="abt-badge-icon">
              <SendIcon />
            </span>
            <div>
              <p className="abt-badge-title">On-time Delivery</p>
              <p className="abt-badge-sub">97% of all projects</p>
            </div>
          </div>

          {/* floating badge — bottom left */}
          <div className="abt-badge abt-badge--bl">
            <span className="abt-badge-icon">
              <GlobeIcon />
            </span>
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