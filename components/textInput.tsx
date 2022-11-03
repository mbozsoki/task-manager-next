import { PropsWithChildren, useState } from "react";
import { Icon } from "./icon";

type InputType = "text" | "password";
type InputVariant = "outline" | "fill";

interface InputProps {
  type?: InputType;
  defaultValue?: string;
  placeholder?: string;
  variant?: InputVariant;
  disabled?: boolean;
}

export const TextInput = ({
  type = "text",
  defaultValue: label,
  disabled,
  ...props
}: PropsWithChildren<InputProps>) => {
  const [showPassword, setShowPassword] = useState(false);

  const getPadding = () =>
    `py-2 pl-6 ${type === "password" ? "pr-12" : "pr-6"}`;

  return (
    <div
      className={`
      relative ${disabled ? "text-cadet-grey" : "text-burnt-sienna-500"}
      `}
    >
      <input
        type={type === "password" && !showPassword ? "password" : "text"}
        defaultValue={label}
        className={`
        w-full ${getPadding()} mb-4
        rounded-lg bg-white border-2 border-burnt-sienna-300 placeholder-burnt-sienna-300 
        focus:border-burnt-sienna-500 outline-none truncate
         disabled:border-cadet-grey disabled:pointer-events-none
        `}
        disabled={disabled}
        {...props}
      />
      {type === "password" && (
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer absolute right-6 top-2"
        >
          {!showPassword && <Icon>eye-outline</Icon>}
          {showPassword && <Icon>eye-off-outline</Icon>}
        </span>
      )}
    </div>
  );
};
