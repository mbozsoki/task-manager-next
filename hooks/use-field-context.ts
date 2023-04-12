import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { FieldContext } from "../components/ui/form/form-field";

export const useFieldContext = () => {
  const formContext = useFormContext();
  const { name, rules } = useContext(FieldContext);

  const errors = formContext?.formState.errors[name];

  return {
    name,
    rules,
    errors,
    hasError: Boolean(errors),
  };
};
