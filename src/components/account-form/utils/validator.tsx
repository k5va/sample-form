import { UseFormGetValues } from 'react-hook-form';
import { MAX_FIELD_LENGTH, MIN_PASSWORD_LENGTH } from '../const';
import { AccountFormFields, AccountFormValidator } from '../types';

export enum PasswordError {
  MinLength = 'MinLength',
  MaxLength = 'MaxLength',
  UpperAndLowerCase = 'UpperAndLowerCaseLetters',
  OneNumber = 'OneNumber',
  SpecialChar = 'SpecialChar',
  MustMatch = 'Passwords must match',
};

type PasswordValidator = {
  [validator: string]: (value: string) => boolean | PasswordError
}

const passwordValidator: PasswordValidator = {
  minLength: (value) => value.length >= MIN_PASSWORD_LENGTH || PasswordError.MinLength,
  maxLength: (value) => value.length <= MAX_FIELD_LENGTH || PasswordError.MaxLength,
  caseLetters: (value) => !!value.match(/[А-ЯA-Z]/) || PasswordError.UpperAndLowerCase,
  oneNumber: (value) => !!value.match(/[\d]/) || PasswordError.OneNumber,
  specialChar: (value) => !!value.match(/[!@#?]/) || PasswordError.SpecialChar,
}

const validatePassword2 = (getValues: UseFormGetValues<AccountFormFields>) => 
  (password2: string) => password2 === getValues('password') || PasswordError.MustMatch;

export const getAccountFormValidator = (getValues: UseFormGetValues<AccountFormFields>): {
  [V in keyof AccountFormFields]: AccountFormValidator;
} => {
  return {
    nickname: { 
      required: 'Обязательное поле', 
      maxLength: {
        value: MAX_FIELD_LENGTH,
        message: `Длина не больше ${MAX_FIELD_LENGTH}`,
      } 
    },
    degree: { required: 'Обязательное поле' },
    email: {
      required: 'Обязательное поле', 
      maxLength: {
        value: MAX_FIELD_LENGTH,
        message: `Длина не больше ${MAX_FIELD_LENGTH}`,
      },
    },
    password: {
      validate: passwordValidator,
    },
    password2: {
      validate: validatePassword2(getValues),
    }
  };
}