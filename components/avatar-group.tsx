import { useState } from "react";

type AvatarGroupProps = {
  limit?: number;
  children: JSX.Element[];
};

export const AvatarGroup = ({ limit, children }: AvatarGroupProps) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex pl-3 [&>*]:-ml-3">
      {limit && !showAll ? (
        <>
          {children.slice(0, limit)}
          <MoreItemsButton
            itemCount={children.length - limit}
            onClick={() => setShowAll(true)}
          />
        </>
      ) : (
        children
      )}
    </div>
  );
};

type MoreItemsButtonProps = {
  itemCount: number;
  onClick: () => void;
};

const MoreItemsButton = ({ itemCount, onClick }: MoreItemsButtonProps) => {
  return (
    <span
      className="
        w-12 h-12 rounded-full border-2 border-white bg-cadet-grey
        flex items-center justify-center
        text-black hover:z-10 cursor-pointer
      "
      onClick={onClick}
    >
      +{itemCount}
    </span>
  );
};
