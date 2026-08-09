import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Turkish International Academy collects, uses, and protects your information.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "1. About TIAMA",
    body: (
      <p>
        <strong className="text-white">
          Turkey International Academy of Medical Science &amp; Aesthetics
          (TIAMA)
        </strong>{" "}
        is an independent private educational and certification body. We provide
        professional training, skill-enhancement programs, and continuing
        education for healthcare and aesthetic professionals worldwide.
      </p>
    ),
  },
  {
    title: "2. Information We Collect",
    body: (
      <>
        <p>We may collect the following information:</p>
        <ul>
          <li>Full name, email address, phone number</li>
          <li>Educational and professional details (for eligibility)</li>
          <li>Payment and transaction details (processed securely)</li>
          <li>Login credentials and course progress</li>
          <li>IP address, device information, and cookies</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    body: (
      <ul>
        <li>To provide access to courses and learning materials</li>
        <li>To issue certificates upon course completion</li>
        <li>To process payments and invoices</li>
        <li>To communicate updates, support, and notifications</li>
        <li>To improve website performance and user experience</li>
      </ul>
    ),
  },
  {
    title: "4. Data Sharing & Third Parties",
    body: (
      <p>
        We do not sell or rent personal data. Information may be shared only
        with trusted third parties such as payment processors, technical service
        providers, or legal authorities when required by law.
      </p>
    ),
  },
  {
    title: "5. Data Security",
    body: (
      <p>
        We use industry-standard security measures to protect your personal
        data. However, no online system can guarantee absolute security.
      </p>
    ),
  },
  {
    title: "6. Your Rights",
    body: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent for communications</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Policy Updates",
    body: (
      <p>
        TIAMA may update this Privacy Policy from time to time. Continued use of
        our website constitutes acceptance of the revised policy.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Turkish International Academy collects, uses, and protects your information."
      />

      <section className="py-24 sm:py-28">
        <Container className="max-w-3xl">
          <GlassCard
            variant="light"
            className="flex flex-col gap-10 p-8 sm:p-10"
          >
            {sections.map((section, index) => (
              <div key={section.title} className="flex flex-col gap-3">
                <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-3 text-sm leading-relaxed text-mist-100/75 sm:text-base [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_li]:list-disc">
                  {section.body}
                </div>

                {index === 5 ? (
                  <div className="mt-4 rounded-(--radius-md) border-l-4 border-gold-400 bg-gold-400/10 p-6">
                    <h3 className="font-display text-lg font-semibold text-gold-300">
                      Important Certification Disclaimer
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist-100/80 sm:text-base">
                      TIAMA certifications are issued for professional
                      development and educational purposes only. They are{" "}
                      <strong className="text-white">
                        not equivalent to government-recognized medical
                        degrees
                      </strong>{" "}
                      and do not grant a license or legal authority to
                      practice medicine or aesthetics in any country.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-mist-100/80 sm:text-base">
                      Medical practice requires valid licensing from the
                      appropriate local or national regulatory authority.
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </GlassCard>
        </Container>
      </section>
    </>
  );
}
