import React from "react";
import {
  Box as MuiBox,
  BoxProps as MuiBoxProps,
  useTheme,
} from "@mui/material";

// Define the interface for your Box component's props
export interface BoxProps extends MuiBoxProps {
  padding?: string | number;
  margin?: string | number;
  backgroundColor?: string;
  borderRadius?: string | number;
  boxShadow?: string | number;
  // Add any other custom props you might need
}

// Create the Box component
const Box: React.FC<BoxProps> = ({
  padding = 0,
  margin = 0,
  backgroundColor,
  borderRadius = 0,
  boxShadow = 0,
  children,
  ...rest
}) => {
  const theme = useTheme(); // Access the theme for colors, spacing, etc.

  return (
    <MuiBox
      sx={{
        padding,
        margin,
        backgroundColor: backgroundColor || theme.palette.background.paper,
        borderRadius,
        boxShadow,
        ...rest.sx, // Allow custom sx prop to override defaults
      }}
      {...rest} // Spread the rest of the props (e.g., event handlers)
    >
      {children}
    </MuiBox>
  );
};

export default Box;
