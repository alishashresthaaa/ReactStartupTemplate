import ListItem from "@mui/material/ListItem";
import { forwardRef } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { NavItemProps } from "./navItem.types";

const NavItem = (props: NavItemProps) => {
  const { onClick, link, children } = props;

  // If link is not set return ordinary item with click event for dropdown
  if (!link || typeof link !== "string") {
    return <ListItem button children={children} onClick={onClick} />;
  }

  // Return a link component if link prop exists
  return (
    <ListItem
      button
      children={children}
      to={link}
      component={forwardRef(
        (props: NavLinkProps, ref: any): JSX.Element => (
          <NavLink {...props} />
        )
      )}
    />
  );
};

export default NavItem;
