import { FC } from "react";
import { ProgressIndicator } from "./ui/progress-indicator";

type Props = {
  values: {
    label: string;
    color: string;
  }[];
  step: number;
};

const DEFAULT_STATE = { label: "", color: "initial" };

const bgColorVariants: { [key: string]: string } = {
  info: "bg-info",
  warning: "bg-warning",
  error: "bg-error",
  success: "bg-success",
  initial: "bg-magnolia",
} as const;

const textColorVariants: { [key: string]: string } = {
  info: "text-info",
  warning: "text-warning",
  error: "text-error",
  success: "text-success",
  initial: "text-black",
} as const;

export const PasswordStrengthIndicator: FC<Props> = ({ step, values }) => {
  const { label, color } = step > 0 ? values[step - 1] : DEFAULT_STATE;
  const progressPercentage = (step / values.length) * 100;

  return (
    <div className="h-4 flex items-center justify-end gap-x-4">
      <span className={textColorVariants[color]}>{label}</span>
      <div className="w-40 ">
        <ProgressIndicator
          percentage={progressPercentage}
          bgColor={bgColorVariants[color]}
        />
      </div>
    </div>
  );
};
