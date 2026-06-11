import { projects, projectsSection } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="section section--alt" id="projects">
      <Container>
        <SectionHeading section={projectsSection} />
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
