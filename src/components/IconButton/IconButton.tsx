import React from "react";
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material";

export interface IconButtonProps extends MuiIconButtonProps {
  children: React.ReactNode;
  color?:
    | "default"
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  color = "default",
  ...props
}) => {
  return (
    <MuiIconButton color={color} {...props}>
      {children}
    </MuiIconButton>
  );
};

export default IconButton;
