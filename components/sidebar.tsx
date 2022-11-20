import { ReactNode, useState } from "react";
import { Icon } from "./icon";

type SidebarProps = {
  children: {
    header: ReactNode;
    content: ReactNode;
  };
};

export const Sidebar = ({ children }: SidebarProps) => {
  const { header, content } = children;
  const [opened, setOpened] = useState<boolean>(true);

  return (
    <div
      className={`
      h-full flex flex-col py-6 px-4 bg-white rounded-lg
      transition-[width] ease-in-out delay-150
      ${opened ? "w-[4.5rem]" : "w-60"}`}
    >
      <div className="overflow-hidden mb-6 text-xl">{header}</div>
      <div className="flex-grow flex flex-col gap-y-1 overflow-hidden">
        {content}
      </div>
      <div className="w-10 text-center text-french-lilac">
        {!opened && (
          <Icon onClick={() => setOpened(true)}>arrowhead-left-outline</Icon>
        )}
        {opened && (
          <Icon onClick={() => setOpened(false)}>arrowhead-right-outline</Icon>
        )}
      </div>
    </div>
  );
};
