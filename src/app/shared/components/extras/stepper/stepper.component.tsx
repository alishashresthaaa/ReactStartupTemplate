import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepperProps from "./stepper.types";

const FormStepper = (props: StepperProps) => {
  const { steps, activeStep, handleClick } = props;

  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      sx={{ padding: "2rem 0" }}
    >
      {steps.map((label: string, key: number) => (
        <Step key={label} onClick={() => handleClick(key)}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default FormStepper;
