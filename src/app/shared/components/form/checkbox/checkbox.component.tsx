import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import FormWrapper from "../wrapper/wrapper.component";
import CheckboxProps from "./checkbox.types";

const FormCheckbox = (props: CheckboxProps<FieldValues>) => {
  const {
    label,
    labelPlacement = "end",
    value,
    name,
    size = "small",
    color = "default",
    icon,
    checkedIcon,
    sx,
    control,
    ...rest
  } = props;

  return (
    <FormWrapper
      disableBottom={rest.disableBottom || false}
      disableTop={rest.disableTop || false}
      sx={{ width: "max-content" }}
    >
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          return (
            <FormControl
              component="fieldset"
              variant="standard"
              required={rest.required || true}
              error={!!fieldState.error}
              fullWidth={rest.fullWidth || true}
            >
              <FormControlLabel
                label={label}
                labelPlacement={labelPlacement}
                disabled={rest.disabled || false}
                control={
                  <Checkbox
                    {...field}
                    checked={!!field.value}
                    value={field.value || false}
                    onChange={() => {
                      field.onChange(!field.value);
                    }}
                    size={size}
                    color={color}
                    icon={icon}
                    checkedIcon={checkedIcon}
                  />
                }
              ></FormControlLabel>
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

export default React.memo(FormCheckbox);
