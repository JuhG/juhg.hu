import { atom } from "nanostores";

export type ModalType =
  | "none"
  | "history"
  | "diablo"
  | "button"
  | "freelancing"
  | "agency"
  | "tools"
  | "thinking";

export const modalOpen = atom<ModalType>("none");
