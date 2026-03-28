import { atom } from "recoil";

export const favoritesCapacityAtom = atom<number>({
    key: "favoritesCapacity",
    default: 20
});
