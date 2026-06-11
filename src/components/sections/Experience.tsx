import { experienceItems, experienceSection } from "@/data/experience";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="section section--alt" id="experience">
      <Container>
        <SectionHeading section={experienceSection} />
        <div className="experience__list" role="list">
          {experienceItems.map((item) => (
            <ExperienceCard item={item} key={`${item.company}-${item.role}`} />
          ))}
        </div>
      </Container>
    </section>
  );
}
