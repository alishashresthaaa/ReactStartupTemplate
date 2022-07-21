import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";
import { Controller } from "react-hook-form";
import FormWrapper from "../wrapper/wrapper.component";
import { RadioButtonProps, RadioProps } from "./radio.types";

const FormRadio = (props: RadioProps) => {
  const {
    radioButtonLabel,
    radioList,
    name,
    defaultValue,
    sx,
    control,
    ...rest
  } = props;
  return (
    <FormWrapper
      disableBottom={rest.disableBottom || false}
      disableTop={rest.disableTop || false}
    >
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, fieldState, formState }) => {
          return (
            <FormControl
              component="fieldset"
              variant="standard"
              required={rest.required || false}
              error={fieldState.invalid}
              fullWidth={rest.fullWidth || true}
            >
              <FormLabel>{radioButtonLabel}</FormLabel>
              <RadioGroup
                defaultValue={defaultValue}
                name={field.name}
                value={field.value || ""}
                onChange={field.onChange}
                row
              >
                {radioList.map((item: RadioButtonProps) => {
                  return (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      label={item.label}
                      labelPlacement={item.labelPlacement || "end"}
                      disabled={item.disabled || false}
                      control={
                        <Radio color={item.color || "default"} sx={{ ...sx }} />
                      }
                    />
                  );
                })}
              </RadioGroup>
              <FormHelperText>
                {fieldState?.error?.message &&
                  `${fieldState?.error?.message + " "}`}
              </FormHelperText>
            </FormControl>
          );
        }}
      />
    </FormWrapper>
  );
};

export default React.memo(FormRadio);
