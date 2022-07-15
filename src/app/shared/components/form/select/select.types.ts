import FormCommonTypes from "../types/common.types";
import FormEventTypes from "../types/events.type";

export interface SelectProps extends FormCommonTypes, FormEventTypes {
  label: string;
  id: string;
  options: SelectList[];
}

export interface SelectList {
  text: string;
  value: string;
}
