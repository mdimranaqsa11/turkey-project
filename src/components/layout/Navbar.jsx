"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Accreditation & CPD", href: "/accreditation-cpd" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Turkish International Academy"
            width={40}
            height={40}
            className="h-9 w-9 sm:h-10 sm:w-10"
            priority
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-sm font-bold tracking-tight text-navy">
              Turkish International
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-dark">
              Academy
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "border-b-2 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em]",
                  active
                    ? "border-gold text-navy"
                    : "border-transparent text-muted hover:text-navy hover:border-gold"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/login" variant="ghost" size="sm">
            Login
          </Button>
          <Button href="/register" variant="primary" size="sm">
            Apply Now
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-(--radius-sm) border border-border lg:hidden"
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            {open ? (
              <>
                <span className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 rotate-45 rounded-full bg-navy" />
                <span className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 -rotate-45 rounded-full bg-navy" />
              </>
            ) : (
              <>
                <span className="h-0.5 w-full rounded-full bg-navy" />
                <span className="h-0.5 w-full rounded-full bg-navy" />
                <span className="h-0.5 w-full rounded-full bg-navy" />
              </>
            )}
          </span>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="flex flex-col gap-1 p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-(--radius-sm) px-3 py-2.5 text-sm font-medium hover:bg-ivory",
                  pathname === link.href ? "text-gold-dark" : "text-text"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 px-3 pb-1">
              <Button href="/login" variant="glass" size="sm" className="flex-1">
                Login
              </Button>
              <Button href="/register" variant="primary" size="sm" className="flex-1">
                Apply Now
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
