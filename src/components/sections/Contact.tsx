import { contactLinks, contactListAriaLabel, contactSection } from "@/data/socials";
import { Container } from "@/components/ui/Container";
import { ContactIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section aria-labelledby="contact-heading" className="section" id="contact">
      <Container narrow>
        <div className="contact__grid contact__grid--single">
          <div className="contact__info">
            <SectionHeading className="section-header--compact" section={contactSection} />
            <ul aria-label={contactListAriaLabel} className="contact__list">
              {contactLinks.map((link) => (
                <li className="contact__item" key={link.label}>
                  <div aria-hidden="true" className="contact__item-icon">
                    <ContactIcon type={link.icon} />
                  </div>
                  <div>
                    <span className="contact__item-label">{link.label}</span>
                    <div className="contact__item-value">
                      <a
                        href={link.href}
                        rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                      >
                        {link.value}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
