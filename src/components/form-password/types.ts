import { Control, FieldValues, Path } from 'react-hook-form';
import { AccountFormValidator } from '../account-form/types';

export type FormPasswordProps<T extends FieldValues> = {
  name1: Path<T>, 
  name2: Path<T>, 
  label: string, 
  control: Control<T>; 
  validator1: AccountFormValidator,
  validator2: AccountFormValidator,
  className?: string,
};
