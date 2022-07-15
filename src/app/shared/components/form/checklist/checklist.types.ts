import CheckboxProps from "../checkbox/checkbox.types";
import FormEventTypes from "../types/events.type";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface CheckListProps
  extends FormEventTypes,
    FormWrapperProps {
  checklistLabel: string;
  checklist: CheckboxProps[];
  error?: boolean;
  errorText?: string;
  required?: boolean;
}
