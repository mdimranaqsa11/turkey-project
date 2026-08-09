import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "Please read these terms carefully before enrolling in TIAMA programs.",
  alternates: { canonical: "/terms" },
};

const listClass =
  "flex flex-col gap-3 text-sm leading-relaxed text-mist-100/75 sm:text-base [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_li]:list-disc [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-2 [&_ol]:pl-5 [&_ol]:list-decimal";

const sections = [
  {
    title: "1. General Terms",
    body: (
      <>
        <p>
          These terms and conditions govern your use of TIAMA&apos;s
          educational programs, courses, and certification services.
        </p>
        <p>
          TIAMA reserves the right to modify these terms at any time. Changes
          will be effective immediately upon posting on our website.
        </p>
      </>
    ),
  },
  {
    title: "2. Enrollment and Registration",
    body: (
      <ol>
        <li>
          All applicants must meet the eligibility criteria specified for
          each program
        </li>
        <li>
          Applicants must provide accurate and complete information during
          registration
        </li>
        <li>
          TIAMA reserves the right to accept or reject any application at its
          discretion
        </li>
        <li>
          Enrollment is confirmed only after full payment or approved payment
          plan is established
        </li>
      </ol>
    ),
  },
  {
    title: "3. Payment Terms",
    body: (
      <>
        <p>
          <strong className="text-white">Course Fees:</strong> All course
          fees must be paid in full or according to the selected payment plan
          before the course begins. Enrollment will be confirmed only after
          successful payment processing through Stripe.
        </p>
        <p>
          <strong className="text-white">Payment Processing:</strong> All
          payments are securely processed through Stripe. We do not store or
          have access to your full credit card details. Stripe&apos;s
          encryption and PCI-compliant system ensures safe and secure
          transactions.
        </p>
        <p>
          <strong className="text-white">Payment Methods:</strong> We accept
          all major credit and debit cards, UPI, and other payment methods
          supported by Stripe in your region.
        </p>
        <p>
          <strong className="text-white">Non-Refundable Payments:</strong>{" "}
          All payments made through Stripe are final and non-refundable.
          Please review all course details carefully before completing your
          payment.
        </p>
        <p>
          <strong className="text-white">Late or Failed Payments:</strong>{" "}
          For installment plans, late or failed payments may result in
          temporary suspension of course access until the balance is cleared.
        </p>
      </>
    ),
  },
  {
    title: "4. Refund Policy",
    highlight: "gold",
    body: (
      <ul>
        <li>
          All payments made towards our courses or services are
          non-refundable under any circumstances.
        </li>
        <li>
          Once a course or service has been purchased, no refunds,
          cancellations, or credits will be issued.
        </li>
        <li>
          Examination or additional service fees are also strictly
          non-refundable.
        </li>
        <li>
          Please ensure you review all course details carefully before
          making a purchase.
        </li>
      </ul>
    ),
  },
  {
    title: "5. Course Access and Content",
    body: (
      <>
        <p>
          Students are granted access to course materials for the duration
          specified in their enrollment.
        </p>
        <p>
          All course materials, including videos, documents, and
          assessments, are proprietary to TIAMA and protected by copyright
          law.
        </p>
        <p>
          Unauthorized sharing, distribution, or reproduction of course
          materials is strictly prohibited and may result in immediate
          termination of enrollment without refund.
        </p>
      </>
    ),
  },
  {
    title: "6. Certification Requirements",
    body: (
      <>
        <p>To receive TIAMA certification, students must:</p>
        <ul>
          <li>Complete all required coursework and practical hours</li>
          <li>Pass all required examinations with minimum qualifying scores</li>
          <li>
            Demonstrate clinical competence as evaluated by TIAMA instructors
          </li>
          <li>Maintain good standing throughout the program duration</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Limitation of Liability",
    highlight: "red",
    body: (
      <>
        <p>
          <strong className="text-white">Important:</strong> TIAMA
          certification does not constitute a license to practice medicine
          or aesthetics.
        </p>
        <p>
          Students are responsible for obtaining all necessary licenses and
          permits from relevant local, state, or national authorities before
          practicing.
        </p>
        <p>
          TIAMA is not liable for any consequences arising from students
          practicing without proper local licensure.
        </p>
      </>
    ),
  },
  {
    title: "8. Code of Conduct",
    body: (
      <>
        <p>
          Students are expected to maintain professional behavior and
          ethical standards throughout their enrollment.
        </p>
        <p>
          Violations of academic integrity, including plagiarism or
          cheating, may result in immediate dismissal without refund.
        </p>
        <p>
          Harassment, discrimination, or disrespectful behavior toward
          instructors or fellow students will not be tolerated.
        </p>
      </>
    ),
  },
  {
    title: "9. Termination of Enrollment",
    body: (
      <>
        <p>TIAMA reserves the right to terminate a student&apos;s enrollment for:</p>
        <ul>
          <li>Violation of these terms and conditions</li>
          <li>Non-payment of fees</li>
          <li>Academic dishonesty or misconduct</li>
          <li>Failure to maintain program requirements</li>
        </ul>
      </>
    ),
  },
  {
    title: "10. Contact Us",
    body: (
      <p>
        For questions regarding these terms and conditions, please contact
        TIAMA administration through our official channels.
      </p>
    ),
  },
  {
    title: "11. Governing Law & Jurisdiction",
    body: (
      <p>
        These Terms and Conditions shall be governed by and interpreted in
        accordance with the applicable laws of the jurisdiction where TIAMA
        operates. Any disputes arising from these terms shall be subject to
        the exclusive jurisdiction of the competent courts.
      </p>
    ),
  },
  {
    title: "12. Age & Eligibility Requirement",
    body: (
      <p>
        Enrollment in TIAMA programs is restricted to individuals who are at
        least 18 years of age. By enrolling, you confirm that all
        information provided regarding your qualifications and eligibility
        is accurate and truthful.
      </p>
    ),
  },
  {
    title: "13. Medical Responsibility Disclaimer",
    highlight: "red",
    body: (
      <>
        <p>
          All educational content provided by TIAMA is intended strictly for
          academic learning and professional development purposes.
        </p>
        <p>
          TIAMA does not provide medical advice, diagnosis, or treatment.
          Clinical decisions and patient care remain the sole responsibility
          of the licensed medical professional.
        </p>
      </>
    ),
  },
  {
    title: "14. Force Majeure",
    body: (
      <p>
        TIAMA shall not be held liable for any failure or delay in
        performance caused by events beyond reasonable control, including
        but not limited to technical failures, natural disasters, government
        actions, pandemics, or internet service disruptions.
      </p>
    ),
  },
];

const highlightClasses = {
  gold: "border-gold-400 bg-gold-400/10",
  red: "border-rose-400 bg-rose-400/10",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        description="Please read these terms carefully before enrolling in TIAMA programs."
      />

      <section className="py-24 sm:py-28">
        <Container className="flex max-w-3xl flex-col gap-8">
          <Reveal>
            <GlassCard
              variant="light"
              className="flex items-start gap-3 rounded-(--radius-md) border-l-4 border-royal-400 bg-royal-400/10 p-6"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-royal-400/20 text-royal-100">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </span>
              <div>
                <h2 className="font-display text-base font-semibold text-white sm:text-lg">
                  Acceptance of Terms
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-mist-100/75 sm:text-base">
                  By enrolling in any TIAMA course or program, you agree to
                  be bound by these Terms and Conditions.
                </p>
              </div>
            </GlassCard>
          </Reveal>

          <GlassCard
            variant="light"
            className="flex flex-col gap-10 p-8 sm:p-10"
          >
            {sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-3">
                <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {section.title}
                </h2>
                {section.highlight ? (
                  <div
                    className={`rounded-(--radius-md) border-l-4 p-6 ${highlightClasses[section.highlight]}`}
                  >
                    <div className={listClass}>{section.body}</div>
                  </div>
                ) : (
                  <div className={listClass}>{section.body}</div>
                )}
              </div>
            ))}
          </GlassCard>
        </Container>
      </section>
    </>
  );
}
