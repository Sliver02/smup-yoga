"use client";
import AboutMe from "@/components/sections/AboutMe";
import Calendar from "@/components/sections/Calendar";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Contact from "@/components/sections/Contact";
import Styles from "@/components/sections/Styles";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const Home = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#85a371",
        contrastText: "#343d2d",
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
      </ThemeProvider>
    </main>
  );
};

export default Home;
