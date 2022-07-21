import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import { Controller } from "react-hook-form";
import FormWrapper from "../wrapper/wrapper.component";
import styles from "./checkbox.module.scss";
import CheckboxProps from "./checkbox.types";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

const FormCheckbox = (props: CheckboxProps) => {
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
        render={({ field, fieldState, formState }) => {
          return (
            <FormControl
              component="fieldset"
              variant="standard"
              required={rest.required || true}
              error={fieldState.invalid}
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
                    value={field.value}
                    onChange={() => {
                      field.onChange(!field.value);
                      // onChange();
                    }}
                    size={size}
                    sx={{ ...sx }}
                    className={`${styles["checkbox"]}`}
                    color={color}
                    icon={icon}
                    checkedIcon={checkedIcon}
                  />
                }
              ></FormControlLabel>
              <FormHelperText error={fieldState.invalid}>
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

export default React.memo(FormCheckbox);
