import FormCommonTypes from "../types/common.types";
import FormEventTypes from "../types/events.type";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface AutocompleteProps
  extends FormCommonTypes,
    FormEventTypes,
    FormWrapperProps {
  label?: string;
  value?: string;
  options: AutocompleteListType[];
  loading?: boolean;
}

export interface AutocompleteListType {
  text: string;
  value: string;
}
