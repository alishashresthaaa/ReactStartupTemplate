import FormControl from "@mui/material/FormControl";
import React from "react";
import FormWrapperProps from "./wrapper.types";

const FormWrapper = (props: FormWrapperProps) => {
  const {
    disableTop,
    disableBottom,
    alignItems = "center",
    justifyContent = "center",
    sx,
    children,
  } = props;
  return (
    <FormControl
      sx={{
        ...sx,
        marginTop: !disableTop ? "1rem" : "0rem",
        marginBottom: !disableBottom ? "1rem" : "0rem",
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
      fullWidth
    >
      {children}
    </FormControl>
  );
};

export default React.memo(FormWrapper);
