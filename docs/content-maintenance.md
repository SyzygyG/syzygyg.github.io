# Content Maintenance Guide

This repo is easiest to maintain when content edits stay in `src/data/` and components stay presentational.

## Single Source of Truth

- `src/data/profile.ts`: owner identity, hero/about/resume content, learning bar, and profile placeholders
- `src/data/navigation.ts`: primary navigation labels and anchors
- `src/data/skills.ts`: skills section intro, grouped skills, and the current audit note
- `src/data/projects.ts`: projects section intro, project cards, case study copy, and media placeholders
- `src/data/experience.ts`: experience section intro and experience entries
- `src/data/certifications.ts`: certifications section intro and credential entries
- `src/data/socials.ts`: contact section intro, contact links, and footer copy

## Section Ownership

- `Hero`, `About`, `Resume`: read from `profile.ts`
- `Skills`: reads from `skills.ts`
- `Projects` and `CaseStudy`: read from `projects.ts`
- `Experience`: reads from `experience.ts`
- `Certifications`: read from `certifications.ts`
- `Contact` and `Footer`: read from `socials.ts`
- `Navbar`: reads from `navigation.ts`

## Placeholder Workflow

- Keep placeholders explicit in data with `kind: "placeholder"` and a `todo` string that starts with `TODO: replace`.
- When the real asset is ready, swap the data entry to `kind: "image"` and provide the asset path plus alt text.
- Store static assets in `public/` and reference them with static-export-safe relative paths such as `images/...` or `documents/...`.

## Review Notes

- `src/data/skills.ts` currently carries an audit note because the inventory may include entries that need owner confirmation.
- Treat that note as a reminder to verify the list against the resume and project history before considering it final.

## Historical Docs

- Files in `docs/superpowers/` describe the original refactor process.
- They are historical records, not the current operating instructions for day-to-day maintenance.
