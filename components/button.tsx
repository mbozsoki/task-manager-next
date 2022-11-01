import { PropsWithChildren } from "react";
import { Icon } from "./icon";

type ButtonVariant = "primary" | "secondary" | "outline" | "link";

export interface ButtonProps {
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
  leftIcon?: string;
  rightIcon?: string;
}

export const Button = ({
  variant = "primary",
  children,
  leftIcon,
  rightIcon,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const baseStyle = `
    appearance-none min-w-100 h-16
    px-6 rounded-lg leading-none
    text-base font-medium tracking-wider
    cursor-pointer focus:outline-none 
    transition-colors transition-100 ease-out
    disabled:cursor-auto disabled:pointer-events-none
  `;

  const getVariantStyle = () => {
    switch (variant) {
      case "primary":
        return `
          bg-burnt-sienna-500 hover:bg-burnt-sienna-600 active:bg-burnt-sienna-700
          text-white
          disabled:bg-lilac-luster
        `;
      case "secondary":
        return `
          hover:bg-burnt-sienna-100 active:bg-burnt-sienna-200
          text-burnt-sienna-700 border-2 border-solid border-burnt-sienna-500
          disabled:text-lilac-luster disabled:border-lilac-luster disabled:bg-transparent
        `;
      case "outline":
        return `
        hover:bg-burnt-sienna-100 active:bg-burnt-sienna-200
        text-burnt-sienna-700
        disabled:text-lilac-luster disabled:bg-transparent
        `;
      case "link":
        return `
          text-burnt-sienna-700 [&>*]:hover:underline active:text-burnt-sienna-800
          disabled:text-lilac-luster disabled:bg-transparent
        `;
    }
  };

  return (
    <button
      type="button"
      className={`${baseStyle} ${getVariantStyle()}`}
      {...props}
    >
      {leftIcon && (
        <span className="align-middle pr-2 leading-[3.5rem]">
          <Icon>{leftIcon}</Icon>
        </span>
      )}
      <span className="align-middle leading-[3.5rem]">{children}</span>
      {rightIcon && (
        <span className="align-middle pl-2 leading-[3.5rem]">
          <Icon>{rightIcon}</Icon>
        </span>
      )}
    </button>
  );
};

