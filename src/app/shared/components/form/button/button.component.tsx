import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import FormWrapper from "../wrapper/wrapper.component";
import styles from "./button.module.scss";
import ButtonProps from "./button.types";

const FormButton = (props: ButtonProps) => {
  const {
    name,
    value,
    type = "submit",
    variant = "contained",
    disabled = false,
    href,
    color = "primary",
    size = "medium",
    fullWidth = false,
    isUploadBtn = false,
    uploadType,
    hasIcon = false,
    iconPos = "end",
    icon,
    loader = false,
    onClick,
    className,
    sx,
    disableBottom = false,
    disableTop = false,
    alignItems = "center",
    justifyContent = "center",
    ...rest
  } = props;

  return (
    <FormWrapper
      disableBottom={disableBottom}
      disableTop={disableTop}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {" "}
      <Button
        value={value}
        id={value}
        type={type}
        variant={variant}
        disabled={disabled}
        href={href}
        color={color}
        size={size}
        fullWidth={fullWidth}
        onClick={onClick}
        sx={{ ...sx, background: variant === "text" ? "none" : "default" }}
        className={`${className} ${styles["button"]}`}
        startIcon={hasIcon && iconPos === "start" && icon}
        endIcon={hasIcon && iconPos === "end" && icon}
      >
        <>
          {isUploadBtn && uploadType}
          {loader && <CircularProgress size="1rem" color="inherit" />} {name}
        </>
      </Button>
    </FormWrapper>
  );
};

export default React.memo(FormButton);
