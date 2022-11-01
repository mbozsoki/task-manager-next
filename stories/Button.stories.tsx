import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../components/button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { disabled: { name: "boolean" } },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = ({ ...args }) => (
  <Button {...args} />
);

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  children: "Primary button",
  variant: "primary",
  disabled: false,
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  children: "Secondary button",
  variant: "secondary",
  disabled: false,
};

export const Outline = ButtonTemplate.bind({});
Outline.args = {
  children: "Outline button",
  variant: "outline",
  disabled: false,
};

export const Link = ButtonTemplate.bind({});
Link.args = {
  children: "Link button",
  variant: "link",
  disabled: false,
};

export const IconButton = ButtonTemplate.bind({});
IconButton.args = {
  leftIcon: "cloud-download-outline",
  children: "Icon with button",
  variant: "primary",
  disabled: false,
};

