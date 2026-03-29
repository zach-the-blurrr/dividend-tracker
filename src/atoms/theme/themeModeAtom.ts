import { atom } from "recoil";

export const themeModeAtom = atom<"light" | "dark">({
    key: "themeMode",
    default: "light",
    effects: [({ setSelf, onSet }) => {
        // Load from localStorage on initialization
        const savedMode = localStorage.getItem("themeMode") as "light" | "dark" | null;
        if (savedMode === "light" || savedMode === "dark") {
            setSelf(savedMode);
        }

        // Save to localStorage whenever it changes
        onSet((newValue) => {
            localStorage.setItem("themeMode", newValue);
        });
    }]
});