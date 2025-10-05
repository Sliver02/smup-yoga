export const locales = ["en", "it"];
export const defaultLocale = "it";

export type Language = (typeof locales)[number];

export const routeTranslations = {
  en: {
    home: "Home",
    about: "About me",
    calendar: "Calendar",
    styles: "Styles",
    contact: "Contact",
    "hero-title": "Sarah Pompanin",
    "hero-subtitle": "Yoga & Lifestyle in the Dolomites",
    "about-description":
      "I'm Sarah Pompanin, a certified yoga instructor (RYT 200) based in the stunning Dolomites, Italy. My journey into yoga began in 2015, and since then, I've been passionate about sharing its transformative power with others.",
    "join-now": "Join now",
    "weekly-classes": "Weekly classes",
    "live-yoga": "Live yoga",
    relax: "Relax",
    breathe: "Breathe",
    live: "Live",
  },
  it: {
    home: "Home",
    about: "Chi sono",
    calendar: "Calendario",
    styles: "Stili",
    contact: "Contatti",
    "hero-title": "Sarah Pompanin",
    "hero-subtitle": "Yoga & Lifestyle nelle Dolomiti",
    title: "Chi sono",
    "about-description":
      "Sono Sarah Pompanin, insegnante di yoga certificata (RYT 200) con base nelle splendide Dolomiti, in Italia. Il mio viaggio nello yoga è iniziato nel 2015 e da allora sono appassionata nel condividere il suo potere trasformativo con gli altri.",
    "join-now": "Iscriviti ora",
    "weekly-classes": "Lezioni settimanali",
    "live-yoga": "Vivi log Yoga",
    relax: "Rilassati",
    breathe: "Respira",
    live: "Vivi",
  },
};
