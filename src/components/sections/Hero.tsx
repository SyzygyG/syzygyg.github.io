import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DownloadIcon, FolderIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="hero">
      <Container>
        <p className="hero__kicker">{profile.hero.availabilityLabel}</p>
        <h1 className="hero__heading" id="hero-heading">
          {profile.hero.heading.map((segment, index) => (
            <span key={segment.text}>
              {segment.emphasis ? <em>{segment.text}</em> : segment.text}
              {index < profile.hero.heading.length - 1 ? <br /> : null}
            </span>
          ))}
        </h1>
        <p className="hero__sub">{profile.hero.subcopy}</p>
        <div className="hero__actions">
          {profile.hero.actions.map((action) => (
            <Button
              download={action.download}
              href={action.href}
              key={action.label}
              rel={action.rel}
              target={action.target}
              variant={action.variant}
            >
              {action.icon === "folder" ? <FolderIcon /> : null}
              {action.icon === "download" ? <DownloadIcon /> : null}
              {action.label}
            </Button>
          ))}
        </div>
        <div className="hero__stack">
          <span className="hero__stack-label">{profile.hero.stackLabel} -</span>
          {profile.coreStack.map((item) => (
            <Badge key={item} variant="stack">
              {item}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
