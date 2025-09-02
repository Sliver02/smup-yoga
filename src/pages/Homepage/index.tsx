import Hero from "@/components/organisms/Hero";
import Header from "@/components/organisms/Header";
import AboutMe from "@/components/organisms/AboutMe";
import Calendar from "@/components/organisms/Calendar";
import LaifeStyle from "@/components/organisms/LifeStyle";

const Homepage = () => {
  return (
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
  );
};

export default Homepage;
