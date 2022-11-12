import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { FormTextFieldProps } from './types';

function FormTextField({ name, label, control, validator }: FormTextFieldProps): JSX.Element {
  return (
    <Controller
        control={control}
        name={name}
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