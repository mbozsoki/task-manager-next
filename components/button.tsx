import { PropsWithChildren } from "react";
import { Icon } from "./icon";

type ButtonVariant = "primary" | "secondary" | "outline" | "link";

export interface ButtonProps {
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({
  variant = "primary",
  children,
  leftIcon,
  rightIcon,
  className,
  type,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const baseStyle = `
    appearance-none min-w-100 h-12
    px-6 rounded-lg
    text-base font-medium tracking-wider
    cursor-pointer focus:outline-none 
    transition-colors transition-100 ease-out
    disabled:cursor-auto disabled:pointer-events-none
    [&>*]:leading-[2.75rem] [&>*]:align-middle
  `;

  const getVariantStyle = () => {
    switch (variant) {
      case "primary":
        return `
          bg-burnt-sienna-500 hover:bg-burnt-sienna-600 active:bg-burnt-sienna-700
          text-white
          disabled:bg-cadet-grey
        `;
      case "secondary":
        return `
          hover:bg-burnt-sienna-100 active:bg-burnt-sienna-200
          text-burnt-sienna-700 border-2 border-solid border-burnt-sienna-500
          disabled:text-cadet-grey disabled:border-cadet-grey disabled:bg-transparent
        `;
      case "outline":
        return `
        hover:bg-burnt-sienna-100 active:bg-burnt-sienna-200
        text-burnt-sienna-700
        disabled:text-cadet-grey disabled:bg-transparent
        `;
      case "link":
        return `
          text-burnt-sienna-700 [&>*]:hover:underline active:text-burnt-sienna-800
          disabled:text-cadet-grey disabled:bg-transparent
        `;
    }
  };

  return (
    <button
      type={type ?? "button"}
      className={`${baseStyle} ${getVariantStyle()} ${className}`}
      {...props}
    >
      {leftIcon && (
        <span className="pr-2">
          <Icon>{leftIcon}</Icon>
        </span>
      )}
      <span>{children}</span>
      {rightIcon && (
        <span className="pl-2">
          <Icon>{rightIcon}</Icon>
        </span>
      )}
    </button>
  );
};

