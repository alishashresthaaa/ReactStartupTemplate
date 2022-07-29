import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import FormWrapper from "../wrapper/wrapper.component";
import ButtonProps from "./button.types";

const FormButton = (props: ButtonProps) => {
  const {
    name,
    value,
    type = "submit",
    href,
    isUploadBtn = false,
    uploadType,
    hasIcon = false,
    iconPos = "end",
    icon,
    loader = false,
    onClick,
    ...rest
  } = props;

  return (
    <FormWrapper
      disableBottom={rest.disableBottom || false}
      disableTop={rest.disableTop || false}
      alignItems={rest.alignItems || "center"}
      justifyContent={rest.justifyContent || "center"}
      wrapperFullWidth={rest.wrapperFullWidth ?? true}
    >
      {" "}
      <Button
        value={value}
        id={value}
        type={type}
        variant={rest.variant || "contained"}
        disabled={rest.disabled || false}
        href={href}
        color={rest.color || "primary"}
        size={rest.size || "medium"}
        fullWidth={rest.fullWidth}
        onClick={onClick}
        startIcon={hasIcon && iconPos === "start" && icon}
        endIcon={hasIcon && iconPos === "end" && icon}
        component={isUploadBtn ? "label" : "button"}
      >
        <>
          {isUploadBtn && uploadType}
          {loader && (
            <span
              style={{
                fontSize: "1rem",
                marginRight: "1rem",
                display: "inline-flex",
                alignItems: "center",
                zIndex: "99",
              }}
            >
              <CircularProgress size="1rem" color="inherit" />
            </span>
          )}

          {name}
        </>
      </Button>
    </FormWrapper>
  );
};

export default React.memo(FormButton);
