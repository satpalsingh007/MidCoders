import { useState } from "react";

const contactDetails = [
  {
    label: "Location",
    value: "Available Worldwide",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "sales@midcoder.com",
    href: "mailto:sales@midcoder.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 72065 22196",
    href: "tel:+917206522196",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.09a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    /* wire up your backend / emailjs here */
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="ct-section" id="contact-section">
      <div className="ct-wrapper">

        {/* ── LEFT INFO ── */}
        <div className="ct-left">
          <span className="ct-tag">Get In Touch</span>

          <h2 className="ct-title">
            Let's Build Something<br />
            <span className="ct-accent">Amazing</span>
          </h2>

          <p className="ct-body">
            Ready to start your project? We'd love to hear from you. Get in touch
            and let's discuss how we can help bring your vision to life.
          </p>

          <ul className="ct-details">
            {contactDetails.map((d) => (
              <li key={d.label} className="ct-detail-item">
                <div className="ct-detail-icon">{d.icon}</div>
                <div className="ct-detail-text">
                  <span className="ct-detail-label">{d.label}</span>
                  {d.href ? (
                    <a href={d.href} className="ct-detail-value ct-detail-link">
                      {d.value}
                    </a>
                  ) : (
                    <span className="ct-detail-value">{d.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          
          
        </div>

        {/* ── RIGHT FORM ── */}
        <div className="ct-right">
          <div className="ct-form-card">
            <h3 className="ct-form-heading">Send us a message</h3>
            <p className="ct-form-sub">We'll get back to you within 24 hours.</p>

            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-row">
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-name">Your Name</label>
                  <input
                    id="ct-name"
                    className="ct-input"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-email">Email Address</label>
                  <input
                    id="ct-email"
                    className="ct-input"
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="ct-field">
                <label className="ct-label" htmlFor="ct-subject">Subject</label>
                <input
                  id="ct-subject"
                  className="ct-input"
                  type="text"
                  name="subject"
                  placeholder="Project inquiry / CRM audit / General"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="ct-field">
                <label className="ct-label" htmlFor="ct-message">Message</label>
                <textarea
                  id="ct-message"
                  className="ct-input ct-textarea"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="ct-submit">
                {sent ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;