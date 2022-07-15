import { SxProps, Theme } from "@mui/material/styles";
import { ReactNode } from "react";
import FormCommonTypes from "../types/common.types";
import FormEventTypes from "../types/events.type";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface InputProps
  extends FormCommonTypes,
    FormEventTypes,
    FormWrapperProps {
  // basic
  label: string;
  value?: string;
  type?: string;

  // variant
  variant?: "outlined" | "filled" | "standard";
  fullWidth?: boolean;
  color?: "success" | "error" | "warning";

  // attributes
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  autoComplete?: "on" | "off";

  // display error
  error?: boolean;
  errorText?: string;

  // extras
  defaultValue?: string;
  ref?: any;

  // for textarea
  multiline?: boolean;
  rows?: number;

  // has icon
  hasIcon?: boolean;
  iconPos?: "start" | "end";
  icon?: ReactNode;

  //   styles
  inputLabelStyles?: SxProps<Theme>;
  inputHelperTextStyles?: SxProps<Theme>;
}
