import { FormControlProps as MuiFormControlProps } from "@mui/material/FormControl";
import { FormControlLabelProps as MuiFormControlLabelProps } from "@mui/material/FormControlLabel";
import { RadioProps as MuiRadioProps } from "@mui/material/Radio";
import { RadioGroupProps as MuiRadioGroupProps } from "@mui/material/RadioGroup";
import HookFormProps from "../types/hookform.types";
import FormWrapperProps from "../wrapper/wrapper.types";

export interface RadioProps<T>
  extends FormWrapperProps,
    HookFormProps<T>,
    Pick<MuiFormControlProps, "disabled" | "error" | "fullWidth" | "required">,
    MuiRadioGroupProps {
  radioButtonLabel: string;
  radioList: RadioButtonProps[];
  name: string;
  helperText?: string;
}

export interface RadioButtonProps
  extends MuiRadioProps,
    Pick<MuiFormControlLabelProps, "label" | "labelPlacement"> {
  value: string;
}
