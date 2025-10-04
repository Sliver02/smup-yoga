"use client";
import AboutMe from "@/components/sections/AboutMe";
import Calendar from "@/components/sections/Calendar";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Contact from "@/components/sections/Contact";
import Styles from "@/components/sections/Styles";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Footer from "@/components/organisms/Footer";

const Home = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#e05d7c",
        contrastText: "#5f1224",
      },
    },
  });

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero
          title="Sarah Pompanin"
          subtitle="Yoga & Lifestyle in the Dolomites"
        />
        <AboutMe />
        <Calendar />
        <Styles />
        <Contact />
        <Footer />
      </ThemeProvider>
    </main>
  );
};

export default Home;
