import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Sample from "./pages/Sample";
import NavBar from "./components/NavBar";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

const theme = createTheme({
  palette: {
    mode: prefersDarkMode ? "dark" : "light",
    primary: {
      main: prefersDarkMode ? "#66BB6A" : "#2E7D32",
    },
    secondary: {
      main: "#0288D1",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: prefersDarkMode ? "#66BB6A" : "#2E7D32",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
            color: "#FFFFFFCC",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Sample />} />
          <Route path="/home" element={<h1>HOME PAGE</h1>} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
