import { replace as replaceIcons } from "eva-icons";
import { PropsWithChildren, useEffect } from "react";

interface IconProps {
  onClick?: () => void;
  size?: number;
  className?: string;
}

export const Icon = ({
  children,
  onClick,
  size,
  className,
}: PropsWithChildren<IconProps>) => {
  useEffect(() => {
    replaceIcons();
  }, [children]);

  return (
    <span
      onClick={onClick}
      className={`${className} ${onClick ? "cursor-pointer" : ""}`}
    >
      <i
        data-eva={children}
        data-eva-fill="currentColor"
        data-eva-width={size ?? 24}
        data-eva-height={size ?? 24}
        className={`inline-block text-base align-middle`}
      ></i>
    </span>
  );
};
