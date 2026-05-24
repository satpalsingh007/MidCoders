import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const quickLinks = [
  { label: "Home",      to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "About",     to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog",      to: "/blog" },
 
];

const services = [
  "Web Development",
  "Mobile Development",
  "Cloud Solutions",
  
  "Consulting",
  
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/midcoders_/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhupender-kumar-075736338/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="ft-footer">
      <div className="ft-wrapper">

        {/* TOP GRID */}
        <div className="ft-grid">

          {/* BRAND */}
          <div className="ft-brand">
            <Link to="/">
              <img src={Logo} alt="Midcoders" className="ft-logo" />
            </Link>
            <p className="ft-brand-desc">
              We design cutting-edge CRM solutions, software, and websites
              that transform businesses and drive real growth.
            </p>
            <div className="ft-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="ft-col">
            <h4 className="ft-col-heading">Quick Links</h4>
            <ul className="ft-list">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="ft-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="ft-col">
            <h4 className="ft-col-heading">Services</h4>
            <ul className="ft-list">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/solutions" className="ft-link">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="ft-col">
            <h4 className="ft-col-heading">Contact</h4>
            <ul className="ft-contact-list">
              <li>
                <span className="ft-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a href="mailto:sales@midcoder.com" className="ft-link">
                  sales@midcoder.com
                </a>
              </li>
              <li>
                <span className="ft-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.09a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+917206522196" className="ft-link">
                  +91 72065 22196
                </a>
              </li>
              <li>
                <span className="ft-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="ft-link">Available Worldwide</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="ft-bottom">
          <p className="ft-copy">© 2024 Midcoders Pvt. Ltd. All rights reserved.</p>
          <div className="ft-bottom-links">
            <Link to="/privacy" className="ft-bottom-link">Privacy Policy</Link>
            <span className="ft-bottom-dot" />
            <Link to="/terms"   className="ft-bottom-link">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;