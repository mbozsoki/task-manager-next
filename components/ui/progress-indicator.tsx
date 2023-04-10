import { FC } from "react";

type Props = {
  percentage: number;
  bgColor?: string;
};

export const ProgressIndicator: FC<Props> = ({
  bgColor = "bg-magnolia",
  percentage,
}) => (
  <div className="w-full h-2 bg-magnolia rounded-lg relative">
    <div
      className={`w-0 h-2 rounded-lg transition-all duration-150 ${bgColor}`}
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);
