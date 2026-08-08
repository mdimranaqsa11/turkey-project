import { cn } from "@/lib/utils";

const variants = {
  light: "glass-panel",
  strong: "glass-panel-strong",
  dark: "glass-panel-dark text-mist-50",
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
      className={cn(
        "rounded-(--radius-lg) transition-transform duration-500 ease-(--ease-premium)",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
