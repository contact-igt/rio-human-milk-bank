"use client";

/* ── Image paths ── */
export const IMG = {
  logo: "/assets/shared/riologov2.png",
  banner: "/assets/human-milk-bank/banner_bg.webp",

  /* ── Human Milk Bank specific (WebP) ── */
  "pasteurisation": "/assets/human-milk-bank/Pasteurisation_unit.webp",
  "cold-storage": "/assets/human-milk-bank/Sterilise_and_cold_storage.webp",
  "counselling": "/assets/human-milk-bank/counselling_room.webp",
  "feeding-support": "/assets/human-milk-bank/feeding_support.webp",
  "banner-bg": "/assets/human-milk-bank/banner_bg.webp",

  /* ── Service Card Photos ── */
  "hmb-unit": "/assets/human-milk-bank/Pasteurisation_unit.webp",
  "diagnostic-suite": "/assets/human-milk-bank/Sterilise_and_cold_storage.webp",
  "specialist-team": "/assets/human-milk-bank/counselling_room.webp",
  "Advanced-NICU": "/assets/Advanced-NICU.png",
  "high-risk-pregnancy": "/assets/high-risk-pregnancy.png",
  "maternity-care": "/assets/maternity-care.png",
};

/* ── Contact & Social links ── */
export const LINKS = {
  call: "tel:+917708318222",
  phone: "tel:+917708318222",
  whatsapp: "https://wa.me/917708318222",
  maps: "https://maps.google.com/?q=Rio+Children's+Hospital+Madurai",
  instagram: "https://instagram.com/riochildrenshospital",
  youtube: "https://youtube.com/@riochildrenshospital",
  facebook: "https://facebook.com/riochildrenhospitals",
};

export const SITE = "https://riochildrenshospital.com";
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbweegP5BAvbuNVNU6RoPUeXuXyboFHCL5RndUHpzYX0T0lrjVR6nm_KxRHqxhdyew2fhQ/exec";

export async function submitFormToSheet(formType, formData) {
  if (!GOOGLE_SCRIPT_URL) {
    await new Promise(r => setTimeout(r, 1000));
    return;
  }

  const cleanData = {};
  if (formData && typeof formData === "object") {
    Object.keys(formData).forEach(key => {
      if (formData[key] !== undefined && formData[key] !== null) {
        cleanData[key] = String(formData[key]);
      }
    });
  }

  const payload = new URLSearchParams({
    form_type: formType,
    ...cleanData,
  });

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload.toString(),
  });
}

/* ── Nav items ── */
export const NAV_TREATMENTS = [
  { name: "High-Risk Pregnancy Care", slug: "high-risk-pregnancy" },
  { name: "Fetal Medicine", slug: "fetal-medicine" },
  { name: "Maternity Care", slug: "maternity" },
  { name: "Fertility & IVF", slug: "fertility-ivf" },
  { name: "NICU", slug: "nicu" },
  { name: "PICU", slug: "picu" },
  { name: "Paediatric Emergency", slug: "emergency" },
  { name: "General Paediatrics", slug: "general-paediatrics" },
  { name: "Vaccination Services", slug: "vaccination" },
  { name: "Human Milk Bank", slug: "human-milk-bank" },
];

/* ── Page data ── */
export const HMB = {
  eyebrow: "Human Milk Bank",
  title: "Safe Donor Milk, Saving the Smallest Lives",
  lede: "Rio's Human Milk Bank provides safe, screened and pasteurised donor human milk for premature and critically ill newborns who cannot be breastfed by their own mothers.",
  heroImg: "pasteurisation",
  intro: [
    "Our state-of-the-art Human Milk Bank operates every day, providing safe, screened and pasteurised donor human milk for premature and critically ill newborns who cannot be breastfed by their own mothers.",
    "Stringent quality-control protocols, sterile storage systems and 24/7 power backup ensure the highest safety and nutritional standards, along with personalised guidance and counselling for both donor mothers and recipients.",
  ],
  covers: [
    "Premature & preterm babies",
    "Critically ill newborns in NICU",
    "Babies whose mothers can't breastfeed",
    "Screened & pasteurised donor milk",
    "Sterile storage & cold chain",
    "Donor mother counselling",
    "Recipient family guidance",
    "Operational 365 days a year",
  ],
  features: [
    { icon: "heart", title: "Screened & pasteurised", desc: "Every drop of donor milk is carefully screened and pasteurised to the highest safety and nutritional standards." },
    { icon: "nicu", title: "For the most fragile babies", desc: "Supports premature, preterm and critically ill newborns in the NICU who need safe early nutrition." },
    { icon: "team", title: "Donor mother support", desc: "Personalised guidance and counselling for the donor mothers who give the gift of milk." },
    { icon: "power", title: "24/7 power-backed cold chain", desc: "Sterile storage with uninterrupted power backup keeps donor milk safe around the clock." },
    { icon: "bell", title: "Operational every day", desc: "The milk bank runs 365 days a year, ready whenever a baby needs it." },
    { icon: "scan", title: "Strict quality control", desc: "Rigorous protocols at every step, covering collection, screening, storage, and dispensing." },
  ],
  gallery: [
    { img: "pasteurisation", cap: "Pasteurisation unit" },
    { img: "cold-storage", cap: "Sterile storage & cold chain" },
    { img: "counselling", cap: "Donor counselling room" },
    { img: "feeding-support", cap: "NICU feeding support" },
  ],
  stat: { n: "300+ L", l: "Donor milk collected and shared" },
  faqs: [
    { q: "How safe is donor milk?", a: "All donor milk is screened and pasteurised under stringent quality-control protocols, with sterile storage and 24/7 power backup — meeting WHO guidelines for the highest safety standards." },
    { q: "Who can donate?", a: "Healthy breastfeeding mothers with a healthy baby and extra milk available. Medical screening is required before donation begins." },
    { q: "Who receives donor milk?", a: "Premature and critically ill newborns who cannot be breastfed by their own mothers, especially babies in the NICU who need safe early nutrition." },
    { q: "How is donor milk screened?", a: "Donor mothers undergo blood screening and health assessment. Milk is then pasteurised, tested, and stored under sterile conditions before being dispensed to eligible babies." },
    { q: "Is there any cost?", a: "Please contact our team directly for information about costs and eligibility. Our coordinators are happy to guide families through the process." },
  ],
  related: [
    { name: "NICU", slug: "nicu", img: "Advanced-NICU" },
    { name: "High-Risk Pregnancy Care", slug: "high-risk-pregnancy", img: "high-risk-pregnancy" },
    { name: "Maternity Care", slug: "maternity", img: "maternity-care" },
  ],
  services: [
    "Human Milk Bank", "NICU", "PICU", "High-Risk Pregnancy Care",
    "Maternity Care", "Fetal Medicine", "Fertility & IVF",
    "Paediatric Emergency", "General Paediatrics", "Vaccination",
  ],
};

/* ── Validation helpers ── */
export function validatePhone(v) {
  return /^[6-9]\d{9}$/.test(v.replace(/[\s\-\(\)]/g, ""));
}
export function validateEmail(v) {
  return !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
