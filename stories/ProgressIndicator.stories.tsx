import { Meta, StoryFn } from "@storybook/react";
import { ProgressIndicator } from "../components/ui/progress-indicator";
import { Card } from "../components/ui/card";

export default {
  title: "Components/Progress Indicator",
  component: ProgressIndicator,
  argTypes: {
    percentage: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
} as Meta<typeof ProgressIndicator>;

const ProgressIndicatorTemplate: StoryFn<typeof ProgressIndicator> = ({
  ...args
}) => (
  <Card>
    <ProgressIndicator {...args} />
  </Card>
);

export const Default = ProgressIndicatorTemplate.bind({});
Default.args = {
  percentage: 0,
  bgColor: "bg-burnt-sienna-500",
};
