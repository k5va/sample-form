import { useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, MenuItem, Typography } from '@mui/material';
import { AccountFormFields } from './types';
import { getAccountFormValidator } from './utils/validator';
import { createAccountDTO } from './utils/create-account-dto';
import { FormTextField, FormSelect, FormPassword } from '../../components';
import './account-form.scss';

function AccountForm(): JSX.Element {
  const { handleSubmit, getValues, control } = useForm<AccountFormFields>({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      nickname: '',
      degree: 'master_it',
      email: '',
      password: '',
      password2: '',
    }
  });
  const formValidator = useMemo(() => getAccountFormValidator(getValues), [getValues]);
  const onSubmit: SubmitHandler<AccountFormFields> = data => console.log(createAccountDTO(data));

  return (
    <section className='account-form'>
      <Typography className='account-form__header' variant="h2">Some form text</Typography>
      <form className='account-form__form' onSubmit = { handleSubmit(onSubmit) }>
        <FormTextField className='account-form__form-item' name='nickname' label='Nickname' control={control} validator={formValidator['nickname']} />
        <FormSelect className='account-form__form-item' name='degree' label='Degree' control={control} validator={formValidator['degree']} >
          <MenuItem value="master_it">Master’s in Information & Technology</MenuItem> 
          <MenuItem value="master_fa">Master’s in FA</MenuItem>
          <MenuItem value="master_art">Master’s in Arts</MenuItem>
        </FormSelect>
        <FormTextField className='account-form__form-item' name='email' label='Email address' control={control} validator={formValidator['email']} />
        
        <FormPassword 
          className='account-form__form-item' 
          name1='password' 
          name2='password2' 
          label='Password' 
          control={control} 
          validator1={formValidator['password']} 
          validator2={formValidator['password2']} 
        />

        <Button className='account-form__form-item account-form__form-submit' type="submit">Create account</Button>
      </form>
    </section>
  );
}

export default AccountForm;
