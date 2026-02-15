import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Sample from "./pages/Sample";
import NavBar from "./components/NavBar";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { themeModeAtom } from "./atoms/themeModeAtom";
import { useRecoilValue } from "recoil";

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
        <Routes>
          <Route path="/" element={<Sample />} />
          <Route path="/home" element={<h1>HOME PAGE</h1>} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
