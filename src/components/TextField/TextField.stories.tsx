import { Meta, StoryFn } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';

export default {
  title: 'Forms/TextField',
  component: TextField,
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    },
    includeDropdownIcon: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn<TextFieldProps> = (args) => <TextField {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  label: 'Outlined TextField',
  placeholder: 'Enter text',
  includeDropdownIcon: false,
  fullWidth: true,
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  label: 'Filled TextField',
  placeholder: 'Enter text',
  includeDropdownIcon: true,
  fullWidth: true,
};

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
  label: 'Standard TextField',
  placeholder: 'Enter text',
  includeDropdownIcon: false,
  fullWidth: true,
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  variant: 'outlined',
  label: 'TextField Without Icon',
  placeholder: 'Enter text',
  includeDropdownIcon: false,
  fullWidth: true,
};
