import { certifications, certificationsSection } from "@/data/certifications";
import { CertificationCard } from "@/components/cards/CertificationCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <section aria-labelledby="certs-heading" className="section" id="certifications">
      <Container>
        <SectionHeading section={certificationsSection} />
        <div className="certs__grid">
          {certifications.map((certification) => (
            <CertificationCard certification={certification} key={certification.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}
