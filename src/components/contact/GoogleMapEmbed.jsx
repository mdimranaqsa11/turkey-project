import { GlassCard } from "@/components/ui/GlassCard";

const address = "16-C, Percy Street, Sirkeci, Istanbul, Turkey";
const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

export function GoogleMapEmbed() {
  return (
    <GlassCard variant="strong" className="relative rounded-(--radius-lg) p-2">
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-(--radius-full) border border-border bg-white px-3 py-1.5 text-xs font-semibold text-navy hover:text-gold-dark"
      >
        Open in Maps
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </a>
      <div className="relative h-72 w-full overflow-hidden rounded-(--radius-md)">
        <iframe
          title="TIAMA location on Google Maps"
          src={embedUrl}
          className="h-full w-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </GlassCard>
  );
}
