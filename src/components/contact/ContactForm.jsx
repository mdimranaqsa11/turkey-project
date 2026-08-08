"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { cn } from "@/lib/utils";

const inquiryTypes = [
  "Institution Accreditation",
  "Course Enrollment",
  "CPD Accreditation",
  "Partnership & Collaboration",
  "General Inquiry",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE = 20;
const MAX_MESSAGE = 2000;

const inputClass =
  "w-full rounded-(--radius-sm) glass-panel px-4 py-2.5 text-sm text-mist-50 placeholder:text-mist-200/40 focus:outline-none focus:ring-2 transition-shadow";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  institution: "",
  inquiryType: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const inquiryId = useId();

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.fullName.trim()) next.fullName = "Full name is required";
    if (!values.email.trim()) next.email = "Email is required";
    else if (!EMAIL_RE.test(values.email)) next.email = "Enter a valid email address";
    if (!values.inquiryType) next.inquiryType = "Please select an inquiry type";
    if (!values.message.trim()) next.message = "Message is required";
    else if (values.message.trim().length < MIN_MESSAGE)
      next.message = `Message must be at least ${MIN_MESSAGE} characters`;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <GlassCard variant="strong" className="flex flex-col gap-6 rounded-(--radius-lg) p-6 sm:p-8">
      <h2 className="font-display text-xl font-bold text-mist-50">
        Send Us a Message
      </h2>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 py-10 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-ink-950">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <div>
              <p className="font-display text-lg font-bold text-mist-50">
                Message sent
              </p>
              <p className="mt-1 text-sm text-mist-200/70">
                Thank you for reaching out — our team typically responds
                within 24 hours.
              </p>
            </div>
            <Button
              type="button"
              variant="glass"
              size="sm"
              onClick={() => {
                setSubmitted(false);
                setValues(initialValues);
              }}
            >
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                label="Full Name *"
                placeholder="John Doe"
                value={values.fullName}
                onChange={update("fullName")}
                error={errors.fullName}
              />
              <FormField
                label="Email Address *"
                type="email"
                placeholder="john@example.com"
                value={values.email}
                onChange={update("email")}
                error={errors.email}
              />
              <FormField
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={values.phone}
                onChange={update("phone")}
              />
              <FormField
                label="Institution/Clinic"
                placeholder="Your Institution"
                value={values.institution}
                onChange={update("institution")}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor={inquiryId} className="text-sm font-medium text-mist-100">
                Type of Inquiry *
              </label>
              <select
                id={inquiryId}
                value={values.inquiryType}
                onChange={update("inquiryType")}
                aria-invalid={Boolean(errors.inquiryType)}
                className={cn(
                  inputClass,
                  errors.inquiryType ? "ring-2 ring-red-400/60" : "focus:ring-gold-400"
                )}
              >
                <option value="" disabled className="bg-ink-900">
                  Select an inquiry type
                </option>
                {inquiryTypes.map((type) => (
                  <option key={type} value={type} className="bg-ink-900 text-mist-50">
                    {type}
                  </option>
                ))}
              </select>
              {errors.inquiryType ? (
                <p className="text-xs font-medium text-red-400">{errors.inquiryType}</p>
              ) : null}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor={`${inquiryId}-message`} className="text-sm font-medium text-mist-100">
                Your Message *
              </label>
              <textarea
                id={`${inquiryId}-message`}
                rows={5}
                value={values.message}
                onChange={(e) =>
                  setValues((v) => ({ ...v, message: e.target.value.slice(0, MAX_MESSAGE) }))
                }
                aria-invalid={Boolean(errors.message)}
                placeholder="Tell us about your inquiry..."
                className={cn(
                  inputClass,
                  "resize-none",
                  errors.message ? "ring-2 ring-red-400/60" : "focus:ring-gold-400"
                )}
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-mist-200/50">
                  {values.message.length}/{MAX_MESSAGE} characters (minimum {MIN_MESSAGE})
                </span>
                {errors.message ? (
                  <span className="text-xs font-medium text-red-400">{errors.message}</span>
                ) : null}
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </Button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-mist-200/50">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              We typically respond within 24 hours
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}
