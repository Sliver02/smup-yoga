"use client";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Calendar from "@/components/sections/Calendar";
import Contact from "@/components/sections/Contact";
import Styles from "@/components/sections/Styles";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("hero");

  return (
    <main>
      <Header />
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <AboutMe />
      <Calendar />
      <Styles />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
