import { Control, FieldValues, Path } from 'react-hook-form';
import { AccountFormValidator } from '../account-form/types';

export type FormPasswordProps<T extends FieldValues> = {
  mainName: Path<T>, 
  copyName: Path<T>, 
  mainLabel: string, 
  copyLabel: string, 
  control: Control<T>; 
  mainValidator: AccountFormValidator,
  copyValidator: AccountFormValidator,
  className?: string,
};
