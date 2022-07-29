import { BaseTextFieldProps as MuiBaseTextFieldProps } from "@mui/material/TextField";
import HookFormProps from "../types/hookform.types";
import HasIconProps from "../types/icon.types";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface AutocompleteProps<T>
  extends FormWrapperProps,
    MuiBaseTextFieldProps,
    HasIconProps,
    HookFormProps<T> {
  name: string;
  label?: string;
  value?: string;
  options: AutocompleteListType[];
  loading?: boolean;
  helperText?: string;
}

export interface AutocompleteListType {
  text: string;
  value: string;
}
