import { SxProps, Theme } from "@mui/material/styles";
import { ReactNode } from "react";
import { Control, FieldError } from "react-hook-form";
import FormCommonTypes from "../types/common.types";
import FormEventTypes from "../types/events.type";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface InputProps
  extends FormCommonTypes,
    FormEventTypes,
    FormWrapperProps {
  // basic
  label?: string;
  value?: string;
  type?: string;
  name: string;

  // variant
  variant?: "outlined" | "filled" | "standard";
  fullWidth?: boolean;
  color?: "success" | "error" | "warning";

  // attributes
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  autoComplete?: "on" | "off";

  // extras
  defaultValue?: string;

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

  // For react hook form
  control?: any;
}
