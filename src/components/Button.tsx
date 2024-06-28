import type { ComponentProps, FC } from "react";

export const Button: FC<ComponentProps<"button">> = ({ children, ...props }) => {
  return (
    <button className="rounded-lg bg-amber-600 px-1.5 py-1 leading-none text-white" {...props}>
      {children}
    </button>
  );
};
