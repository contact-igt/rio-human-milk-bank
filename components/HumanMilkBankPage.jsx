"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { LINKS } from "./constants";
import { Header } from "./shared/Header";
import { MobileNav } from "./shared/MobileNav";
import { DonorModal, RecipientModal, ReferralModal } from "./shared/Modals";
import { QuickActions } from "./shared/QuickActions";
import { SiteFooter } from "./shared/SiteFooter";

import { HeroSection } from "./sections/HeroSection";
import { OverviewSection } from "./sections/OverviewSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { GallerySection } from "./sections/GallerySection";
import { StatBandSection } from "./sections/StatBandSection";
import { FaqSection } from "./sections/FaqSection";
import { RelatedCareSection } from "./sections/RelatedCareSection";
import { IntentActionsSection } from "./sections/IntentActionsSection";

export default function HumanMilkBankPage() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [donorOpen, setDonorOpen] = useState(false);
  const [recipientOpen, setRecipientOpen] = useState(false);
  const [referralOpen, setReferralOpen] = useState(false);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className={`rio ${styles.page}`}>
      {/* ── Top Announcement Strip ── */}
      <div className="topstrip">
        24/7 Emergency • NICU • PICU | <a href={LINKS.call}>Call now: +91 77083 18222</a>
      </div>

      {/* ── Sticky Header ── */}
      <Header
        solid={solid}
        setDonorOpen={setDonorOpen}
        setRecipientOpen={setRecipientOpen}
        setReferralOpen={setReferralOpen}
      />

      <MobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        setDonorOpen={setDonorOpen}
        setRecipientOpen={setRecipientOpen}
        setReferralOpen={setReferralOpen}
      />

      <main>
        {/* ════ SECTION 1: Hero ════ */}
        <HeroSection
          setDonorOpen={setDonorOpen}
          setRecipientOpen={setRecipientOpen}
          setReferralOpen={setReferralOpen}
        />

        {/* ════ SECTION 2: Overview + Covers ════ */}
        <OverviewSection
          setDonorOpen={setDonorOpen}
          setRecipientOpen={setRecipientOpen}
          setReferralOpen={setReferralOpen}
        />

        {/* ════ SECTION 3: Features Grid ════ */}
        <FeaturesSection
          setDonorOpen={setDonorOpen}
          setRecipientOpen={setRecipientOpen}
          setReferralOpen={setReferralOpen}
        />

        {/* ════ SECTION 4: Infrastructure Gallery ════ */}
        <GallerySection />

        {/* ════ SECTION 5: Animated Stat Band ════ */}
        <StatBandSection
          setDonorOpen={setDonorOpen}
          setRecipientOpen={setRecipientOpen}
          setReferralOpen={setReferralOpen}
        />

        {/* ════ SECTION 6: FAQ Accordion ════ */}
        <FaqSection />

        {/* ════ SECTION 7: Related Care Cards ════ */}
        {/* <RelatedCareSection /> */}

        {/* ════ SECTION 8: Quick Action Intent Cards ════ */}
        <IntentActionsSection
          setDonorOpen={setDonorOpen}
          setRecipientOpen={setRecipientOpen}
          setReferralOpen={setReferralOpen}
        />
      </main>

      {/* ── Footer ── */}
      <SiteFooter />

      {/* ── Quick Actions (Floating Desktop / Sticky Mobile Dock) ── */}
      <QuickActions
        setDonorOpen={setDonorOpen}
        setRecipientOpen={setRecipientOpen}
        setReferralOpen={setReferralOpen}
      />

      {/* ── Modals ── */}
      <DonorModal open={donorOpen} onClose={() => setDonorOpen(false)} />
      <RecipientModal open={recipientOpen} onClose={() => setRecipientOpen(false)} />
      <ReferralModal open={referralOpen} onClose={() => setReferralOpen(false)} />
    </div>
  );
}
