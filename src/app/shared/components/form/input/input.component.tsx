import { IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import FormWrapper from "../wrapper/wrapper.component";
import InputProps from "./input.types";

const FormInput = (props: InputProps) => {
  const {
    label,
    value,
    type = "text",
    variant = "outlined",
    fullWidth = false,
    color,
    required = false,
    disabled = false,
    autoFocus = false,
    autoComplete = "off",
    error = false,
    errorText,
    defaultValue,
    ref,
    multiline = false,
    rows = 4,
    hasIcon = false,
    iconPos = "end",
    icon,
    sx,
    className,
    inputLabelStyles,
    inputHelperTextStyles,
    disableBottom = false,
    disableTop = false,
  } = props;

  //   For password
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <FormWrapper disableBottom={disableBottom} disableTop={disableTop}>
      <TextField
        ref={ref}
        label={label}
        id={label}
        placeholder={`Please enter your ${label}`}
        value={value}
        type={type}
        variant={variant}
        fullWidth={fullWidth}
        color={color}
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        error={error}
        helperText={errorText && `${errorText + " "}`}
        defaultValue={defaultValue}
        multiline={multiline}
        rows={rows}
        InputProps={
          hasIcon ? (
            iconPos === "start" ? (
              {
                startAdornment: (
                  <InputAdornment position="start">{icon}</InputAdornment>
                ),
              }
            ) : (
              {
                endAdornment:
                  type === "password" ? (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </IconButton>
                    </InputAdornment>
                  ) : (
                    <InputAdornment position="end">{icon}</InputAdornment>
                  ),
              }
            )
          ) : (
            <></>
          )
        }
        sx={{ ...sx }}
        InputLabelProps={{ sx: { ...inputLabelStyles } }}
        FormHelperTextProps={{ sx: { ...inputHelperTextStyles } }}
        className={`${className} `}
      ></TextField>
    </FormWrapper>
  );
};

export default React.memo(FormInput);
