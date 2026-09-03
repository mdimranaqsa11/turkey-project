import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/motion/Reveal";

export function CertificateVerification() {
  return (
    <section className="py-24 sm:py-28">
      <Container className="flex flex-col gap-10">
        <Reveal className="flex flex-col gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Certificate Verification
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Every certificate issued by an accredited institution contains a
            unique Accreditation ID / QR code. Students and organizations
            can verify authenticity instantly through our online
            verification portal.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard
            variant="light"
            className="flex items-start gap-4 rounded-(--radius-md) p-6"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0 text-gold-dark"
            >
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
            <p className="text-sm leading-relaxed text-muted">
              <span className="font-semibold text-navy">Disclaimer: </span>
              TIAMA accreditation is a private professional certification
              for institutional training quality. It does not grant or
              replace any government medical license, specialization
              degree, or regulatory authority approval. Acceptance depends
              on local regulations of each country.
            </p>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
