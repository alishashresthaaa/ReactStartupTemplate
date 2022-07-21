import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import React from "react";
import { Controller } from "react-hook-form";
import AutocompleteProps from "./autocomplete.types";
import FormWrapper from "../wrapper/wrapper.component";

const FormAutocomplete = (props: AutocompleteProps) => {
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
        render={({ field, fieldState, formState }) => {
          return (
            <Autocomplete
              value={field.value || null}
              options={options || []}
              loading={loading || false}
              // onChange={field.onChange}
              onChange={(_, data) => field.onChange(data)}
              onBlur={field.onBlur}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name={name}
                  label={label}
                  error={!!fieldState.error}
                  helperText={
                    fieldState.error ? fieldState.error.message : null
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
              defaultValue={options ? options[0] : {}}
            />
          );
        }}
      />
    </FormWrapper>
  );
};

export default FormAutocomplete;
