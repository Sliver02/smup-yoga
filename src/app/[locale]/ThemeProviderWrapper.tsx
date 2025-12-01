"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e05d7c",
      contrastText: "#5f1224",
    },
  },
});

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
