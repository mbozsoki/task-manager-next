import { Meta, StoryFn } from "@storybook/react";
import { Switch } from "../components/ui/switch";
export default {
  title: "Components/Switch",
  component: Switch,
} as Meta<typeof Switch>;

const ButtonTemplate: StoryFn<typeof Switch> = ({ ...args }) => (
  <Switch {...args} />
);

export const BasicSwitch = ButtonTemplate.bind({});
BasicSwitch.args = {
  checked: false,
};
