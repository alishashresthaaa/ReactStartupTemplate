import { ReactNode } from "react";
import FormCommonTypes from "../types/common.types";
import FormEventTypes from "../types/events.type";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface ButtonProps
  extends FormCommonTypes,
    FormEventTypes,
    FormWrapperProps {
  // basic
  value?: string;
  type?: "button" | "submit" | "reset";

  // variant
  variant?: "text" | "contained" | "outlined";
  href?: string; // To create link
  color?: "success" | "error" | "primary" | "secondary";
  size?: "small" | "medium" | "large";

  // Is button upload type
  isUploadBtn?: boolean;
  uploadType?: HTMLInputElement;

  // has Button icon?
  hasIcon?: boolean;
  iconPos?: "start" | "end";
  icon?: ReactNode;

  // Is button has loader icon after clicking
  loader?: boolean;
}
