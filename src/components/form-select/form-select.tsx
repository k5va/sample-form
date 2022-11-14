import { Controller } from 'react-hook-form';
import { InputLabel, Select } from '@mui/material';
import { FormSelectProps } from './types';
import { useState } from 'react';

function FormSelect({ name, label, control, validator, children }: FormSelectProps): JSX.Element {
  const [isFocused, setFocused] = useState(false);

  return (
    <Controller
        control={control}
        name={name}
        rules={validator}
        render={({
          field: {onChange, value, name, ref},
          fieldState: {error},
        }) => (
          <>
            <InputLabel error={!!error} focused={isFocused} htmlFor={name}>{label}</InputLabel>
            <Select
              id={name}
              value={value}
              onChange={onChange}
              onBlur={() => setFocused(false)}
              onFocus={() => setFocused(true)}
              inputRef={ref}
              error={!!error}
            >
              {children}
            </Select>
          </>
        )}
      />
  );
}

export default FormSelect;