"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Accreditation & CPD", href: "/accreditation-cpd" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const popularCourses = [
  "Fellowship in Critical Care Medicine",
  "Fellowship in Clinical Cardiology",
  "Fellowship in Gynecology and Obstetrics",
  "Fellowship in Aesthetic Medicine",
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm5.75-1.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1Z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9.98h4V21H3V9.98ZM9 9.98h3.84v1.5h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.66 4.77 6.11V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.63V21H9V9.98Z",
  },
];

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="mt-24 bg-navy-deep pt-20">
      <Container className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt="Turkish International Academy"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-display text-lg font-bold text-white">
              TIAMA
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Türkiye Uluslararası Tıp Bilimleri ve Estetik Akademisi – Tıbbi
            eğitimde ve estetik mükemmellikte dünya çapında öncülük ediyor.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:text-gold-light"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold uppercase tracking-wide text-gold-light">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold uppercase tracking-wide text-gold-light">
            Popular Courses
          </h3>
          <ul className="flex flex-col gap-2.5">
            {popularCourses.map((course) => (
              <li key={course}>
                <Link
                  href="/courses"
                  className="text-sm text-white/70 hover:text-white"
                >
                  {course}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold uppercase tracking-wide text-gold-light">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mt-0.5 shrink-0 text-gold-light"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <a
                href="mailto:support@turkishinternationalacademy.com"
                className="hover:text-white"
              >
                support@turkishinternationalacademy.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mt-0.5 shrink-0 text-gold-light"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+90655887051" className="hover:text-white">
                +90 65 588 7051
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mt-0.5 shrink-0 text-gold-light"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>16-C, Percy Street 1st floor, Istanbul, Turkey</span>
            </li>
          </ul>

          <div className="mt-2 flex flex-col gap-2">
            <p className="text-xs text-white/60">
              Newsletter for updates and offers.
            </p>
            {subscribed ? (
              <p className="flex items-center gap-1.5 text-sm font-medium text-gold-light">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Subscribed — thank you!
              </p>
            ) : (
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail.trim()) setSubscribed(true);
                }}
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full rounded-(--radius-full) border border-white/20 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <Button type="submit" variant="gold" size="sm">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>

      <div className="relative z-10 border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            Registered International Training Provider, Est. 2020 ·{" "}
            <span className="text-gold-light">TIA-TR-YKSB-2020-1042</span>
          </p>
          <p className="text-xs text-white/50">
            © 2026 Turkish International Academy. All rights reserved.
          </p>
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            <Link
              href="/privacy-policy"
              className="text-xs font-semibold text-white/80 underline decoration-gold/40 underline-offset-4 hover:text-gold-light hover:decoration-gold-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs font-semibold text-white/80 underline decoration-gold/40 underline-offset-4 hover:text-gold-light hover:decoration-gold-light"
            >
              Terms &amp; Conditions
            </Link>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
