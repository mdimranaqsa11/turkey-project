import { cn } from "@/lib/utils";

export function Eyebrow({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-(--radius-full) glass-panel px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold-300",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-mist-50 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-mist-200/80 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
