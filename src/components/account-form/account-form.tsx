import { useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, MenuItem, Typography } from '@mui/material';
import { AccountFormFields } from './types';
import { getAccountFormValidator } from './utils/validator';
import { createAccountDTO } from './utils/create-account-dto';
import { FormTextField, FormSelect } from '../../components';
import './account-form.scss';

function AccountForm(): JSX.Element {
  const { handleSubmit, getValues, control } = useForm<AccountFormFields>({
    defaultValues: {
      nickname: '',
      degree: 'master_it',
      email: '',
      password: '',
      password2: '',
    }
  });
  const formValidator = useMemo(() => getAccountFormValidator(getValues), [getValues]); // TODO: remove memo?
  const onSubmit: SubmitHandler<AccountFormFields> = data => console.log(createAccountDTO(data));

  return (
    <section className='account-form'>
      <Typography variant="h2">Some form text</Typography>
      <form className = 'account-form__form' onSubmit = { handleSubmit(onSubmit) }>
        
        <FormTextField name='nickname' label='Nickname' control={control} validator={formValidator['nickname']} />
        <FormSelect name='degree' label='Degree' control={control} validator={formValidator['degree']} >
          <MenuItem value="master_it">Master’s in Information & Technology</MenuItem>
          <MenuItem value="master_fa">Master’s in FA</MenuItem>
          <MenuItem value="master_art">Master’s in Arts</MenuItem>
        </FormSelect>
        <FormTextField name='email' label='Email address' control={control} validator={formValidator['email']} />
        <FormTextField name='password' label='Password' control={control} validator={formValidator['password']} />
        <FormTextField name='password2' label='Re-enter password' control={control} validator={formValidator['password2']} />

        <Button 
          sx={{
            borderRadius: '30px',
          }}
          variant='contained'
          type="submit"
        >Create account
        </Button>
      </form>
    </section>
  );
}

export default AccountForm;
