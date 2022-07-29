import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useSideNav } from "core/utils/sidenav";
import { useState } from "react";
import NavItem from "../navItem/navItem.component";
import { NavMenuItemProps } from "./navMenuItem.types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const NavMenuItem = (props: NavMenuItemProps) => {
  const { name, link, icon, items } = props;

  const isExpandable = items && items.length > 0;
  const [open, setOpen] = useState(false);

  const handleClick: () => void = () => {
    setOpen(!open);
  };

  const { sidenav } = useSideNav();

  const MenuItemRoot = (
    <NavItem link={link} onClick={handleClick}>
      {/* Displays icon if any */}
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: sidenav ? "initial" : "center",
          px: 2.5,
        }}
      >
        {!!icon && (
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: sidenav ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {icon}
          </ListItemIcon>
        )}
        <ListItemText
          primary={name}
          inset={!icon}
          sx={{ opacity: sidenav ? 1 : 0 }}
        />

        {/* Displays the expand menu if the item has children */}
        {sidenav && isExpandable && !open && <KeyboardArrowRightIcon />}
        {sidenav && isExpandable && open && <KeyboardArrowDownIcon />}
      </ListItemButton>
    </NavItem>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {items?.map((item: any, index: any) => {
          return <NavMenuItem {...item} key={index} />;
        })}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};

export default NavMenuItem;
