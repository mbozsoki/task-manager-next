import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextInput } from "../components/textInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const TextInputTemplate: ComponentStory<typeof TextInput> = ({ ...args }) => (
  <TextInput {...args} />
);

export const OutlineTextInput = TextInputTemplate.bind({});
OutlineTextInput.args = {
  placeholder: "This is a placeholder text...",
  variant: "outline",
  disabled: false,
};

export const DisabledTextInput = TextInputTemplate.bind({});
DisabledTextInput.args = {
  defaultValue: "This input is disabled",
  placeholder: "This is a placeholder text...",
  variant: "outline",
  disabled: true,
};

export const PasswordTextInput = TextInputTemplate.bind({});
PasswordTextInput.args = {
  defaultValue: "Secret password",
  variant: "outline",
  type: "password",
  disabled: false,
};

