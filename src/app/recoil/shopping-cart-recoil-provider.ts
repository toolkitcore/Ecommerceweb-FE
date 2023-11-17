import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const AtomShoppingCartContext = atom({
  key: "AtomShoppingCartContext",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
