import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormStepper from "shared/components/extras/stepper/stepper.component";
import { useMultiStepForm } from "shared/hooks/useMultiStep";
import FormOne from "./form/one/one.page";
import FormThree from "./form/three/three.page";
import FormTwo from "./form/two/two.page";
import { stepperList } from "./multiStep.data";

const MultiStepForm = () => {
  const handleSteps = (step: number) => {
    switch (step) {
      case 0:
        return <FormOne />;
      case 1:
        return <FormTwo />;
      case 2:
        return <FormThree />;
      default:
        return <>Form Not Found</>;
    }
  };

  const { activeStep, setActiveStep } = useMultiStepForm();

  const handleClick = (key: number) => {
    setActiveStep({ step: key });
  };

  return (
    <>
      <Typography variant="paragraph1">Multi Step Form</Typography>

      <Container disableGutters fixed sx={{ margin: "auto", width: "80%" }}>
        <FormStepper
          activeStep={activeStep}
          steps={stepperList}
          handleClick={handleClick}
        ></FormStepper>
        {handleSteps(activeStep)}
      </Container>
    </>
  );
};

export default MultiStepForm;
