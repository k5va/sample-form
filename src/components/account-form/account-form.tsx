import { useMemo } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Button, MenuItem, Typography } from '@mui/material';
import { AccountFormFields } from './types';
import { getAccountFormValidator } from './utils/validator';
import { createAccountDTO } from './utils/create-account-dto';
import { FormTextField, FormSelect, FormPassword } from '../../components';
import './account-form.scss';

function AccountForm(): JSX.Element {
  const methods = useForm<AccountFormFields>({
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
  const {handleSubmit, getValues, control} = methods;
  const formValidator = useMemo(() => getAccountFormValidator(getValues), [getValues]);
  const onSubmit: SubmitHandler<AccountFormFields> = data => console.log(createAccountDTO(data));

  return (
    <section className='account-form'>
      <Typography className='account-form__header' variant="h2">Some form text</Typography>
      <FormProvider {...methods} >
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
            mainName='password' 
            copyName='password2' 
            mainLabel='Password' 
            copyLabel='Re-enter password' 
            mainValidator={formValidator['password']} 
            copyValidator={formValidator['password2']} 
            control={control} 
          />

          <Button className='account-form__form-item account-form__form-submit' type="submit">Create account</Button>
        </form>
      </FormProvider>
    </section>
  );
}

export default AccountForm;
