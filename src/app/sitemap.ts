import type { MetadataRoute } from "next";
import { indexableRoutes, localeUrls, pageUrl } from "@/common/seo";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
	return indexableRoutes.flatMap((route) =>
		routing.locales.map((locale) => ({
			url: pageUrl(locale, route),
			alternates: { languages: localeUrls(route) },
		}))
	);
}
