import { Control, FieldValues } from 'react-hook-form';
import { AccountFormValidator } from '../account-form/types';

export type FormTextFieldProps<T extends FieldValues> = {
  name: keyof T, 
  label: string, 
  control: Control<T>; 
  validator: AccountFormValidator,
};
