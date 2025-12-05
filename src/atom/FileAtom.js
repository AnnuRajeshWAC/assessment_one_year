import { atom } from "jotai";

export const fileAtom = atom(
  {},

  (get, set, update) => {
    set(fileAtom, update);
  }
);
