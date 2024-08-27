import React from "react";
import { Box } from "@mui/material";
import VideoCard, { VideoCardProps } from "../VideoCard/VideoCard";

export interface VideoModalProps {
  onClose: () => void;
  videoCardProps: VideoCardProps;
}

const VideoModal: React.FC<VideoModalProps> = ({ onClose, videoCardProps }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
      }}
    >
      <VideoCard
        {...videoCardProps}
        onExpandClick={onClose}
        width={window.innerWidth}
        height={window.innerHeight}
        isExpanded={true}
      />
    </Box>
  );
};

export default VideoModal;
