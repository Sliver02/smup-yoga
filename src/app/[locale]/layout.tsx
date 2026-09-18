import "@/designSystem/globals.scss";
import classNames from "classnames";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/atoms/SmoothScroll";
import { rootMeta } from "@/common/seo";
import { structuredData } from "@/common/seoContent";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-inter",
});

const rightGrotesk = localFont({
	src: "../../../public/fonts/RightGrotesk.woff2",
	weight: "400",
	display: "swap",
	variable: "--font-grotesk",
});

export const generateMetadata = rootMeta;

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	// Extract the locale from the route params (async for Next.js App Router)
	const { locale } = await params;

	// Load the translation messages for the selected locale
	const messages = await getMessages({ locale });

	return (
		<html
			lang={locale}
			data-theme="light"
			className={classNames(inter.variable, rightGrotesk.variable)}
		>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData(locale)),
					}}
				/>
			</head>
			<body>
				<NextIntlClientProvider messages={messages}>
					<SmoothScroll>
						<div className={classNames("root")}>{children}</div>
					</SmoothScroll>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
