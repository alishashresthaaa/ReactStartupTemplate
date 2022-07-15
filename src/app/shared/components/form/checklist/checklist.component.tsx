import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import React from "react";
import FormCheckbox from "../checkbox/checkbox.component";
import CheckboxProps from "../checkbox/checkbox.types";
import FormWrapper from "../wrapper/wrapper.component";
import CheckListProps from "./checklist.types";

const FormCheckList = (props: CheckListProps) => {
  const {
    checklistLabel,
    checklist,
    error,
    errorText,
    required = false,
    disableBottom = false,
    disableTop = false,
  } = props;
  return (
    <FormWrapper disableBottom={disableBottom} disableTop={disableTop}>
      <FormControl
        component="fieldset"
        variant="standard"
        required={required}
        error={error}
      >
        <FormLabel>{checklistLabel}</FormLabel>
        <FormGroup aria-label="position" row>
          {checklist.map((checkItem: CheckboxProps) => {
            return (
              <FormCheckbox
                label={checkItem.label}
                labelPlacement={checkItem.labelPlacement}
                disabled={checkItem.disabled}
                name={checkItem.name}
                defaultChecked={checkItem.defaultChecked}
                checked={checkItem.checked}
                onChange={checkItem.onChange}
                size={checkItem.size}
                color={checkItem.color}
                icon={checkItem.icon}
                checkedIcon={checkItem.checkedIcon}
                sx={checkItem.sx}
              />
            );
          })}
        </FormGroup>
        <FormHelperText>{errorText}</FormHelperText>
      </FormControl>
    </FormWrapper>
  );
};

export default React.memo(FormCheckList);
