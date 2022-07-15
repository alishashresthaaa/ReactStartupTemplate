import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import FormButton from "shared/components/form/button/button.component";
import FormInput from "shared/components/form/input/input.component";
import FormLink from "shared/components/form/link/link.component";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h3">Register</Typography>
      <Typography variant="h6">Please register to create username</Typography>
      <Container disableGutters fixed sx={{ margin: "2rem 0" }}>
        <form>
          <FormInput label="Name" fullWidth />
          <FormInput label="Email" fullWidth />
          <FormInput label="Password" fullWidth />
          <FormInput label="Confirm Password" fullWidth />
          <FormButton name="Register" value="Submit" fullWidth />
          <FormLink
            name="Already have an account? Login !"
            disableBottom={true}
            disableTop={true}
            alignItems="center"
            onClick={() => navigate("/auth/login")}
          />
        </form>
      </Container>
    </>
  );
};

export default RegisterPage;
