import { PropsWithChildren, ReactNode, useState } from "react";
import { Icon } from "./ui/icon";

type SidebarProps = {
  children: {
    header: ReactNode;
    content: ReactNode;
  };
};

type LogoProps = {
  icon: string;
};

type MenuItemProps = {
  icon: string;
  href?: string;
  active?: boolean;
};

const Sidebar = ({ children, ...props }: SidebarProps) => {
  const { header, content } = children;
  const [opened, setOpened] = useState<boolean>(true);

  return (
    <div
      className={`
      h-full flex flex-col py-6 px-4 bg-white rounded-lg
      transition-[width] ease-in-out duration-150
      ${opened ? "w-[4.5rem]" : "w-60"}`}
      {...props}
    >
      <div className="overflow-hidden mb-20 text-xl">{header}</div>
      <div className="flex-grow flex flex-col gap-y-1 overflow-hidden mb-6">
        {content}
      </div>
      <div className="w-10 text-center text-french-lilac">
        {!opened && <Icon onClick={() => setOpened(true)}>arrowhead-left</Icon>}
        {opened && (
          <Icon onClick={() => setOpened(false)}>arrowhead-right</Icon>
        )}
      </div>
    </div>
  );
};

const Logo = ({ icon, children, ...props }: PropsWithChildren<LogoProps>) => {
  return (
    <div
      className="flex items-center gap-x-2 whitespace-nowrap text-french-lilac"
      {...props}
    >
      <span className="p-1">
        <Icon size={32}>{icon}</Icon>
      </span>
      <span className="font-medium">{children}</span>
    </div>
  );
};

const MenuItem = ({
  icon,
  children,
  href,
  active,
  ...props
}: PropsWithChildren<MenuItemProps>) => {
  return (
    <a
      href={href}
      className={`
      flex items-center gap-x-2 p-2 rounded-md
      whitespace-nowrap no-underline
      hover:text-burnt-sienna-500
      ${active ? "text-burnt-sienna-500" : "text-burnt-sienna-300"}
      `}
      {...props}
    >
      <Icon>{icon}</Icon>
      <span className="font-semibold">{children}</span>
    </a>
  );
};

Sidebar.Logo = Logo;
Sidebar.MenuItem = MenuItem;

export default Sidebar;
