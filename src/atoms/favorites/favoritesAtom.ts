import {atom} from "recoil";

interface FavoriteStock {
    symbol: string;
    holdings: number;
}

export const favoritesAtom = atom<FavoriteStock[]>({
    key: "favorites",
    default: [],
    effects: [({ setSelf, onSet}) => {
        // Load from local storage on initialization
        const savedFavorites = localStorage.getItem("favorites");
        if (savedFavorites != null) {
            try {
                setSelf(JSON.parse(savedFavorites));
            } catch {
            // If parsing fails, ignore and use default
            }
        }

        // Save to localStorage when it changes
        onSet((newValue) => {
        localStorage.setItem("favorites", JSON.stringify(newValue));
      });
    }]
});