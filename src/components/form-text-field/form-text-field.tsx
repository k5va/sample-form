import { FieldValues, useController } from 'react-hook-form';
import { StyledEngineProvider, TextField } from '@mui/material';
import { FormTextFieldProps } from './types';

function FormTextField<T extends FieldValues>({ name, label, control, validator, className, onChange }: FormTextFieldProps<T>): JSX.Element {
  const {
    field: {onChange: onFieldChange, onBlur, value, ref},
    fieldState: {error}
  } = useController({name, control, rules: validator});
  
  return (
    <StyledEngineProvider injectFirst>
      <TextField
        id={name}
        name={name}
        value={value}
        label={label}
        onChange={(e) => {
          onFieldChange(e);
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        onBlur={onBlur}
        inputRef={ref}
        error={!!error}
        helperText={error?.message}
        className={className}
      />
    </StyledEngineProvider>
  );
}

export default FormTextField;