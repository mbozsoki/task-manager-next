import { useEffect, useState } from "react";
import { Switch as HeadlessUiSwitch } from "@headlessui/react";

type SwitchProps = {
  checked?: boolean;
};

export function Switch({ checked = false, ...props }: SwitchProps) {
  const [enabled, setEnabled] = useState(checked);

  useEffect(() => {
    setEnabled(checked);
  }, [checked]);

  return (
    <HeadlessUiSwitch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-burnt-sienna-500" : "bg-lilac-luster"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
      {...props}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </HeadlessUiSwitch>
  );
}
