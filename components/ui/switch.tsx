import { Switch as HeadlessUiSwitch } from "@headlessui/react";
import { FC, forwardRef } from "react";

export type SwitchProps = {
  value: boolean;
  onChange: (newValue: boolean) => void;
  showError?: boolean;
};

const Switch: FC<SwitchProps> = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ value, onChange, showError, ...props }, ref) => {
    return (
      <HeadlessUiSwitch
        className={[
          "relative inline-flex h-6 w-11 items-center rounded-full",
          value ? "bg-burnt-sienna-500" : "bg-lilac-luster",
        ].join(" ")}
        ref={ref}
        checked={value}
        onChange={() => onChange(!value)}
        aria-invalid={showError ? "true" : "false"}
        role={showError ? "alert" : "switch"}
        {...props}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            value ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </HeadlessUiSwitch>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
