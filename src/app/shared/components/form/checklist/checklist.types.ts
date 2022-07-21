import CheckboxProps from "../checkbox/checkbox.types";
import FormCommonTypes from "../types/common.types";
import FormEventTypes from "../types/events.type";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface CheckListProps
  extends FormCommonTypes,
    FormEventTypes,
    FormWrapperProps {
  name: string;
  checklistLabel: string;
  checklist: any[];
  error?: boolean;
  helperText?: string;
  required?: boolean;
  setValue?: (name: any, selectedItem: any) => void;
}
