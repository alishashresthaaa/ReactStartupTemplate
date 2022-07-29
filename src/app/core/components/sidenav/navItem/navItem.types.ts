import { ReactNode } from "react";
export interface NavItemProps {
  link: string | undefined;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: ReactNode;
}
