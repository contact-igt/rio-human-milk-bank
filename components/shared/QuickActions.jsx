"use client";

import { LINKS } from "../constants";

function PhoneIc() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function PinIc() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function HeartIc() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function MilkBottleIc() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 2h6v2H9V2zm1 3h4v2h-4V5zm-2 3h8a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a1 1 0 0 1 1-1zm3 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2z" />
    </svg>
  );
}

function HospitalIc() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
    </svg>
  );
}

function WhatsAppIc() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.425A9.78 9.78 0 0 1 7.02 20.44L2.001 22l1.597-4.856a9.782 9.782 0 0 1-1.393-5.042C2.205 6.698 6.611 2.292 12.01 2.292c2.615 0 5.073 1.019 6.92 2.87 1.848 1.85 2.863 4.31 2.86 6.927-.005 5.399-4.412 9.805-9.739 9.805" />
    </svg>
  );
}

export function QuickActions({ setDonorOpen, setRecipientOpen, setReferralOpen }) {
  return (
    <>
      {/* ── Desktop Floating Quick Actions (Call, Location, WhatsApp) ── */}
      <nav className="qa qa-desktop" aria-label="Desktop quick actions">
        <a className="qa-btn qa-call" href={LINKS.phone} aria-label="Call">
          <span className="qa-ic"><PhoneIc /></span>
          <span className="qa-label">Call</span>
        </a>
        <a className="qa-btn qa-maps" href={LINKS.maps} target="_blank" rel="noreferrer" aria-label="Location">
          <span className="qa-ic"><PinIc /></span>
          <span className="qa-label">Location</span>
        </a>
        <a className="qa-btn qa-wa" href={LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <span className="qa-ic"><WhatsAppIc /></span>
          <span className="qa-label">WhatsApp</span>
        </a>
      </nav>

      {/* ── Mobile Bottom Dock Quick Actions (Call, Donate, Request, Referral, WhatsApp) ── */}
      <nav className="qa qa-mobile" aria-label="Mobile quick actions">
        <a className="qa-btn qa-call" href={LINKS.phone}>
          <span className="qa-ic"><PhoneIc /></span>
          <span className="qa-label">Call</span>
        </a>
        <button type="button" className="qa-btn qa-donor" onClick={() => setDonorOpen?.(true)}>
          <span className="qa-ic"><HeartIc /></span>
          <span className="qa-label">Donate</span>
        </button>
        <button type="button" className="qa-btn qa-request" onClick={() => setRecipientOpen?.(true)}>
          <span className="qa-ic"><MilkBottleIc /></span>
          <span className="qa-label">Request</span>
        </button>
        <button type="button" className="qa-btn qa-referral" onClick={() => setReferralOpen?.(true)}>
          <span className="qa-ic"><HospitalIc /></span>
          <span className="qa-label">Referral</span>
        </button>
        <a className="qa-btn qa-wa" href={LINKS.whatsapp} target="_blank" rel="noreferrer">
          <span className="qa-ic"><WhatsAppIc /></span>
          <span className="qa-label">WhatsApp</span>
        </a>
      </nav>
    </>
  );
}
