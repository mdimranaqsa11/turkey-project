import { cn } from "@/lib/utils";

export function CheckList({ items, columns = 1, className }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3",
        columns === 2 && "sm:grid-cols-2",
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-(--radius-sm) border border-border bg-white px-4 py-3.5 text-sm leading-relaxed text-text"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 shrink-0 text-gold-dark"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          {item}
        </div>
      ))}
    </div>
  );
}
