import { Autocomplete, TextField, Checkbox, ListItemText } from '@mui/material';
import { AutocompleteProps } from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

// Define the type for the options
interface Option {
  label: string;
}

// Define the props for the CustomAutocomplete component
export interface CustomAutocompleteProps<T> extends Omit<AutocompleteProps<T, boolean, boolean, boolean>, 'renderInput' | 'renderOption'> {
  multiple?: boolean;
  limitTags?: number;
  label: string;
}

// Create the CustomAutocomplete component
const CustomAutocomplete = <T extends Option>({
  multiple = false,
  limitTags = 2,
  options,
  label,
  ...props
}: CustomAutocompleteProps<T>) => {

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <Autocomplete
      {...props}
      multiple={multiple}
      limitTags={limitTags}
      options={options}
      getOptionLabel={(option) => typeof option === 'string' ? option : option.label || ''}
      renderInput={(params) => <TextField {...params} label={label} />}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          {multiple ? (
            <>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              <ListItemText primary={option.label || ''} />
            </>
          ) : (
            <ListItemText primary={option.label || ''} />
          )}
        </li>
      )}
    />
  );
};

export default CustomAutocomplete;
