"use client";

import { useEffect, useRef, useState } from "react";

export function HeaderActionDropdown({ setDonorOpen, setRecipientOpen, setReferralOpen }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const clickOut = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", clickOut);
    return () => document.removeEventListener("mousedown", clickOut);
  }, []);

  return (
    <div className="header-dropdown-wrap" ref={ref} style={{ position: "relative" }}>
      <button
        className="btn btn-coral btn-sm"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "12px 20px" }}
      >
        <span>Get Started</span>
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transition: "transform 0.25s cubic-bezier(0.2, 0.7, 0.2, 1)",
            transform: open ? "rotate(180deg)" : "none",
          }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="header-dropdown-menu">
          <button
            onClick={() => { setDonorOpen(true); setOpen(false); }}
            className="header-dropdown-item"
          >
            <span className="header-dropdown-icon">❤️</span>
            <div>
              <div className="header-dropdown-item-title">Become a Donor</div>
              <div className="header-dropdown-item-desc">Donate excess breast milk</div>
            </div>
          </button>

          <button
            onClick={() => { setRecipientOpen(true); setOpen(false); }}
            className="header-dropdown-item"
          >
            <span className="header-dropdown-icon">🍼</span>
            <div>
              <div className="header-dropdown-item-title">Request Donor Milk</div>
              <div className="header-dropdown-item-desc">For premature &amp; NICU babies</div>
            </div>
          </button>

          <button
            onClick={() => { setReferralOpen(true); setOpen(false); }}
            className="header-dropdown-item"
          >
            <span className="header-dropdown-icon">🏥</span>
            <div>
              <div className="header-dropdown-item-title">Refer a Patient</div>
              <div className="header-dropdown-item-desc">For doctors &amp; hospitals</div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
