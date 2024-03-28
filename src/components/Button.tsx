import type { FC, ReactNode } from "react";
import { modalOpen, type ModalType } from "~/modalStore";

type ButtonProps = {
  children: ReactNode;
  modal: ModalType;
};

export const Button: FC<ButtonProps> = ({ children, modal }) => {
  return (
    <button
      onClick={() => modalOpen.set(modal)}
      className="rounded-lg bg-amber-600 px-1.5 py-1 leading-none text-white"
    >
      {children}
    </button>
  );
};
