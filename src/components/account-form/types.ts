import { RegisterOptions } from 'react-hook-form';

export type AccountFormFields = {
  nickname: string,
  degree: string,
  email: string,
  password: string,
  password2: string,
};

export type AccountFormValidator = Pick<RegisterOptions<AccountFormFields>, 'required' | 'maxLength' | 'minLength' | 'validate'>;

export type AccountDTO = Omit<AccountFormFields, 'password2'>;