"use client";

import { HMB, IMG } from "../constants";
import { Eyebrow, Img, Reveal } from "../shared/Helpers";
import styles from "../styles.module.css";

export function OverviewSection({ setDonorOpen, setRecipientOpen, setReferralOpen }) {
  const s = HMB;
  return (
    <section className="section">
      <div className="wrap split">
        <Reveal>
          <Eyebrow>Overview</Eyebrow>
          <h2 className={styles.headingTop}>Closer monitoring, a stronger safety net</h2>
          {s.intro.map((p, i) => (
            <p className={`sec-note ${i ? styles.secNoteGap : ""}`} key={i}>{p}</p>
          ))}
          <h4 className={styles.coversTitle}>This care covers</h4>
          <div className="covers">
            {s.covers.map(c => <span key={c} className="cov"><i />{c}</span>)}
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
            <button className="btn btn-pink btn-sm" onClick={() => setDonorOpen(true)}>❤️ Become a Donor</button>
            <button className="btn btn-cta btn-sm" onClick={() => setRecipientOpen(true)}>🍼 Request Donor Milk</button>
            <button className={`btn ${styles.mbarRefer} btn-sm`} onClick={() => setReferralOpen(true)}>🏥 Refer a Patient</button>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Img src={IMG[s.heroImg]} alt={s.eyebrow} grad={1} className="frame" />
        </Reveal>
      </div>
    </section>
  );
}
