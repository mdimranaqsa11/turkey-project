import { PageHero } from "@/components/ui/PageHero";
import { AccreditationIntro } from "@/components/accreditation/AccreditationIntro";
import { CPDAccreditation } from "@/components/accreditation/CPDAccreditation";
import { AccreditationProcess } from "@/components/accreditation/AccreditationProcess";
import { AccreditationBenefits } from "@/components/accreditation/AccreditationBenefits";
import { CertificateVerification } from "@/components/accreditation/CertificateVerification";
import { AccreditationCTA } from "@/components/accreditation/AccreditationCTA";

export const metadata = {
  title: "Accreditation & CPD",
  description:
    "TIAMA accreditation ensures global quality, safety, and professional integrity in medical science, aesthetics and cosmetology education — including CPD accreditation and certificate verification.",
  alternates: { canonical: "/accreditation-cpd" },
};

export default function AccreditationPage() {
  return (
    <>
      <PageHero
        eyebrow="Accreditation"
        title="Accreditation by TIAMA"
        description="Ensuring global quality, safety, and professional integrity in medical science, aesthetics and cosmetology education."
      />
      <AccreditationIntro />
      <CPDAccreditation />
      <AccreditationProcess />
      <AccreditationBenefits />
      <CertificateVerification />
      <AccreditationCTA />
    </>
  );
}
