const services = [
  {
    title: "Web Development",
    desc: "Custom web applications built with modern frameworks and best practices. Responsive, fast, and scalable solutions.",
    features: ["React & Next.js", "Vue.js & Nuxt", "Full-stack Solutions"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Mobile Development",
    desc: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    features: ["React Native", "Flutter", "Native iOS/Android"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure and DevOps solutions to ensure your applications perform at their best.",
    features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces designed with user experience at the forefront. From concept to implementation.",
    features: ["User Research", "Prototyping", "Design Systems"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Consulting",
    desc: "Strategic technology consulting to help you make informed decisions and optimize your digital infrastructure.",
    features: ["Tech Strategy", "Architecture Review", "Performance Optimization"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing maintenance, updates, and support to keep your applications running smoothly and securely.",
    features: ["24/7 Monitoring", "Security Updates", "Performance Tuning"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section className="svc-section">
      <div className="svc-wrapper">

        {/* HEADER */}
        <div className="svc-header">
          <span className="svc-tag">What We Do</span>
          <h2 className="svc-title">Our Services</h2>
          <p className="svc-desc">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* GRID */}
        <div className="svc-grid">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="svc-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="svc-icon">{svc.icon}</div>
              <h3 className="svc-card-title">{svc.title}</h3>
              <p className="svc-card-desc">{svc.desc}</p>
              <ul className="svc-features">
                {svc.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;