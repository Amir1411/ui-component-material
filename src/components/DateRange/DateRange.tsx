import { useState, useEffect } from 'react';
import { Dialog, DialogContent, Box, Button, Divider } from '@mui/material';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

export interface DateRangeSelectorModalProps {
  open: boolean;
  onClose: () => void;
  onApply: (startDate: Dayjs | null, endDate: Dayjs | null) => void;
  initialStartDate: Dayjs | null;
  initialEndDate: Dayjs | null;
}

const DateRangeSelectorModal = ({
  open,
  onClose,
  onApply,
  initialStartDate,
  initialEndDate,
}: DateRangeSelectorModalProps) => {
  const [startDate, setStartDate] = useState<Dayjs | undefined>(initialStartDate ?? undefined);
  const [endDate, setEndDate] = useState<Dayjs | undefined>(initialEndDate ?? undefined);
  const [selectedShortcut, setSelectedShortcut] = useState<string | null>(null);

  const shortcuts = [
    {
      label: 'This Week',
      getValue: (): [Dayjs | null, Dayjs | null] => [dayjs().startOf('week'), dayjs().endOf('week')],
    },
    {
      label: 'Last Week',
      getValue: (): [Dayjs | null, Dayjs | null] => {
        const lastWeek = dayjs().subtract(1, 'week');
        return [lastWeek.startOf('week'), lastWeek.endOf('week')];
      },
    },
    {
      label: 'Last 7 Days',
      getValue: (): [Dayjs | null, Dayjs | null] => [dayjs().subtract(7, 'day'), dayjs()],
    },
    {
      label: 'Current Month',
      getValue: (): [Dayjs | null, Dayjs | null] => [dayjs().startOf('month'), dayjs().endOf('month')],
    },
    {
      label: 'Next Month',
      getValue: (): [Dayjs | null, Dayjs | null] => {
        const startOfNextMonth = dayjs().endOf('month').add(1, 'day');
        return [startOfNextMonth, startOfNextMonth.endOf('month')];
      },
    },
    {
      label: 'Reset',
      getValue: (): [Dayjs | null, Dayjs | null] => [null, null],
    },
  ];

  useEffect(() => {
    for (const shortcut of shortcuts) {
      const [shortcutStart, shortcutEnd] = shortcut.getValue();
      if (
        initialStartDate?.isSame(shortcutStart, 'day') &&
        initialEndDate?.isSame(shortcutEnd, 'day')
      ) {
        setSelectedShortcut(shortcut.label);
        break;
      }
    }
  }, [initialStartDate, initialEndDate, open]);

  const handleShortcut = (getValue: () => [Dayjs | null, Dayjs | null], label: string) => {
    const [start, end] = getValue();
    setStartDate(start ?? undefined);
    setEndDate(end ?? undefined);
    setSelectedShortcut(label);
  };

  const handleApply = () => {
    onApply(startDate ?? null, endDate ?? null);
    onClose();
  };

  const handleClose = () => {
    // Reset the date range to initial values and update shortcut state
    setStartDate(initialStartDate ?? undefined);
    setEndDate(initialEndDate ?? undefined);
    setSelectedShortcut(null);
    onClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <Box display="flex" flexDirection="row" gap={2}>
            <Box display="flex" flexDirection="column" gap={2} mb={2} sx={{ flex: 1 }}>
              {shortcuts.map((shortcut) => (
                <Button
                  key={shortcut.label}
                  variant={selectedShortcut === shortcut.label ? 'contained' : 'outlined'}
                  onClick={() => handleShortcut(shortcut.getValue, shortcut.label)}
                >
                  {shortcut.label}
                </Button>
              ))}
            </Box>
            <Box display="flex" gap={2} alignItems="center">
              <StaticDatePicker
                value={startDate ?? null}
                onChange={(newValue: Dayjs | null) => {
                  setStartDate(newValue ?? undefined)
                  setEndDate(undefined)
                }}
                slots={{ actionBar: () => null }}
              />
              <StaticDatePicker
                value={endDate ?? null}
                onChange={(newValue: Dayjs | null) => setEndDate(newValue ?? undefined)}
                slots={{ actionBar: () => null }}
                minDate={startDate ?? undefined}
              />
            </Box>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="flex-end" mt={2} gap={1}>
            <Button
              variant="outlined"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleApply}
              disabled={!startDate || !endDate}
            >
              Save
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </LocalizationProvider>
  );
}

export default DateRangeSelectorModal;
