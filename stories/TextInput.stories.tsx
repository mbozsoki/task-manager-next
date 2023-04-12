import { Meta, StoryFn } from "@storybook/react";
import TextInput from "../components/ui/textInput";
import { Card } from "../components/ui/card";

export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {},
} as Meta<typeof TextInput>;

const TextInputTemplate: StoryFn<typeof TextInput> = ({ ...args }) => (
  <Card>
    <TextInput {...args} />
  </Card>
);

export const OutlineTextInput = TextInputTemplate.bind({});
OutlineTextInput.args = {
  placeholder: "This is a placeholder text...",
  disabled: false,
};

export const DisabledTextInput = TextInputTemplate.bind({});
DisabledTextInput.args = {
  defaultValue: "This input is disabled",
  placeholder: "This is a placeholder text...",
  disabled: true,
};

export const PasswordTextInput = TextInputTemplate.bind({});
PasswordTextInput.args = {
  defaultValue: "Secret password",
  type: "password",
  disabled: false,
};
