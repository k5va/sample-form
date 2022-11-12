import { Controller } from 'react-hook-form';
import { Select } from '@mui/material';
import { FormSelectProps } from './types';

function FormSelect({ name, label, control, validator, children }: FormSelectProps): JSX.Element {
  return (
    <Controller
        control={control}
        name={name}
        rules={validator}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { error },
        }) => (
          <Select
            id={name}
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            inputRef={ref}
            error={!!error}
          >
            {children}
          </Select>
        )}
      />
  );
}

export default FormSelect;