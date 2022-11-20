import { PropsWithChildren } from "react";
import { Icon } from "./icon";

type SidebarLogoProps = {
  icon: string;
};

export const SidebarLogo = ({
  icon,
  children,
}: PropsWithChildren<SidebarLogoProps>) => {
  return (
    <div className="flex items-center gap-x-2 whitespace-nowrap text-french-lilac">
      <span className="p-1">
        <Icon size={32}>{icon}</Icon>
      </span>
      <span className="font-medium">{children}</span>
    </div>
  );
};
