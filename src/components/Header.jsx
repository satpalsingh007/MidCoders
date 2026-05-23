import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <Link to="/crm" className="mc-link">CRM</Link>
          <Link to="/solutions" className="mc-link">Solutions</Link>
          <Link to="/about" className="mc-link">About</Link>
          <Link to="/portfolio" className="mc-link">Portfolio</Link>
          <Link to="/blog" className="mc-link">Blog</Link>
          <Link to="/contact" className="mc-link">Contact</Link>
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