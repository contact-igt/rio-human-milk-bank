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
            <div className="hero-call-wrap">
              <a href={LINKS.call} className="btn btn-pink hero-call-btn">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="hero-call-ic">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div className="hero-call-text">
                  <span className="hero-call-label">Call Helpline</span>
                  <span className="hero-call-num">+91 77083 18222</span>
                </div>
              </a>
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
