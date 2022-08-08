import { ReactNode } from "react";

export default interface HasIconProps {
  hasIcon?: boolean;
  iconPos?: "start" | "end";
  icon?: ReactNode;
}
