import { SxProps, Theme } from "@mui/material/styles";

export default interface FormCommonTypes {
  // children?: ReactNode;
  className?: string;
  sx?: SxProps<Theme>;

  // design
  fullWidth?: boolean;

  // extras
  required?: boolean;
  disabled?: boolean;

  // react-hook-form
  name: string;
  trigger?: any;
  control?: any;
}
