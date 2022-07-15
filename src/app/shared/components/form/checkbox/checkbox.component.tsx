import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import FormWrapper from "../wrapper/wrapper.component";
import styles from "./checkbox.module.scss";
import CheckboxProps from "./checkbox.types";

const FormCheckbox = (props: CheckboxProps) => {
  const {
    label,
    labelPlacement = "end",
    name,
    size,
    color,
    defaultChecked = false,
    disabled = false,
    icon,
    checkedIcon,
    checked = false,
    onChange,
    sx,
    disableBottom = false,
    disableTop = false,
  } = props;

  return (
    <FormWrapper disableBottom={disableBottom} disableTop={disableTop}>
      <FormControlLabel
        label={label}
        labelPlacement={labelPlacement}
        disabled={disabled}
        control={
          <Checkbox
            name={name}
            id={name}
            defaultChecked={defaultChecked}
            checked={checked}
            onChange={onChange}
            size={size}
            sx={{ ...sx }}
            className={`${styles["checkbox"]}`}
            color={color}
            icon={icon}
            checkedIcon={checkedIcon}
          />
        }
      ></FormControlLabel>
    </FormWrapper>
  );
};

export default React.memo(FormCheckbox);
