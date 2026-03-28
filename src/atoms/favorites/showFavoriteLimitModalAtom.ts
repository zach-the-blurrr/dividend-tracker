import {atom} from "recoil";

export const showFavoriteLimitModalAtom = atom<boolean>({
    key: "showFavoriteLimitModal",
    default: false
});