import FormCommonTypes from "../types/common.types";
import FormEventTypes from "../types/events.type";

export interface SelectProps extends FormCommonTypes, FormEventTypes {
  label: string;
  name: string;
  value: string;
  id: string;
  options: SelectList[];
  control?: any;
}

export interface SelectList {
  text: string;
  value: string;
}
