import { UseFormGetValues } from 'react-hook-form';
import { MAX_FIELD_LENGTH, MIN_PASSWORD_LENGTH } from '../const';
import { AccountFormFields, AccountFormValidator } from '../types';

export enum PasswordError {
  MinLength = 'MinLength',
  MaxLength = 'MaxLength',
  LettersCase = 'UpperAndLowerCaseLetters',
  OneNumber = 'OneNumber',
  SpecialChar = 'SpecialChar',
  MustMatch = 'Passwords must match',
};

type PasswordValidator = {
  [validator: string]: (value: string) => boolean | string
}

const passwordValidator: PasswordValidator = {
  [PasswordError.MinLength]: (value) => value.length >= MIN_PASSWORD_LENGTH || `Must contain at least ${MIN_PASSWORD_LENGTH} characters`,
  [PasswordError.MaxLength]: (value) => value.length <= MAX_FIELD_LENGTH || `Must contain not more than ${MAX_FIELD_LENGTH} characters`,
  [PasswordError.LettersCase]: (value) => !!value.match(/[А-ЯA-Z]/) || 'Must contain at least one uppercase and one lowercase letter',
  [PasswordError.OneNumber]: (value) => !!value.match(/[\d]/) || 'Must contain at least one number',
  [PasswordError.SpecialChar]: (value) => !!value.match(/[!@#?]/) || 'Must contain at least one special character, e.g., ! @ # ?',
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