import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "shared/hooks/useLocalStorage";

const SideNavContext = createContext<any>(null);

export const SideNavProvoder = ({ children }: any) => {
  const [sidenav, setSideNav] = useLocalStorage("sidenav", false);

  // call this function to open drawer
  const handleDrawerOpen: () => void = async () => {
    setSideNav(true);
  };

  // call this function to close drawer
  const handleDrawerClose: () => void = async () => {
    setSideNav(false);
  };

  //  Memoised (cache) the value until the dependency change
  const value = useMemo(
    () => ({ sidenav, handleDrawerOpen, handleDrawerClose }),
    // eslint-disable-next-line
    [sidenav]
  );

  return (
    <SideNavContext.Provider value={value}>{children}</SideNavContext.Provider>
  );
};

export const useSideNav = () => {
  return useContext(SideNavContext);
};
