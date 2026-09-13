# IMPLEMENTATION.md — Antigravity / Coding Handoff

## 1. Role of the coding agent

You are implementing an approved UI design.

You are NOT the designer.

Your job is to translate:
1. page screenshot reference
2. DESIGN.md
3. CONTENT.md
4. ROUTES.md
5. existing reusable components

into React + Tailwind as faithfully as possible.

Do not invent visual or content decisions when the source already defines them.

---

## 2. Tech stack

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React
- JavaScript or JSX

Do not introduce another UI framework unless explicitly requested.

---

## 3. Source-of-truth priority

When sources conflict, use this order:

1. Current approved screenshot for the page
2. DESIGN.md
3. CONTENT.md
4. ROUTES.md
5. Existing shared components
6. Existing project conventions

Never resolve ambiguity by inventing a new section or visual pattern.

---

## 4. Project structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── PageContainer.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── TechTag.jsx
│   │   └── IconLink.jsx
│   └── project/
│       ├── FeaturedProject.jsx
│       └── ProjectCard.jsx
├── data/
│   ├── projects.js
│   ├── experience.js
│   ├── skills.js
│   └── awards.js
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Services.jsx
│   └── Contact.jsx
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```

---

## 5. Shared components

The following must be shared and reused:

- Navbar
- Footer
- PageContainer
- Button
- SectionHeader
- TechTag
- ProjectCard

Do not rebuild Navbar or Footer separately per page.

Active navbar state must be route-driven.

---

## 6. Content rules

Read CONTENT.md before implementing any page.

Never invent:
- fake project names
- fake metrics
- fake client names
- fake user counts
- fake performance claims
- fake technologies
- fake work experience
- fake awards

If data is missing, leave the section out or use an explicit temporary placeholder in development.

Do not publish placeholders.

---

## 7. Visual rules

Follow DESIGN.md exactly.

Do not add:
- emoji
- Unicode pictograms
- terminal/HUD decorations
- fake system status
- uptime or ping counters
- bright graph-paper grids
- random glow
- particles
- decorative badges
- excessive pill components

Use Lucide React for interface icons.

Do not use more than one icon family.

---

## 8. Background

Base background must remain near-black.

If a grid is used:
- 64px cell
- 1px line
- rgba(255,255,255,0.025)
- maximum visual opacity around 3%
- faded with a mask toward edges

The grid must never compete with content.

---

## 9. Responsive behavior

Desktop first because the approved references are desktop.

Breakpoints:
- mobile: < 768px
- tablet: 768–1023px
- desktop: >= 1024px

Preserve the same hierarchy on all breakpoints.

Do not simply scale the desktop page down.

On mobile:
- stack major two-column sections
- keep minimum touch target 44x44px
- use 20–24px horizontal page padding
- use a compact navigation drawer/menu
- avoid horizontal overflow

---

## 10. Accessibility

Minimum:
- semantic HTML
- visible keyboard focus
- body text contrast >= 4.5:1
- large text contrast >= 3:1
- buttons and controls >= 44x44px where practical
- proper form labels
- meaningful alt text
- external links identifiable
- no color-only status meaning

---

## 11. Data architecture

Project content belongs in `src/data/projects.js`.

Do not hard-code repeated ProjectCard instances directly into Projects.jsx.

Recommended project shape:

```js
{
  slug: "smart-infrastructure-reporting",
  title: "Smart Infrastructure Reporting & AI-Driven Prioritization System",
  context: "Competition / Team Project",
  role: "Backend Developer",
  description: "...",
  stack: ["Laravel", "Laravel Mail", "Eloquent ORM"],
  achievement: "1st Place — PERMIKOMNAS Hackathon 2025",
  featured: true,
  repository: null,
  liveUrl: null
}
```

Render links only when actual URLs exist.

Experience, awards, and skills should also be stored as data, not duplicated across pages.

---

## 12. Page implementation workflow

Implement ONE page at a time.

For each page:

1. Open the page screenshot reference.
2. Read DESIGN.md.
3. Read CONTENT.md.
4. Read ROUTES.md.
5. Inspect existing shared components.
6. Implement layout.
7. Compare proportions against screenshot.
8. Fix only visible discrepancies.
9. Verify responsive behavior.
10. Stop.

Do not automatically continue to the next page.

---

## 13. Locked components

Once a page/component is approved, mark it here.

### Locked
- [ ] Navbar
- [ ] Footer
- [ ] Home
- [ ] About
- [ ] Projects
- [ ] Experience
- [ ] Services
- [ ] Contact

Before editing a locked shared component:
- identify every page it affects
- only modify it with explicit approval

---

## 14. Prompt style for Antigravity

Good:

> Implement ONLY the Projects page. Read `DESIGN.md`, `CONTENT.md`, `ROUTES.md`, and `references/projects.png`. Reuse the existing Navbar, Footer, PageContainer and ProjectCard. Match the screenshot closely. Do not redesign or invent content. Stop after Projects is complete.

Bad:

> Build the entire portfolio and make it look modern.

Good correction:

> Do not redesign the page. Only fix these differences: card width is too small, section gap should be 64px, headline line-height is too loose, and the footer is 20px too tall. Do not change anything else.

---

## 15. Definition of done

A page is done when:
- layout closely matches the approved reference
- content matches CONTENT.md
- no invented content exists
- no emoji/random icon exists
- shared components are reused
- desktop and mobile have no overflow
- keyboard focus works
- links work
- no console errors
- page is visually consistent with Home
