import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ActionIcons from "./ActionIcon";

export interface VideoCardProps {
  videoSrc: string;
  posterSrc: string;
  title: string;
  width?: number;
  height?: number;
  isRecording?: boolean;
  onSnapshotClick?: () => void;
  onRecordClick?: () => void;
  onDrawClick?: () => void;
  onExpandClick?: (type: string) => void;
  isExpanded?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoSrc,
  posterSrc,
  title,
  width = 640,
  height = 360,
  isRecording = false,
  isExpanded = false,
  onSnapshotClick,
  onRecordClick,
  onExpandClick,
  onDrawClick,
}) => {
  const theme = useTheme();

  const handleActionClick = (action: string) => {
    switch (action) {
      case "snapshot":
        onSnapshotClick?.();
        break;
      case "record":
        onRecordClick?.();
        break;
      case "draw":
        onDrawClick?.();
        break;
      case "expand":
        onExpandClick?.("expand");
        break;
      case "minimize":
        onExpandClick?.("minimize");
        break;
      default:
        break;
    }
  };

  const recordingIndicatorStyles = {
    position: "absolute" as const,
    top: 12,
    left: 12,
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "#f44336",
    fontWeight: "bold",
    fontSize: "14px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "4px 8px",
    borderRadius: "4px",
  };

  return (
    <>
      <Box
        sx={{
          display: "inline-block",
          position: "relative",
          boxShadow: 4,
          borderRadius: 2,
          overflow: "hidden",
          width: width,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Card
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            boxShadow: 4,
            borderRadius: 2,
            backgroundColor: theme.palette.background.default,
          }}
        >
          <CardMedia
            component="video"
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            loop
            muted
            controls={false}
            sx={{
              objectFit: "cover",
              width: "100%",
              height: height,
            }}
          />
          {title && (
            <CardContent
              sx={{
                padding: "8px 16px",
                backgroundColor: theme.palette.background.paper,
                textAlign: "center",
                color: theme.palette.text.primary,
              }}
            >
              <Typography variant="h6" fontWeight="bold" textAlign="left">
                {title}
              </Typography>
            </CardContent>
          )}
          <ActionIcons
            isRecording={isRecording}
            isExpanded={isExpanded}
            handleClick={handleActionClick}
          />
          {isRecording && (
            <Box sx={recordingIndicatorStyles}>
              <FiberManualRecordIcon
                sx={{ animation: "pulse 1.5s infinite", color: "#f44336" }}
              />
              <Typography variant="body2" sx={{ color: "#fff" }}>
                Recording...
              </Typography>
            </Box>
          )}
        </Card>
      </Box>
    </>
  );
};

export default VideoCard;
