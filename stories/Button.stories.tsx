import { Meta, StoryFn } from "@storybook/react";
import { Button } from "../components/button";
import { IconButton } from "../components/icon-button";

export default {
  title: "Components/Button",
  argTypes: { disabled: { name: "disabled", type: "boolean" } },
} as Meta<typeof Button>;

const ButtonTemplate: StoryFn<typeof Button> = ({ ...args }) => (
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

export const ButtonWithIcon = ButtonTemplate.bind({});
ButtonWithIcon.args = {
  leftIcon: "cloud-download",
  children: "Icon with button",
  variant: "primary",
  disabled: false,
};

const IconButtonTemplate: StoryFn<typeof IconButton> = ({ ...args }) => (
  <IconButton {...args}>bell</IconButton>
);

export const Icon = IconButtonTemplate;
Icon.args = {
  withBadge: false,
};
