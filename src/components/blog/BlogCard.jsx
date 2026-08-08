import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

export function BlogCard({ post }) {
  return (
    <GlassCard
      variant="strong"
      className="group flex h-full flex-col overflow-hidden transition-transform duration-500 ease-(--ease-premium) hover:-translate-y-1.5"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 ease-(--ease-premium) group-hover:scale-105"
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-(--radius-full) glass-panel-dark px-3 py-1 text-xs font-semibold text-gold-300">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-lg font-semibold leading-snug text-mist-50">
          {post.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-mist-200/75">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-3 text-xs text-mist-200/55">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {post.readTime}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <span className="flex items-center gap-2 text-xs font-medium text-mist-200/70">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" />
            </svg>
            {post.author}
          </span>
          <Link
            href="/blog"
            className="group/link flex items-center gap-1.5 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
          >
            Read
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/link:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </GlassCard>
  );
}
