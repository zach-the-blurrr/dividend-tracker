import { IconButton } from "@mui/material";
import { useRecoilState } from "recoil";
import { themeModeAtom } from "../atoms/themeModeAtom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeToggle() {
  const [themeMode, setThemeMode] = useRecoilState(themeModeAtom);
  const isDark = themeMode === "dark" ? true : false;
  return (
    <IconButton
      color="inherit"
      onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
    >
      {isDark ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
