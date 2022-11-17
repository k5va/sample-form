import { UseFormGetValues } from 'react-hook-form';
import { MAX_FIELD_LENGTH, MIN_PASSWORD_LENGTH } from '../const';
import { AccountFormFields, AccountFormValidator } from '../types';

export enum PasswordError {
  MinLength = 'MinLength',
  MaxLength = 'MaxLength',
  LettersCase = 'LettersCase',
  OneNumber = 'OneNumber',
  SpecialChar = 'SpecialChar',
  MustMatch = 'Passwords must match',
};

type PasswordValidator = {
  [validator: string]: (value: string) => boolean | string
}

const validatePassword: () => {validate: PasswordValidator} = () => ({
  validate: {
    [PasswordError.MinLength]: (value) => value.length >= MIN_PASSWORD_LENGTH || `Must contain at least ${MIN_PASSWORD_LENGTH} characters`,
    [PasswordError.MaxLength]: (value) => value.length <= MAX_FIELD_LENGTH || `Must contain not more than ${MAX_FIELD_LENGTH} characters`,
    [PasswordError.LettersCase]: (value) => !!value.match(/[А-ЯA-Z]/) || 'Must contain at least one uppercase and one lowercase letter',
    [PasswordError.OneNumber]: (value) => !!value.match(/[\d]/) || 'Must contain at least one number',
    [PasswordError.SpecialChar]: (value) => !!value.match(/[!@#?]/) || 'Must contain at least one special character, e.g., ! @ # ?',
  }
});

const validatePassword2 = (getValues: UseFormGetValues<AccountFormFields>) => (
  {validate: (password2: string) => password2 === getValues('password') || PasswordError.MustMatch});

const validateRequired = () => ({required: 'Required field'});

const validateMaxLength = () => ({maxLength: {
  value: MAX_FIELD_LENGTH,
  message: `Must contain not more than ${MAX_FIELD_LENGTH} characters`,
}});

export const getAccountFormValidator = (getValues: UseFormGetValues<AccountFormFields>): {
  [V in keyof AccountFormFields]: AccountFormValidator;
} => {
  return {
    nickname: { 
      ...validateRequired(), 
      ...validateMaxLength(), 
    },
    degree: { 
      ...validateRequired() 
    },
    email: {
      ...validateRequired(), 
      ...validateMaxLength(), 
    },
    password: {
      ...validatePassword(),
    },
    password2: {
      ...validatePassword2(getValues),
    }
  };
}