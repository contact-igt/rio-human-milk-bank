"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../styles.module.css";
import { IMG, LINKS, SITE } from "../constants";

export function Reveal({ children, delay = 0, className = "", as = "div", style = {} }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const T = as;
  return (
    <T ref={ref} className={`reveal ${v ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </T>
  );
}

export function Img({ src, alt = "", grad = 0, className = "" }) {
  const [b, setB] = useState(false);
  const G = ["g0", "g1", "g2"];
  return (
    <div className={`img-wrap ${G[grad % 3]} ${className}`}>
      {!b ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setB(true)} />
      ) : (
        <svg viewBox="0 0 24 24" className="fb" aria-hidden="true">
          <path d="M12 21s-7.5-4.6-10-9.2C.6 8.7 2 5 5.6 5c2 0 3.5 1.1 4.4 2.6C10.9 6.1 12.4 5 14.4 5 18 5 19.4 8.7 18 11.8 16.5 16.4 12 21 12 21z" />
        </svg>
      )}
    </div>
  );
}

export function Eyebrow({ children, light = false }) {
  return (
    <span className={`eyebrow ${light ? "light" : ""}`}>
      <i className="ey-dot" />{children}
    </span>
  );
}

export function Logo() {
  const [b, setB] = useState(false);
  return (
    <a className="logo" href={SITE} aria-label="Rio Children's Hospital — Home">
      {!b ? (
        <img className="logo-img" src={IMG.logo} alt="Rio Children's Hospital" onError={() => setB(true)} />
      ) : (
        <span className="logo-word">Rio<em>HOSPITAL</em></span>
      )}
    </a>
  );
}

export function Counter({ value }) {
  const m = value.match(/[\d,]+/);
  const target = m ? parseInt(m[0].replace(/,/g, ""), 10) : null;
  const suffix = m ? value.slice(m.index + m[0].length) : "";
  const prefix = m ? value.slice(0, m.index) : "";
  const [n, setN] = useState(target ? 0 : null);
  const ref = useRef(null);
  useEffect(() => {
    if (target == null) return;
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const dur = 1300, s = performance.now();
      const tick = x => {
        const p = Math.min(1, (x - s) / dur);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    if (el) io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return <span ref={ref}>{target != null ? `${prefix}${n.toLocaleString()}${suffix}` : value}</span>;
}

const FIC = {
  scan: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  team: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 6a3 3 0 0 1 0 6m5 8a6 6 0 0 0-4-5.6" /></>,
  nicu: <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />,
  bell: <><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></>,
  power: <><path d="M12 2v10" /><path d="M18.4 6.6a9 9 0 1 1-12.8 0" /></>,
  heart: <path d="M12 21s-7.5-4.6-10-9.2C.6 8.7 2 5 5.6 5c2 0 3.5 1.1 4.4 2.6C10.9 6.1 12.4 5 14.4 5 18 5 19.4 8.7 18 11.8 16.5 16.4 12 21 12 21z" />,
};

export function FIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {FIC[name]}
    </svg>
  );
}

export function LucideArrowRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function Field({ label, required, error, children }) {
  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.fieldLabel}>
          {label}{required && <span className={styles.req}>*</span>}
        </label>
      )}
      {children}
      {error && <span className={styles.fieldError}>{error}</span>}
    </div>
  );
}

export function Inp({ id, type = "text", placeholder, value, onChange, onBlur, disabled, autoComplete }) {
  return (
    <input
      id={id} type={type}
      className={styles.input}
      placeholder={placeholder}
      value={value} onChange={onChange} onBlur={onBlur}
      disabled={disabled} autoComplete={autoComplete}
    />
  );
}

export function Sel({ id, value, onChange, disabled, options, placeholder }) {
  return (
    <select id={id} className={styles.input} value={value} onChange={onChange} disabled={disabled}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(o => (
        <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>
      ))}
    </select>
  );
}

export function Txta({ id, placeholder, value, onChange, disabled, rows = 3 }) {
  return (
    <textarea
      id={id} rows={rows}
      className={`${styles.input} ${styles.textarea}`}
      placeholder={placeholder}
      value={value} onChange={onChange} disabled={disabled}
    />
  );
}

export function Chk({ id, checked, onChange, disabled, label }) {
  return (
    <label className={styles.checkLabel} htmlFor={id}>
      <input id={id} type="checkbox" className={styles.check}
        checked={checked} onChange={onChange} disabled={disabled} />
      <span className={styles.checkBox} />
      <span className={styles.checkText}>{label}</span>
    </label>
  );
}

export function SuccessScreen({ title, message, details = {}, image = "/assets/human-milk-bank/counselling_room.webp", onClose }) {
  const refIdRef = useRef("");
  if (!refIdRef.current) {
    refIdRef.current = "RIO-HMB-" + Math.floor(100000 + Math.random() * 900000);
  }
  const timeStr = new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });

  const labelMap = {
    name: "Name",
    phone: "Mobile Number",
    email: "Email Address",
    city: "City",
    motherAge: "Mother's Age",
    babyAge: "Baby's Age",
    hospital: "Hospital Name",
    organization: "Organization / Hospital",
    designation: "Designation",
    referralType: "Referral Type",
    hasExcessMilk: "Excess Breast Milk",
    contactTime: "Preferred Contact Time",
    reason: "Reason",
    notes: "Notes",
    info: "Additional Details"
  };

  const detailEntries = Object.entries(details).filter(
    ([k, v]) => v !== undefined && v !== null && v !== false && k !== "consent" && String(v).trim() !== ""
  );

  return (
    <div className={styles.thankYouWrapper}>
      <div className={styles.thankYouImageBanner}>
        <img src={image} alt="Rio Human Milk Bank" />
        <div className={styles.thankYouImageOverlay} />
        <div className={styles.thankYouBadge}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Submission Verified & Received
        </div>
      </div>

      <div className={styles.thankYouContent}>
        <h3 className={styles.thankYouTitle}>{title}</h3>
        <p className={styles.thankYouMessage}>{message}</p>

        <div className={styles.refInfoBar}>
          <div>
            <span className={styles.refLabel}>Response Priority</span>
            <strong className={styles.refValue} style={{ color: "#7BA93A" }}>Within 2 Hours</strong>
          </div>
          <div>
            <span className={styles.refLabel}>Submission Time</span>
            <span className={styles.refValue}>{timeStr}</span>
          </div>
        </div>

        {detailEntries.length > 0 && (
          <div className={styles.detailsCard}>
            <div className={styles.detailsCardTitle}>Submitted Registration Details</div>
            <div className={styles.detailsGrid}>
              {detailEntries.map(([k, v]) => (
                <div key={k} className={styles.detailItem}>
                  <span className={styles.detailKey}>{labelMap[k] || k}</span>
                  <span className={styles.detailVal}>{String(v)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.nextStepsBox}>
          <div className={styles.nextStepsHeader}>What happens next?</div>
          <ul className={styles.nextStepsList}>
            <li>
              <span className={styles.stepNum}>1</span>
              <span>Our Rio Milk Bank coordinator will review your submitted details.</span>
            </li>
            <li>
              <span className={styles.stepNum}>2</span>
              <span>Our clinical team will contact you directly via phone or WhatsApp for guidance.</span>
            </li>
          </ul>
        </div>

        <div className={styles.actionButtonsRow}>
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className={`btn ${styles.waBtn}`}>
            💬 Chat on WhatsApp
          </a>
          <a href={LINKS.call} className={`btn ${styles.callBtn}`}>
            📞 Call Helpline
          </a>
        </div>

        <button className={`btn btn-line ${styles.thankYouClose}`} onClick={onClose}>
          Done & Close
        </button>
      </div>
    </div>
  );
}

export function Modal({ open, onClose, title, description, children }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog" aria-modal="true"
    >
      <div className={styles.modalPanel}>
        <div className={styles.modalHeader}>
          <button className={styles.modalClose} onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <span className="eyebrow"><i className="ey-dot" />Human Milk Bank</span>
          <h2 className={styles.modalTitle}>{title}</h2>
          <p className={styles.modalDesc}>{description}</p>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}
