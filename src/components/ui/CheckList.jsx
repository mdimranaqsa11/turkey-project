import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function CheckList({ items, columns = 1, className }) {
  return (
    <StaggerGroup
      className={cn(
        "grid grid-cols-1 gap-3",
        columns === 2 && "sm:grid-cols-2",
        className
      )}
    >
      {items.map((item) => (
        <StaggerItem key={item}>
          <div className="glass-panel flex items-start gap-3 rounded-(--radius-sm) px-4 py-3.5 text-sm leading-relaxed text-mist-100">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0 text-gold-300"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {item}
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
