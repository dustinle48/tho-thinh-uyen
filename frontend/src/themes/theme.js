import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Source Code Pro, Roboto, monospace, sans-serif",
    fontSize: 16,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
      },
    },
  },
  palette: {
    primary: { main: "#F4ED71" },
    secondary: { main: "#CAC7D7" },
    text: {
      primary: "#ffffff",
    }
  },
});
