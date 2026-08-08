import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-(--radius-full) px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 ease-(--ease-premium) active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 focus-visible:ring-gold-400 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-gradient-to-br from-gold-300 to-gold-500 text-ink-950 shadow-(--shadow-gold-glow) hover:-translate-y-0.5 hover:from-gold-300 hover:to-gold-400",
  gold: "bg-gradient-to-br from-gold-300 to-gold-500 text-ink-950 shadow-(--shadow-gold-glow) hover:-translate-y-0.5 hover:from-gold-300 hover:to-gold-400",
  royal:
    "bg-gradient-to-br from-royal-500 to-royal-400 text-white shadow-(--shadow-royal-glow) hover:-translate-y-0.5 hover:from-royal-400 hover:to-royal-300",
  glass:
    "glass-panel text-mist-100 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-(--shadow-glass-lg)",
  ghost: "text-mist-100/80 hover:text-mist-50 hover:bg-white/5",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  as,
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const Tag = as ?? (href ? Link : "button");

  return (
    <Tag href={href} className={classes} {...props}>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </Tag>
  );
}
