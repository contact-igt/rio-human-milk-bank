"use client";

import { HMB, LINKS } from "../constants";
import { Counter, Reveal } from "../shared/Helpers";
import styles from "../styles.module.css";

export function StatBandSection() {
  const s = HMB;
  return (
    <section className={`section ${styles.bandSection}`}>
      <div className="wrap">
        <Reveal className="statband">
          <div>
            <strong><Counter value={s.stat.n} /></strong>
            <span>{s.stat.l}</span>
          </div>
          <div className="sb-cta hero-call-wrap">
            <a href={LINKS.call} className="btn btn-pink hero-call-btn">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="hero-call-ic">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <div className="hero-call-text">
                <span className="hero-call-label">Call Helpline</span>
                <span className="hero-call-num">+91 77083 18222</span>
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
