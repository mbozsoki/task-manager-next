import { FC } from "react";

type AvatarProps = {
  src: string;
  onClick?: () => void;
  alt?: string;
};

export const Avatar: FC<AvatarProps> = ({ src, alt, onClick }) => {
  return (
    <img
      className={`w-12 h-12 rounded-full border-2 border-white object-cover hover:z-10 ${
        onClick && "cursor-pointer"
      }`}
      src={src}
      onClick={onClick}
      alt={alt}
    />
  );
};
