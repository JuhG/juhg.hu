import type { FC, ReactNode } from "react";

type MessageProps = {
  children: ReactNode;
};

export const Message: FC<MessageProps> = ({ children }) => {
  return (
    <div className="rounded-lg border-2 border-amber-600 bg-amber-50 p-4 text-amber-800 [&>p]:m-0">
      {children}
    </div>
  );
};
