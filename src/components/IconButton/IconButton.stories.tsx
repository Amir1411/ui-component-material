import { Meta, StoryFn } from "@storybook/react";
import IconButton, { IconButtonProps } from "./IconButton";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

export default {
  title: "IconButton",
  component: IconButton,
} as Meta;

const Template: StoryFn<IconButtonProps> = (args) => <IconButton {...args} />;

export const EditButton = Template.bind({});
EditButton.args = {
  children: <EditIcon />,
  color: "primary",
  onClick: () => alert("Edit button clicked"),
};

export const DeleteButton = Template.bind({});
DeleteButton.args = {
  children: <DeleteIcon />,
  color: "error",
  onClick: () => alert("Delete button clicked"),
};
