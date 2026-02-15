import { atom } from "recoil";

export const themeModeAtom = atom<"light" | "dark">({
    key: "themeMode",
    default: "light",
});