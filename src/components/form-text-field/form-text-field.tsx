import {  Control, Controller, FieldValues } from 'react-hook-form';
import { InputLabel, TextField } from '@mui/material';
import { FormTextFieldProps } from './types';

function FormTextField<T extends FieldValues>({ name, label, control, validator }: FormTextFieldProps<T>): JSX.Element {
  return (
    <Controller
        name={name.toString()}
        control={control as Control} // TODO: Why needs type assertion?
        rules={validator}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { error },
        }) => (
          <>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <TextField
              id={name}
              hiddenLabel
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              inputRef={ref}
              error={!!error}
              helperText={error?.message}
            />
          </>
        )}
      />
  );
}

export default FormTextField;