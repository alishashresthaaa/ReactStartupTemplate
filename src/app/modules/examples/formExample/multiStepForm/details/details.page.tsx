import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useMultiStepForm } from "shared/hooks/useMultiStep";

const MultiStepDetailsForm = () => {
  const { formValues } = useMultiStepForm();
  return (
    <Container>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">Name</Typography>
        <Typography variant="body1">{formValues.name}</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">Email</Typography>
        <Typography variant="body1">{formValues.email}</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">DOB</Typography>
        <Typography variant="body1">{formValues.dob}</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">Gender</Typography>
        <Typography variant="body1">{formValues.gender}</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">Hobbies</Typography>
        {formValues.hobbies?.map((item: string, index: number) => (
          <Typography variant="body1" key={index}>
            {item}
          </Typography>
        ))}
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">Nationality</Typography>
        <Typography variant="body1">{formValues.nationality?.text}</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">Is Verified</Typography>
        <Typography variant="body1">{formValues.isVerified}</Typography>
      </Box>
    </Container>
  );
};

export default MultiStepDetailsForm;
