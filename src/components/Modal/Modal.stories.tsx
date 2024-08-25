import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Modal, CustomModalProps } from "./Modal";
import { Button, Typography } from "@mui/material";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: StoryFn<CustomModalProps> = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal {...args} open={open} onClose={handleClose}>
        <Typography>
          This is an example of a reusable modal component.
        </Typography>
      </Modal>
    </>
  );
};

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  title: "Example Modal",
  open: false,
  backdropColor: "#333",
};
