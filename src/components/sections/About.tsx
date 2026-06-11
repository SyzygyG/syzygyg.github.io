import Image from "next/image";

import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section aria-labelledby="about-heading" className="section section--alt" id="about">
      <Container>
        <div className="about__grid">
          <aside className="about__sidebar">
            {profile.about.avatar.kind === "image" ? (
              <div className="about__avatar-wrap">
                <Image
                  alt={profile.about.avatar.alt}
                  className="about__avatar-image"
                  fill
                  sizes="200px"
                  src={
                    profile.about.avatar.src.startsWith("/")
                      ? profile.about.avatar.src
                      : `/${profile.about.avatar.src}`
                  }
                />
              </div>
            ) : (
              <div aria-label={profile.about.avatar.label} className="about__avatar-wrap" role="img">
                <span aria-hidden="true" className="about__avatar-placeholder">
                  {profile.about.avatar.initials}
                </span>
              </div>
            )}
            <dl className="about__meta">
              {profile.about.meta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    {item.value.map((valueLine) => (
                      <span className="about__meta-line" key={valueLine}>
                        {valueLine}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="about__content">
            <SectionHeading className="section-header--compact" section={profile.about.section} />
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div aria-label="Professional interests" className="about__interests">
              {profile.about.interests.map((interest) => (
                <Badge key={interest} variant="interest">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
