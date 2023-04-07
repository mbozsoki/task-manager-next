import { Meta, StoryFn } from "@storybook/react";
import { Card } from "../components/card";
export default {
  title: "Components/Card",
  component: Card,
} as Meta<typeof Card>;

const ButtonTemplate: StoryFn<typeof Card> = ({ ...args }) => (
  <Card {...args} />
);

export const BasicCard = ButtonTemplate.bind({});
BasicCard.args = {
  children: "Basic card",
};
