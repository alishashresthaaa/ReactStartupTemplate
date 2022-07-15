import { ReactNode } from "react";
import FormCommonTypes from "../types/common.types";
import FormEventTypes from "../types/events.type";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface LinkProps
  extends FormCommonTypes,
    FormEventTypes,
    FormWrapperProps {
  name?: string;
  disabled?: boolean;
  color?: "success" | "error" | "primary" | "secondary";
  underline?: "always" | "hover" | "none";
  variant?: "body1" | "button";
  hasIcon?: boolean;
  iconPos?: "start" | "end";
  icon?: ReactNode;
}
