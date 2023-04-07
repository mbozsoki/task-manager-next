import { Meta, StoryFn } from "@storybook/react";
import { Avatar } from "../components/avatar";
import { AvatarGroup } from "../components/avatar-group";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: { disabled: { name: "boolean" } },
} as Meta<typeof Avatar>;

const AvatarTemplate: StoryFn<typeof Avatar> = ({ ...args }) => (
  <Avatar {...args} />
);

export const BasicAvatar = AvatarTemplate.bind({});
BasicAvatar.args = {
  src: "https://avatars.githubusercontent.com/u/810438?v=4",
  alt: "Dan Abramov",
};

const AvatarGroupTemplate: StoryFn<typeof AvatarGroup> = ({ ...args }) => {
  const onClick = () => alert("Avatar clicked");
  return (
    <AvatarGroup {...args}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/810438?v=4"
        onClick={onClick}
        alt="810438"
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/6751787?v=4"
        onClick={onClick}
        alt="6751787"
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/1500684?v=4"
        onClick={onClick}
        alt="1500684"
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/5580297?v=4"
        onClick={onClick}
        alt="5580297"
      />
    </AvatarGroup>
  );
};

export const BasicAvatarGroup = AvatarGroupTemplate.bind({});

export const LimitedAvatarGroup = AvatarGroupTemplate.bind({});
LimitedAvatarGroup.args = {
  limit: 2,
};
