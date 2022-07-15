import { ReactNode } from "react";
import FormCommonTypes from "../types/common.types";
import FormEventTypes from "../types/events.type";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface CheckboxProps
  extends FormCommonTypes,
    FormEventTypes,
    FormWrapperProps {
  // basic
  label: string;
  labelPlacement?: "top" | "start" | "bottom" | "end";
  name: string;

  // variant
  size: "small" | "medium";
  color: "default" | "error" | "success" | "secondary";

  // attributes
  defaultChecked?: boolean;
  disabled?: boolean;

  //   icon
  icon?: ReactNode;
  checkedIcon?: ReactNode;

  //   control the checkbox
  checked: boolean; // with help of onChange
}
