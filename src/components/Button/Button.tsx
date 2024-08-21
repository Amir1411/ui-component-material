import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  useTheme,
} from "@mui/material";
import React from "react";

export interface ButtonProps extends Omit<MuiButtonProps, "variant" | "size"> {
  label: string;
  variant?: "clear" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "contained",
  size,
  disabled = false,
  ...props
}) => {
  const theme = useTheme();

  const getButtonStyles = () => {
    const baseStyles = {
      ...(variant === "clear" && {
        background: "transparent",
        color: theme.palette.primary.main,
        border: "none",
      }),
      ...(variant === "outlined" && {
        background: "transparent",
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
      }),
      ...(variant === "contained" && {
        background: theme.palette.primary.main,
        color: "#fff",
        border: "none",
      }),
    };

    return {
      ...baseStyles,
      ...(disabled && {
        background: theme.palette.action.disabledBackground,
        color: theme.palette.text.disabled,
        border:
          variant === "outlined"
            ? `1px solid ${theme.palette.action.disabled}`
            : "none",
      }),
    };
  };

  return (
    <MuiButton
      {...props}
      style={getButtonStyles()}
      size={size}
      disabled={disabled}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
