import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, Select } from '@mui/material';
import { FormSelectProps } from './types';

function FormSelect({ name, label, control, validator, children }: FormSelectProps): JSX.Element {
  const labelId = `${label}-label`;
  
  return (
    <Controller
        control={control}
        name={name}
        rules={validator}
        render={({
          field: {onChange, onBlur, value, name, ref},
          fieldState: {error},
        }) => (
          <FormControl>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
              id={name}
              value={value}
              label={label}
              labelId={labelId}
              onChange={onChange}
              onBlur={onBlur}
              inputRef={ref}
              error={!!error}
            >
              {children}
            </Select>
          </FormControl>
        )}
      />
  );
}

export default FormSelect;