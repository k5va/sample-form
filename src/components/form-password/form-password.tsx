import { FieldValues, useFormContext, useFormState } from 'react-hook-form';
import { FormPasswordProps } from './types';
import { FormTextField } from '../../components';
import { PasswordError } from '../account-form/utils/validator';
import { IconButton, InputAdornment, List, ListItem, ListItemText, StyledEngineProvider } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

function FormPassword<T extends FieldValues>(
  {mainName, copyName, mainLabel, copyLabel, control, mainValidator, copyValidator, className}: FormPasswordProps<T>
): JSX.Element {
  
  const {errors, dirtyFields} = useFormState({control, name: mainName});
  const {trigger} = useFormContext();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const errorTypes = errors[mainName]?.types;
  const activeErrors = errorTypes ? Object.keys(errorTypes) : [];
  const isPassword1Dirty = !!dirtyFields[mainName]
  const isPassword2Dirty = !!dirtyFields[copyName]

  const password1ChangeHandler = () => trigger(copyName);
  const showPasswordHandler = () => setPasswordVisible((isVisible) => !isVisible);

  return (
    <StyledEngineProvider injectFirst>
      <FormTextField 
        type={isPasswordVisible ? 'text' : 'password'} 
        name={mainName} 
        label={mainLabel} 
        control={control} 
        validator={mainValidator} 
        onChange={password1ChangeHandler}
        className={className}
        inputProps={{
          endAdornment: 
            <InputAdornment position="end">
              <IconButton
                  aria-label="toggle password visibility"
                  onClick={showPasswordHandler}
                  edge="end"
                >
                  {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
            </InputAdornment>
        }}
      />
      <FormTextField 
        type={isPasswordVisible ? 'text' : 'password'} 
        name={copyName} 
        label={copyLabel} 
        control={control} 
        validator={copyValidator}
        className={className}
        inputProps={{
          endAdornment: 
            <InputAdornment position="end">
              <IconButton
                  aria-label="toggle password visibility"
                  onClick={showPasswordHandler}
                  edge="end"
                >
                  {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
            </InputAdornment>
        }}
      />
      <List className={className}>
        <ListItem selected={isPassword1Dirty && !activeErrors.includes(PasswordError.MinLength)}>
          <ListItemText primary="At least 12 characters" />
        </ListItem>
        <ListItem selected={isPassword1Dirty && !activeErrors.includes(PasswordError.LettersCase)}>
          <ListItemText primary="A mixture of both uppercase and lowercase letters." />
        </ListItem>
        <ListItem selected={isPassword1Dirty && !activeErrors.includes(PasswordError.OneNumber)}>
          <ListItemText primary="Inclusion of at least one number." />
        </ListItem>
        <ListItem selected={isPassword1Dirty && !activeErrors.includes(PasswordError.SpecialChar)}>
          <ListItemText primary="Inclusion of at least one special character, e.g., ! @ # ? ]" />
        </ListItem>
        <ListItem selected={isPassword2Dirty && !errors[copyName]}>
          <ListItemText primary="Passwords must match" />
        </ListItem>
      </List>
    </StyledEngineProvider>
  );
}

export default FormPassword;