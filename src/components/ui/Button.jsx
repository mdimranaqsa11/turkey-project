import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-(--radius-sm) px-6 py-3 text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-gold text-navy-deep hover:bg-gold-dark",
  gold: "bg-gold text-navy-deep hover:bg-gold-dark",
  royal: "bg-blue text-white hover:bg-navy",
  glass: "bg-white border border-border text-navy hover:bg-ivory",
  ghost: "text-navy/80 hover:text-navy hover:bg-navy/5",
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
