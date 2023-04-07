import { Meta, StoryFn } from "@storybook/react";
import { MenuItem } from "../components/ui/menu-item";
import Sidebar from "../components/sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
} as Meta<typeof Sidebar>;

const SidebarTemplate: StoryFn<typeof Sidebar> = () => (
  <Sidebar>
    {{
      header: <Sidebar.Logo icon="layers">Example project</Sidebar.Logo>,
      content: (
        <>
          <Sidebar.MenuItem icon="calendar" href="#/calendar">
            Calendar
          </Sidebar.MenuItem>
          <Sidebar.MenuItem icon="people" href="#/users" active={true}>
            Users
          </Sidebar.MenuItem>
          <Sidebar.MenuItem icon="settings-2" href="#/settings">
            Settings
          </Sidebar.MenuItem>
        </>
      ),
    }}
  </Sidebar>
);

export const BasicSidebar = SidebarTemplate.bind({});
