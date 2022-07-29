import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import FormWrapper from "../wrapper/wrapper.component";
import AutocompleteProps from "./autocomplete.types";

const FormAutocomplete = (props: AutocompleteProps<FieldValues>) => {
  const { name, control, options, loading, label, ...rest } = props;
  return (
    <FormWrapper
      disableBottom={rest.disableBottom || false}
      disableTop={rest.disableTop || false}
    >
      <Controller
        name={name}
        control={control}
        defaultValue={options ? options[0] : {}}
        render={({ field, fieldState }) => {
          return (
            <Autocomplete
              value={field.value || null}
              options={options || []}
              loading={loading || false}
              onChange={(_, data) => field.onChange(data)}
              onBlur={field.onBlur}
              renderInput={(params) => (
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
                />
              )}
              getOptionLabel={(option) => {
                return option.text || "";
              }}
              isOptionEqualToValue={(option, value) => {
                return value ? option.value === (value?.value || value) : false;
              }}
              fullWidth={rest.fullWidth || true}
              defaultValue={options ? options[0] : (rest.defaultValue = {})}
            />
          );
        }}
      />
    </FormWrapper>
  );
};

export default React.memo(FormAutocomplete);
