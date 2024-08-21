import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta<ButtonProps>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: StoryFn<ButtonProps> = (args: any) => <Button {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
  label: "Click me",
  size: "medium",
  disabled: false,
};

BasicButton.argTypes = {
  variant: {
    control: {
      type: "select",
      options: ["clear", "outlined", "contained"],
    },
  },
  size: {
    control: {
      type: "select",
      options: ["small", "medium", "large"],
    },
  },
};
