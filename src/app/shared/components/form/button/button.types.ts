import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import HasIconProps from "../types/icon.types";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface ButtonProps
  extends FormWrapperProps,
    HasIconProps,
    MuiButtonProps {
  // basic
  value?: string;
  type?: "button" | "submit" | "reset";

  // Is button upload type
  isUploadBtn?: boolean;
  uploadType?: HTMLInputElement;

  // Is button has loader icon after clicking
  loader?: boolean;
}
