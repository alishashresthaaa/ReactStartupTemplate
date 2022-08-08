import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "shared/hooks/useLocalStorage";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (user: string) => {
    setUser(user);
    navigate("/");
  };

  // call this function to sign out logged in user
  const logout = (): void => {
    setUser(null);
    navigate("auth/login", { replace: true });
  };

  //  Memoised (cache) the value until the dependency change
  const value = useMemo(
    () => ({ user, login, logout }),
    // eslint-disable-next-line
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
