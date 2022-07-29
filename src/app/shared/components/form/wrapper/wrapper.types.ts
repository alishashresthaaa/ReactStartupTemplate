import { ReactNode } from "react";
import { SxProps, Theme } from "@mui/material/styles";
export default interface FormWrapperProps {
  disableTop?: boolean;
  disableBottom?: boolean;
  sx?: SxProps<Theme>;
  children?: ReactNode;
  row?: boolean;
  alignItems?: "flex-start" | "center" | "flex-end";
  justifyContent?: "flex-start" | "center" | "flex-end";
  wrapperFullWidth?: boolean;
}
