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
              backgroundColor: "transparent",
              color: "#FFFFFFCC",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <NavBar />
        <NavBarSpacer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
