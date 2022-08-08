import FormWrapperProps from "../wrapper/wrapper.types";
import { BaseTextFieldProps as MuiBaseTextFieldProps } from "@mui/material/TextField";
import HookFormProps from "../types/hookform.types";

export default interface DatePickerProps<T>
  extends FormWrapperProps,
    Omit<MuiBaseTextFieldProps, "onError">,
    HookFormProps<T> {
  name: string;
}
