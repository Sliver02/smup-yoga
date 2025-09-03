import AboutMe from "@/components/sections/AboutMe";
import Calendar from "@/components/sections/Calendar";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import LaifeStyle from "@/components/sections/LifeStyle";

export default async function Home() {
  return (
    <main>
      <>
        <Header />
        <Hero title="SMUP Yoga" subtitle="Yoga & Lifestyle in the Dolomites" />
        <AboutMe />
        <Calendar />
        <LaifeStyle />
      </>
    </main>
  );
}
