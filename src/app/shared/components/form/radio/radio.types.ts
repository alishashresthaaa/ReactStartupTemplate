import FormCommonTypes from "../types/common.types";
import FormEventTypes from "../types/events.type";
import FormWrapperProps from "../wrapper/wrapper.types";

export interface RadioProps
  extends FormCommonTypes,
    FormEventTypes,
    FormWrapperProps {
  radioButtonLabel: string;
  radioList: RadioButtonProps[];
  name: string;
  value: string;
  defaultValue: string;
  required?: boolean;
  error?: boolean;
  errorText?: string;
}

export interface RadioButtonProps {
  label: string;
  labelPlacement?: "top" | "start" | "bottom" | "end";
  value: string;
  disabled?: boolean;
  color: "default" | "success" | "error";
}
