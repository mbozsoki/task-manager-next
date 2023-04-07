import { PropsWithChildren } from "react";

export const Card = ({ children, ...props }: PropsWithChildren<{}>) => {
  return (
    <div className="p-6 bg-white rounded-lg" {...props}>
      {children}
    </div>
  );
};
