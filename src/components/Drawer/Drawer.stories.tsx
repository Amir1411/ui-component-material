import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Drawer from "../Drawer";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

export default {
  title: "Components/Drawer",
  component: Drawer,
} as Meta;

const Template: StoryFn<typeof Drawer> = (args) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <Button onClick={toggleDrawer}>Open Drawer</Button>
      <Drawer {...args} isOpen={isDrawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 350 }} role="presentation">
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  anchor: "right",
  variant: "temporary",
};

Default.argTypes = {
  anchor: {
    control: {
      type: "select",
      options: ["top", "left", "bottom", "right"],
    },
  },
  variant: {
    control: {
      type: "select",
      options: ["permanent", "persistent", "temporary"],
    },
  },
};
