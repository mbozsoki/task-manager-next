import { Meta, StoryFn } from "@storybook/react";
import { Search } from "../components/search";

export default {
  title: "Components/Search",
  component: Search,
  argTypes: { disabled: { name: "boolean" } },
} as Meta<typeof Search>;

const SearchTemplate: StoryFn<typeof Search> = ({ ...args }) => (
  <Search {...args} />
);

export const Default = SearchTemplate.bind({});
Default.args = {
  onSearch: (value) => alert(`Searching for: ${value}`),
};
