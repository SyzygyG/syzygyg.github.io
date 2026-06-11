import { skillGroups, skillsSection } from "@/data/skills";
import { SkillCard } from "@/components/cards/SkillCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="section" id="skills">
      <Container>
        <SectionHeading section={skillsSection} />
        <div className="skills__grid" role="list">
          {skillGroups.map((group) => (
            <SkillCard group={group} key={group.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}
