// Project-specific SEO content. The handling lives in `@/common/seo` (identical across projects).
import { RouteEnum } from "@/common/routeEnum";
import type { Page } from "@/common/seo";
import type { Locale } from "@/i18n/routing";

export const SITE_URL = "https://smupyoga.com";
export const SITE_NAME = "SMUP Yoga";

/** `og:locale` value for each supported locale. */
export const OG_LOCALE: Record<Locale, string> = { en: "en_US", it: "it_IT" };

/** Routes that are real pages (RouteEnum entries such as mailto: or #anchors are excluded). */
export type PageRoute = Exclude<
	RouteEnum,
	RouteEnum.CONTACT | RouteEnum.EMAIL | RouteEnum.INSTAGRAM
>;

// Every page route needs copy in every locale. TypeScript fails the build when one is missing.
// Titles ≤ ~50 chars (SITE_NAME is appended), descriptions ≤ ~160, images under 5 MB.
export const pages: Record<PageRoute, Page> = {
	[RouteEnum.HOME]: {
		image: "IMG_2646.jpg",
		en: {
			title: "SMUP | Sarah Pompanin | Yoga Cortina, Belluno, Cadore",
			description:
				"Yoga with Sarah Pompanin (SMUP) in Cortina d'Ampezzo, Belluno, and Cadore. Anukalana, Yin, Kids Yoga. Group classes, private lessons, outdoor sessions in the Dolomites. Online and in-person.",
			og: {
				title: "SMUP | Yoga Cortina, Belluno, Cadore Dolomites",
				description:
					"Yoga classes with Sarah Pompanin in Cortina, Belluno, Cadore. Anukalana, Yin, Kids Yoga. Group & private lessons in the Dolomites.",
			},
			twitter: {
				title: "SMUP | Yoga in the Dolomites",
				description: "Outdoor and studio yoga by Sarah Pompanin (SMUP).",
			},
		},
		it: {
			title: "SMUP | Sarah Pompanin | Yoga a Cortina, Belluno, Cadore",
			description:
				"Yoga con Sarah Pompanin (SMUP) a Cortina d'Ampezzo, Belluno e Cadore. Anukalana, Yin, Yoga Bimbi. Lezioni di gruppo, private e outdoor nelle Dolomiti. Online e in presenza.",
			og: {
				title: "SMUP | Yoga a Cortina, Belluno, Cadore, Dolomiti",
				description:
					"Lezioni di yoga con Sarah Pompanin a Cortina, Belluno, Cadore. Anukalana, Yin, Yoga Bimbi. Lezioni di gruppo e private nelle Dolomiti.",
			},
			twitter: {
				title: "SMUP | Yoga nelle Dolomiti",
				description: "Yoga outdoor e in studio con Sarah Pompanin (SMUP).",
			},
		},
	},
	[RouteEnum.ABOUT]: {
		image: "PXL_20250112_213040356.jpg",
		en: {
			title: "About me",
			description:
				"Hi, I'm Sarah and I live in the Dolomites! Certified instructor in Anukalana Yoga, Yin Yoga, Kids Yoga and Pilates. I teach in Cortina, Belluno and Cadore.",
			og: {
				title: "About me | Sarah Pompanin",
				description:
					"Certified yoga instructor in the Dolomites. Anukalana, Yin, Kids Yoga.",
			},
			twitter: {
				title: "About me | Sarah Pompanin",
				description: "Yoga instructor in the Dolomites",
			},
		},
		it: {
			title: "Chi sono",
			description:
				"Ciao, sono Sarah e vivo tra le Dolomiti! Insegnatrice certificata di Anukalana Yoga, Yin Yoga, Yoga Bimbi e Pilates. Insegno a Cortina, Belluno e Cadore.",
			og: {
				title: "Chi sono | Sarah Pompanin",
				description:
					"Insegnatrice certificata di yoga nelle Dolomiti. Anukalana, Yin, Yoga Bimbi.",
			},
			twitter: {
				title: "Chi sono | Sarah Pompanin",
				description: "Insegnatrice di yoga nelle Dolomiti",
			},
		},
	},
	[RouteEnum.CORTINA]: {
		image: "lago-centro-cadore-pieve.jpg",
		en: {
			title: "Yoga in Cortina d'Ampezzo and Cadore",
			description:
				"Yoga classes in Cadore (Vodo, Tai, Calalzo) with Sarah Pompanin, plus private lessons on demand in Cortina d'Ampezzo. Anukalana Yoga studio classes and summer outdoor sessions in the Dolomites.",
			og: {
				title: "Yoga in Cortina d'Ampezzo and Cadore | Studio and Outdoor",
				description:
					"Anukalana Yoga classes in Cadore, private lessons on demand in Cortina. Summer outdoor sessions in the Dolomites.",
			},
			twitter: {
				title: "Yoga in Cortina and Cadore",
				description: "Studio and outdoor in the Dolomites",
			},
		},
		it: {
			title: "Yoga a Cortina d'Ampezzo e Cadore",
			description:
				"Lezioni di yoga nel Cadore (Vodo, Tai, Calalzo) con Sarah Pompanin, più sessioni private su richiesta a Cortina d'Ampezzo. Anukalana Yoga in studio e sessioni outdoor estive nelle Dolomiti.",
			og: {
				title: "Yoga a Cortina d'Ampezzo e Cadore | Studio e Outdoor",
				description:
					"Lezioni di Anukalana Yoga nel Cadore, sessioni private su richiesta a Cortina. Sessioni outdoor estive nelle Dolomiti.",
			},
			twitter: {
				title: "Yoga a Cortina e Cadore",
				description: "Studio e outdoor nelle Dolomiti",
			},
		},
	},
	[RouteEnum.BELLUNO]: {
		image: "PXL_20250112_213048967.MP.jpg",
		en: {
			title: "Yoga in Belluno",
			description:
				"Yoga classes in Belluno with Sarah Pompanin. Anukalana, Vinyasa and Yin Yoga. Weekly studio classes suitable for all levels.",
			og: {
				title: "Yoga in Belluno | Anukalana, Vinyasa and Yin Yoga",
				description:
					"Weekly yoga classes in Belluno and Ponte nelle Alpi with Sarah Pompanin.",
			},
			twitter: { title: "Yoga in Belluno", description: "Anukalana, Vinyasa and Yin" },
		},
		it: {
			title: "Yoga a Belluno",
			description:
				"Lezioni di yoga a Belluno con Sarah Pompanin. Anukalana, Vinyasa e Yin Yoga. Classi settimanali in studio, adatte a tutti i livelli.",
			og: {
				title: "Yoga a Belluno | Anukalana, Vinyasa e Yin Yoga",
				description:
					"Lezioni settimanali di yoga a Belluno e Ponte nelle Alpi con Sarah Pompanin.",
			},
			twitter: { title: "Yoga a Belluno", description: "Anukalana, Vinyasa e Yin" },
		},
	},
	[RouteEnum.OUTDOOR]: {
		image: "PXL_20250726_110233771.MP.jpg",
		en: {
			title: "Outdoor Yoga",
			description:
				"Outdoor yoga sessions in the Dolomites. BAR ALPINO Calalzo, Malga Caseera Razzo, mountain huts. Practice yoga immersed in nature with Sarah Pompanin.",
			og: {
				title: "Outdoor Yoga | Summer sessions in the Dolomites",
				description:
					"Practice yoga outdoors in stunning Dolomites locations. Anukalana, Vinyasa and guided meditations.",
			},
			twitter: { title: "Outdoor Yoga", description: "Summer sessions in the Dolomites" },
		},
		it: {
			title: "Yoga Outdoor",
			description:
				"Sessioni di yoga all'aperto nelle Dolomiti. BAR ALPINO Calalzo, Malga Caseera Razzo, rifugi. Pratica yoga immersi nella natura con Sarah Pompanin.",
			og: {
				title: "Yoga Outdoor | Sessioni estive nelle Dolomiti",
				description:
					"Pratica yoga all'aria aperta in location suggestive delle Dolomiti. Anukalana, Vinyasa e meditazioni guidate.",
			},
			twitter: { title: "Yoga Outdoor", description: "Sessioni estive nelle Dolomiti" },
		},
	},
	[RouteEnum.PRIVATE_LESSONS]: {
		// 7 MB: over X's 5 MB limit for link-card images. Swap for a lighter export.
		image: "PXL_20260831_085105491.MP.jpg",
		en: {
			title: "Private Lessons",
			description:
				"Personalized private yoga lessons with Sarah Pompanin. In-person (Cortina, Belluno, Cadore) and online. Tailored program for your needs.",
			og: {
				title: "Private Lessons | Personalized sessions",
				description:
					"Personalized yoga lessons in-person and online. Individual attention and tailored program.",
			},
			twitter: {
				title: "Private Lessons",
				description: "Personalized sessions in-person and online",
			},
		},
		it: {
			title: "Lezioni Private",
			description:
				"Lezioni private di yoga personalizzate con Sarah Pompanin. In presenza (Cortina, Belluno, Cadore) e online. Programma su misura per le tue esigenze.",
			og: {
				title: "Lezioni Private | Sessioni personalizzate",
				description:
					"Lezioni di yoga personalizzate in presenza e online. Attenzione individuale e programma su misura.",
			},
			twitter: {
				title: "Lezioni Private",
				description: "Sessioni personalizzate in presenza e online",
			},
		},
	},
	[RouteEnum.YIN]: {
		image: "PXL_20250601_164142948.MP.jpg",
		en: {
			title: "Yin Yoga",
			description:
				"Yin Yoga in Cortina, Belluno and Cadore. Slow passive postures aided by props. Stimulates connective tissue, increases mobility and encourages deep relaxation.",
			og: {
				title: "Yin Yoga | Deep stillness and restoration",
				description:
					"Yin Yoga classes in the Dolomites with Sarah Pompanin. Restorative practice for body and mind.",
			},
			twitter: { title: "Yin Yoga", description: "Deep stillness in the Dolomites" },
		},
		it: {
			title: "Yin Yoga",
			description:
				"Yin Yoga a Cortina, Belluno e Cadore. Sequenze lente e passive con supporti. Utile a stimolare il tessuto connettivo, aumentare mobilità e favorire il rilassamento profondo.",
			og: {
				title: "Yin Yoga | Immobilità profonda e rigenerazione",
				description:
					"Lezioni di Yin Yoga nelle Dolomiti con Sarah Pompanin. Pratica rigenerante per corpo e mente.",
			},
			twitter: { title: "Yin Yoga", description: "Immobilità profonda nelle Dolomiti" },
		},
	},
	[RouteEnum.ANUKALANA]: {
		image: "PXL_20260701_045401209.jpg",
		en: {
			title: "Anukalana Yoga",
			description:
				"Anukalana Yoga in Cortina, Belluno and Cadore. Integrated practice combining asana, pranayama, meditation and fascia work. Fluid breath-led sequences.",
			og: {
				title: "Anukalana Yoga | Integration through fluid movement",
				description:
					"Anukalana Yoga classes in the Dolomites with Sarah Pompanin. Suitable for all levels.",
			},
			twitter: {
				title: "Anukalana Yoga",
				description: "Integrated practice in the Dolomites",
			},
		},
		it: {
			title: "Anukalana Yoga",
			description:
				"Anukalana Yoga a Cortina, Belluno e Cadore. Pratica integrata che unisce asana, pranayama, meditazione e lavoro miofasciale. Sequenze fluide guidate dal respiro.",
			og: {
				title: "Anukalana Yoga | Integrazione attraverso il movimento fluido",
				description:
					"Lezioni di Anukalana Yoga nelle Dolomiti con Sarah Pompanin. Adatto a tutti i livelli.",
			},
			twitter: { title: "Anukalana Yoga", description: "Pratica integrata nelle Dolomiti" },
		},
	},
	[RouteEnum.KID]: {
		image: "photo_2_2025-09-03_09-38-20.jpg",
		en: {
			title: "Kids Yoga",
			description:
				"Kids Yoga in Cortina, Belluno and Cadore. Playful sessions with stories, songs and games to explore asanas, breathing and mindful awareness.",
			og: {
				title: "Kids Yoga | Playful practice for young minds",
				description:
					"Kids yoga classes in the Dolomites with Sarah Pompanin. Bimbiyoga method.",
			},
			twitter: {
				title: "Kids Yoga",
				description: "Playful practice for kids in the Dolomites",
			},
		},
		it: {
			title: "Yoga Bimbi",
			description:
				"Yoga per bambini a Cortina, Belluno e Cadore. Lezioni giocose con storie, canzoni e giochi per esplorare asana, respirazione e attenzione consapevole.",
			og: {
				title: "Yoga Bimbi | Pratica giocosa per giovani menti",
				description:
					"Lezioni di yoga per bambini nelle Dolomiti con Sarah Pompanin. Metodo Bimbiyoga.",
			},
			twitter: {
				title: "Yoga Bimbi",
				description: "Pratica giocosa per bambini nelle Dolomiti",
			},
		},
	},
	[RouteEnum.PILATES]: {
		image: "PXL_20250823_075608610.jpg",
		en: {
			title: "Pilates",
			description:
				"Pilates in Cortina, Belluno and Cadore. Slow, precise movements guided by the breath to build core strength, posture and flexibility, in a non-competitive spirit.",
			og: {
				title: "Pilates | Core strength, controlled breath",
				description:
					"Pilates classes in the Dolomites with Sarah Pompanin. Core strength, posture and flexibility, guided by the breath.",
			},
			twitter: {
				title: "Pilates",
				description: "Core strength, controlled breath in the Dolomites",
			},
		},
		it: {
			title: "Pilates",
			description:
				"Pilates a Cortina, Belluno e Cadore. Movimenti lenti e precisi guidati dal respiro per rafforzare il core, la postura e la flessibilità, con spirito non competitivo.",
			og: {
				title: "Pilates | Forza del centro, respiro controllato",
				description:
					"Lezioni di Pilates nelle Dolomiti con Sarah Pompanin. Core, postura e flessibilità guidati dal respiro.",
			},
			twitter: {
				title: "Pilates",
				description: "Forza del centro, respiro controllato nelle Dolomiti",
			},
		},
	},
	[RouteEnum.PRIVACY]: {
		image: "IMG_2646.jpg",
		noindex: true,
		en: {
			title: "Privacy Policy",
			description:
				"SMUP Yoga Privacy Policy. Information on how we collect, use and protect your personal data.",
			og: {
				title: "Privacy Policy | SMUP Yoga",
				description: "Privacy policy for SMUP Yoga website.",
			},
		},
		it: {
			title: "Privacy Policy",
			description:
				"Privacy Policy di SMUP Yoga. Informazioni su come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.",
			og: {
				title: "Privacy Policy | SMUP Yoga",
				description: "Informativa sulla privacy per il sito SMUP Yoga.",
			},
		},
	},
};

/**
 * schema.org JSON-LD rendered in the root layout's <head>.
 * Only put facts you have confirmed here: wrong data is worse than none.
 */
export const structuredData = (locale: string) => {
	const isItalian = locale === "it";

	return {
		"@context": "https://schema.org",
		"@type": "SportsActivityLocation",
		name: "SMUP | Sarah Pompanin Yoga",
		alternateName: "SMUP Yoga",
		url: `${SITE_URL}/${locale}`,
		sameAs: [RouteEnum.INSTAGRAM],
		email: "smup.yoga@gmail.com",
		telephone: "+39 366 145 0576",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Viale Dolomiti 9",
			addressLocality: "Ponte nelle Alpi",
			postalCode: "32014",
			addressRegion: "Belluno",
			addressCountry: "IT",
		},
		geo: { "@type": "GeoCoordinates", latitude: "46.1786", longitude: "12.2981" },
		areaServed: [
			{ "@type": "City", name: "Cortina d'Ampezzo" },
			{ "@type": "City", name: "Belluno" },
			{ "@type": "City", name: "Ponte nelle Alpi" },
			{ "@type": "AdministrativeArea", name: "Cadore" },
		],
		priceRange: "€€",
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				opens: "08:30",
				closes: "20:00",
			},
		],
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Yoga Classes",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Anukalana Yoga",
						description: isItalian
							? "Pratica integrata che unisce asana, pranayama, meditazione e lavoro miofasciale"
							: "Integrated practice combining asana, pranayama, meditation and fascia work",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Yin Yoga",
						description: isItalian
							? "Sequenze lente e passive con supporti"
							: "Slow passive postures aided by props",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: isItalian ? "Yoga Bimbi" : "Kids Yoga",
						description: isItalian
							? "Lezioni giocose per bambini"
							: "Playful sessions for children",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: isItalian ? "Lezioni Private" : "Private Lessons",
						description: isItalian
							? "Lezioni private online e in presenza"
							: "Private lessons online and in-person",
					},
				},
			],
		},
	};
};
