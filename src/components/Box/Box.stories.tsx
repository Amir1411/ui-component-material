import { Typography } from "@mui/material";
import Box, { BoxProps } from "./Box";
import { Meta, StoryFn } from "@storybook/react/*";

export default {
  title: "Components/Box",
  component: Box,
  argTypes: {
    padding: { control: "number" },
    margin: { control: "number" },
    backgroundColor: { control: "color" },
    borderRadius: { control: "number" },
    boxShadow: { control: "number" },
  },
} as Meta<BoxProps>;

// Template for rendering the Box component
const Template: StoryFn<typeof Box> = (args) => <Box {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  padding: 3,
  margin: 2,
  backgroundColor: "lightblue",
  borderRadius: 4,
  boxShadow: 2,
  children: (
    <Typography variant="h6" color="textPrimary">
      This is a custom Box component!
    </Typography>
  ),
};

// Story with different background color
export const WithDifferentBackgroundColor = Template.bind({});
WithDifferentBackgroundColor.args = {
  padding: 3,
  margin: 2,
  backgroundColor: "lightgreen",
  borderRadius: 4,
  boxShadow: 2,
  children: (
    <Typography variant="h6" color="textPrimary">
      This is a custom Box component with a different background color!
    </Typography>
  ),
};

// Story with no shadow
export const WithoutShadow = Template.bind({});
WithoutShadow.args = {
  padding: 3,
  margin: 2,
  backgroundColor: "lightcoral",
  borderRadius: 4,
  boxShadow: 0,
  children: (
    <Typography variant="h6" color="textPrimary">
      This is a custom Box component without shadow!
    </Typography>
  ),
};
