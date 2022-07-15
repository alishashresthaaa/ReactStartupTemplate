import { FormEventHandler } from "react";

export default interface FormEventTypes {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLButtonElement>,
    ...args: any
  ) => void;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onKeyUp?: FormEventHandler<any>;
  onFocus?: (event: any, ...args: any) => void;
}
