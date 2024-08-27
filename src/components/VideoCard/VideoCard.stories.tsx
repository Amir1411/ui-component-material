import { Meta, StoryFn } from "@storybook/react";
import VideoCard, { VideoCardProps } from "./VideoCard";

export default {
  title: "Video/VideoCard",
  component: VideoCard,
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
  },
} as Meta;

const Template: StoryFn<VideoCardProps> = (args) => <VideoCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoSrc: "https://assets.codepen.io/6093409/river.mp4",
  posterSrc: "https://assets.codepen.io/6093409/river.jpg",
  title: "River",
  width: 300,
  height: 200,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  videoSrc: "https://assets.codepen.io/6093409/river.mp4",
  posterSrc: "https://assets.codepen.io/6093409/river.jpg",
  title: "ForestForestForestForestForestForest",
  width: 400,
  height: 300,
  isRecording: true,
};
