import { yupResolver } from "@hookform/resolvers/yup";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useAuth } from "core/utils/auth";
import { Control, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, Navigate } from "react-router-dom";
import FormButton from "shared/components/form/button/button.component";
import FormInput from "shared/components/form/input/input.component";
import FormLink from "shared/components/form/link/link.component";
import LoginFormTypes, { loginSchema } from "./login.types";

const LoginPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<LoginFormTypes>({
    mode: "onTouched",
    resolver: yupResolver(loginSchema),
  });

  const fromSubmitHandler: SubmitHandler<LoginFormTypes> = (
    data: LoginFormTypes
  ) => {
    auth.login(data.username);
    navigate("/");
  };

  if (auth.user) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        <Typography variant="h3">Login</Typography>
        <Typography variant="h6">
          Please login to proceed to dashboard
        </Typography>
        <Container disableGutters fixed sx={{ margin: "2rem 0" }}>
          <form onSubmit={handleSubmit(fromSubmitHandler)}>
            <FormInput
              type="text"
              name="username"
              label="Username"
              control={control as unknown as Control<FieldValues, object>}
              fullWidth
            />
            <FormInput
              type="password"
              name="password"
              label="Password"
              control={control as unknown as Control<FieldValues, object>}
              fullWidth
            />
            <FormLink
              name="Forgot password?"
              disableBottom={true}
              disableTop={true}
              alignItems="flex-end"
              onClick={() => navigate("/auth/forgot-password")}
            />
            <FormButton name="Submit" value="Submit" fullWidth />
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
  }
};

export default LoginPage;
