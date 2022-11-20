import { PropsWithChildren } from "react";
import { Icon } from "./icon";

type MenuItemProps = {
  icon: string;
  href?: string;
  active?: boolean;
};

export const MenuItem = ({
  icon,
  children,
  href,
  active,
}: PropsWithChildren<MenuItemProps>) => {
  return (
    <a
      href={href}
      className={`
      flex items-center gap-x-2 p-2 rounded-md
      whitespace-nowrap no-underline
      hover:text-burnt-sienna-500
      ${
        active
          ? "text-burnt-sienna-500 bg-burnt-sienna-100"
          : "text-burnt-sienna-300"
      }
      `}
    >
      <Icon>{icon}</Icon>
      <span className="font-semibold">{children}</span>
    </a>
  );
};
