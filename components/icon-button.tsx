import { PropsWithChildren } from "react";
import { Icon } from "./icon";

type IconButtonProps = {
  withBadge: boolean;
};

export const IconButton = ({
  withBadge,
  children,
  ...props
}: PropsWithChildren<IconButtonProps>) => (
  <button
    className="
    relative appearance-none cursor-pointer focus:outline-none rounded-lg
    text-burnt-sienna-500 hover:text-burnt-sienna-600 active:text-burnt-sienna-700
  "
    {...props}
  >
    {withBadge && <Badge />}
    <Icon className="p-2">{children}</Icon>
  </button>
);

const Badge = () => (
  <div className="w-3 h-3 absolute top-0 right-[8px] rounded-lg border-2 border-alabaster bg-french-lilac"></div>
);
