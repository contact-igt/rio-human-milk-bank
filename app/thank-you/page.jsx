"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./thank-you.module.css";

const SITE = "https://riochildrenshospital.com";
const LINKS = {
  call: "tel:+917708318222",
  whatsapp: "https://wa.me/917708318222",
};

function ThankYouContent() {
  const searchParams = useSearchParams();

  const formType = (searchParams.get("type") || searchParams.get("form_type") || "").toLowerCase();
  const name     = searchParams.get("name") || "";
  const phone    = searchParams.get("phone") || "";
  const email    = searchParams.get("email") || "";
  const city     = searchParams.get("city") || "";
  const babyAge  = searchParams.get("babyAge") || searchParams.get("bage") || "";
  const motherAge= searchParams.get("motherAge") || searchParams.get("mage") || "";
  const hospital = searchParams.get("hospital") || searchParams.get("hosp") || "";
  const reason   = searchParams.get("reason") || "";
  const notes    = searchParams.get("notes") || searchParams.get("info") || "";
  const referralType = searchParams.get("referralType") || "";

  // Generate reference ID and submission timestamp
  const refId = useMemo(() => {
    return "RIO-HMB-" + Math.floor(100000 + Math.random() * 900000);
  }, []);

  const timeStr = useMemo(() => {
    return new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  }, []);

  // Title, message, and category mapping based on form type
  let pageTitle = "Thank You for Contacting Rio Human Milk Bank!";
  let pageSub = "Your details have been successfully received by our neonatal care team.";
  let bannerImg = "/assets/human-milk-bank/counselling_room.webp";
  let serviceCategory = "Human Milk Bank Inquiry";

  if (formType === "donor") {
    pageTitle = "Thank You for Registering as a Milk Donor! ❤️";
    pageSub = "Your generosity can save fragile premature lives. Our Human Milk Bank coordinator will contact you shortly.";
    bannerImg = "/assets/human-milk-bank/counselling_room.webp";
    serviceCategory = "Milk Donor Registration";
  } else if (formType === "request_donor" || formType === "request" || formType === "recipient") {
    pageTitle = "Request for Donor Milk Submitted Successfully! 🍼";
    pageSub = "Our neonatal clinical team will review your request immediately and reach out to support your baby.";
    bannerImg = "/assets/human-milk-bank/feeding_support.webp";
    serviceCategory = "Donor Milk Request";
  } else if (formType === "referral") {
    pageTitle = "Referral Submitted Successfully! 🏥";
    pageSub = "Thank you for referring a mother or baby. Our Human Milk Bank team will review and connect with the family.";
    bannerImg = "/assets/human-milk-bank/Pasteurisation_unit.webp";
    serviceCategory = "Hospital Referral";
  }

  // Filter valid parameters for the details card
  const detailsList = useMemo(() => {
    const list = [];
    if (name)         list.push({ label: "Full Name", val: name });
    if (phone)        list.push({ label: "Mobile Number", val: phone });
    if (email)        list.push({ label: "Email Address", val: email });
    if (city)         list.push({ label: "City", val: city });
    if (motherAge)    list.push({ label: "Mother's Age", val: motherAge });
    if (babyAge)      list.push({ label: "Baby's Age", val: babyAge });
    if (hospital)     list.push({ label: "Hospital Name", val: hospital });
    if (referralType) list.push({ label: "Referral Type", val: referralType });
    if (reason)       list.push({ label: "Reason", val: reason });
    if (notes)        list.push({ label: "Additional Notes", val: notes });
    return list;
  }, [name, phone, email, city, motherAge, babyAge, hospital, referralType, reason, notes]);

  return (
    <div className={styles.pageWrapper}>
      {/* ── Top Header ── */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.logoArea}>
            <img src="/assets/shared/riologov2.png" alt="Rio Children's Hospital" className={styles.logoImg} />
            <div>
              <span className={styles.brandTitle}>Rio Children's Hospital</span>
              <span className={styles.brandSub}>Human Milk Bank Division</span>
            </div>
          </a>
          <div className={styles.headerActions}>
            <a href={LINKS.call} className={styles.helplineBtn}>
              📞 24/7 Helpline
            </a>
            <a href="/" className={styles.homeBtn}>
              🏠 Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* ── Main Ads Thank You Content ── */}
      <main className={styles.mainContent}>
        {/* ── Hero Card ── */}
        <div className={styles.heroCard}>
          <div className={styles.heroBanner}>
            <img src={bannerImg} alt="Rio Human Milk Bank" className={styles.heroBannerImg} />
            <div className={styles.heroOverlay} />
            <div className={styles.verifiedBadge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Submission Confirmed & Recorded
            </div>
          </div>

          <div className={styles.heroBody}>
            <div className={styles.successCheckIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>

            <h1 className={styles.thankTitle}>{pageTitle}</h1>
            <p className={styles.thankSubtitle}>{pageSub}</p>

            <div className={styles.refBar}>
              <div className={styles.refItem}>
                <span className={styles.refTag}>Inquiry Category</span>
                <span className={styles.refVal}>{serviceCategory}</span>
              </div>
              <div className={styles.refItem}>
                <span className={styles.refTag}>Submission Date & Time</span>
                <span className={styles.refVal}>{timeStr}</span>
              </div>
              <div className={styles.refItem}>
                <span className={styles.refTag}>Status</span>
                <span className={styles.refVal} style={{ color: "#7BA93A" }}>Priority Review (Within 2 hrs)</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Submitted Information Summary ── */}
        {detailsList.length > 0 && (
          <div>
            <h2 className={styles.sectionTitle}>📋 Submitted Details Summary</h2>
            <div className={styles.detailsCard}>
              <div className={styles.detailsGrid}>
                {detailsList.map((item, idx) => (
                  <div key={idx} className={styles.detailField}>
                    <span className={styles.detailLabel}>{item.label}</span>
                    <span className={styles.detailValue}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── What Happens Next (3-Step Workflow) ── */}
        <h2 className={styles.sectionTitle}>⏳ What Happens Next?</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepBadge}>1</div>
            <h3 className={styles.stepTitle}>Record Verification</h3>
            <p className={styles.stepDesc}>
              Our neonatal team verifies your submitted form and checks initial eligibility criteria.
            </p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepBadge}>2</div>
            <h3 className={styles.stepTitle}>Direct Coordinator Outreach</h3>
            <p className={styles.stepDesc}>
              Our counselor will reach out via Phone / WhatsApp within 2 hours to guide you.
            </p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepBadge}>3</div>
            <h3 className={styles.stepTitle}>Sterile Process Execution</h3>
            <p className={styles.stepDesc}>
              Screened & pasteurised milk collection or dispensing is scheduled smoothly.
            </p>
          </div>
        </div>

        {/* ── Trust & Ads Quality Assurance Banner ── */}
        <div className={styles.trustBanner}>
          <h2 className={styles.trustTitle}>🛡️ Why Families Trust Rio Human Milk Bank</h2>
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🌡️</span>
              <div className={styles.trustText}>
                <span className={styles.trustItemTitle}>Holder Pasteurisation</span>
                <span className={styles.trustItemDesc}>100% pasteurised according to WHO safety protocols</span>
              </div>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>❄️</span>
              <div className={styles.trustText}>
                <span className={styles.trustItemTitle}>24/7 Cold Chain</span>
                <span className={styles.trustItemDesc}>Sterile storage with 24/7 uninterrupted power backup</span>
              </div>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>👶</span>
              <div className={styles.trustText}>
                <span className={styles.trustItemTitle}>300+ Litres Donated</span>
                <span className={styles.trustItemDesc}>Saving preterm & vulnerable NICU newborns daily</span>
              </div>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🏥</span>
              <div className={styles.trustText}>
                <span className={styles.trustItemTitle}>365 Days Operational</span>
                <span className={styles.trustItemDesc}>Open every day at Rio Children's Hospital, Madurai</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Quick Action CTAs ── */}
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>Need Immediate Assistance?</h2>
          <p className={styles.ctaDesc}>
            Speak directly with our Human Milk Bank coordinator right now.
          </p>
          <div className={styles.ctaButtons}>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.btnWa}>
              💬 Chat on WhatsApp (+91 77083 18222)
            </a>
            <a href={LINKS.call} className={styles.btnCall}>
              📞 Call Emergency Line (+91 77083 18222)
            </a>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Rio Children's Hospital — Human Milk Bank Unit. All rights reserved.
      </footer>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div style={{ padding: "60px 20px", textAlign: "center", fontFamily: "sans-serif" }}>
        Loading thank you details…
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
