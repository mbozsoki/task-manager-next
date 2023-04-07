import { PropsWithChildren } from "react";

export const Label = ({ children, ...props }: PropsWithChildren<{}>) => {
  return (
    <h4 className="font-medium mb-2 text-burnt-sienna-500" {...props}>
      {children}
    </h4>
  );
};
