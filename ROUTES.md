# ROUTES.md — Ahmad Nur Ain Portfolio

## Public routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | First impression, positioning, CTA to projects/contact |
| `/about` | About | Professional story, education, focus |
| `/projects` | Projects | Real projects, role, stack, verified outcomes |
| `/experience` | Experience | Internship, practicum assistant, accreditation/team experience |
| `/services` | Services | Freelance-friendly services based on demonstrated skills |
| `/contact` | Contact | Recruiter/client contact and inquiry form |
| `/resume` | Resume redirect/download | Opens or downloads the current PDF resume |

## Navigation

Desktop:
- Projects
- About
- Experience
- Services
- Contact
- Resume (CTA)

Mobile:
- Same items inside a compact drawer/menu
- Resume remains visually distinct

## Route rules

1. Use React Router.
2. Navbar and Footer are shared across all routes.
3. Active navigation state must derive from the current route.
4. Do not duplicate page-level layout wrappers.
5. `/resume` should point to the final CV PDF in `/public`, e.g. `/Ahmad_Nurain_CV_Backend_Developer.pdf`.
6. External links:
   - LinkedIn opens in a new tab.
   - GitHub opens in a new tab.
7. Project detail pages are optional. If added later, use:
   `/projects/:slug`
8. Do not create empty routes just to fill the navigation.
