import { FC, PropsWithChildren } from "react";

export const Card: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <div className={`p-6 bg-white rounded-lg`} {...props}>
      {children}
    </div>
  );
};
