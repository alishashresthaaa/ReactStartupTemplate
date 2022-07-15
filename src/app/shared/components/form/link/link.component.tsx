import SvgIcon from "@mui/material/SvgIcon";
import Link from "@mui/material/Link";
import React from "react";
import LinkProps from "./link.types";
import FormWrapper from "../wrapper/wrapper.component";

const FormLink = (props: LinkProps) => {
  const {
    name,
    onClick,
    color = "primary",
    underline = "hover",
    variant = "button",
    className,
    sx,
    disableBottom = false,
    disableTop = false,
    alignItems = "center",
    justifyContent = "center",
  } = props;

  return (
    <FormWrapper
      disableBottom={disableBottom}
      disableTop={disableTop}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      <Link
        variant={variant}
        sx={{ ...sx }}
        className={className}
        onClick={onClick}
        color={color}
        underline={underline}
      >
        {name}
      </Link>
    </FormWrapper>
  );
};

export default React.memo(FormLink);
