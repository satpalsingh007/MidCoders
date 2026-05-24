import { useState } from "react";
const colors = [
  // Brand
  { name: "Primary",   variable: "--color-primary",   hex: "#013d96", group: "Brand" },
  { name: "Secondary", variable: "--color-secondary",  hex: "#11b7ff", group: "Brand" },

  // Neutrals
  { name: "Dark",      variable: "--color-dark",       hex: "#0f172a", group: "Neutrals" },
  { name: "Body",      variable: "--color-body",       hex: "#475569", group: "Neutrals" },
  { name: "Muted",     variable: "--color-muted",      hex: "#94a3b8", group: "Neutrals" },
  { name: "Border",    variable: "--color-border",     hex: "#e2e8f0", group: "Neutrals" },

  // Surfaces
  { name: "White",     variable: "--color-white",      hex: "#ffffff", group: "Surfaces" },
  { name: "Surface",   variable: "--color-surface",    hex: "#f8fafc", group: "Surfaces" },

  // States
  { name: "Success",   variable: "--color-success",    hex: "#22c55e", group: "States" },
  { name: "Warning",   variable: "--color-warning",    hex: "#f59e0b", group: "States" },
  { name: "Error",     variable: "--color-error",      hex: "#ef4444", group: "States" },
];

const typography = [
  { label: "Heading 1",  tag: "h1", size: "48px", weight: "800", sample: "Next-Gen CRM Experiences" },
  { label: "Heading 2",  tag: "h2", size: "36px", weight: "700", sample: "Built for Growth" },
  { label: "Heading 3",  tag: "h3", size: "28px", weight: "700", sample: "Our Solutions" },
  { label: "Heading 4",  tag: "h4", size: "22px", weight: "600", sample: "What We Offer" },
  { label: "Body Large", tag: "p",  size: "18px", weight: "400", sample: "We help ambitious teams unify data and automate workflows." },
  { label: "Body",       tag: "p",  size: "16px", weight: "400", sample: "Clean, readable text for paragraphs and descriptions." },
  { label: "Small",      tag: "p",  size: "14px", weight: "400", sample: "Captions, labels, and helper text." },
  { label: "Button",     tag: "p",  size: "15px", weight: "600", sample: "Get Started" },
];

const groups = [...new Set(colors.map(c => c.group))];

const ThemePage = () => {
  const [copied, setCopied] = useState(null);

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="tp-page">

      {/* PAGE HEADER */}
      <div className="tp-header">
        <p className="tp-label">Design System</p>
        <h1 className="tp-title">Theme</h1>
        <p className="tp-desc">
          All colors, typography, and tokens used across Midcoders.
          Click any swatch or sample to copy its value.
        </p>
      </div>

      {/* COLORS */}
      <section className="tp-section">
        <h2 className="tp-section-title">Colors</h2>

        {groups.map(group => (
          <div key={group} className="tp-group">
            <p className="tp-group-label">{group}</p>
            <div className="tp-swatches">
              {colors.filter(c => c.group === group).map(color => (
                <button
                  key={color.variable}
                  className="tp-swatch"
                  onClick={() => copy(color.hex)}
                  title={`Copy ${color.hex}`}
                >
                  <div
                    className="tp-swatch-color"
                    style={{
                      background: color.hex,
                      border: color.hex === "#ffffff" ? "1px solid #e2e8f0" : "none"
                    }}
                  />
                  <div className="tp-swatch-info">
                    <span className="tp-swatch-name">{color.name}</span>
                    <span className="tp-swatch-hex">
                      {copied === color.hex ? "Copied!" : color.hex}
                    </span>
                    <span className="tp-swatch-var">{color.variable}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* TYPOGRAPHY */}
      <section className="tp-section">
        <h2 className="tp-section-title">Typography</h2>
        <p className="tp-group-label" style={{ marginBottom: "24px" }}>
          Font — Inter
        </p>

        <div className="tp-type-list">
          {typography.map((t) => (
            <button
              key={t.label}
              className="tp-type-row"
              onClick={() => copy(t.sample)}
              title="Copy sample text"
            >
              <div className="tp-type-meta">
                <span className="tp-type-label">{t.label}</span>
                <span className="tp-type-details">{t.size} / {t.weight}</span>
              </div>
              <p
                className="tp-type-sample"
                style={{ fontSize: t.size, fontWeight: t.weight }}
              >
                {t.sample}
              </p>
            </button>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ThemePage;