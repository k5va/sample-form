import { useController } from 'react-hook-form';
import { FormControl, InputLabel, Select } from '@mui/material';
import { FormSelectProps } from './types';

function FormSelect({ name, label, control, validator, children, className }: FormSelectProps): JSX.Element {
  const labelId = `${label}-label`;
  const {
    field: {onChange, onBlur, value, ref},
    fieldState: {error}
  } = useController({name, control, rules: validator});

  return (
    <div className={className}>
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
    </div>
  );
}

export default FormSelect;