"use client";

import { HMB, IMG } from "../constants";
import { Eyebrow, Img, Reveal } from "../shared/Helpers";
import styles from "../styles.module.css";

export function GallerySection() {
  const s = HMB;
  return (
    <section className={`section ${styles.gallerySection}`}>
      <div className="wrap">
        <Reveal className="sec-head center">
          <Eyebrow>Our Infrastructure</Eyebrow>
          <h2>Inside our {s.eyebrow} facilities</h2>
          <p className="sec-note">
            A look at the structure and infrastructure behind our {s.eyebrow.toLowerCase()} care.
          </p>
        </Reveal>
        <div className="gal-grid">
          {s.gallery.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 70} className="gal-item">
              <Img src={IMG[g.img]} alt={g.cap} grad={i % 3} />
              <span className="gal-cap">{g.cap}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
