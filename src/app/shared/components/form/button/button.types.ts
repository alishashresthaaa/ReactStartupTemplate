import { ReactNode } from "react";
import FormCommonTypes from "../types/common.types";
import FormEventTypes from "../types/events.type";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface ButtonProps
  extends FormCommonTypes,
    FormEventTypes,
    FormWrapperProps {
  // basic
  name?: string;
  value?: string;
  type?: "button" | "submit" | "reset";

  // variant
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  href?: string; // To create link
  color?: "success" | "error" | "primary" | "secondary";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  isUploadBtn?: boolean;
  uploadType?: HTMLInputElement;
  hasIcon?: boolean;
  iconPos?: "start" | "end";
  icon?: ReactNode;
  loader?: boolean;
}
