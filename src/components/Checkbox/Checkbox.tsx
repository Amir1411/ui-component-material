import React from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps, FormControlLabel } from '@mui/material';

export interface CheckboxProps extends MuiCheckboxProps {
  label?: string;
  size?: 'small' | 'medium';
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <FormControlLabel
      control={<MuiCheckbox {...props} />}
      label={label ?? ''}
    />
  );
};

export default Checkbox;
