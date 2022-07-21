import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormButton from "shared/components/form/button/button.component";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ textAlign: "center", verticalAlign: "middle" }}>
      <Typography variant="h3">Page Not Found</Typography>
      <FormButton
        name="Back to dashboard"
        onClick={() => navigate("/")}
        fullWidth={false}
      />
    </Container>
  );
};

export default NotFoundPage;
