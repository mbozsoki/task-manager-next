import {
  PropsWithChildren,
  useState,
  FC,
  HTMLInputTypeAttribute,
  forwardRef,
} from "react";
import { Icon } from "./icon";

export type TextInputProps = PropsWithChildren<{
  type?: HTMLInputTypeAttribute;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  showError?: boolean;
}>;

const TextInput: FC<TextInputProps> = forwardRef<
  HTMLInputElement,
  TextInputProps
>(
  (
    {
      type = "text",
      defaultValue: label,
      disabled,
      showError = false,
      placeholder,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const getInputStyle = () => `
    w-full py-2 pl-6 ${type === "password" ? "pr-12" : "pr-6"} mb-2
    rounded-lg outline-none truncate
    bg-white border-2 
    ${showError ? "border-error" : "border-magnolia focus:border-lilac-luster"} 
    placeholder-magnolia text-lilac-luster 
    disabled:bg-magnolia disabled:text-cadet-grey
    disabled:pointer-events-none disabled:cursor-not-allowed
    `;

    const getInputType = () => {
      if (type !== "password") {
        return type;
      } else {
        return showPassword ? "text" : "password";
      }
    };

    return (
      <div
        className={[
          "relative",
          disabled ? "text-cadet-grey" : "text-burnt-sienna-400",
        ].join(" ")}
      >
        <input
          ref={ref}
          type={getInputType()}
          defaultValue={label}
          className={getInputStyle()}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={showError ? "true" : "false"}
          role={showError ? "alert" : "input"}
          {...props}
        />
        {type === "password" && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer absolute right-6 top-2"
          >
            {!showPassword && <Icon>eye</Icon>}
            {showPassword && <Icon>eye-off</Icon>}
          </span>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
