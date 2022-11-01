import { replace as replaceIcons } from "eva-icons";
import { PropsWithChildren, useEffect } from "react";

interface IconProps {
  onClick?: () => void;
}

export const Icon = ({ children, onClick }: PropsWithChildren<IconProps>) => {
  useEffect(() => {
    replaceIcons();
  }, [children]);

  return (
    <span onClick={onClick} className={onClick && "cursor-pointer"}>
      <i
        data-eva={children}
        data-eva-fill="currentColor"
        className="inline-block w-6 h-6 text-base align-middle"
      ></i>
    </span>
  );
};
