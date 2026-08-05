"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Accreditation & CFO", href: "/accreditation-cfo" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container
        className={cn(
          "mt-3 flex items-center justify-between gap-4 rounded-(--radius-lg) px-4 py-2.5 transition-all duration-500 ease-(--ease-premium) sm:mt-4 sm:px-5",
          scrolled ? "glass-panel-strong" : "bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Turkey International Academy"
            width={40}
            height={40}
            className="h-9 w-9 sm:h-10 sm:w-10"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-bold tracking-tight text-ink-950 sm:text-base">
              Turkey International
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-royal-600">
              Academy
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative rounded-(--radius-full) px-4 py-2 text-sm font-medium text-ink-800/80 transition-colors duration-300 hover:text-ink-950"
            >
              {link.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-royal-500 to-gold-500 transition-transform duration-300 ease-(--ease-premium) group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/login" variant="ghost" size="sm">
            Login
          </Button>
          <Button href="/register" variant="primary" size="sm">
            Register
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="glass-panel flex h-10 w-10 items-center justify-center rounded-(--radius-sm) lg:hidden"
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-ink-900 transition-transform duration-300",
                open && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-ink-900 transition-opacity duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-ink-900 transition-transform duration-300",
                open && "-translate-y-[7px] -rotate-45"
              )}
            />
          </span>
        </button>
      </Container>

      <div
        className={cn(
          "mx-4 mt-2 overflow-hidden rounded-(--radius-lg) glass-panel-strong transition-all duration-400 ease-(--ease-premium) lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-(--radius-sm) px-3 py-2.5 text-sm font-medium text-ink-800 hover:bg-white/50"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex gap-2 px-3 pb-1">
            <Button href="/login" variant="glass" size="sm" className="flex-1">
              Login
            </Button>
            <Button href="/register" variant="primary" size="sm" className="flex-1">
              Register
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
