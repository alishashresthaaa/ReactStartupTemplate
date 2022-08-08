import { CheckboxProps as MuiCheckboxProps } from "@mui/material";
import { FormControlProps as MuiFormControlProps } from "@mui/material/FormControl";
import HookFormProps from "../types/hookform.types";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface CheckListProps<T>
  extends FormWrapperProps,
    HookFormProps<T>,
    Pick<MuiFormControlProps, "disabled" | "error" | "fullWidth" | "required"> {
  name: string;
  checklistLabel: string;
  checklist: MuiCheckboxProps[];
  helperText?: string;
  defaultValue?: any;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLButtonElement | any>,
    ...args: any[]
  ) => void;
}
