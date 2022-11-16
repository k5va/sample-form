import { PropsWithChildren } from 'react';
import { Control } from 'react-hook-form';
import { AccountFormFields, AccountFormValidator } from '../account-form/types';

export type FormSelectProps = PropsWithChildren<{
  name: keyof AccountFormFields, 
  label: string, 
  control: Control<AccountFormFields, any>; 
  validator: AccountFormValidator,
  className?: string,
}>;
