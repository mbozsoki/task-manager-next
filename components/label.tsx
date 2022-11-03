import { PropsWithChildren } from "react";

export const Label = ({ children }: PropsWithChildren<{}>) => {
  return <h4 className="font-medium mb-2">{children}</h4>;
};
