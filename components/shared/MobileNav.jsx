"use client";

import { LINKS, NAV_TREATMENTS, SITE } from "../constants";
import { Logo } from "./Helpers";
import styles from "../styles.module.css";

export function MobileNav({ open, onClose, setDonorOpen, setRecipientOpen, setReferralOpen }) {
  return (
    <div className={`mobile-nav-overlay ${open ? "open" : ""}`}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="mobile-nav-drawer">
        <div className="mobile-nav-close">
          <button onClick={onClose} aria-label="Close menu">✕</button>
        </div>
        <Logo />
        <div className="mobile-nav-links" style={{ marginTop: 24 }}>
          <a href={SITE}>Home</a>
          <a href={`${SITE}/about`}>About</a>
          <a href={`${SITE}/paediatric-super-specialities`}>Pediatric Super Specialities</a>
          {NAV_TREATMENTS.map(t => (
            <a key={t.slug} href={`${SITE}/services/${t.slug}`}>{t.name}</a>
          ))}
          <a href={`${SITE}/facilities`}>Facilities</a>
          <a href={`${SITE}/contact`}>Contact</a>
        </div>
        <div className="mobile-nav-cta">
          <button className="btn btn-pink" onClick={() => { setDonorOpen(true); onClose(); }}>❤️ Become a Donor</button>
          <button className="btn btn-cta" onClick={() => { setRecipientOpen(true); onClose(); }}>🍼 Request Donor Milk</button>
          <button className={`btn ${styles.mbarRefer}`} onClick={() => { setReferralOpen(true); onClose(); }}>🏥 Refer a Patient</button>
          <a className="btn btn-line" href={LINKS.call}>📞 Call Now</a>
        </div>
      </div>
    </div>
  );
}
