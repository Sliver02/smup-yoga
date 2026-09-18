// SEO handling — IDENTICAL in every project built on nextjs-simple-template.
// Never edit per project: change it in the template first, then copy it over.
// Project-specific content lives in `@/common/seoContent`.
import type { Metadata } from "next";
import { RouteEnum } from "@/common/routeEnum";
import { OG_LOCALE, SITE_NAME, SITE_URL, pages, type PageRoute } from "@/common/seoContent";
import { routing, type Locale } from "@/i18n/routing";

type Copy = { title: string; description: string };
/** `og` / `twitter` fall back to the main title + description when omitted. */
type LangCopy = Copy & { og?: Copy; twitter?: Copy };
export type Page = Record<Locale, LangCopy> & {
	/** File under public/images, used for og:image / twitter:image. Keep it under 5 MB. */
	image: string;
	/** Keep out of the sitemap and ask crawlers not to index it. */
	noindex?: boolean;
};

const resolveLocale = (locale: string): Locale =>
	(routing.locales as readonly string[]).includes(locale)
		? (locale as Locale)
		: routing.defaultLocale;

/** Absolute URL without trailing slash: Next redirects `/x/` to `/x`, so canonicals must match. */
export const pageUrl = (locale: string, route: string) =>
	`${SITE_URL}/${locale}${route === RouteEnum.HOME ? "" : route}`;

export const localeUrls = (route: string) =>
	Object.fromEntries(routing.locales.map((l) => [l, pageUrl(l, route)]));

export const indexableRoutes = (Object.keys(pages) as PageRoute[]).filter((r) => !pages[r].noindex);

export const pageMetadata = (locale: string, route: PageRoute) => {
	const lang = resolveLocale(locale);
	const {
		title,
		description,
		og = { title, description },
		twitter = { title, description },
	} = pages[route][lang];
	const image = `${SITE_URL}/images/${pages[route].image}`;
	const url = pageUrl(lang, route);

	return {
		title,
		description,
		robots: pages[route].noindex ? { index: false, follow: true } : undefined,
		alternates: {
			canonical: url,
			languages: { ...localeUrls(route), "x-default": pageUrl(routing.defaultLocale, route) },
		},
		openGraph: {
			...og,
			url,
			siteName: SITE_NAME,
			images: [{ url: image, alt: og.title }],
			locale: OG_LOCALE[lang],
			type: "website",
		},
		twitter: { card: "summary_large_image", ...twitter, images: [image] },
	} satisfies Metadata;
};

/** In a route's layout.tsx: `export const generateMetadata = pageMeta(RouteEnum.X)`. */
export const pageMeta =
	(route: PageRoute) =>
	async ({ params }: { params: Promise<{ locale: string }> }) =>
		pageMetadata((await params).locale, route);

/** In `[locale]/layout.tsx`: `export const generateMetadata = rootMeta`. Adds the title template. */
export const rootMeta = async ({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
	const { title, ...meta } = pageMetadata((await params).locale, RouteEnum.HOME);
	return { ...meta, title: { default: title, template: `%s | ${SITE_NAME}` } };
};
