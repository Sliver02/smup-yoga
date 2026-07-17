# Architecture

SMUP Yoga is built on the shared `nextjs-simple-template` base. This document is
the canonical rulebook — read it before adding or changing code.

## Design system — two-layer tokens

Tokens live in `src/designSystem/globals.scss` and follow a strict two-layer rule:

**Layer 1 — palette primitives** (raw brand values, never used in components directly):

```css
--palette-primary-500: #fee9dd; /* peach */
--palette-accent-500: #e97f95; /* rose */
--palette-secondary-500: #c886ba; /* mauve */
```

**Layer 2 — semantic tokens** (the only layer components touch):

```css
--color-text: var(--palette-neutral-900);
--color-primary: var(--palette-primary-500);
--color-bg: var(--palette-primary-500);
```

Dark mode remaps Layer 2 via `[data-theme="dark"]` on `<html>` — Layer 1 never
changes. **Dark mode is not currently enabled** (the site ships light-only, `<html>`
is hard-set to `data-theme="light"`); the token structure is ready for it when needed.
No `prefers-color-scheme` media query; the theme attribute is set explicitly.

Typography tokens: `--font-body` (Inter) and `--font-heading` (RightGrotesk), wired
via `next/font` in `app/[locale]/layout.tsx` and consumed through the CSS variables.

## SCSS modules

Every component owns `ComponentName.tsx` + `ComponentName.module.scss` + a
named-export `index.ts` barrel. Global design system files
are imported via relative paths — `sassOptions.includePaths` is a [known unresolved
bug](https://github.com/vercel/next.js/issues/60088) in Turbopack (Next.js 16's
default bundler):

```scss
// atoms/Grid/Col/Col.module.scss — 4 levels from src/
@use "../../../../designSystem/variables";
@use "../../../../designSystem/mediaQueries" as mq;

// organisms/Header/Header.module.scss — 3 levels from src/
@use "../../../designSystem/mediaQueries" as mq;
```

Files within `src/designSystem/` import each other by bare name (Sass resolves them
relative to the file's own directory):

```scss
// designSystem/globals.scss
@use "variables";
@use "mediaQueries";
```

Utility mixins:

- `@include mq.media("md")` — `min-width` breakpoint guard (`xs sm md lg xl xxl`)
- `@include utils.toRem(font-size, variables.$font-lg)` — px → rem conversion

Global text utility classes (applied as plain class strings, not module refs):

- `.text--*` size/weight/align/color/font utilities
- `.onlyMobile` / `.onlyDesktop` — responsive show/hide at `md` breakpoint

### Conventions

**No bare tag selectors in `*.module.scss`.** Global tag defaults (`h1–h4`, `p`, `a`)
are set once in `globals.scss` / `text.scss`. Component stylesheets must never
override them via tag selectors — add an explicit class to the element instead.

**Consume design system values via `@use`, not inline literals.** Before writing a
custom `font-size`, `color`, or breakpoint, check whether a DS variable, mixin, or
utility class already covers it. For colors, always reference semantic tokens
(`var(--color-text)`, `var(--color-primary)`) — never palette primitives or raw hex.

**Compose class names with `classnames`** — never template literals.

## Atomic design

```
atoms/       — no dependencies on other components
molecules/   — composed of atoms only
organisms/   — composed of atoms + molecules
sections/    — page-composition blocks (project tier; e.g. AboutMe, Calendar, Styles, Locations, Contact)
app/[locale] — pages assembled from sections/organisms
```

> This project uses a `sections/` tier for page-level composition instead of the
> template's `templates/` tier. `sections/` is where brand-specific, page-assembling
> blocks live.

Barrel re-exports enforce import hygiene:

```ts
// correct
import { Button } from "@/components/atoms/Button";

// wrong — import from the module file directly
import Button from "@/components/atoms/Button/Button";
```

## Base-UI primitives

Accessible headless primitives from `@base-ui/react` are wrapped in thin adapter
components (Button, Input, Alert, Select, Checkbox, Dropdown, Autocomplete). State is
styled exclusively via `data-[state]` attributes in SCSS — no JS class toggling:

```scss
&[data-disabled] {
	opacity: 0.4;
}
&[data-checked] .indicator {
	opacity: 1;
}
&[data-popup-open] .arrow {
	transform: rotate(180deg);
}
```

## Icons

Icons come from `lucide-react` only. Do not add `react-icons`, `@mui/icons-material`,
or any other icon library.

## Internal navigation — RouteEnum

All internal link targets are centralized in `src/common/routeEnum.ts` (`RouteEnum`),
including hash anchors (`/#calendar`, `/#contact`). Never hardcode path strings in
components — import and use `RouteEnum`, and navigate with `Link` from `@/i18n/routing`.

## i18n routing

`next-intl` v4 is wired via `src/proxy.ts` (not `middleware.ts` — Next.js 16 reserves
that name). The proxy skips static assets, API routes, and files with extensions.

Locales are `["it", "en"]` with **`it` (Italian) as the default**. Route structure:
`app/[locale]/…` with `generateStaticParams` emitting one entry per locale.

Navigation helpers from `@/i18n/routing` are locale-aware wrappers around Next.js
primitives: `Link`, `usePathname`, `redirect`, `useRouter`, `getPathname`. Messages
load from `public/messages/{locale}.json` at request time via `src/i18n/request.ts`.

## Grid system

12-column fluid grid with a `--max-width: 1440px` container cap. Classes are generated
at build time for each breakpoint × prop: `.md-6` (span), `.mdOffset-2`,
`.mdOrder-1`, `.mdAlignSelf-flex-start`. `Row` passes `gap` as an inline CSS variable
that `Col` reads.

## Images — blur-up placeholders

Photography uses Next.js `<Image placeholder="blur">`. Each source image has a
hand-made low-res companion (`*_placeholder.*`) in `public/images/`, used to build the
`blurDataURL`. When adding a photo, add its placeholder too.

## Marquee

Scrolling text bands use `react-fast-marquee` (see `molecules/InfiniteText`), separated
by star SVG icons from `public/icons/`.

## Contact form flow

```
useForm (react-hook-form + zod)
  → onSubmit
  → renderToStaticMarkup(<ContactTemplate />) — builds HTML email body
  → emailjs.send(serviceId, templateId, { message_html, ... }, publicKey)
  → setAlert({ severity: "success" | "error", text })
  → reset() on success
```

EmailJS credentials come from `NEXT_PUBLIC_EMAILJS_*` env vars.

## File naming convention

| File                        | Purpose                  |
| --------------------------- | ------------------------ |
| `ComponentName.tsx`         | Component implementation |
| `ComponentName.module.scss` | Scoped styles            |
| `index.ts`                  | Named barrel export      |

Components are folders holding `ComponentName.tsx` + `ComponentName.module.scss` +
`index.ts`. Never use default exports from barrel files — always named exports:

```ts
export { Button } from "./Button";
export type { ButtonProps } from "./Button";
```

The email templates under `common/emailTemplates/` are the deliberate exception
(default export, rendered via `renderToStaticMarkup`).
