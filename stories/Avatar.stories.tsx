import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Avatar } from "../components/avatar";
import { AvatarGroup } from "../components/avatar-group";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: { disabled: { name: "boolean" } },
} as ComponentMeta<typeof Avatar>;

const AvatarTemplate: ComponentStory<typeof Avatar> = ({ ...args }) => (
  <Avatar {...args} />
);

export const BasicAvatar = AvatarTemplate.bind({});
BasicAvatar.args = {
  src: "https://avatars.githubusercontent.com/u/810438?v=4",
  alt: "Dan Abramov",
};

const AvatarGroupTemplate: ComponentStory<typeof AvatarGroup> = ({
  ...args
}) => {
  const onClick = () => alert("Avatar clicked");
  return (
    <AvatarGroup {...args}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/810438?v=4"
        onClick={onClick}
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/6751787?v=4"
        onClick={onClick}
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/1500684?v=4"
        onClick={onClick}
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/5580297?v=4"
        onClick={onClick}
      />
    </AvatarGroup>
  );
};

export const BasicAvatarGroup = AvatarGroupTemplate.bind({});

export const LimitedAvatarGroup = AvatarGroupTemplate.bind({});
LimitedAvatarGroup.args = {
  limit: 2,
};
