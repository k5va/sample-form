import { Controller, FieldValues } from 'react-hook-form';
import { TextField } from '@mui/material';
import { FormTextFieldProps } from './types';

function FormTextField<T extends FieldValues>({ name, label, control, validator, className }: FormTextFieldProps<T>): JSX.Element {
  return ( // TODO: useControler
    <Controller
        name={name}
        control={control}
        rules={validator}
        render={({
          field: {onChange, onBlur, value, name, ref},
          fieldState: {error},
        }) => (
          <div className={className}>
            <TextField
              id={name}
              name={name}
              value={value}
              label={label}
              onChange={onChange}
              onBlur={onBlur}
              inputRef={ref}
              error={!!error}
              helperText={error?.message}
            />
          </div>
        )}
      />
  );
}

export default FormTextField;