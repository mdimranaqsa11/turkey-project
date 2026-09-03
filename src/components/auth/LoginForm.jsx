"use client";

import { useState } from "react";
import Link from "next/link";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { ServiceNotice } from "@/components/ui/ServiceNotice";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function LoginForm() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.email.trim()) next.email = "Email is required";
    else if (!EMAIL_RE.test(values.email)) next.email = "Enter a valid email address";
    if (!values.password) next.password = "Password is required";
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
        label="Email Address *"
        type="email"
        icon={<MailIcon />}
        placeholder="your.email@example.com"
        value={values.email}
        onChange={update("email")}
        error={errors.email}
      />
      <div className="flex flex-col gap-1.5">
        <FormField
          label="Password *"
          type="password"
          icon={<LockIcon />}
          placeholder="Enter your password"
          value={values.password}
          onChange={update("password")}
          error={errors.password}
        />
        <Link
          href="/forgot-password"
          className="self-end text-xs font-semibold text-gold-dark hover:text-navy"
        >
          Forgot Password?
        </Link>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Sign In
      </Button>

      <p className="text-center text-sm text-muted">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-gold-dark hover:text-navy">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
