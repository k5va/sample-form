import { useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, MenuItem } from '@mui/material';
import { AccountFormFields } from './types';
import { getAccountFormValidator } from './validator';
import { FormTextField, FormSelect } from '../../components';
import './account-form.scss';

function AccountForm(): JSX.Element {
  const { handleSubmit, getValues, control } = useForm<AccountFormFields>();
  const formValidator = useMemo(() => getAccountFormValidator(getValues), [getValues]); 
  const onSubmit: SubmitHandler<AccountFormFields> = data => console.log(data);

  return (
    <form className = 'form' onSubmit = { handleSubmit(onSubmit) }>
      
      <FormTextField name='nickname' label='Nickname' control={control} validator={formValidator['nickname']} />
      <FormSelect name='degree' label='Degree' control={control} validator={formValidator['degree']} >
        <MenuItem value="master_it">Master’s in Information & Technology</MenuItem>
        <MenuItem value="master_fa">Master’s in FA</MenuItem>
        <MenuItem value="master_art">Master’s in Arts</MenuItem>
      </FormSelect>
      <FormTextField name='email' label='Email address' control={control} validator={formValidator['email']} />
      <FormTextField name='password' label='Password' control={control} validator={formValidator['password']} />
      <FormTextField name='password2' label='Re-enter password' control={control} validator={formValidator['password2']} />

      <Button type="submit" variant='contained'>Create account</Button>
    </form>
  );
}

export default AccountForm;
