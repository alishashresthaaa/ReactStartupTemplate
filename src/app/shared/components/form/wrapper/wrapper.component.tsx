import FormControl from "@mui/material/FormControl";
import React from "react";
import FormWrapperProps from "./wrapper.types";

const FormWrapper = (props: FormWrapperProps) => {
  const {
    disableTop,
    disableBottom,
    alignItems = "center",
    justifyContent = "center",
    wrapperFullWidth,
    sx,
    children,
  } = props;
  return (
    <FormControl
      sx={{
        ...sx,
        paddingTop: !disableTop ? "0.7rem" : "0rem",
        paddingBottom: !disableBottom ? "0.7rem" : "0rem",
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
      fullWidth={wrapperFullWidth ?? true}
    >
      {children}
    </FormControl>
  );
};

export default React.memo(FormWrapper);
