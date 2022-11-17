import { FieldValues, useFormContext, useFormState } from 'react-hook-form';
import { List, ListItem, ListItemText } from '@mui/material';
import { FormPasswordProps } from './types';
import { FormTextField } from '../../components';
import { PasswordError } from '../account-form/utils/validator';

function FormPassword<T extends FieldValues>(
  {mainName, copyName, mainLabel, copyLabel, control, mainValidator, copyValidator, className}: FormPasswordProps<T>
): JSX.Element {
  
  const {errors, dirtyFields} = useFormState({control, name: mainName});
  const { trigger } = useFormContext();

  const errorTypes = errors[mainName]?.types;
  const activeErrors = errorTypes ? Object.keys(errorTypes) : [];
  const isPassword1Dirty = !!dirtyFields[mainName]
  const isPassword2Dirty = !!dirtyFields[copyName]

  const password1ChangeHandler = () => trigger(copyName);

  return (
    <div className={className}>
      <FormTextField name={mainName} label={mainLabel} control={control} validator={mainValidator} onChange={password1ChangeHandler} />
      <FormTextField name={copyName} label={copyLabel} control={control} validator={copyValidator} />
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
        <ListItem disablePadding selected={isPassword2Dirty && !errors[copyName]}>
          <ListItemText primary="Passwords must match" />
        </ListItem>
      </List>
    </div>
  );
}

export default FormPassword;