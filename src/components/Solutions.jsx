import { Link } from "react-router-dom";
import Seo from "./Seo";

const Solutions = () => {
  return (
    <div className="sol-page">
      <Seo
        title="CRM Solutions & RevOps Programs"
        description="End-to-end CRM programs that accelerate revenue. Strategy, design, build, and managed services for Salesforce, HubSpot, Dynamics 365, Zoho, Freshworks, and custom CRMs."
        path="/solutions"
      />

      {/* ── HERO SECTION ── */}
      <section className="sol-hero">
        
        <div className="container">
          <div className="sol-breadcrumb">
            <Link to="/">Home</Link> / <span>Solutions</span>
          </div>
          <h1 className="sol-hero-title">End-to-end CRM programs that accelerate revenue.</h1>
          <p className="sol-hero-desc">
            Strategy, design, build, and managed services—customized for the platforms you already trust.
          </p>
          <div className="sol-hero-buttons">
            <a href="#crm-packages" className="btn btn-primary">View CRM Packages</a>
            <Link to="/contact" className="btn btn-secondary">Schedule Workshop</Link>
          </div>
        </div>
      </section>

      {/* ── CRM PACKAGES ── */}
      <section id="crm-packages" className="sol-section">
        <div className="container">
          <div className="sol-section-header">
            <span className="sol-section-tag">CRM Programs</span>
            <h2 className="sol-section-title">Pick the format that matches your momentum.</h2>
            <p className="sol-section-desc">Transparent, outcome-led engagements with dedicated pods.</p>
          </div>
          
          <div className="sol-package-grid">
            {/* Launch Card */}
            <div className="sol-package-card">
              <div className="sol-package-label">Launch</div>
              <h3 className="sol-package-title">Foundation Sprint</h3>
              <p className="sol-package-text">Perfect for teams standing up their first enterprise-grade CRM.</p>
              <ul className="sol-package-list">
                <li>Discovery & blueprint</li>
                <li>Data model + integrations</li>
                <li>Pipeline & workflow build</li>
                <li>Enablement toolkit</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">Request scope</Link>
            </div>

            {/* Scale Card (Highlight) */}
            <div className="sol-package-card highlight">
              <div className="sol-package-label">Scale</div>
              <h3 className="sol-package-title">Growth Program</h3>
              <p className="sol-package-text">Multi-stream delivery for teams optimizing GTM, CS, and product ops.</p>
              <ul className="sol-package-list">
                <li>RevOps roadmap</li>
                <li>Automation & AI pilots</li>
                <li>Analytics & forecasting</li>
                <li>Change management</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Book kickoff</Link>
            </div>

            {/* Partner Card */}
            <div className="sol-package-card">
              <div className="sol-package-label">Partner</div>
              <h3 className="sol-package-title">Managed RevOps</h3>
              <p className="sol-package-text">Embedded pod managing enhancements, support, and innovation.</p>
              <ul className="sol-package-list">
                <li>24/7 admin & support</li>
                <li>Quarterly innovation sprints</li>
                <li>Health & adoption reporting</li>
                <li>Security & compliance</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">Explore model</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section id="integrations" className="sol-section sol-bg-surface">
        <div className="container sol-split-grid">
          <div>
            <span className="sol-section-tag">Integration Hub</span>
            <h2 className="sol-section-title">Connect every signal.</h2>
            <p className="sol-section-desc">
              We build resilient data pipelines between product, billing, marketing, finance, and support systems so your CRM becomes the single source of truth.
            </p>
            <ul className="sol-pill-list">
              <li>REST / GraphQL / gRPC</li>
              <li>Event streaming</li>
              <li>Data warehouses</li>
              <li>Middleware and iPaaS</li>
              <li>Custom connectors</li>
            </ul>
          </div>
          <div className="sol-panel">
            <h3 className="sol-panel-title">Platforms we supercharge</h3>
            <div className="sol-logo-cloud">
              <span>Salesforce</span>
              <span>HubSpot</span>
              <span>Dynamics 365</span>
              <span>Zoho</span>
              <span>Freshworks</span>
              <span>Iterable</span>
            </div>
            <p className="sol-panel-desc">Plus custom-built CRMs for regulated industries.</p>
          </div>
        </div>
      </section>

      {/* ── ENABLEMENT ── */}
      <section id="enablement" className="sol-section">
        <div className="container">
          <div className="sol-section-header">
            <span className="sol-section-tag">Enablement</span>
            <h2 className="sol-section-title">Adoption playbooks.</h2>
            <p className="sol-section-desc">We stay until teams are confident.</p>
          </div>
          
          <div className="sol-timeline">
            <div className="sol-timeline-item">
              <div className="sol-timeline-dot"></div>
              <div>
                <h3 className="sol-timeline-title">RevOps Workshops</h3>
                <p className="sol-timeline-text">Interactive sessions aligning leadership, ops, and frontline teams on KPIs, processes, and technology.</p>
              </div>
            </div>
            <div className="sol-timeline-item">
              <div className="sol-timeline-dot"></div>
              <div>
                <h3 className="sol-timeline-title">Role-based Playbooks</h3>
                <p className="sol-timeline-text">Guided workflows, snippets, and automation that make work faster inside the tools teams already use.</p>
              </div>
            </div>
            <div className="sol-timeline-item">
              <div className="sol-timeline-dot"></div>
              <div>
                <h3 className="sol-timeline-title">Analytics Coaching</h3>
                <p className="sol-timeline-text">Office hours and async videos explaining dashboards, KPIs, and how to turn insights into actions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPORT ── */}
      <section id="support" className="sol-section sol-bg-surface">
        <div className="container sol-split-grid">
          <div>
            <span className="sol-section-tag">Strategic Partner</span>
            <h2 className="sol-section-title">Need a CRM SWAT team?</h2>
            <p className="sol-section-desc">
              Retain us as your RevOps partner for roadmap planning, enhancements, and day-to-day administration.
            </p>
            <ul className="sol-pill-list">
              <li>Proactive monitoring</li>
              <li>Release management</li>
              <li>Security reviews</li>
              <li>Data hygiene</li>
            </ul>
          </div>
          <div className="sol-panel sol-panel-highlight">
            <h3 className="sol-panel-title">Response SLAs</h3>
            <ul className="sol-panel-list">
              <li>P1 issues – 1 hour</li>
              <li>P2 issues – 4 hours</li>
              <li>Enhancement requests – 24 hours</li>
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
              Book onboarding
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Solutions;