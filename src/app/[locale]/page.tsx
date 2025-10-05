"use client";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Calendar from "@/components/sections/Calendar";
import Contact from "@/components/sections/Contact";
import Styles from "@/components/sections/Styles";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useTranslations } from "next-intl";

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

  const t = useTranslations("hero");

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero title={t("title")} subtitle={t("subtitle")} />
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
