"use client";

import { useCallback, useState } from "react";
import styles from "../styles.module.css";
import { submitFormToSheet, validateEmail, validatePhone } from "../constants";
import { Chk, Field, Inp, Modal, Sel, SuccessScreen, Txta } from "./Helpers";

/* ═══════ MODAL 1 — DONOR FORM ═══════ */
export function DonorModal({ open, onClose }) {
  const init = { name: "", phone: "", email: "", city: "", motherAge: "", babyAge: "", hasExcessMilk: "", contactTime: "", notes: "", consent: false };
  const [form, setForm] = useState(init);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [apiErr, setApiErr] = useState("");

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.phone.trim()) e.phone = "Mobile number is required";
    else if (!validatePhone(form.phone)) e.phone = "Enter a valid 10-digit mobile number";
    if (!validateEmail(form.email)) e.email = "Enter a valid email address";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.consent) e.consent = "Please accept to continue";
    return e;
  };

  const handleClose = useCallback(() => {
    setForm(init); setErrors({}); setLoading(false); setDone(false); setApiErr("");
    onClose();
  }, [onClose]);

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true); setApiErr("");
    try {
      await submitFormToSheet("donor", form);
      const params = new URLSearchParams({
        type: "donor",
        name: form.name || "",
        phone: form.phone || "",
        email: form.email || "",
        city: form.city || "",
        motherAge: form.motherAge || "",
        babyAge: form.babyAge || "",
        hasExcessMilk: form.hasExcessMilk || "",
        contactTime: form.contactTime || "",
        notes: form.notes || "",
      });
      window.location.href = `/thank-you?${params.toString()}`;
    } catch {
      setApiErr("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}
      title="Become a Human Milk Donor"
      description="Your excess breast milk can help save the lives of premature and critically ill newborns.">
      {done ? (
        <SuccessScreen
          title="Thank You for Registering! ❤️"
          message="Your generosity can save fragile lives. Our Human Milk Bank coordinator will contact you shortly."
          details={form}
          image="/assets/human-milk-bank/counselling_room.webp"
          onClose={handleClose}
        />
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.formGrid}>
            <Field label="Full Name" required error={errors.name}>
              <Inp id="d-name" placeholder="Your full name" value={form.name} onChange={set("name")} disabled={loading} />
            </Field>
            <Field label="Mobile Number" required error={errors.phone}>
              <Inp id="d-phone" type="tel" placeholder="10-digit mobile number" value={form.phone} onChange={set("phone")} disabled={loading} autoComplete="tel" />
            </Field>
            <Field label="Email" error={errors.email}>
              <Inp id="d-email" type="email" placeholder="your@email.com" value={form.email} onChange={set("email")} disabled={loading} autoComplete="email" />
            </Field>
            <Field label="City" required error={errors.city}>
              <Inp id="d-city" placeholder="Your city" value={form.city} onChange={set("city")} disabled={loading} />
            </Field>
            <Field label="Mother's Age">
              <Inp id="d-mage" placeholder="e.g. 28 years" value={form.motherAge} onChange={set("motherAge")} disabled={loading} />
            </Field>
            <Field label="Baby's Age">
              <Inp id="d-bage" placeholder="e.g. 3 months" value={form.babyAge} onChange={set("babyAge")} disabled={loading} />
            </Field>
          </div>
          <Field label="Do you currently have excess breast milk?">
            <div className={styles.radioGroup}>
              {["Yes", "No"].map(opt => (
                <label key={opt} className={styles.radioLabel}>
                  <input type="radio" name="excess-milk" value={opt} checked={form.hasExcessMilk === opt} onChange={set("hasExcessMilk")} disabled={loading} />
                  <span className={styles.radioMark} />{opt}
                </label>
              ))}
            </div>
          </Field>
          <Field label="Preferred Contact Time">
            <div className={styles.radioGroup}>
              {["Morning", "Afternoon", "Evening"].map(opt => (
                <label key={opt} className={styles.radioLabel}>
                  <input type="radio" name="contact-time" value={opt} checked={form.contactTime === opt} onChange={set("contactTime")} disabled={loading} />
                  <span className={styles.radioMark} />{opt}
                </label>
              ))}
            </div>
          </Field>
          <Field label="Additional Notes">
            <Txta id="d-notes" placeholder="Any additional information…" value={form.notes} onChange={set("notes")} disabled={loading} />
          </Field>
          <Field error={errors.consent}>
            <Chk id="d-consent" checked={form.consent} onChange={set("consent")} disabled={loading}
              label="I agree to be contacted by Rio Hospital regarding my milk donation." />
          </Field>
          {apiErr && <p className={styles.apiError}>{apiErr}</p>}
          <button type="submit" className={`btn btn-pink ${styles.submitBtn}`} disabled={loading}>
            {loading ? <span className={styles.spinner} /> : "❤️ Become a Donor"}
          </button>
        </form>
      )}
    </Modal>
  );
}

/* ═══════ MODAL 2 — RECIPIENT FORM ═══════ */
export function RecipientModal({ open, onClose }) {
  const init = { name: "", phone: "", email: "", babyAge: "", hospital: "", city: "", reason: "", info: "", consent: false };
  const [form, setForm] = useState(init);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [apiErr, setApiErr] = useState("");

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Parent / guardian name is required";
    if (!form.phone.trim()) e.phone = "Mobile number is required";
    else if (!validatePhone(form.phone)) e.phone = "Enter a valid 10-digit mobile number";
    if (!validateEmail(form.email)) e.email = "Enter a valid email address";
    if (!form.babyAge.trim()) e.babyAge = "Baby's age is required";
    if (!form.reason) e.reason = "Please select a reason";
    if (!form.consent) e.consent = "Please accept to continue";
    return e;
  };

  const handleClose = useCallback(() => {
    setForm(init); setErrors({}); setLoading(false); setDone(false); setApiErr("");
    onClose();
  }, [onClose]);

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true); setApiErr("");
    try {
      await submitFormToSheet("request_donor", form);
      const params = new URLSearchParams({
        type: "request_donor",
        name: form.name || "",
        phone: form.phone || "",
        email: form.email || "",
        babyAge: form.babyAge || "",
        hospital: form.hospital || "",
        city: form.city || "",
        reason: form.reason || "",
        notes: form.info || "",
      });
      window.location.href = `/thank-you?${params.toString()}`;
    } catch {
      setApiErr("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const reasons = [
    { value: "premature", label: "Premature Baby" },
    { value: "low-birth-weight", label: "Low Birth Weight" },
    { value: "mother-unable", label: "Mother Unable to Breastfeed" },
    { value: "nicu", label: "NICU Baby" },
    { value: "doctor-recommended", label: "Doctor Recommended" },
    { value: "other", label: "Other" },
  ];

  return (
    <Modal open={open} onClose={handleClose}
      title="Request Donor Milk"
      description="Complete the form and our neonatal team will contact you as soon as possible.">
      {done ? (
        <SuccessScreen
          title="Request Submitted Successfully! 🍼"
          message="Your request has been received. Our neonatal care team will contact you as soon as possible."
          details={form}
          image="/assets/human-milk-bank/feeding_support.webp"
          onClose={handleClose}
        />
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.formGrid}>
            <Field label="Parent / Guardian Name" required error={errors.name}>
              <Inp id="r-name" placeholder="Full name" value={form.name} onChange={set("name")} disabled={loading} />
            </Field>
            <Field label="Mobile Number" required error={errors.phone}>
              <Inp id="r-phone" type="tel" placeholder="10-digit mobile number" value={form.phone} onChange={set("phone")} disabled={loading} autoComplete="tel" />
            </Field>
            <Field label="Email" error={errors.email}>
              <Inp id="r-email" type="email" placeholder="your@email.com" value={form.email} onChange={set("email")} disabled={loading} autoComplete="email" />
            </Field>
            <Field label="Baby's Age" required error={errors.babyAge}>
              <Inp id="r-bage" placeholder="e.g. 2 weeks" value={form.babyAge} onChange={set("babyAge")} disabled={loading} />
            </Field>
            <Field label="Hospital Name">
              <Inp id="r-hosp" placeholder="Current hospital (if admitted)" value={form.hospital} onChange={set("hospital")} disabled={loading} />
            </Field>
            <Field label="City">
              <Inp id="r-city" placeholder="Your city" value={form.city} onChange={set("city")} disabled={loading} />
            </Field>
          </div>
          <Field label="Reason for Request" required error={errors.reason}>
            <Sel id="r-reason" value={form.reason} onChange={set("reason")} disabled={loading} options={reasons} placeholder="— Select reason —" />
          </Field>
          <Field label="Additional Information">
            <Txta id="r-info" placeholder="Any other relevant details…" value={form.info} onChange={set("info")} disabled={loading} />
          </Field>
          <Field error={errors.consent}>
            <Chk id="r-consent" checked={form.consent} onChange={set("consent")} disabled={loading} label="I agree to be contacted by Rio Hospital." />
          </Field>
          {apiErr && <p className={styles.apiError}>{apiErr}</p>}
          <button type="submit" className={`btn btn-cta ${styles.submitBtn}`} disabled={loading}>
            {loading ? <span className={styles.spinner} /> : "🍼 Request Donor Milk"}
          </button>
        </form>
      )}
    </Modal>
  );
}

/* ═══════ MODAL 3 — REFERRAL FORM ═══════ */
export function ReferralModal({ open, onClose }) {
  const init = { name: "", phone: "", email: "", organization: "", designation: "", referralType: "", motherName: "", babyName: "", city: "", reason: "", notes: "", consent: false };
  const [form, setForm] = useState(init);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [apiErr, setApiErr] = useState("");

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Referrer name is required";
    if (!form.phone.trim()) e.phone = "Mobile number is required";
    else if (!validatePhone(form.phone)) e.phone = "Enter a valid 10-digit mobile number";
    if (!validateEmail(form.email)) e.email = "Enter a valid email address";
    if (!form.referralType) e.referralType = "Please select a referral type";
    if (!form.consent) e.consent = "Please confirm the information";
    return e;
  };

  const handleClose = useCallback(() => {
    setForm(init); setErrors({}); setLoading(false); setDone(false); setApiErr("");
    onClose();
  }, [onClose]);

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true); setApiErr("");
    try {
      await submitFormToSheet("referral", form);
      const params = new URLSearchParams({
        type: "referral",
        name: form.name || "",
        phone: form.phone || "",
        email: form.email || "",
        organization: form.organization || "",
        designation: form.designation || "",
        referralType: form.referralType || "",
        motherName: form.motherName || "",
        babyName: form.babyName || "",
        city: form.city || "",
        reason: form.reason || "",
        notes: form.notes || "",
      });
      window.location.href = `/thank-you?${params.toString()}`;
    } catch {
      setApiErr("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const designations = ["Doctor", "Nurse", "Hospital", "NGO", "Family Member", "Other"];
  const refTypes = [
    { value: "donor", label: "Potential Milk Donor" },
    { value: "recipient", label: "Baby Needs Donor Milk" },
  ];

  return (
    <Modal open={open} onClose={handleClose}
      title="Refer a Mother or Baby"
      description="Help us connect eligible mothers and newborns with our Human Milk Bank services.">
      {done ? (
        <SuccessScreen
          title="Referral Submitted Successfully! 🏥"
          message="Thank you for referring a mother or baby. Our Human Milk Bank team will review and connect with the family."
          details={form}
          image="/assets/human-milk-bank/Pasteurisation_unit.webp"
          onClose={handleClose}
        />
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.formGrid}>
            <Field label="Referrer Name" required error={errors.name}>
              <Inp id="ref-name" placeholder="Your full name" value={form.name} onChange={set("name")} disabled={loading} />
            </Field>
            <Field label="Mobile Number" required error={errors.phone}>
              <Inp id="ref-phone" type="tel" placeholder="10-digit mobile number" value={form.phone} onChange={set("phone")} disabled={loading} autoComplete="tel" />
            </Field>
            <Field label="Email" error={errors.email}>
              <Inp id="ref-email" type="email" placeholder="your@email.com" value={form.email} onChange={set("email")} disabled={loading} autoComplete="email" />
            </Field>
            <Field label="Organization / Hospital">
              <Inp id="ref-org" placeholder="Institution name" value={form.organization} onChange={set("organization")} disabled={loading} />
            </Field>
          </div>
          <Field label="Designation">
            <Sel id="ref-desig" value={form.designation} onChange={set("designation")} disabled={loading} options={designations} placeholder="— Select designation —" />
          </Field>
          <Field label="Referral Type" required error={errors.referralType}>
            <div className={styles.radioGroup}>
              {refTypes.map(opt => (
                <label key={opt.value} className={styles.radioLabel}>
                  <input type="radio" name="ref-type" value={opt.value} checked={form.referralType === opt.value} onChange={set("referralType")} disabled={loading} />
                  <span className={styles.radioMark} />{opt.label}
                </label>
              ))}
            </div>
          </Field>
          <div className={styles.formGrid}>
            <Field label="Mother's Name">
              <Inp id="ref-mname" placeholder="Mother's name (optional)" value={form.motherName} onChange={set("motherName")} disabled={loading} />
            </Field>
            <Field label="Baby's Name">
              <Inp id="ref-bname" placeholder="Baby's name (optional)" value={form.babyName} onChange={set("babyName")} disabled={loading} />
            </Field>
            <Field label="City">
              <Inp id="ref-city" placeholder="City" value={form.city} onChange={set("city")} disabled={loading} />
            </Field>
          </div>
          <Field label="Reason for Referral">
            <Inp id="ref-reason" placeholder="Brief reason for referral" value={form.reason} onChange={set("reason")} disabled={loading} />
          </Field>
          <Field label="Additional Notes">
            <Txta id="ref-notes" placeholder="Any other relevant information…" value={form.notes} onChange={set("notes")} disabled={loading} />
          </Field>
          <Field error={errors.consent}>
            <Chk id="ref-consent" checked={form.consent} onChange={set("consent")} disabled={loading} label="I confirm the above information is accurate." />
          </Field>
          {apiErr && <p className={styles.apiError}>{apiErr}</p>}
          <button type="submit" className={`btn btn-line ${styles.submitBtn} ${styles.submitBtnBlue}`} disabled={loading}>
            {loading ? <span className={styles.spinner} /> : "🏥 Submit Referral"}
          </button>
        </form>
      )}
    </Modal>
  );
}
