# Shaun Taliana — Industrial Relations Portfolio

Premium Next.js portfolio for [taliana.com.au](https://www.taliana.com.au/), rebuilt with Framer Motion animations, warm neutral aesthetics, and full responsive support.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **Framer Motion** — scroll reveals, staggered lists, page interactions
- **Google Fonts** — Cormorant Garamond + DM Sans

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

Deploy to Vercel with zero config — the framework is auto-detected.

## Pages

| Route       | Content                                      |
| ----------- | -------------------------------------------- |
| `/`         | Hero, marquee, testimonials, CTA             |
| `/about`    | About Shaun, strengths, testimonials, CTA    |
| `/services` | Services, rates, brochure, testimonials, CTA |
| `/contact`  | Contact form and details                     |

## Replacing placeholder images

Image placeholders use the `ImagePlaceholder` component. To add your own images:

1. Place files in `public/images/` (e.g. `portrait.jpg`, `about.jpg`)
2. Pass the `src` prop in the relevant section:

```jsx
<ImagePlaceholder src="/images/portrait.jpg" alt="Shaun Taliana" aspect="3/4" />
```

Locations with placeholders:

- **Hero** — `components/sections/Hero.jsx`
- **About** — `components/sections/AboutSection.jsx`
- **Services** — `components/sections/ServicesSection.jsx` (service cards + brochure)

## Contact form

The form posts to the existing backend API. Configure in `.env.local`:

```
NEXT_PUBLIC_API_URL=https://your-api-url
NEXT_PUBLIC_PROJECT_ID=your-project-id
```

## Content

All copy is centralised in `lib/siteData.js` for easy updates.
