import { Autocomplete as MuiAutocomplete, ListItemText, styled } from '@mui/material';
import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import TextField, { TextFieldProps } from '../TextField';
import Checkbox, { CheckboxProps } from '../Checkbox';

interface Option {
  label: string;
}

export interface AutocompleteProps<T> extends Omit<MuiAutocompleteProps<T, boolean, boolean, boolean>, 'renderInput' | 'renderOption'> {
  multiple?: boolean;
  limitTags?: number;
  label: string;
  inputProps?: TextFieldProps,
  checkboxProps?: CheckboxProps,
}

const TagContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
}));

const TagText = styled('span')(() => ({
  display: 'inline-block',
  maxWidth: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}));

const Autocomplete = <T extends Option>({
  multiple = false,
  limitTags = 2,
  options,
  inputProps,
  checkboxProps,
  label,
  ...props
}: AutocompleteProps<T>) => {

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <MuiAutocomplete
      {...props}
      multiple={multiple}
      limitTags={limitTags}
      options={options}
      getOptionLabel={(option) => typeof option === 'string' ? option : option.label || ''}
      renderInput={(params) => <TextField {...params} label={label} {...inputProps} />}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          {multiple ? (
            <>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                checked={selected}
                {...checkboxProps}
              />
              <ListItemText primary={option.label || ''} />
            </>
          ) : (
            <ListItemText primary={option.label || ''} />
          )}
        </li>
      )}
      renderTags={(values: T[]) => (
       <TagContainer>
          {values.slice(0, 2).map((value, index) => (
            <TagText key={index}>
              {typeof value === 'string' ? value : value.label}
            </TagText>
          ))}
          {values.length > 2 && (
            <TagText>
              {'...'}
            </TagText>
          )}
        </TagContainer>
      )}
    />
  );
};

export default Autocomplete;
