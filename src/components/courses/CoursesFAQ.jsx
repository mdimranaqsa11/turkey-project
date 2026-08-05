import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";

const faqs = [
  {
    question: "What are the eligibility criteria for these courses?",
    answer:
      "Eligibility varies by course. Certification courses typically require basic medical qualifications (MBBS/BDS), while fellowship programs may require additional clinical experience. Specific requirements are listed in each course description.",
  },
  {
    question: "How long do the courses take to complete?",
    answer:
      "Course duration varies: Certification courses typically range from 3-6 months, Fellowship programs are 1-2 years, and specialized short courses may be completed in 3 to 6 months depending on the intensity.",
  },
  {
    question: "Are these courses recognized internationally?",
    answer:
      "Our online learning programs are developed in alignment with internationally recognized standards, and you will receive a CPD-based certificate of completion upon successfully finishing your course.",
  },
  {
    question: "What is the mode of learning - online or offline?",
    answer:
      "We offer flexible learning formats, including online lectures, hybrid programs, and intensive in-person online workshops. Each course is delivered in the format that best supports effective learning.",
  },
  {
    question: "Do you provide placement assistance after course completion?",
    answer:
      "Our online programs are designed to help you develop useful skills and confidence in your chosen area. Although our offerings center purely on learning, many students use these skills to pursue their own career goals.",
  },
  {
    question: "Is EMI facility available for course fees?",
    answer:
      "Yes, we offer easy monthly installment options for all our courses. Contact us for more details about EMI plans and payment options.",
  },
];

export function CoursesFAQ() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our courses"
        />
        <Reveal className="w-full max-w-3xl">
          <Accordion items={faqs} />
        </Reveal>
      </Container>
    </section>
  );
}
