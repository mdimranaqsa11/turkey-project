"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { ServiceNotice } from "@/components/ui/ServiceNotice";
import { cn } from "@/lib/utils";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const qualifications = [
  "MBBS",
  "BDS",
  "MD / MS",
  "Fellowship",
  "P.G. Diploma",
  "Other Medical Qualification",
];

function SelectField({ label, error, children, ...props }) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-mist-100">
        {label}
      </label>
      <select
        id={id}
        aria-invalid={Boolean(error)}
        className={cn(
          "w-full rounded-(--radius-sm) glass-panel px-4 py-2.5 text-sm text-mist-50 focus:outline-none focus:ring-2 transition-shadow",
          error ? "ring-2 ring-red-400/60" : "focus:ring-gold-400"
        )}
        {...props}
      >
        {children}
      </select>
      {error ? <p className="text-xs font-medium text-red-400">{error}</p> : null}
    </div>
  );
}

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  qualification: "",
  country: "",
  city: "",
  password: "",
  confirmPassword: "",
  agree: false,
};

export function RegisterForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    const val = field === "agree" ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [field]: val }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.fullName.trim()) next.fullName = "Full name is required";
    if (!values.email.trim()) next.email = "Email is required";
    else if (!EMAIL_RE.test(values.email)) next.email = "Enter a valid email address";
    if (!values.phone.trim()) next.phone = "Phone number is required";
    if (!values.qualification) next.qualification = "Please select your qualification";
    if (!values.country.trim()) next.country = "Country is required";
    if (!values.city.trim()) next.city = "City is required";
    if (!values.password) next.password = "Password is required";
    else if (values.password.length < 8)
      next.password = "Password must be at least 8 characters";
    if (!values.confirmPassword) next.confirmPassword = "Please confirm your password";
    else if (values.confirmPassword !== values.password)
      next.confirmPassword = "Passwords do not match";
    if (!values.agree) next.agree = "You must agree to the Terms and Privacy Policy";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-4">
        <ServiceNotice className="w-full" />
        <Button type="button" variant="glass" size="sm" onClick={() => setSubmitted(false)}>
          Back to form
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <FormField
        label="Full Name *"
        placeholder="John Doe"
        value={values.fullName}
        onChange={update("fullName")}
        error={errors.fullName}
      />
      <FormField
        label="Email ID *"
        type="email"
        placeholder="your.email@example.com"
        value={values.email}
        onChange={update("email")}
        error={errors.email}
      />
      <FormField
        label="Phone Number *"
        type="tel"
        placeholder="+1 (555) 123-4567"
        value={values.phone}
        onChange={update("phone")}
        error={errors.phone}
      />
      <SelectField
        label="Education Qualification *"
        value={values.qualification}
        onChange={update("qualification")}
        error={errors.qualification}
      >
        <option value="" className="bg-ink-900">
          Select your qualification
        </option>
        {qualifications.map((q) => (
          <option key={q} value={q} className="bg-ink-900">
            {q}
          </option>
        ))}
      </SelectField>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField
          label="Country *"
          placeholder="United States"
          value={values.country}
          onChange={update("country")}
          error={errors.country}
        />
        <FormField
          label="City *"
          placeholder="New York"
          value={values.city}
          onChange={update("city")}
          error={errors.city}
        />
      </div>

      <FormField
        label="Password *"
        type="password"
        placeholder="Create a strong password"
        value={values.password}
        onChange={update("password")}
        error={errors.password}
      />
      <FormField
        label="Confirm Password *"
        type="password"
        placeholder="Re-enter your password"
        value={values.confirmPassword}
        onChange={update("confirmPassword")}
        error={errors.confirmPassword}
      />

      <div className="flex flex-col gap-1.5">
        <label className="flex items-start gap-2.5 text-sm text-mist-200/80">
          <input
            type="checkbox"
            checked={values.agree}
            onChange={update("agree")}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-transparent accent-gold-400"
          />
          I agree to the{" "}
          <Link href="/terms" className="font-semibold text-gold-300 hover:text-gold-200">
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="font-semibold text-gold-300 hover:text-gold-200">
            Privacy Policy
          </Link>
        </label>
        {errors.agree ? (
          <p className="text-xs font-medium text-red-400">{errors.agree}</p>
        ) : null}
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Create Account
      </Button>

      <p className="text-center text-sm text-mist-200/70">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-gold-300 hover:text-gold-200">
          Sign In
        </Link>
      </p>
    </form>
  );
}
