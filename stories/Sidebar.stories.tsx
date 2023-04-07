import { Meta, StoryFn } from "@storybook/react";
import { MenuItem } from "../components/menu-item";
import { Sidebar } from "../components/sidebar";
import { SidebarLogo } from "../components/sidebar-logo";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
} as Meta<typeof Sidebar>;

const SidebarTemplate: StoryFn<typeof Sidebar> = () => (
  <Sidebar>
    {{
      header: <SidebarLogo icon="layers">Example project</SidebarLogo>,
      content: (
        <>
          <MenuItem icon="calendar" href="#/calendar">
            Calendar
          </MenuItem>
          <MenuItem icon="people" href="#/users" active={true}>
            Users
          </MenuItem>
          <MenuItem icon="settings-2" href="#/settings">
            Settings
          </MenuItem>
        </>
      ),
    }}
  </Sidebar>
);

export const BasicSidebar = SidebarTemplate.bind({});
