import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const AtomSidebaCheckUnderline = atom({
  key: "AtomSidebaCheckUnderline",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
