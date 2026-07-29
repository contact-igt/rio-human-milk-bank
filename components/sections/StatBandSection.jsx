"use client";

import { HMB } from "../constants";
import { Counter, Reveal } from "../shared/Helpers";
import styles from "../styles.module.css";

export function StatBandSection({ setDonorOpen, setRecipientOpen, setReferralOpen }) {
  const s = HMB;
  return (
    <section className={`section ${styles.bandSection}`}>
      <div className="wrap">
        <Reveal className="statband">
          <div>
            <strong><Counter value={s.stat.n} /></strong>
            <span>{s.stat.l}</span>
          </div>
          <div className="sb-cta">
            <button className="btn btn-pink" onClick={() => setDonorOpen(true)}>❤️ Become a Donor</button>
            <button className="btn btn-cta" onClick={() => setRecipientOpen(true)}>🍼 Request Milk</button>
            <button className="btn btn-line" style={{ background: "#fff", borderColor: "#fff" }} onClick={() => setReferralOpen(true)}>🏥 Refer a Patient</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
