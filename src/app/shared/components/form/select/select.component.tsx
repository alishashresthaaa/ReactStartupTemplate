import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { SelectProps } from "./select.types";
import { Controller } from "react-hook-form";

const FormSelect = (props: SelectProps) => {
  const { name, label, id, options, sx, control, ...rest } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => {
        return (
          <Autocomplete
            disablePortal
            id={id}
            options={options}
            sx={{ ...sx }}
            getOptionLabel={(option) => option.text}
            renderInput={(params) => <TextField {...params} label={label} />}
          ></Autocomplete>
        );
      }}
    />
  );
};

export default FormSelect;
