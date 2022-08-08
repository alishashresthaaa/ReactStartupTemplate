import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import FormWrapper from "../wrapper/wrapper.component";
import { RadioButtonProps, RadioProps } from "./radio.types";

const FormRadio = (props: RadioProps<FieldValues>) => {
  const { radioButtonLabel, radioList, name, defaultValue, control, ...rest } =
    props;
  return (
    <FormWrapper
      disableBottom={rest.disableBottom || false}
      disableTop={rest.disableTop || false}
    >
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || radioList[0].value}
        render={({ field, fieldState }) => {
          return (
            <FormControl
              component="fieldset"
              variant="standard"
              required={rest.required || false}
              error={!!fieldState.error}
              fullWidth={rest.fullWidth || true}
            >
              <FormLabel>{radioButtonLabel}</FormLabel>
              <RadioGroup
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
                      control={<Radio color={item.color || "default"} />}
                    />
                  );
                })}
              </RadioGroup>
              <FormHelperText error={!!fieldState.error}>
                {!!fieldState.error
                  ? `${fieldState?.error?.message + " "}`
                  : (rest.helperText = " ")}
              </FormHelperText>
            </FormControl>
          );
        }}
      />
    </FormWrapper>
  );
};

export default React.memo(FormRadio);
