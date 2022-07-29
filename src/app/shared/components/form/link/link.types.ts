import { LinkProps as MuiLinkProps } from "@mui/material";
import HookFormProps from "../types/hookform.types";
import HasIconProps from "../types/icon.types";
import FormWrapperProps from "../wrapper/wrapper.types";

export default interface LinkProps<T>
  extends FormWrapperProps,
    HookFormProps<T>,
    Omit<MuiLinkProps, "alignItems" | "justifyContent">,
    HasIconProps {
  name: string;
}
