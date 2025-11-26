# GitHub Copilot Instructions for SMUP Yoga — Next.js 15 Project

## Project Overview

Next.js 15 yoga studio website using TypeScript, SCSS modules, custom Grid system, and next-intl (en/it). Built for Sarah Pompanin's yoga practice in the Dolomites with Material-UI components and EmailJS contact forms.

## Core Architecture

### Tech Stack

- **Next.js 15** (app router, async params) + TypeScript (strict mode)
- **Styling**: SCSS modules + custom design system (`src/designSystem/`)
- **i18n**: next-intl with middleware locale detection (Italian default, English alt)
- **UI**: Material-UI (@mui/icons-material) for icons ONLY
- **Forms**: react-hook-form + zod + EmailJS (@emailjs/browser)
- **Images**: Next.js Image with blur placeholders (manual `_placeholder.jpg` files)
- **Fonts**: Inter (Google) + RightGrotesk (local woff2)

### Project Structure (Actual)

```
src/
├── app/[locale]/              # /en/, /it/ routes (Italian default)
│   ├── layout.tsx             # Metadata, JSON-LD, NextIntlClientProvider
│   └── page.tsx               # Home page
├── components/
│   ├── atoms/                 # Grid (Container/Row/Col), Background, SectionTitle, Button
│   ├── molecules/             # CardDisplay, CardFrame, CardInstagram, InfiniteText
│   ├── organisms/             # Header, Footer, Hero, Section, Filler
│   └── sections/              # AboutMe, Calendar, Contact, Styles (page sections)
├── common/
│   ├── globalInterfaces.tsx   # BaseProps, Color, Size, AlertResponse enums
│   └── emailTemplates/        # ContactTemplate.tsx (React email HTML)
├── designSystem/              # SCSS variables, media queries, global styles
│   ├── variables.scss         # Breakpoints, font sizes, $headerHeight map
│   ├── mediaQueries.scss      # @mixin mediaQuery($breakpoint, $type)
│   ├── globals.scss           # CSS custom properties, reset, root styles
│   └── text.scss              # Typography utilities
├── hooks/                     # useScroll.tsx (custom hooks)
├── i18n/
│   ├── routing.ts             # Locales config: ["en", "it"], defaultLocale: "it"
│   └── request.ts             # next-intl server config
├── middleware.ts              # Skip /images, /icons, /fonts, run intl for routes
public/
├── messages/                  # en.json, it.json (translations)
├── images/                    # Photos + manual _placeholder.jpg blur files
├── fonts/                     # RightGrotesk.woff2
└── icons/
```

## Critical Patterns & Conventions

### 1. Component Structure (4-Tier Atomic Design)

- **atoms/**: Grid system (Container/Row/Col), Background, SectionTitle, Button, TextField, Alert
- **molecules/**: CardDisplay, CardFrame, InfiniteText (composites)
- **organisms/**: Header, Footer, Hero, Section (layout wrappers)
- **sections/**: AboutMe, Contact, Calendar, Styles (full page sections — client components)

**File structure**: Each component folder has `index.tsx` + `styles.module.scss` (no tests in codebase yet)

### 2. Custom Grid System (Bootstrap-like)

**Usage pattern** (see `src/components/atoms/Grid/`):

```tsx
import { Container, Row, Col } from "@/components/atoms/Grid";

<Container fullWidth>
  {" "}
  {/* or customWidth="1200px" */}
  <Row xsJustify={Justify.center} gap="20px">
    <Col xs={12} md={6} lg={4}>
      {/* 12 cols on mobile, 6 on tablet, 4 on desktop */}
    </Col>
    <Col xs={12} md={6} lgOffset={2}>
      {/* offset support */}
    </Col>
  </Row>
</Container>;
```

**Breakpoints** (`src/designSystem/variables.scss`):

- xs: 0, sm: 458px, md: 769px, lg: 1025px, xl: 1441px, xxl: 1921px
- Grid props: `xs`, `sm`, `md`, `lg`, `xl`, `xxl` for cols (1-12)
- Offsets: `xsOffset`, `mdOffset`, etc. (1-11)
- Alignment: `xsAlign`, `xsJustify`, `xsAlignSelf` (uses `Align`/`Justify` enums from `interfaces.tsx`)

### 3. Component Template (Actual Pattern)

```tsx
import classNames from "classnames";
import styles from "./styles.module.scss";
import { BaseProps } from "@/common/globalInterfaces";

export interface MyComponentProps extends BaseProps {
  customProp?: string;
}

const MyComponent = ({ className, children, customProp }: MyComponentProps) => {
  return (
    <div className={classNames(className, styles.wrapper)}>{children}</div>
  );
};

export default MyComponent;
```

**Key differences from template**:

- Use `classNames()` library (not template literals)
- Import `BaseProps` from `@/common/globalInterfaces` (includes `id`, `children`, `className`)
- Const function, not default export inline

### 4. SCSS Module Pattern

```scss
@import "@/designSystem/variables";
@import "@/designSystem/mediaQueries";

.wrapper {
  // Use CSS custom properties from globals.scss
  background: var(--neutral-background);
  color: var(--neutral-text);

  // Use mediaQuery mixin (NOT @include mobile)
  @include mediaQuery("md") {
    /* min-width: 769px */
    padding: 32px;
  }

  @include mediaQuery("md", "max") {
    /* max-width: 768px */
    padding: 16px;
  }
}
```

**Available CSS variables** (`src/designSystem/globals.scss`):

- Colors: `--neutral-background`, `--neutral-text`, `--primary-main`, `--accent-main`, etc.
- NO spacing/radius variables — use SCSS vars like `$font-md: 16` (in px, no unit)

### 5. TypeScript Patterns

**Import aliases** (from `tsconfig.json`):

- `@/*` → `src/*` (ONLY these two exist)
- `@public/*` → `public/*`

**Example**:

```tsx
import { Container, Row, Col } from "@/components/atoms/Grid";
import { BaseProps } from "@/common/globalInterfaces";
import "@/designSystem/variables.scss";
```

**Enums** (`src/common/globalInterfaces.tsx`):

- `Color`, `Status`, `Size`, `Surface` enums
- Use these instead of string literals for props

**RouteEnum** (`src/common/routeEnum.ts`):

- **CRITICAL**: ALWAYS use `RouteEnum` for internal links
- Maps all website routes: `HOME`, `ABOUT`, `ANUKALANA`, `YIN`, `KID`, `BELLUNO`, `CORTINA`, `OUTDOOR`, `PRIVATE_LESSONS`, `CALENDAR`, `CONTACT`
- Import: `import { RouteEnum } from "@/common/routeEnum";`
- Usage: `<Link href={RouteEnum.ABOUT}>`, `<a href={RouteEnum.CALENDAR}>`
- **Never hardcode paths** like `"/chi-sono"` or `"/#calendar"` — use the enum

### 6. Images with Manual Blur Placeholders

**Pattern** (see `Section` organism):

```tsx
<Image
  src="/images/photo.jpg"
  placeholder="blur"
  blurDataURL="/images/photo_placeholder.jpg" // Manual placeholder file
  fill // or width/height
  alt=""
/>
```

**Critical**: Create both `photo.jpg` AND `photo_placeholder.jpg` in `public/images/`

### 7. Internationalization Pattern

**Middleware** (`src/middleware.ts`):

- Skips: `/_next`, `/images`, `/icons`, `/fonts`, `/robots.txt`, `/sitemap.xml`
- File extensions bypass i18n (`.jpg`, `.png`, `.woff2`)
- Routes all others through next-intl

**Locales** (`src/i18n/routing.ts`):

```tsx
locales: ["en", "it"];
defaultLocale: "it"; // Italian is default!
```

**Server components** (pages):

```tsx
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("header");
  return <h1>{t("home")}</h1>;
}
```

**Client components** (sections):

```tsx
"use client";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  return <button>{t("submit")}</button>;
}
```

**Translation files**: `public/messages/en.json`, `public/messages/it.json`

### 8. EmailJS Form Pattern (Contact Section)

**Setup** (see `src/components/sections/Contact/`):

```tsx
import emailjs from "@emailjs/browser";
import ContactTemplate from "@/common/emailTemplates/ContactTemplate";
import { renderToStaticMarkup } from "react-dom/server";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;

const htmlContent = renderToStaticMarkup(<ContactTemplate {...form} />);

await emailjs.send(
  serviceId,
  templateId,
  {
    name: form.name,
    email: form.email,
    message_html: htmlContent,
  },
  publicKey
);
```

**Required env vars**:

- `NEXT_PUBLIC_EMAILJS_SERVICE`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE`
- `NEXT_PUBLIC_EMAILJS_KEY`

### 10. Layout & Metadata Pattern

**Root layout** (`src/app/[locale]/layout.tsx`):

- Async params extraction: `const { locale } = await params;`
- Font loading: Inter (Google) + RightGrotesk (local woff2)
- JSON-LD structured data for LocalBusiness
- NextIntlClientProvider wraps children
- Metadata with alternates for en/it

**Example metadata**:

```tsx
export const metadata: Metadata = {
  title: { default: "SMUP — Sarah Pompanin | Yoga in the Dolomites" },
  alternates: {
    canonical: "https://smupyoga.com/",
    languages: { en: "/en/", it: "/it/" },
  },
};
```

## Common Workflows

### Development Commands

```powershell
npm run dev          # Start dev server (turbopack enabled)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Creating Components

**Pattern** (no test files in current codebase):

```powershell
# Example: New atom
mkdir src/components/atoms/NewAtom
ni src/components/atoms/NewAtom/index.tsx
ni src/components/atoms/NewAtom/styles.module.scss
```

### Adding Images

1. Place `image.jpg` in `public/images/`
2. Create `image_placeholder.jpg` (low-res blur version)
3. Use in Section: `backgroundImage={{ src: "image", format: "jpg" }}`

### Adding Translations

1. Add keys to `public/messages/en.json` and `public/messages/it.json`
2. Use in components: `const t = useTranslations("namespace"); t("key")`

## Environment Variables

**Required** (EmailJS integration):

```
NEXT_PUBLIC_EMAILJS_SERVICE=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE=template_xxxxx
NEXT_PUBLIC_EMAILJS_KEY=user_xxxxx
```

## Key Differences from Standard Next.js

### Custom Grid System

- **NOT** using Tailwind or MUI Grid — custom Bootstrap-like system
- Props use breakpoint prefixes: `xs={12} md={6} lgOffset={2}`
- Import `Align`/`Justify` enums from `@/components/atoms/Grid/interfaces`

### Design System Location

- **NOT** `src/styles/` — it's `src/designSystem/`
- Import with: `@import "@/designSystem/variables"`
- Media queries via `@include mediaQuery("md")` NOT `@media`

### Path Aliases

- Only `@/*` and `@public/*` exist (see `tsconfig.json`)
- NO shortcuts like `@atoms/`, `@components/`, etc.
- Always use: `@/components/atoms/Button`

### i18n Setup

- Italian is default locale, NOT English
- Middleware skips file extensions + public folders
- Both server/client use `next-intl` (no separate context provider)

### Image Handling

- Manual blur placeholders (not auto-generated)
- Section component uses `backgroundImage={{ src, format }}` pattern
- Placeholders must be named `filename_placeholder.ext`

### Forms

- react-hook-form + zod for validation (custom TextField/Button/Alert components)
- Material-UI icons ONLY (no form components)
- EmailJS integration with `renderToStaticMarkup()` for email templates

## Critical Don'ts

❌ Don't use `@atoms/` imports — use `@/components/atoms/`
❌ Don't use `@include mobile` — use `@include mediaQuery("md", "max")`
❌ Don't use string literals for alignment — use `Justify.center`, `Align.start`
❌ Don't import from `@styles/` — use `@/designSystem/`
❌ Don't assume English is default — Italian is the default locale
❌ Don't use `className={\`\${styles.x}\`}`— use`classNames()`library
❌ Don't create test files unless specifically requested (not in current codebase)
❌ **Don't hardcode URLs** — ALWAYS use`RouteEnum`for internal links
❌ **NEVER use`<style jsx>`or`<style jsx global>`tags** — use SCSS modules or inline`style={{}}` attributes instead

## When Suggesting Code

1. Use `classNames()` from classnames library for combining classes
2. Extend `BaseProps` from `@/common/globalInterfaces`
3. Use `const Component = () => {}` not `function Component() {}`
4. Import SCSS variables from `@/designSystem/`, not `@styles/`
5. Use custom Grid system (Container/Row/Col) with enum props
6. Create manual blur placeholders for all images
7. Use custom form components (TextField, Button, Alert) with react-hook-form + zod
8. Check `src/components/` for existing components before creating new ones
