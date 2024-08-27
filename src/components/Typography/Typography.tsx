import React from "react";
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  useTheme,
} from "@mui/material";

export interface TypographyProps extends MuiTypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline";
  color?: "primary" | "secondary" | "textPrimary" | "textSecondary" | "error";
  align?: "inherit" | "left" | "center" | "right" | "justify";
  gutterBottom?: boolean;
  noWrap?: boolean;
  component?: React.ElementType;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  color = "textPrimary",
  align = "inherit",
  gutterBottom = false,
  noWrap = false,
  component = "p",
  children,
  ...rest
}) => {
  const theme = useTheme(); // Access the current theme

  const resolvedColor = () => {
    switch (color) {
      case "primary":
        return theme.palette.primary.main;
      case "secondary":
        return theme.palette.secondary.main;
      case "textPrimary":
        return theme.palette.text.primary;
      case "textSecondary":
        return theme.palette.text.secondary;
      case "error":
        return theme.palette.error.main;
      default:
        return theme.palette.text.primary;
    }
  };

  return (
    <MuiTypography
      variant={variant}
      align={align}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      component={component}
      color={resolvedColor()}
      {...rest}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
