"use client";

import { HMB, IMG, LINKS } from "../constants";
import { Eyebrow, Img, LucideArrowRight, Reveal } from "../shared/Helpers";
import styles from "../styles.module.css";

export function HeroSection({ setDonorOpen, setRecipientOpen, setReferralOpen }) {
  const s = HMB;
  return (
    <section className="shero">
      <div className="shero-bg">
        <Img src={IMG.banner} alt={s.eyebrow} grad={0} />
      </div>
      <div className="shero-veil" />
      <div className="shero-in">
        <div className={styles.sheroGrid}>
          <Reveal>
            <Eyebrow light>{s.eyebrow}</Eyebrow>
            <h1>{s.title}</h1>
            <p className="lede">{s.lede}</p>
            <div className={styles.heroBadges}>
              <span className={styles.badge}><i className={styles.badgeDot} />WHO Guidelines Followed</span>
              <span className={styles.badge}><i className={styles.badgeDot} />Pasteurised &amp; Screened</span>
              <span className={styles.badge}><i className={styles.badgeDot} />Open 365 Days</span>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "24px" }}>
              <button className="btn btn-pink" onClick={() => setDonorOpen(true)}>❤️ Become a Donor</button>
              <button className="btn btn-cta" onClick={() => setRecipientOpen(true)}>🍼 Request Donor Milk</button>
              <button className="btn btn-line" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }} onClick={() => setReferralOpen(true)}>🏥 Refer a Patient</button>
            </div>
          </Reveal>

          <Reveal delay={100} className={styles.sheroCardCol}>
            <div className={styles.heroActionCard}>
              <div className={styles.heroCardHeader}>
                <span className={styles.heroCardBadge}>
                  <i className={styles.heroLiveDot} /> Select Your Intent
                </span>
                <h3 className={styles.heroCardTitle}>How can we help you today?</h3>
                <p className={styles.heroCardSub}>Click an option below to connect with our team directly.</p>
              </div>

              <div className={styles.heroCardItems}>
                {/* Item 1: Become a Donor */}
                <button
                  id="hero-card-donor"
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
                  id="hero-card-request"
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
                  id="hero-card-refer"
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
