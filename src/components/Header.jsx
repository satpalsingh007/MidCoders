import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const sectionToScroll = useRef(null);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (location.pathname !== "/") {
      // Not on home page, navigate there and queue the section
      sectionToScroll.current = sectionId;
      navigate("/");
    } else {
      // Already on home page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // When location changes to home page, scroll to the queued section
  useEffect(() => {
    if (location.pathname === "/" && sectionToScroll.current) {
      const sectionId = sectionToScroll.current;
      sectionToScroll.current = null;
      
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  return (
    <header className={`mc-header ${scrolled ? "scrolled" : ""}`}>
      <div className="mc-container">

        <div className="mc-logo">
          <Link to="/">
            <img src={Logo} alt="Midcoders" className="mc-logo-img" />
          </Link>
        </div>

        <nav className={`mc-nav ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="mc-link">Home</Link>
          <a href="#crm-section" onClick={(e) => handleSmoothScroll(e, "crm-section")} className="mc-link">CRM</a>
          <Link to="/solutions" className="mc-link">Solutions</Link>
          <Link to="/about" className="mc-link">About</Link>
          <a href="#portfolio-section" onClick={(e) => handleSmoothScroll(e, "portfolio-section")} className="mc-link">Portfolio</a>
          <Link to="/blog" className="mc-link">Blog</Link>
          <a href="#contact-section" onClick={(e) => handleSmoothScroll(e, "contact-section")} className="mc-link">Contact</a>
          <button className="mc-btn">Get Started</button>
        </nav>

        <div
          className={`mc-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Header;