import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "../components/card";
export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const ButtonTemplate: ComponentStory<typeof Card> = ({ ...args }) => (
  <Card {...args} />
);

export const BasicCard = ButtonTemplate.bind({});
BasicCard.args = {
  children: "Basic card",
};

