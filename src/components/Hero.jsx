import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="hero">

      {/* ORBS */}
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* CONTENT */}
      <div className="container">
        <div className="hero-content">

          <h1 className="hero-title">
            <span className="line">Next-Gen</span>
            <span className="line highlight">CRM Experiences</span>
            <span className="line">Built for Growth</span>
          </h1>

          <p className="hero-subtitle">
            We are CRM experts helping ambitious teams unify data, automate workflows,
            and craft unforgettable customer journeys.
          </p>

          <div className="hero-buttons">

            <a href="#contact-section" className="btn btn-primary">
              Talk CRM Strategy
            </a>

            <Link to="/solutions" className="btn btn-secondary">
              Explore Solutions
            </Link>

          </div>

          <div className="scroll">
            <span>Scroll to explore</span>
            <div className="scroll-bar"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;