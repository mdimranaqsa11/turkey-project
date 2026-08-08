import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export function ServiceNotice({ className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      <GlassCard
        variant="light"
        className="flex flex-col items-center gap-3 rounded-(--radius-md) p-6 text-center"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        </span>
        <p className="text-sm leading-relaxed text-mist-100 sm:text-base">
          We&apos;re experiencing some issue processing this right now.
          Kindly contact us at{" "}
          <a
            href="mailto:support@turkishinternationalacademy.com"
            className="font-semibold text-gold-300 hover:text-gold-200"
          >
            support@turkishinternationalacademy.com
          </a>{" "}
          and our team will be happy to help.
        </p>
      </GlassCard>
    </motion.div>
  );
}
