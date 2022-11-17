import { Control, FieldValues, Path } from 'react-hook-form';
import { AccountFormValidator } from '../account-form/types';

export type FormTextFieldProps<T extends FieldValues> = {
  name: Path<T>, 
  type?: 'text' | 'password',
  label: string, 
  control: Control<T>; 
  validator: AccountFormValidator,
  className?: string,
  onChange?: (value: string) => void,
};
