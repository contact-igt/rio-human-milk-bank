"use client";

import { HMB } from "../constants";
import { Eyebrow, FIcon, Reveal } from "../shared/Helpers";
import styles from "../styles.module.css";

export function FeaturesSection({ setDonorOpen, setRecipientOpen, setReferralOpen }) {
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
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button className="btn btn-pink btn-sm" onClick={() => setDonorOpen(true)}>❤️ Become a Donor</button>
              <button className="btn btn-cta btn-sm" onClick={() => setRecipientOpen(true)}>🍼 Request Milk</button>
              <button className={`btn ${styles.mbarRefer} btn-sm`} onClick={() => setReferralOpen(true)}>🏥 Refer Patient</button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
