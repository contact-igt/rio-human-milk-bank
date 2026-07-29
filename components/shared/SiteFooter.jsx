"use client";

import { useState } from "react";
import { IMG, LINKS, SITE } from "../constants";

function InstaIc() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2zM17.3 5.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
    </svg>
  );
}

function YtIc() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8zM9.8 15.1V8.9L15.4 12l-5.6 3.1z" />
    </svg>
  );
}

function FbIc() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
    </svg>
  );
}

function WaIc() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2zm5.82 14.15c-.25.7-.99 1.28-1.74 1.44-.51.11-1.18.2-3.41-.72-2.85-1.17-4.68-4.06-4.83-4.25-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.27-.29.59-.36.79-.36.2 0 .39.01.56.01.18.01.42-.07.66.5.25.59.84 2.05.91 2.2.07.15.12.33.02.53-.1.19-.15.31-.3.48-.15.17-.32.38-.45.51-.15.15-.3.31-.13.61.17.3 0.77 1.27 1.66 2.06 1.14 1.02 2.1 1.34 2.4 1.49.3.15.48.13.66-.08.18-.2.77-.9 0.98-1.2.21-.3.42-.25.71-.14.29.11 1.86.88 2.18 1.04.32.16.53.24.6.38.07.15.07.86-.18 1.56z" />
    </svg>
  );
}

export function SiteFooter() {
  const [b, setB] = useState(false);
  return (
    <footer className="footer">
      {!b ? (
        <img className="footer-logo-img" src={IMG.logo} alt="Rio Children's Hospital" onError={() => setB(true)} />
      ) : (
        <span className="logo-word on-dark" style={{ justifyContent: "center", display: "flex", marginBottom: 20 }}>
          Rio<em>HOSPITAL</em>
        </span>
      )}
      <p className="footer-tagline">Advanced Women &amp; Child Care — Tamil Nadu</p>
      {/* <div className="footer-links">
        <a href={SITE}>Home</a>
        <a href={`${SITE}/about`}>About</a>
        <a href={`${SITE}/services/human-milk-bank`}>Human Milk Bank</a>
        <a href={`${SITE}/services/nicu`}>NICU</a>
        <a href={`${SITE}/services/picu`}>PICU</a>
        <a href={`${SITE}/services/maternity`}>Maternity Care</a>
        <a href={`${SITE}/contact`}>Contact</a>
      </div> */}
      <div className="footer-socials">
        <a href={LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
          <InstaIc />
        </a>
        <a href={LINKS.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
          <YtIc />
        </a>
        <a href={LINKS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
          <FbIc />
        </a>
        <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <WaIc />
        </a>
      </div>
      <p className="copy">
        © {new Date().getFullYear()} Rio Children's Hospital. All rights reserved. | 24/7 Human Milk Bank Services
      </p>
    </footer>
  );
}
