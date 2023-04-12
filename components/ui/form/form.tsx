import { HTMLAttributes, PropsWithChildren } from "react";
import { FormLabel } from "./form-label";
import { FormHint } from "./form-hint";
import { FormField } from "./form-field";
import { FormSwitchInput } from "./form-switch-input";
import { FormTextInput } from "./form-text-input";

type Props = PropsWithChildren<HTMLAttributes<HTMLFormElement>>;

const Form = ({ children, ...props }: Props) => {
  return (
    <form className="grid grid-rows-1 gap-y-6" {...props}>
      {children}
    </form>
  );
};

Form.Field = FormField;
Form.Label = FormLabel;
Form.TextInput = FormTextInput;
Form.Switch = FormSwitchInput;
Form.Hint = FormHint;

export default Form;
