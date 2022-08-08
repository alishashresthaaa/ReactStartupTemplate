import { StepperProps as MuiStepperProps } from "@mui/material/Stepper";

export default interface StepperProps extends MuiStepperProps {
  steps: string[];
  handleClick: (key: number) => void;
}
