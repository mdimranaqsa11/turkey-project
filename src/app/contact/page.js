import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { GoogleMapEmbed } from "@/components/contact/GoogleMapEmbed";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with TIAMA — questions about accreditation, courses, or institutional partnerships. We typically respond within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get In Touch"
        description="Have questions about our programs? We're here to help you achieve excellence in all aspects of medical education."
      />

      <section className="py-24 sm:py-28">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="flex flex-col gap-8 lg:col-span-2">
            <Reveal direction="right">
              <ContactInfo />
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <GoogleMapEmbed />
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
