import { Control, Controller, FieldValues } from 'react-hook-form';
import { InputLabel, TextField } from '@mui/material';
import { FormTextFieldProps } from './types';
import { useState } from 'react';

function FormTextField<T extends FieldValues>({ name, label, control, validator }: FormTextFieldProps<T>): JSX.Element {
  const [isFocused, setFocused] = useState(false); // TODO: is it OK

  return (
    <Controller
        name={name.toString()}
        control={control as Control} // TODO: Why needs type assertion?
        rules={validator}
        render={({
          field: {onChange, value, name, ref},
          fieldState: {error},
        }) => (
          <>
            <InputLabel error={!!error} focused={isFocused} htmlFor={name}>{label}</InputLabel>
            <TextField
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={() => setFocused(false)}
              inputRef={ref}
              error={!!error}
              helperText={error?.message}
              onFocus={() => setFocused(true)}
            />
          </>
        )}
      />
  );
}

export default FormTextField;