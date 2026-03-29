import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { themeModeAtom } from "./atoms/themeModeAtom";
import { useRecoilValue } from "recoil";
import Quote from "./pages/Quote";
import FavoritePage from "./pages/FavoritePage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBarSpacer from "./components/layout/NavBarSpacer";
import FavoriteLimitModal from "./components/favorites/FavoriteLimitModal";
import ProjectionPage from "./pages/ProjectionPage";

function App() {
  const themeMode = useRecoilValue(themeModeAtom);

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: themeMode === "dark" ? "#66BB6A" : "#2E7D32",
      },
      secondary: {
        main: "#0288D1",
      },
      text: {
        primary: themeMode === "dark" ? "#FFFFFF" : "#000000",
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: themeMode === "dark" ? "#66BB6A" : "#2E7D32",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor:
                themeMode === "dark"
                  ? "rgba(102, 187, 106, 0.4)"
                  : "rgba(46, 125, 50, 0.4)",
              color: "rgb(255, 255, 255)",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FavoriteLimitModal />
      <CssBaseline />
      <HashRouter>
        <NavBar />
        <NavBarSpacer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/projections" element={<ProjectionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
