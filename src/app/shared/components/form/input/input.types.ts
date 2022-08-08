import { InputLabelProps as MuiInputLabelProps } from "@mui/material/InputLabel";
import { BaseTextFieldProps as MuiBaseTextFieldProps } from "@mui/material/TextField";
import { FieldPathValue, FieldValues, Path } from "react-hook-form";
import HookFormProps from "../types/hookform.types";
import HasIconProps from "../types/icon.types";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface InputProps<TFieldValues extends FieldValues>
  extends MuiBaseTextFieldProps,
    Pick<MuiInputLabelProps, "shrink">,
    HasIconProps,
    FormWrapperProps,
    HookFormProps<TFieldValues> {
  name: Path<TFieldValues>;
  label: string;
  defaultValue?: FieldPathValue<TFieldValues, Path<TFieldValues>>;

  // variant
  variant?: "outlined" | "filled" | "standard";
  helperText?: string;
}
