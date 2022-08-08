import { SxProps, Theme } from "@mui/material/styles";

export default interface FormCommonType {
  // children?: ReactNode;
  className?: string;
  sx?: SxProps<Theme>;

  // react-hook-form

  control?: any;
}
