import AboutMe from "@/components/organisms/AboutMe";
import Calendar from "@/components/organisms/Calendar";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import LaifeStyle from "@/components/organisms/LifeStyle";
import {
  getImagePlaceholder,
  registerImagePlaceholder,
} from "@/scripts/imagePlaceholder";

export default async function Home() {
  const base64 = await getImagePlaceholder("/images/IMG_2617.png");
  registerImagePlaceholder("/images/foo.jpg", base64);

  return (
    <main>
      <>
        <Header />
        <Hero
          title="SMUP Yoga"
          subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, id! Necessitatibus, odit."
        />
        <AboutMe />
        <Calendar />
        <LaifeStyle />
      </>
    </main>
  );
}
