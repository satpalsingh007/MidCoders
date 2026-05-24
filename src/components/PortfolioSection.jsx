const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Modern shopping experience with real-time inventory",
    tag: "Web Development",
    accent: "#013d96",
    pattern: "ecom",
  },
  {
    title: "Healthcare App",
    desc: "Patient management system with telemedicine features",
    tag: "Mobile",
    accent: "#0158d4",
    pattern: "health",
  },
  {
    title: "FinTech Dashboard",
    desc: "Real-time analytics and financial insights",
    tag: "Dashboard",
    accent: "#0047b3",
    pattern: "fin",
  },
  {
    title: "Education Platform",
    desc: "Interactive learning management system",
    tag: "Full-stack",
    accent: "#0369a1",
    pattern: "edu",
  },
];

/* Unique SVG pattern per card so each feels distinct */
const patterns = {
  ecom: (
    <svg className="pf-pattern" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="160" cy="40"  r="60" fill="rgba(255,255,255,0.06)" />
      <circle cx="40"  cy="160" r="80" fill="rgba(255,255,255,0.04)" />
      <rect x="60" y="60" width="80" height="80" rx="8" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="80" y="80" width="40" height="40" rx="4" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </svg>
  ),
  health: (
    <svg className="pf-pattern" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <circle cx="100" cy="100" r="50" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
    </svg>
  ),
  fin: (
    <svg className="pf-pattern" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="20,160 60,100 100,130 140,60 180,80" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" />
      <polyline points="20,180 60,130 100,150 140,90 180,110" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
      <circle cx="60"  cy="100" r="4" fill="rgba(255,255,255,0.15)" />
      <circle cx="140" cy="60"  r="4" fill="rgba(255,255,255,0.15)" />
    </svg>
  ),
  edu: (
    <svg className="pf-pattern" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30"  y="30"  width="60" height="60" rx="6" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <rect x="110" y="30"  width="60" height="60" rx="6" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <rect x="30"  y="110" width="60" height="60" rx="6" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <rect x="110" y="110" width="60" height="60" rx="6" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    </svg>
  ),
};

const PortfolioSection = () => {
  return (
    <section className="pf-section" id="portfolio-section">
      <div className="pf-wrapper">

        {/* HEADER */}
        <div className="pf-header">
          <span className="pf-tag">Our Work</span>
          <h2 className="pf-title">Featured Projects</h2>
          <p className="pf-desc">Showcasing our expertise through successful projects</p>
        </div>

        {/* GRID */}
        <div className="pf-grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="pf-item"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* coloured bg */}
              <div className="pf-visual" style={{ background: p.accent }}>
                {patterns[p.pattern]}

                {/* top tag */}
                <span className="pf-item-tag">{p.tag}</span>
              </div>

              {/* info row — always visible */}
              <div className="pf-info">
                <div>
                  <h3 className="pf-item-title">{p.title}</h3>
                  <p className="pf-item-desc">{p.desc}</p>
                </div>
                <a href="#" className="pf-link" aria-label={`View ${p.title}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;