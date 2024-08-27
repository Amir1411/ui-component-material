import { StoryFn, Meta } from "@storybook/react";
import Typography, { TypographyProps } from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "subtitle1",
          "subtitle2",
          "body1",
          "body2",
          "caption",
          "overline",
        ],
      },
    },
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "textPrimary",
          "textSecondary",
          "error",
        ],
      },
    },
    align: {
      control: {
        type: "select",
        options: ["inherit", "left", "center", "right", "justify"],
      },
    },
    gutterBottom: {
      control: "boolean",
    },
    noWrap: {
      control: "boolean",
    },
  },
} as Meta<TypographyProps>;

const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "body1",
  color: "textPrimary",
  align: "inherit",
  gutterBottom: false,
  noWrap: false,
  children: "This is a sample text using the Typography.",
};

export const PrimaryHeading = Template.bind({});
PrimaryHeading.args = {
  variant: "h1",
  color: "primary",
  align: "center",
  children: "This is a Primary Heading",
};

export const SecondaryHeading = Template.bind({});
SecondaryHeading.args = {
  variant: "h2",
  color: "secondary",
  align: "left",
  children: "This is a Secondary Heading",
};
