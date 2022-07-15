import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";
import FormWrapper from "../wrapper/wrapper.component";
import { RadioButtonProps, RadioProps } from "./radio.types";

const FormRadio = (props: RadioProps) => {
  const {
    radioButtonLabel,
    radioList,
    name,
    value,
    onChange,
    defaultValue,
    required = false,
    error,
    errorText,
    sx,
    disableBottom = false,
    disableTop = false,
  } = props;
  return (
    <FormWrapper disableBottom={disableBottom} disableTop={disableTop}>
      <FormControl
        component="fieldset"
        variant="standard"
        required={required}
        error={error}
      >
        <FormLabel>{radioButtonLabel}</FormLabel>
        <RadioGroup
          defaultValue={defaultValue}
          name={name}
          value={value}
          onChange={onChange}
          row
        >
          {radioList.map((item: RadioButtonProps) => {
            return (
              <FormControlLabel
                value={item.value}
                label={item.label}
                labelPlacement={item.labelPlacement || "end"}
                disabled={item.disabled || false}
                control={<Radio color={item.color} sx={{ ...sx }} />}
              />
            );
          })}
        </RadioGroup>
        <FormHelperText>{errorText}</FormHelperText>
      </FormControl>
    </FormWrapper>
  );
};

export default React.memo(FormRadio);
