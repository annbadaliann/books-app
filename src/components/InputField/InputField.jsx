import React, { useState, Fragment} from 'react';

import FormControl from "@material-ui/core/FormControl";
import InputAdornment from '@material-ui/core/InputAdornment';
import InputErrorMessage from '../InputErrorMessage/InputErrorMessage';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { IconButton, TextField } from '@material-ui/core';


function PasswordFieldVisibilityIcon({ isVisible, toggleVisibility }) {
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={toggleVisibility}
      >
        {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </IconButton>
    </InputAdornment>
  );
}


export default function InputField(
    {
        label,
        type,
        errorMessage,
        fieldName,
        margin,
        value,
        inputRef,
        error,
        name,
        fullWidth,
        disabled,
        showIcon,
        inputProps,
        pasteHandler,
        keyPressHandler,
        multiline,
        ...rest
    }
) {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [inputType, setInputType] = useState(type);

  const togglePassword = () => {
    setPasswordVisibility(!isPasswordVisible);
    return isPasswordVisible ? setInputType("password") : setInputType("text");
  };

    return (
        <Fragment>
        <FormControl fullWidth margin="dense">
          <TextField
            name={name}
            value={value}
            type={inputType}
            placeholder={label}
            inputRef={inputRef}
            error={error}
            disabled={disabled}
            margin="none"
            variant="outlined"
            fullWidth={fullWidth}
            multiline={multiline}
            inputProps={inputProps}
            endAdornment={ showIcon && <PasswordFieldVisibilityIcon
              isVisible={isPasswordVisible}
              toggleVisibility={togglePassword}
            />}
            {...rest}
          />

        {errorMessage && (
          <InputErrorMessage fieldName={fieldName} errors={errorMessage} />
        )}
      </FormControl>
    </Fragment>
    )
}
