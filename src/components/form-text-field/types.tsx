import { Control } from 'react-hook-form';
import { AccountFormFields, AccountFormValidator } from '../account-form/types';

export type FormTextFieldProps = {
  name: keyof AccountFormFields, 
  label: string, 
  control: Control<AccountFormFields, any>; 
  validator: AccountFormValidator,
};
