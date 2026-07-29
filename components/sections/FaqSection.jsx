"use client";

import { useState } from "react";
import { HMB } from "../constants";
import { Eyebrow, Reveal } from "../shared/Helpers";
import styles from "../styles.module.css";

export function FaqSection() {
  const s = HMB;
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className={`section tint-pink ${styles.faqSection}`}>
      <div className="wrap">
        <Reveal className="sec-head center">
          <Eyebrow>FAQ</Eyebrow>
          <h2>Questions families ask</h2>
        </Reveal>
        <div className="faq">
          {s.faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50} className={`faq-item ${openFaq === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                {f.q}<span>{openFaq === i ? "–" : "+"}</span>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
