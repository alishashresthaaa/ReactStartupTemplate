import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "app/state";

const FormDetailsExample = () => {
  const formData = useAppSelector((state) => state.form);

  return (
    <Container>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">Name</Typography>
        <Typography variant="body1">{formData.name}</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">Password</Typography>
        <Typography variant="body1">{formData.password}</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">Email</Typography>
        <Typography variant="body1">{formData.email}</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">Nationality</Typography>
        <Typography variant="body1">{formData.nationality}</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">Gender</Typography>
        <Typography variant="body1">{formData.gender}</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6">Hobbies</Typography>
        {formData.hobbies.map((item: string, index: number) => (
          <Typography variant="body1" key={index}>
            {item}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};

export default FormDetailsExample;
