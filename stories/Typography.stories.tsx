import { Meta, Story } from "@storybook/react";

export default {
  title: "Design system/Typography",
} as Meta;

const TypographyTemplate: Story = () => (
  <>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <div>Body text</div>
    <a href="#">Link</a>
  </>
);

export const Typography = TypographyTemplate.bind({});

