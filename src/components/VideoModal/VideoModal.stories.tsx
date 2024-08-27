import { Meta, StoryFn } from "@storybook/react";
import { Box } from "@mui/material";
import VideoModal, { VideoModalProps } from "./VideoModal";

export default {
  title: "Video/VideoModal",
  component: VideoModal,
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
  },
} as Meta;

const Template: StoryFn<VideoModalProps> = (args) => {
  return (
    <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
      <VideoModal {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  videoCardProps: {
    videoSrc: "https://assets.codepen.io/6093409/river.mp4",
    posterSrc: "https://assets.codepen.io/6093409/river.jpg",
    title: "River",
  },
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  videoCardProps: {
    videoSrc: "https://assets.codepen.io/6093409/river.mp4",
    posterSrc: "https://assets.codepen.io/6093409/river.jpg",
    title: "ForestForestForestForestForestForest",
  },
};
