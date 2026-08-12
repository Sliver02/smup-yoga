# SMUP Yoga

Marketing site for **SMUP — Sarah Pompanin Yoga**, a yoga practice in the Italian
Dolomites (Cortina, Belluno, Cadore). Built on the shared `nextjs-simple-template`
base: Next.js 16 App Router, atomic design, SCSS Modules with a two-layer design-token
system, `next-intl` i18n, and a pre-built EmailJS contact form.

## Stack

| Layer             | Choice                                         |
| ----------------- | ---------------------------------------------- |
| Framework         | Next.js 16 (App Router)                        |
| Language          | TypeScript 5 strict                            |
| Styling           | SCSS Modules — two-layer design token system   |
| Primitives        | `@base-ui/react`                               |
| Icons             | `lucide-react`                                 |
| i18n              | `next-intl` v4 — IT (default) + EN             |
| Forms             | `react-hook-form` + `zod` + `@emailjs/browser` |
| Motion            | `gsap` (FadeIn) + `lenis` (SmoothScroll)       |
| Marquee           | `react-fast-marquee`                           |
| Class composition | `classnames`                                   |

## Quick start

```bash
npm install
cp .env.local.example .env.local   # fill in EmailJS credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in your
[EmailJS](https://www.emailjs.com/) credentials:

```
NEXT_PUBLIC_EMAILJS_SERVICE=   # EmailJS service ID
NEXT_PUBLIC_EMAILJS_TEMPLATE=  # EmailJS template ID
NEXT_PUBLIC_EMAILJS_KEY=       # EmailJS public key
```

## Project structure

```
src/
├── app/
│   └── [locale]/          # locale-scoped shell (it default, en)
│       ├── layout.tsx     # fonts + SEO/JSON-LD + Header/Footer + providers
│       ├── page.tsx       # home
│       └── <route>/       # about, anukalana-yoga, yin-yoga, kids-yoga,
│                          #   yoga-outdoor, private-lessons, yoga-cortina,
│                          #   yoga-belluno, privacy-policy
├── common/
│   ├── globalInterfaces.ts        # shared enums + interfaces
│   ├── routeEnum.ts               # RouteEnum — all internal link targets
│   └── emailTemplates/
│       └── ContactTemplate.tsx    # HTML email rendered server-side
├── components/
│   ├── atoms/             # Grid, Button, Input, Alert, Card, Checkbox,
│   │                      #   Select, Dropdown, Autocomplete, Background,
│   │                      #   SectionTitle, Breadcrumb, FadeIn, SmoothScroll
│   ├── molecules/         # CardDisplay, CardFrame, InfiniteText, LanguageSwitcher
│   ├── organisms/         # Header, Footer, Hero, Section
│   └── sections/          # AboutMe, Styles, InstagramFeed, BookCta, Contact
├── designSystem/
│   ├── globals.scss       # two-layer CSS tokens + reset
│   ├── variables.scss     # font scales, breakpoints, spacing maps
│   ├── mediaQueries.scss  # media() mixin
│   ├── text.scss          # h1-h4 + text utility classes
│   └── utils.scss         # toRem(), .onlyMobile, .onlyDesktop
├── hooks/
│   └── useScroll.ts       # { scrollY, scrollX, direction }
├── i18n/
│   ├── routing.ts         # locales, routing, Link, redirect, …
│   └── request.ts         # getRequestConfig — loads public/messages/*.json
└── proxy.ts               # next-intl createMiddleware (named proxy, not middleware)

public/
├── messages/{it,en}.json  # translation catalogs
├── images/                # Dolomites photography (+ *_placeholder.* blur companions)
├── fonts/RightGrotesk.woff2
└── icons/                 # decorative star SVGs
```

## Adding a page

1. Create `src/app/[locale]/your-page/page.tsx`
2. Add an i18n key block to both `public/messages/it.json` and `public/messages/en.json`
3. Add the route to `src/common/routeEnum.ts` and link with `Link` from `@/i18n/routing`

## Design tokens

Components reference semantic CSS variables only — never palette primitives directly:

```scss
// correct
color: var(--color-text);
background: var(--color-primary);

// wrong
color: var(--palette-primary-500);
```

The site ships light-only; the token layer is ready for `data-theme="dark"` when needed.

## Grid

```tsx
import { Container, Row, Col } from "@/components/atoms/Grid";

<Container>
	<Row>
		<Col xs={12} md={6} lg={4}>
			…
		</Col>
	</Row>
</Container>;
```

## Scripts

| Command          | Description             |
| ---------------- | ----------------------- |
| `npm run dev`    | Dev server              |
| `npm run build`  | Production build        |
| `npm run start`  | Start production server |
| `npm run lint`   | ESLint                  |
| `npm run format` | Prettier write          |
```
