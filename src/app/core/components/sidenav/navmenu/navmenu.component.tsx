import List from "@mui/material/List";
import NavMenuItem from "../navMenuItem/navMenuItem.component";
import { NavMenuProps } from "./navmenu.types";

const NavMenu = (props: NavMenuProps) => {
  const { menu } = props;
  return (
    <List>
      {menu?.map((item: any, index: number) => {
        console.log(item);
        return <NavMenuItem {...item} key={index} />;
      })}
    </List>
  );
};

export default NavMenu;
