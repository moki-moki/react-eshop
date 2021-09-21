import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#a8e0dd",
    },
    secondary: {
      main: "#777ee2",
    },
    text: {
      primary: "#f9f8ff",
    },
    background: {
      paper: "#30323a",
      default: "#1e1f24",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 500,
      fontSize: "4rem",
    },
    h2: {
      fontWeight: 400,
      fontSize: "3rem",
    },
    h3: {
      fontWeight: 400,
      fontSize: "2.5rem",
    },
    h4: {
      fontWeight: 300,
      fontSize: "2rem",
    },
  },
});
