import React from "react";
import {
  Modal as MuiModal,
  ModalProps as MuiModalProps,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export interface ModalProps extends Omit<MuiModalProps, "children"> {
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isBlackBackdrop?: boolean;
  isBackdropClickDisabled?: boolean;
  backdropColor?: string;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  width: "400px",
};

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  onClose,
  isBlackBackdrop,
  isBackdropClickDisabled = false,
  backdropColor = "#000",
  ...props
}) => {
  return (
    <MuiModal
      {...props}
      onClose={onClose}
      slots={
        isBlackBackdrop
          ? {
              backdrop: () => (
                <Box
                  sx={{
                    backgroundColor: backdropColor,
                    height: "100%",
                    width: "100%",
                  }}
                  onClick={() => !isBackdropClickDisabled && onClose()}
                />
              ),
            }
          : {}
      }
    >
      <Box sx={style}>
        {title && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6" component="h2">
              {title}
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        )}
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
