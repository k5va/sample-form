import { AccountDTO, AccountFormFields } from '../types';

export const createAccountDTO = (data: AccountFormFields): AccountDTO => {
  const {password2, ...accountDTO} = data;
  return accountDTO;
};