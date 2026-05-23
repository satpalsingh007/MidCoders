import { Link } from "react-router-dom";


const metrics = [
  { value: "120+", label: "CRM Launches" },
  { value: "45%",  label: "Avg. Faster Sales Cycle" },
  { value: "3.2x", label: "Pipeline Visibility" },
];

const cards = [
  {
    title: "Industry Accelerators",
    desc: "Pre-built blueprints for SaaS, Healthcare, FinTech, and Education.",
    points: ["Lifecycle automation", "Forecast dashboards", "Customer health scoring"],
    highlight: false,
  },
  {
    title: "Integration Hub",
    desc: "Lightning-fast connectors for product, billing, support, analytics, and marketing.",
    points: ["API orchestration", "Data hygiene & sync", "Security-first approach"],
    highlight: false,
  },
  {
    title: "RevOps Command Center",
    desc: "One-click visibility into revenue KPIs across CRM, finance, and product.",
    points: ["Custom dashboards", "Revenue attribution", "Executive-ready reporting"],
    highlight: true,
  },
];

const CrmSection = () => {
  return (
    <section className="crm-section">

      {/* subtle grid texture */}
      <div className="crm-grid-bg" aria-hidden="true" />

      <div className="crm-wrapper">

        {/* ── LEFT CONTENT ── */}
        <div className="crm-left">

          <span className="crm-tag">CRM Specialists</span>

          <h2 className="crm-title">
            360° CRM Strategy,<br />
            Delivery &amp; <span className="crm-accent">Optimization</span>
          </h2>

          <p className="crm-desc">
            From architecture to adoption, Midcoders designs CRM ecosystems that
            connect marketing, sales, and support into one seamless revenue engine.
          </p>

          <ul className="crm-points">
            <li>
              <span className="crm-point-dot" />
              <div>
                <strong>Platform Agnostic</strong>
                <span>Salesforce, HubSpot, Zoho, Dynamics 365, custom builds</span>
              </div>
            </li>
            <li>
              <span className="crm-point-dot" />
              <div>
                <strong>Data-Driven</strong>
                <span>Customer 360, pipeline health, predictive insights with AI</span>
              </div>
            </li>
            <li>
              <span className="crm-point-dot" />
              <div>
                <strong>Growth Ready</strong>
                <span>Automation, playbooks, integrations, enablement, and governance</span>
              </div>
            </li>
          </ul>

          <div className="crm-cta">
            <Link to="/solutions" className="btn btn-primary">Explore CRM Solutions</Link>
            <Link to="/blog"      className="btn btn-secondary">See CRM Playbook</Link>
          </div>

          <div className="crm-metrics">
            {metrics.map((m) => (
              <div key={m.label} className="crm-metric">
                <span className="crm-metric-value">{m.value}</span>
                <p className="crm-metric-label">{m.label}</p>
              </div>
            ))}
          </div>

        </div>

        {/* ── RIGHT CARDS ── */}
        <div className="crm-right">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`crm-card ${card.highlight ? "crm-card--highlight" : ""}`}
            >
              <h3 className="crm-card-title">{card.title}</h3>
              <p className="crm-card-desc">{card.desc}</p>
              <ul className="crm-card-list">
                {card.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CrmSection;