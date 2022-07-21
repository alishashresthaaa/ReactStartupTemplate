import Link from "@mui/material/Link";
import React from "react";
import FormWrapper from "../wrapper/wrapper.component";
import LinkProps from "./link.types";

const FormLink = (props: LinkProps) => {
  const {
    name,
    onClick,
    color = "primary",
    underline = "hover",
    variant = "button",
    className,
    sx,
    ...rest
  } = props;

  return (
    <FormWrapper
      disableBottom={rest.disableBottom || false}
      disableTop={rest.disableTop || false}
      alignItems={rest.alignItems || "center"}
      justifyContent={rest.justifyContent || "center"}
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
