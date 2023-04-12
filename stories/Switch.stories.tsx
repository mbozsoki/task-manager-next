import { Meta, StoryFn } from "@storybook/react";
import Switch from "../components/ui/switch";
import { useEffect, useState } from "react";
export default {
  title: "Components/Switch",
  component: Switch,
} as Meta<typeof Switch>;

const ButtonTemplate: StoryFn<typeof Switch> = ({
  value,
  onChange,
  ...args
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(value);
  }, [value]);

  return (
    <Switch
      value={checked}
      onChange={(newValue) => {
        setChecked(!checked);
        onChange(newValue);
      }}
      {...args}
    />
  );
};

export const BasicSwitch = ButtonTemplate.bind({});
BasicSwitch.args = {
  value: false,
  onChange: (newValue) => console.log(`Value changed: ${newValue}`),
};
