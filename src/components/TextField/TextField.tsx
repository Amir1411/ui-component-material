import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps, InputAdornment } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'variant'> {
  variant?: 'outlined' | 'filled' | 'standard';
  includeDropdownIcon?: boolean;
  size?: 'small' | 'medium',
  multiline?: boolean,
  rows?: number,
}

const TextField: React.FC<TextFieldProps> = ({
  variant = 'outlined',
  includeDropdownIcon = false,
  size = 'small',
  multiline = false,
  InputProps,
  ...props
}) => {
  return (
    <MuiTextField
      variant={variant}
      {...props}
      size={size}
      multiline={multiline}
      InputProps={{
        ...InputProps,
        endAdornment: includeDropdownIcon ? (
          <InputAdornment position="end">
            <ArrowDropDownIcon />
          </InputAdornment>
        ) : (
          InputProps?.endAdornment
        ),
      }}
    />
  );
};

export default TextField;
