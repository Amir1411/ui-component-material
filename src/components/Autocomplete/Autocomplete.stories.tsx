/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Autocomplete, { AutocompleteProps } from './Autocomplete';

export default {
  title: 'Forms/Autocomplete',
  component: Autocomplete,
} as Meta;

const Template: StoryFn<AutocompleteProps<{ label: string }>> = (args) => {
  const [selectedData, setSelectedData] = useState<any[]>([]);

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: any) => {
    event.preventDefault();
    setSelectedData(newValue);
  };

  return <Autocomplete {...args} value={selectedData} onChange={handleChange} />;
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  options: [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
  ],
  multiple: false,
  label: 'Select an option',
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  options: [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
  ],
  multiple: true,
  limitTags: 2,
  label: 'Select multiple options',
  inputProps: {
    size: 'medium',
  },
  checkboxProps: {
    size: 'medium',
    color: "error"
  },
  // size: 'small'
};
