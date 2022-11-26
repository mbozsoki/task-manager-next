import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuItem } from "../components/menu-item";
import { Sidebar } from "../components/sidebar";
import { SidebarLogo } from "../components/sidebar-logo";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const SidebarTemplate: ComponentStory<typeof Sidebar> = () => (
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
