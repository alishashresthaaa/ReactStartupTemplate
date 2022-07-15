import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import FormInput from "shared/components/form/input/input.component";
import FormButton from "shared/components/form/button/button.component";
import FormLink from "shared/components/form/link/link.component";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h3">Login</Typography>
      <Typography variant="h6">Please login to proceed to dashboard</Typography>
      <Container disableGutters fixed sx={{ margin: "2rem 0" }}>
        <form>
          <FormInput label="Username" fullWidth />
          <FormInput label="Password" fullWidth />
          <FormLink
            name="Forgot password?"
            disableBottom={true}
            disableTop={true}
            alignItems="flex-end"
            onClick={() => navigate("/auth/forgot-password")}
          />
          <FormButton
            name="Submit"
            value="Submit"
            fullWidth
            onClick={() => navigate("/")}
          />
          <FormLink
            name="Don't have an account? Register !"
            disableBottom={true}
            disableTop={true}
            alignItems="flex-end"
            onClick={() => navigate("/auth/register")}
          />
        </form>
      </Container>
    </>
  );
};

export default LoginPage;
