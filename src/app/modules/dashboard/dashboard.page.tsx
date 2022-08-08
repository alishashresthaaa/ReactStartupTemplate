import Typography from "@mui/material/Typography";
import { useAuth } from "core/utils/auth";

const DashboardPage = () => {
  const auth = useAuth();
  return (
    <>
      <Typography variant="h3">This is dashboard page</Typography>
      <Typography variant="h6">You are logged in as {auth.user}</Typography>
    </>
  );
};

export default DashboardPage;
