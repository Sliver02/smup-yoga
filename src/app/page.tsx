import AboutMe from "@/components/sections/AboutMe";
import Calendar from "@/components/sections/Calendar";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import LaifeStyle from "@/components/sections/LifeStyle";

const Home = () => {
  return (
    <main>
      <>
        <Header />
        <Hero
          title="Sarah Pompanin"
          subtitle="Yoga & Lifestyle in the Dolomites"
        />
        <AboutMe />
        <Calendar />
        <LaifeStyle />
      </>
    </main>
  );
};

export default Home;
