import { UseFormGetValues } from 'react-hook-form';
import { MAX_FIELD_LENGTH, MIN_PASSWORD_LENGTH } from '../const';
import { AccountFormFields, AccountFormValidator } from '../types';

const validatePassword = (password: string) => {
  
  if (!password.match(/[А-ЯA-Z]/)) {
    return 'Пароль должен содержать минимум одну большую букву';
  }

  if (!password.match(/[а-яa-z]/)) {
    return 'Пароль должен содержать минимум одну маленькую букву';
  }

  if (!password.match(/[\d]/)) {
    return 'Пароль должен содержать минимум одну цифру';
  }

  if (!password.match(/[!@#?]/)) {
    return 'Пароль должен содержать минимум один специальный символ !@#?';
  }
  
  return true;
};

const validatePassword2 = (getValues: UseFormGetValues<AccountFormFields>) => 
  (password2: string) => password2 === getValues('password') || 'Passwords must match';

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
      required: 'Обязательное поле', 
      minLength: {
        value: MIN_PASSWORD_LENGTH,
        message: `Длина не меньше ${MIN_PASSWORD_LENGTH}`,
      },
      maxLength: {
        value: MAX_FIELD_LENGTH,
        message: `Длина не больше ${MAX_FIELD_LENGTH}`,
      },
      validate: validatePassword,
    },
    password2: { 
      required: 'Обязательное поле', 
      validate: validatePassword2(getValues),
    },
  };
}