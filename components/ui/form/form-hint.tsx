import { FC, PropsWithChildren } from "react";
import { useFieldContext } from "../../../hooks/use-field-context";

type Props = PropsWithChildren<{
  show?: boolean;
}>;

export const FormHint: FC<Props> = ({ children, show = true, ...props }) => {
  const { hasError } = useFieldContext();

  return (
    <div
      className={[
        "text-sm",
        hasError ? " text-error" : "text-cadet-grey",
        show ? "" : "invisible",
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
};
