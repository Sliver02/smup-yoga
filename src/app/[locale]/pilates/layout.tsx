import { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const isItalian = locale === "it";

	return {
		title: "Pilates",
		description: isItalian
			? "Pilates a Cortina, Belluno e Cadore. Sequenze lente e passive con supporti. Utile a stimolare il tessuto connettivo, aumentare mobilità e favorire il rilassamento profondo."
			: "Pilates in Cortina, Belluno and Cadore. Slow passive postures aided by props. Stimulates connective tissue, increases mobility and encourages deep relaxation.",
		openGraph: {
			title: isItalian
				? "Pilates — Immobilità profonda e rigenerazione"
				: "Pilates — Deep stillness and restoration",
			description: isItalian
				? "Lezioni di Pilates nelle Dolomiti con Sarah Pompanin. Pratica rigenerante per corpo e mente."
				: "Pilates classes in the Dolomites with Sarah Pompanin. Restorative practice for body and mind.",
			url: `https://smupyoga.com/${locale}/pilates/`,
			siteName: "SMUP Yoga",
			images: [
				{
					url: "https://smupyoga.com/images/PXL_20250823_080536915.jpg",
					width: 1200,
					height: 630,
					alt: "Pilates",
				},
			],
			locale: isItalian ? "it_IT" : "en_US",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: "Pilates",
			description: isItalian
				? "Immobilità profonda nelle Dolomiti"
				: "Deep stillness in the Dolomites",
		},
		alternates: {
			canonical: `https://smupyoga.com/${locale}/pilates/`,
			languages: {
				en: "https://smupyoga.com/en/pilates/",
				it: "https://smupyoga.com/it/pilates/",
			},
		},
	};
}

export default function PilatesLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
