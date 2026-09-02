"use client";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { BookCta } from "@/components/sections/BookCta";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { PracticesCards } from "@/components/sections/PracticesCards";
import { useTranslations } from "next-intl";

const Home = () => {
	const t = useTranslations("hero");

	return (
		<main>
			<Header />
			<Hero title={t("title")} subtitle={t("subtitle")} />
			<AboutMe />
			<PracticesCards />
			<BookCta />
			{/* <InstagramFeed /> */}
			<Footer />
		</main>
	);
};

export default Home;
