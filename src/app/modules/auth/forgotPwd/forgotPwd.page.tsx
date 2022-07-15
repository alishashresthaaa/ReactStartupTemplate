import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import FormButton from "shared/components/form/button/button.component";
import FormInput from "shared/components/form/input/input.component";
import FormLink from "shared/components/form/link/link.component";
import { useNavigate } from "react-router-dom";

const ForgotPwdPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h3">Forgot Password</Typography>
      <Typography variant="h6">
        Please enter to email to get new password
      </Typography>
      <Container disableGutters fixed sx={{ margin: "2rem 0" }}>
        <form>
          <FormInput label="Email" fullWidth />
          <FormButton name="Send mail" value="Submit" fullWidth />
          <FormLink
            name="Already have an account? Login !"
            disableBottom={true}
            disableTop={true}
            onClick={() => navigate("/auth/login")}
          />
        </form>
      </Container>
    </>
  );
};

export default ForgotPwdPage;
