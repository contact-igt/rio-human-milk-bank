"use client";

import { HMB, IMG, SITE } from "../constants";
import { Eyebrow, Img, Reveal } from "../shared/Helpers";
import styles from "../styles.module.css";

export function RelatedCareSection() {
  const s = HMB;
  return (
    <section className={`section ${styles.relatedSection}`}>
      <div className="wrap">
        <Reveal className="sec-head center">
          <Eyebrow>Related Care</Eyebrow>
          <h2>Explore related services</h2>
        </Reveal>
        <div className="rel-grid">
          {s.related.map((r, i) => (
            <Reveal key={r.slug} delay={i * 80}>
              <a className="rel" href={`${SITE}/services/${r.slug}`}>
                <Img src={IMG[r.img]} alt={r.name} grad={i % 3} />
                <div className="rel-body">
                  <h3>{r.name}</h3>
                  <span>→</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
