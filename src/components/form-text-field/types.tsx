import { Control, FieldValues, Path } from 'react-hook-form';
import { AccountFormValidator } from '../account-form/types';

export type FormTextFieldProps<T extends FieldValues> = {
  name: Path<T>, 
  label: string, 
  control: Control<T>; 
  validator: AccountFormValidator,
};
