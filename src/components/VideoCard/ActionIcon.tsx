import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import BrushIcon from "@mui/icons-material/Brush";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { ActionIconsProps } from "./types";

const ActionIcons: React.FC<ActionIconsProps> = ({
  isRecording = false,
  isExpanded = false,
  handleClick,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        top: 12,
        right: 12,
        display: "flex",
        gap: 1,
        zIndex: 2,
        opacity: 0.8,
      }}
    >
      <IconButton
        aria-label="snapshot"
        onClick={() => handleClick("snapshot")}
        sx={{
          color: "#fff",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        }}
      >
        <CameraAltIcon />
      </IconButton>

      <IconButton
        aria-label="record"
        onClick={() => handleClick("record")}
        sx={{
          color: "#fff",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        }}
      >
        <FiberManualRecordIcon
          sx={{ color: isRecording ? "#f44336" : theme.palette.text.primary }}
        />
      </IconButton>

      <IconButton
        aria-label="draw"
        onClick={() => handleClick("draw")}
        sx={{
          color: "#fff",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        }}
      >
        <BrushIcon />
      </IconButton>

      <IconButton
        aria-label="expand"
        onClick={() => handleClick(isExpanded ? "minimize" : "expand")}
        sx={{
          color: "#fff",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        }}
      >
        {isExpanded ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </IconButton>
    </Box>
  );
};

export default ActionIcons;
