"use client";
import { InfiniteText } from "@/components/molecules/InfiniteText";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { BookCta } from "@/components/sections/BookCta";
import { Contact } from "@/components/sections/Contact";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { PracticesCards } from "@/components/sections/PracticesCards";
import { useTranslations } from "next-intl";

const Home = () => {
	const t = useTranslations("hero");
	const tMarquee = useTranslations("marquee");

	const marqueeItems = [
		tMarquee("weekly-classes"),
		tMarquee("join-now"),
		tMarquee("relax"),
		tMarquee("breathe"),
		tMarquee("live"),
	];

	return (
		<main>
			<Header />
			<Hero title={t("title")} subtitle={t("subtitle")} />
			<AboutMe />
			<InfiniteText
				backgroundColor="var(--primary-active)"
				items={[...marqueeItems, ...marqueeItems]}
			/>
			<PracticesCards />
			<BookCta />
			<InstagramFeed />
			<Contact />
			<Footer />
		</main>
	);
};

export default Home;
