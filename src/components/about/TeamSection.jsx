import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { PersonCard } from "@/components/about/PersonCard";

const leadership = [
  {
    name: "PROF. Dr. Ahmet Kaya",
    credentials: "MBBS, MD, CCST, FRCR, (Chairman / Founder of TIAMA)",
    bio: "As Chairman, Prof. Dr. Ahmet Kaya has been the guiding force behind TIAMA's global reputation for excellence. His leadership ensures that every initiative aligns with international standards of quality, ethics, and innovation in medical science & aesthetic education.",
  },
  {
    name: "PROF. Dr. Emily Carter",
    credentials: "MBBS, MS, MPH, MRCP, (Director)",
    bio: "As Director, Dr. Emily Carter brings an international perspective to TIAMA's academic excellence. Her leadership bridges innovation and education, empowering students to set new global benchmarks in medical science aesthetics and professional ethics.",
  },
  {
    name: "Dr. Selim Arslan",
    credentials: "MBBS, MD, (Program Coordinator)",
    bio: "As Program Coordinator, Dr. Selim Arslan ensures that every program at TIAMA delivers practical knowledge grounded in science. His mentorship approach helps participants grow into skilled, confident, and globally competent professionals.",
  },
  {
    name: "Dr. S. S Mathew",
    credentials: "MD, MPH, FRCP, (International Faculty & Coordinator)",
    bio: "As an International Faculty & Coordinator, Dr. S. Mathews brings a wealth of global experience and academic expertise to TIAMA. His leadership ensures that each program maintains world-class standards and fosters excellence among participants.",
  },
];

const team = [
  {
    name: "Dr. Michael Roberts",
    credentials: "MBBS, MD, FASPS",
    bio: "Dr. Michael Roberts is a senior trainer at TIAMA, contributing his expertise to professional education, workshops, and advanced training programs.",
  },
  {
    name: "Dr. Elif Yilmaz",
    credentials: "MBBS, MD, FACMS",
    bio: "As a core faculty member at TIAMA, Dr. Elif Yilmaz plays an active role in mentoring students and delivering hands-on aesthetic training.",
  },
  {
    name: "Dr. James Anderson",
    credentials: "MBBS, MS",
    bio: "Dr. James Anderson is associated with TIAMA as an academic mentor, supporting skill development through structured learning and guidance.",
  },
  {
    name: "Dr. Sarah Mitchell",
    credentials: "MD, MPH, FACP",
    bio: "At TIAMA, Dr. Sarah Mitchell contributes to educational initiatives, focusing on knowledge sharing and professional growth.",
  },
  {
    name: "Dr. Mohammed Hassan",
    credentials: "MBBS, MD",
    bio: "Dr. Mohammed Hassan serves as a trainer at TIAMA, supporting students through academic instruction and practical demonstrations.",
  },
  {
    name: "Dr. Rachel Thompson",
    credentials: "MD, FAAD, FASDS",
    bio: "Dr. Rachel Thompson is part of the TIAMA teaching faculty, dedicated to professional training and educational excellence.",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-24">
        <div className="flex flex-col gap-12">
          <SectionHeading
            align="left"
            title={
              <>
                Meet the Head{" "}
                <span className="text-gold-dark">of TIAMA</span>
              </>
            }
          />
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {leadership.map((person) => (
              <StaggerItem key={person.name}>
                <PersonCard {...person} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <div className="flex flex-col gap-12">
          <SectionHeading
            align="left"
            title={
              <>
                Meet the Expert{" "}
                <span className="text-gold-dark">Team of TIAMA</span>
              </>
            }
          />
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <StaggerItem key={person.name}>
                <PersonCard {...person} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
