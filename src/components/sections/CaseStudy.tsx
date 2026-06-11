"use client";

import { useState } from "react";

import { caseStudy } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/helpers";

export function CaseStudy() {
  const [activePanelId, setActivePanelId] = useState(caseStudy.panels[0]?.id ?? "problem");
  const activePanel = caseStudy.panels.find((panel) => panel.id === activePanelId) ?? caseStudy.panels[0];

  return (
    <section aria-labelledby="case-study-heading" className="section case-study" id="case-study">
      <Container>
        <SectionHeading className="case-study__header" section={caseStudy.section} />

        <div className="case-study__grid">
          <nav aria-label="Case study sections" className="case-study__nav">
            <ul className="cs-nav-list" role="list">
              {caseStudy.panels.map((panel) => (
                <li key={panel.id}>
                  <button
                    className={cn("cs-nav-btn", panel.id === activePanelId && "active")}
                    onClick={() => setActivePanelId(panel.id)}
                    type="button"
                  >
                    {panel.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div aria-live="polite" className="case-study__content">
            <div aria-label={activePanel.label} className="cs-panel active" role="region">
              <h3>{activePanel.title}</h3>
              {activePanel.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {activePanel.bullets?.length ? (
                <ul>
                  {activePanel.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              {activePanel.metrics?.length ? (
                <div className="cs-result-grid">
                  {activePanel.metrics.map((metric) => (
                    <div className="cs-result" key={metric.label}>
                      <div className="cs-result__value">{metric.value}</div>
                      <div className="cs-result__label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
