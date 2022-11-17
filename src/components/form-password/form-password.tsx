import { FieldValues, useFormContext, useFormState } from 'react-hook-form';
import { List, ListItem, ListItemText } from '@mui/material';
import { FormPasswordProps } from './types';
import { FormTextField } from '../../components';
import { PasswordError } from '../account-form/utils/validator';

function FormPassword<T extends FieldValues>({name1, name2, label, control, validator1, validator2, className}: FormPasswordProps<T>): JSX.Element {
  const {errors, dirtyFields} = useFormState({control, name: name1});
  const { trigger } = useFormContext();

  const errorTypes = errors[name1]?.types;
  const activeErrors = errorTypes ? Object.keys(errorTypes) : [];
  const isPassword1Dirty = !!dirtyFields[name1]
  const isPassword2Dirty = !!dirtyFields[name2]

  const password1ChangeHandler = () => trigger(name2);

  return (
    <div className={className}>
      <FormTextField name={name1} label={label} control={control} validator={validator1} onChange={password1ChangeHandler} />
      <FormTextField name={name2} label={'Re-enter password'} control={control} validator={validator2} />
      <List>
        <ListItem disablePadding selected={isPassword1Dirty && !activeErrors.includes(PasswordError.MinLength)}>
          <ListItemText primary="At least 12 characters" />
        </ListItem>
        <ListItem disablePadding selected={isPassword1Dirty && !activeErrors.includes(PasswordError.LettersCase)}>
          <ListItemText primary="A mixture of both uppercase and lowercase letters." />
        </ListItem>
        <ListItem disablePadding selected={isPassword1Dirty && !activeErrors.includes(PasswordError.OneNumber)}>
          <ListItemText primary="Inclusion of at least one number." />
        </ListItem>
        <ListItem disablePadding selected={isPassword1Dirty && !activeErrors.includes(PasswordError.SpecialChar)}>
          <ListItemText primary="Inclusion of at least one special character, e.g., ! @ # ? ]" />
        </ListItem>
        <ListItem disablePadding selected={isPassword2Dirty && !errors[name2]}>
          <ListItemText primary="Passwords must match" />
        </ListItem>
      </List>
    </div>
  );
}

export default FormPassword;