import { cn } from "@/lib/utils";

const variants = {
  light: "bg-white border border-border",
  strong: "bg-white border border-border shadow-(--shadow-md)",
  dark: "bg-navy text-white",
};

export function GlassCard({
  as: Tag = "div",
  variant = "light",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn("rounded-(--radius-lg)", variants[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
