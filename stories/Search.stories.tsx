import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Search } from "../components/search";

export default {
  title: "Components/Search",
  component: Search,
  argTypes: { disabled: { name: "boolean" } },
} as ComponentMeta<typeof Search>;

const SearchTemplate: ComponentStory<typeof Search> = ({ ...args }) => (
  <Search {...args} />
);

export const Default = SearchTemplate.bind({});
Default.args = {
  onSearch: (value) => alert(`Searching for: ${value}`),
};
