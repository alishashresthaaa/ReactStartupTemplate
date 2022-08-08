import { CheckboxProps as MuiCheckboxProps } from "@mui/material";
import { FormControlProps as MuiFormControlProps } from "@mui/material/FormControl";
import { FormControlLabelProps as MuiFormControlLabelProps } from "@mui/material/FormControlLabel";
import HookFormProps from "../types/hookform.types";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface CheckboxProps<T>
  extends FormWrapperProps,
    HookFormProps<T>,
    MuiCheckboxProps,
    Pick<MuiFormControlProps, "disabled" | "error" | "fullWidth" | "required">,
    Pick<MuiFormControlLabelProps, "label" | "labelPlacement"> {
  name: string;
  helperText?: string;
}
