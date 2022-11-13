import {  Control, Controller, FieldValues } from 'react-hook-form';
import { TextField } from '@mui/material';
import { FormTextFieldProps } from './types';

function FormTextField<T extends FieldValues>({ name, label, control, validator }: FormTextFieldProps<T>): JSX.Element {
  return (
    <Controller
        name={name.toString()}
        control={control as Control}
        rules={validator}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { error },
        }) => (
          <TextField
            margin="normal"
            fullWidth
            id={name}
            label={label}
            name={name}
            autoFocus
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            inputRef={ref}
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
  );
}

export default FormTextField;