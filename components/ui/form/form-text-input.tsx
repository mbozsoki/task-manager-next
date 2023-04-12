import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextInput, { TextInputProps } from "../textInput";
import { useFieldContext } from "../../../hooks/use-field-context";

export const FormTextInput: FC<TextInputProps> = ({ ...props }) => {
  const { control } = useFormContext();
  const { name, rules, hasError } = useFieldContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextInput showError={hasError} {...props} {...field} />
      )}
    />
  );
};
