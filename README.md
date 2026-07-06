# Saurabh Kumar — Portfolio

A dark-themed, glassmorphic developer portfolio built with React + Vite. Designed around a
"code editor" visual language (mono tags, comment-style section labels, terminal-bar hero card)
since the audience is technical recruiters and the subject is a CS/developer profile.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Folder structure

```
src/
  components/        One folder per section, each with its own .jsx + .css
    Navbar/
    Hero/
    About/
    Skills/
    Projects/
    Education/
    Certificates/
    Contact/
    Footer/
    ParticleBackground/   reusable canvas background (used in Hero)
    ScrollReveal/          reusable scroll-in-view animation wrapper
  data/               Plain JS files — edit these to change site content
    siteConfig.js     name, profession, bio, contact info, social links, resume path
    skillsData.js     skill categories + proficiency levels
    projectsData.js   project cards (title, description, stack, links)
    educationData.js  education timeline entries
    certificatesData.js  certificate cards
  styles/
    tokens.css        design tokens — colors, type scale, spacing, radius, shadows
    global.css        reset + shared utility classes (.btn, .glass-card, .tag, .section, etc.)
  hooks.js            useActiveSection (navbar highlighting), useScrolled (sticky nav state)
  App.jsx             assembles all sections
  main.jsx            entry point
```

## Editing content — everything is data-driven

You should rarely need to touch component code to update content:

- **Name, profession, tagline, bio, contact info, socials, resume link** → `src/data/siteConfig.js`
- **Skills + proficiency %** → `src/data/skillsData.js`
- **Projects** → `src/data/projectsData.js` (set `image` to a URL/import to replace the placeholder)
- **Education timeline** → `src/data/educationData.js`
- **Certificates** → `src/data/certificatesData.js`

### Swapping the profile photo
Set `profileImage` in `siteConfig.js` to an image path (e.g. `/profile.jpg` placed in `public/`)
or an imported asset. Leave it `null` to keep the generated initials placeholder.

### Adding your resume
Drop a PDF into `public/resume.pdf` (or update `resumeUrl` in `siteConfig.js` to point elsewhere).
The "Download Resume" button in the Hero links straight to that path.

### Changing the color theme
All colors live as CSS variables in `src/styles/tokens.css` (`--accent-blue`, `--accent-violet`,
`--gradient-primary`, etc.). Change them once there and the whole site updates.

## Notes

- Built with functional components and hooks only (`useState`, `useEffect`, `useRef`, plus two
  custom hooks in `hooks.js`).
- Scroll-reveal and progress-bar animations use `IntersectionObserver`, no animation library.
- Respects `prefers-reduced-motion`.
- The contact form currently simulates a submit (see the `TODO` in `Contact.jsx`'s `handleSubmit`)
  — wire it up to your email service of choice (Formspree, EmailJS, or your own API route).
