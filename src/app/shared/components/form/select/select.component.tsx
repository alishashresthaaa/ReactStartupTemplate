import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { SelectProps } from "./select.types";

const FormSelect = (props: SelectProps) => {
  const { label, id, options, sx } = props;
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
};

export default FormSelect;
