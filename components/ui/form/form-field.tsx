import { FC, PropsWithChildren, createContext } from "react";
import { FieldValues, RegisterOptions } from "react-hook-form";

type FieldState = {
  name: string;
  rules?: RegisterOptions<FieldValues, string> | undefined;
};
type Props = PropsWithChildren<FieldState>;

export const FieldContext = createContext<FieldState>({ name: "" });

export const FormField: FC<Props> = ({ children, name, rules }) => {
  return (
    <FieldContext.Provider value={{ name, rules }}>
      <fieldset>{children}</fieldset>
    </FieldContext.Provider>
  );
};
