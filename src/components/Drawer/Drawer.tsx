import React from "react";
import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from "@mui/material";

interface DrawerProps extends MuiDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  anchor?: "left" | "right" | "top" | "bottom";
  variant?: "permanent" | "persistent" | "temporary";
}

const Drawer: React.FC<DrawerProps> = (props) => {
  return (
    <MuiDrawer {...props} open={props.isOpen} onClose={props.onClose}>
      {props.children}
    </MuiDrawer>
  );
};

export default Drawer;
