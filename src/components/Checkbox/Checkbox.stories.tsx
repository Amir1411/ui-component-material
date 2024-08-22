import { Meta, StoryFn } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Check me!',
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Checkbox',
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checked Checkbox',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Checkbox',
  disabled: true,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: '',
};
