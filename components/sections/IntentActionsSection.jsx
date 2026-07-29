"use client";

import { LINKS } from "../constants";
import { Eyebrow, LucideArrowRight, Reveal } from "../shared/Helpers";
import styles from "../styles.module.css";

export function IntentActionsSection({ setDonorOpen, setRecipientOpen, setReferralOpen }) {
  return (
    <section className={`section ${styles.enquirySection}`} id="book">
      <div className="wrap">
        <Reveal className="enq">
          <div className="enq-copy">
            <Eyebrow light>Connect With Us</Eyebrow>
            <h2 className={styles.headingTop}>
              How can our Human Milk Bank team assist you?
            </h2>
            <p>Choose an option on the right to donate milk, request donor milk for a newborn, or refer a patient to Rio Children's Hospital.</p>
            <div className={styles.enqActions}>
              <a className="btn btn-pink" href={LINKS.call}>Call Now</a>
              <a className="btn btn-green" href={LINKS.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
          <div className="enq-form" style={{ padding: "clamp(20px, 3.5vw, 32px)", background: "rgba(255,255,255,0.04)" }}>
            <div className={styles.heroActionCard} style={{ width: "100%", margin: 0 }}>
              <div className={styles.heroCardHeader}>
                <span className={styles.heroCardBadge}>
                  <i className={styles.heroLiveDot} /> Immediate Assistance
                </span>
                <h3 className={styles.heroCardTitle}>Select your intent</h3>
                <p className={styles.heroCardSub}>Click any option below to connect with our team directly.</p>
              </div>

              <div className={styles.heroCardItems}>
                {/* Item 1: Become a Donor */}
                <button
                  id="section8-card-donor"
                  className={`${styles.actionItemCard} ${styles.itemDonor}`}
                  onClick={() => setDonorOpen(true)}
                >
                  <div className={`${styles.actionIconWrap} ${styles.iconPink}`}>
                    ❤️
                  </div>
                  <div className={styles.actionTextWrap}>
                    <div className={styles.actionTitleRow}>
                      <span className={styles.actionTitle}>Become a Human Milk Donor</span>
                      <span className={styles.actionTagPink}>Donate Milk</span>
                    </div>
                    <p className={styles.actionSub}>Share excess breast milk to help save premature &amp; NICU babies</p>
                  </div>
                  <LucideArrowRight className={styles.actionArrow} />
                </button>

                {/* Item 2: Request Donor Milk */}
                <button
                  id="section8-card-request"
                  className={`${styles.actionItemCard} ${styles.itemRequest}`}
                  onClick={() => setRecipientOpen(true)}
                >
                  <div className={`${styles.actionIconWrap} ${styles.iconGold}`}>
                    🍼
                  </div>
                  <div className={styles.actionTextWrap}>
                    <div className={styles.actionTitleRow}>
                      <span className={styles.actionTitle}>Request Donor Milk</span>
                      <span className={styles.actionTagGold}>Need Milk</span>
                    </div>
                    <p className={styles.actionSub}>For premature newborns, low birth weight &amp; NICU babies</p>
                  </div>
                  <LucideArrowRight className={styles.actionArrow} />
                </button>

                {/* Item 3: Refer Someone */}
                <button
                  id="section8-card-refer"
                  className={`${styles.actionItemCard} ${styles.itemRefer}`}
                  onClick={() => setReferralOpen(true)}
                >
                  <div className={`${styles.actionIconWrap} ${styles.iconBlue}`}>
                    🏥
                  </div>
                  <div className={styles.actionTextWrap}>
                    <div className={styles.actionTitleRow}>
                      <span className={styles.actionTitle}>Refer a Mother or Baby</span>
                      <span className={styles.actionTagBlue}>Referral</span>
                    </div>
                    <p className={styles.actionSub}>For doctors, hospitals, NGOs &amp; healthcare workers</p>
                  </div>
                  <LucideArrowRight className={styles.actionArrow} />
                </button>
              </div>

              <div className={styles.heroCardFooter}>
                <span className={styles.helplineText}>⚡ 24/7 Milk Bank Helpline: <a href={LINKS.call}>+91 77083 18222</a></span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
