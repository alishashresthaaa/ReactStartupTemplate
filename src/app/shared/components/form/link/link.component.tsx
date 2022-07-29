import Link from "@mui/material/Link";
import React from "react";
import { FieldValues } from "react-hook-form";
import FormWrapper from "../wrapper/wrapper.component";
import LinkProps from "./link.types";

const FormLink = (props: LinkProps<FieldValues>) => {
  const {
    name,
    onClick,
    color = "primary",
    underline = "hover",
    variant = "button",
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
