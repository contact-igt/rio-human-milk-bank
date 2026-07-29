"use client";

import { HMB, LINKS } from "../constants";
import { Eyebrow, FIcon, Reveal } from "../shared/Helpers";
import styles from "../styles.module.css";

export function FeaturesSection() {
  const s = HMB;
  return (
    <section className="section tint-blue">
      <div className="wrap">
        <Reveal className="sec-head center">
          <Eyebrow>What you get at Rio</Eyebrow>
          <h2>Safe Nutrition for the Most Fragile Babies</h2>
        </Reveal>
        <div className="feat-grid">
          {s.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 80}>
              <div className="feat">
                <div className="feat-ic"><FIcon name={f.icon} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} style={{ width: "100%", marginTop: "30px" }}>
          <div style={{ background: "#fff", border: "1.5px solid var(--line)", borderRadius: "20px", padding: "20px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", boxShadow: "0 10px 30px rgba(48,53,115,0.06)" }}>
            <div>
              <h4 style={{ margin: 0, fontSize: "17px", fontWeight: "700", color: "var(--ink)" }}>Looking for donor milk, donating, or referring a patient?</h4>
              <p style={{ margin: "4px 0 0", fontSize: "13.5px", color: "var(--muted)" }}>Our 24/7 human milk bank team is ready to guide you at every step.</p>
            </div>
            <div className="hero-call-wrap" style={{ marginTop: 0 }}>
              <a href={LINKS.call} className="btn btn-pink hero-call-btn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="hero-call-ic">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div className="hero-call-text">
                  <span className="hero-call-label">Call Helpline</span>
                  <span className="hero-call-num">+91 77083 18222</span>
                </div>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
