import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DateRangeSelectorModal, { DateRangeSelectorModalProps } from './DateRange';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';

export default {
  title: 'Forms/DateRange',
  component: DateRangeSelectorModal,
} as Meta;

const Template: StoryFn<DateRangeSelectorModalProps> = (args) => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs().startOf('week'));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().endOf('week'));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formatDateRange = (): string => {
    if (startDate && endDate) {
      return `${startDate.format('MM/DD/YYYY')} - ${endDate.format('MM/DD/YYYY')}`;
    }
    return '';
  };

  return (
    <>
      <TextField
        label="Select Date Range"
        value={formatDateRange()}
        onClick={handleClickOpen}
        fullWidth
      />

      <DateRangeSelectorModal
        {...args}
        open={open}
        onClose={handleClose}
        onApply={(selectedStartDate: Dayjs | null, selectedEndDate: Dayjs | null) => {
          setStartDate(selectedStartDate);
          setEndDate(selectedEndDate);
          handleClose();
        }}
        initialStartDate={startDate}
        initialEndDate={endDate}
      />
    </>
  );
};

export const WithDropdownTextField = Template.bind({});
WithDropdownTextField.args = {
  // Automatically set to "This Week"
  initialStartDate: dayjs().startOf('week'),
  initialEndDate: dayjs().endOf('week'),
};
