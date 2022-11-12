import { useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AccountFormFields } from './types';
import { getAccountFormValidator } from './validator';
import './account-form.scss';

function AccountForm(): JSX.Element {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm<AccountFormFields>();
  const formValidator = useMemo(() => getAccountFormValidator(getValues), [getValues]); 
  const onSubmit: SubmitHandler<AccountFormFields> = data => console.log(data);

  return (
    <form className = 'form' onSubmit = { handleSubmit(onSubmit) }>
      <input type="text" {...register('nickname', {...formValidator['nickname']})} />
      { errors.nickname && <span> { errors.nickname.message } </span> }

      <select defaultValue={'master_it'} {...register('degree', {...formValidator['degree']})} >
        <option value="master_it">Master’s in Information & Technology</option>
        <option value="master_fa">Master’s in FA</option>
        <option value="master_art">Master’s in Arts</option>
      </select>
      
      <input type="email" {...register('email', {...formValidator['email']})} />
      { errors.email && <span> { errors.email.message } </span> }

      <input type="password" {...register('password', {...formValidator['password']})} />
      { errors.password && <span> { errors.password.message } </span> }

      <input type="password" {...register('password2', {...formValidator['password2']})} />
      { errors.password2 && <span> { errors.password2.message } </span> }

      <button type="submit">Create account</button>
    </form>
  );
}

export default AccountForm;
