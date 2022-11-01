import { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren<{}>) => {
  return <div className="p-6 bg-white rounded-lg">{children}</div>;
};
