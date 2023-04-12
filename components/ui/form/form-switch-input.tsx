import { FC, PropsWithChildren, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useFieldContext } from "../../../hooks/use-field-context";
import Switch from "../switch";

export const FormSwitchInput: FC<PropsWithChildren> = ({ children }) => {
  const { name, rules, hasError } = useFieldContext();
  const { register, setValue, watch } = useFormContext();
  const value = watch(name);

  useEffect(() => {
    register(name, rules);
  }, [register, name, rules]);

  return (
    <div className="flex gap-x-4">
      <Switch
        value={value}
        onChange={(checked: boolean) => setValue(name, checked)}
        showError={hasError}
      ></Switch>
      <span
        className={[
          hasError ? "text-error" : "",
          rules?.required ? "after:content-['*']" : "",
        ].join(" ")}
      >
        {children}
      </span>
    </div>
  );
};
