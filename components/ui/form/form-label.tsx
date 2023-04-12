import { FC, PropsWithChildren } from "react";
import { useFieldContext } from "../../../hooks/use-field-context";

type Props = PropsWithChildren<{ label: string }>;

export const FormLabel: FC<Props> = ({ children, label, ...props }) => {
  const { name, hasError, rules } = useFieldContext();

  return (
    <label
      htmlFor={name}
      className="font-medium mb-2 text-cadet-grey flex justify-between"
      {...props}
    >
      <span
        className={[
          hasError ? " text-error" : "",
          rules?.required ? "after:content-['*']" : "",
        ].join(" ")}
      >
        {label}
      </span>
      {children}
    </label>
  );
};
