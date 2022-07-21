import FormCommonTypes from "../types/common.types";
import FormEventTypes from "../types/events.type";
import FormWrapperProps from "../wrapper/wrapper.types";

export interface RadioProps
  extends FormCommonTypes,
    FormEventTypes,
    FormWrapperProps {
  radioButtonLabel: string;
  radioList: RadioButtonProps[];
  value?: string;
  defaultValue?: string;
}

export interface RadioButtonProps {
  label: string;
  labelPlacement?: "top" | "start" | "bottom" | "end";
  value: string;
  disabled?: boolean;
  color?: "default" | "success" | "error";
}
