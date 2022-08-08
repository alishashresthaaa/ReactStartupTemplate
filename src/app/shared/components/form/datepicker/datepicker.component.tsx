import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import FormWrapper from "../wrapper/wrapper.component";
import DatePickerProps from "./datepicker.types";

const FormDatePicker = (props: DatePickerProps<FieldValues>) => {
  const { name, control, label, ...rest } = props;
  return (
    <FormWrapper
      disableBottom={rest.disableBottom || false}
      disableTop={rest.disableTop || false}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns} {...props}>
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState }) => {
            return (
              <DesktopDatePicker
                {...rest}
                value={field.value || ""}
                onChange={field.onChange}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    name={name}
                    label={label}
                    error={!!fieldState.error}
                    helperText={
                      !!fieldState.error
                        ? `${fieldState?.error?.message + " "}`
                        : (rest.helperText = " ")
                    }
                    fullWidth={rest.fullWidth || true}
                  />
                )}
              />
            );
          }}
        />
      </LocalizationProvider>
    </FormWrapper>
  );
};

export default React.memo(FormDatePicker);
