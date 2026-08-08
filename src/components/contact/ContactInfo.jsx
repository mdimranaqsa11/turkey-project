import { GlassCard } from "@/components/ui/GlassCard";

const items = [
  {
    label: "Email",
    value: "info@turkeyinternationalacademy.com",
    note: "We reply within 24 hours",
    href: "mailto:info@turkeyinternationalacademy.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+90 65 588 7051",
    note: "We reply within 24 hours",
    href: "tel:+90655887051",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Istanbul, Turkey",
    note: "International Office",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export function ContactInfo() {
  return (
    <GlassCard variant="strong" className="flex flex-col gap-6 rounded-(--radius-lg) p-6 sm:p-8">
      <h2 className="font-display text-xl font-bold text-mist-50">
        Contact Information
      </h2>
      <div className="flex flex-col gap-5">
        {items.map((item) => {
          const Tag = item.href ? "a" : "div";
          return (
            <Tag
              key={item.label}
              href={item.href}
              className="flex items-start gap-4 group"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-(--radius-sm) bg-gradient-to-br from-gold-300 to-gold-500 text-ink-950">
                {item.icon}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-mist-200/60">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-mist-50 group-hover:text-gold-300 transition-colors">
                  {item.value}
                </p>
                <p className="text-xs text-mist-200/50">{item.note}</p>
              </div>
            </Tag>
          );
        })}
      </div>
    </GlassCard>
  );
}
