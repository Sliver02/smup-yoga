import AboutMe from "@/components/sections/AboutMe";
import Calendar from "@/components/sections/Calendar";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Contact from "@/components/sections/Contact";
import Styles from "@/components/sections/Styles";

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
        <Styles />
        <Contact />
      </>
    </main>
  );
};

export default Home;
