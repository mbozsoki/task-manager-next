import { Meta, StoryFn } from "@storybook/react";
import { PasswordStrengthIndicator } from "../components/password-strength-indicator";
import { PASSWORD_STRENGTH_VALUES } from "../utils/sign-up-utils";
import { Card } from "../components/ui/card";

export default {
  title: "Components/Password strength indicator",
  component: PasswordStrengthIndicator,
} as Meta<typeof PasswordStrengthIndicator>;

const ProgressIndicatorTemplate: StoryFn<typeof PasswordStrengthIndicator> = ({
  ...args
}) => (
  <Card>
    <PasswordStrengthIndicator {...args} />
  </Card>
);

export const Default = ProgressIndicatorTemplate.bind({});
Default.args = {
  step: 0,
  values: PASSWORD_STRENGTH_VALUES,
};

export const Step1 = ProgressIndicatorTemplate.bind({});
Step1.args = {
  step: 1,
  values: PASSWORD_STRENGTH_VALUES,
};

export const Step2 = ProgressIndicatorTemplate.bind({});
Step2.args = {
  step: 2,
  values: PASSWORD_STRENGTH_VALUES,
};

export const Step3 = ProgressIndicatorTemplate.bind({});
Step3.args = {
  step: 3,
  values: PASSWORD_STRENGTH_VALUES,
};

export const Step4 = ProgressIndicatorTemplate.bind({});
Step4.args = {
  step: 4,
  values: PASSWORD_STRENGTH_VALUES,
};
