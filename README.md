# Haseeb Ahmed — Portfolio (Next.js)

Your original single-file HTML portfolio, rebuilt as a proper Next.js 14 (App Router) project with TypeScript. All the original styling, layout, animations, and copy are preserved — it's just split into components so it's easy to maintain.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  layout.tsx      → fonts + global <html>/<body>, metadata
  page.tsx         → assembles all sections
  globals.css       → all original CSS (ported as-is)
components/
  Header.tsx        → nav bar, scroll state, mobile menu
  Hero.tsx
  About.tsx
  Services.tsx
  Projects.tsx      → includes the working category filter buttons
  Skills.tsx
  Process.tsx
  Blog.tsx
  CTA.tsx
  Contact.tsx        → contact form (submit handler is a TODO — wire to an API route or email service)
  Footer.tsx
  ScrollFx.tsx       → the "fade/slide in on scroll" + skill bar animation
  ServiceIcon.tsx    → the little SVG icons used in the services grid
lib/
  data.ts            → ALL the editable content lives here: project list, blog posts, skills, services, nav links
```

## Swapping the placeholder project images

Every project card currently uses a random placeholder image from `picsum.photos` (a different one per project, so they're easy to tell apart). To swap in your real screenshots:

1. Open `lib/data.ts`
2. Find the `projects` array
3. For each project, change the `image` field, e.g.:

```ts
image: "https://picsum.photos/seed/northgate-legal/800/600",
```

to either:

- A path to a local file you've placed in `public/projects/`, e.g. `image: "/projects/northgate-legal.jpg"`
- Or any other image URL (just make sure the domain is allowed in `next.config.js` under `images.remotePatterns` if it's a remote URL)

The blog post thumbnails (`blogPosts` array, same file) work the same way.

## Notes

- The contact form currently just prevents the default page reload on submit — hook up `handleSubmit` in `components/Contact.tsx` to an API route, Formspree, Resend, etc. when you're ready.
- Fonts (Space Grotesk, Inter, JetBrains Mono) are loaded via `next/font/google`, so no external Google Fonts `<link>` tag or layout shift.
- Deploy easily to Vercel, or `npm run build && npm run start` anywhere that runs Node.
