import { GlassCard } from "@/components/ui/GlassCard";

function initialsOf(name) {
  return name
    .replace(/^(PROF\.|Dr\.)\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function PersonCard({ name, credentials, bio }) {
  return (
    <GlassCard variant="strong" className="flex h-full flex-col gap-4 rounded-(--radius-md) p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal-500 to-gold-400 font-display text-lg font-bold text-ink-950">
          {initialsOf(name)}
        </span>
        <div>
          <h3 className="font-display text-base font-bold text-gold-300">{name}</h3>
          <p className="text-xs text-mist-200/60">{credentials}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-mist-200/80">{bio}</p>
    </GlassCard>
  );
}
