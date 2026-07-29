"use client";

import { LINKS } from "../constants";
import { HeaderActionDropdown } from "./HeaderActionDropdown";
import { Logo } from "./Helpers";

export function Header({ solid, setDonorOpen, setRecipientOpen, setReferralOpen }) {
  return (
    <header className={`header ${solid ? "solid" : ""}`}>
      <Logo />
      <div className="nav-cta">
        <a className="btn btn-line btn-sm" href={LINKS.call}>Call Now</a>
        <HeaderActionDropdown
          setDonorOpen={setDonorOpen}
          setRecipientOpen={setRecipientOpen}
          setReferralOpen={setReferralOpen}
        />
      </div>
    </header>
  );
}
