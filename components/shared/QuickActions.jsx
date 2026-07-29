"use client";

import { LINKS } from "../constants";

function PhoneIc() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
    </svg>
  );
}

function PinIc() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function CalendarIc() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1.5A2.5 2.5 0 0 1 22 6.5v12A2.5 2.5 0 0 1 19.5 21h-15A2.5 2.5 0 0 1 2 18.5v-12A2.5 2.5 0 0 1 4.5 4H6V3a1 1 0 0 1 1-1zm12.5 8h-15v8.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V10zM5 6a.5.5 0 0 0-.5.5V8h15V6.5A.5.5 0 0 0 19 6H5zm4.5 6h5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2zm0 4h3a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2z" />
    </svg>
  );
}

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

export function QuickActions() {
  const acts = [
    { label: "Call", href: LINKS.phone, ic: <PhoneIc />, cls: "qa-call" },
    { label: "Maps", href: LINKS.maps, ic: <PinIc />, cls: "qa-maps" },
    { label: "Book", href: "#book", ic: <CalendarIc />, cls: "qa-book" },
    { label: "Instagram", href: LINKS.instagram, ic: <InstaIc />, cls: "qa-ig" },
    { label: "YouTube", href: LINKS.youtube, ic: <YtIc />, cls: "qa-yt" },
  ];
  return (
    <nav className="qa" aria-label="Quick actions">
      {acts.map((a) => (
        <a
          key={a.label}
          className={`qa-btn ${a.cls}`}
          href={a.href}
          target={a.href.startsWith("http") ? "_blank" : undefined}
          rel={a.href.startsWith("http") ? "noreferrer" : undefined}
        >
          <span className="qa-ic">{a.ic}</span>
          <span className="qa-label">{a.label}</span>
        </a>
      ))}
    </nav>
  );
}
