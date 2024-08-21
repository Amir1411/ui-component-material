import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Light mode specific settings
          primary: {
            main: "#08979C",
          },
          background: {
            default: "#f5f5f5",
            paper: "#ffffff",
          },
        }
      : {
          // Dark mode specific settings
          primary: {
            main: "#08979C",
          },
          background: {
            default: "#121212",
            paper: "#1d1d1d",
          },
        }),
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export const lightTheme = createTheme(getDesignTokens("light"));
export const darkTheme = createTheme(getDesignTokens("dark"));
