import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import React, { useCallback, useMemo } from "react";
import { FieldValues, useController } from "react-hook-form";
import FormWrapper from "../wrapper/wrapper.component";
import CheckListProps from "./checklist.types";

const FormCheckList = (props: CheckListProps<FieldValues>) => {
  const {
    name,
    checklistLabel,
    checklist,
    fullWidth = true,
    required = false,
    disableBottom = false,
    disableTop = false,
    control,
    helperText: helperTextValue = " ",
    ...rest
  } = props;

  const {
    field: { value = [], onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const helperText = useMemo(
    () => (error ? error.message : helperTextValue),
    [helperTextValue, error]
  );

  // handling selection manually
  const handleSelect = useCallback(
    (item: any, checked: boolean) => {
      let newSelection = [...value];
      if (checked) {
        newSelection.push(item);
      } else {
        newSelection = value.filter((i: any) => i !== item);
      }

      onChange(newSelection);

      if (typeof rest.onChange === "function") {
        rest.onChange({} as any, newSelection);
      }
    },
    // eslint-disable-next-line
    [value, rest.onChange]
  );

  return (
    <FormWrapper
      disableBottom={disableBottom}
      disableTop={disableTop}
      sx={{ width: "max-content" }}
    >
      <FormControl
        component="fieldset"
        variant="standard"
        required={required}
        fullWidth={fullWidth}
        error={!!error}
      >
        <FormLabel>{checklistLabel}</FormLabel>
        <FormGroup aria-label="position" row>
          {checklist.map((option: any) => {
            const checked = value.includes(option.value);
            return (
              <FormControlLabel
                label={option.label}
                labelPlacement={option.labelPlacement}
                disabled={option.disabled}
                key={option.value}
                control={
                  <Checkbox
                    value={option.value}
                    checked={checked}
                    onChange={() => {
                      handleSelect(option.value, !checked);
                    }}
                  />
                }
              />
            );
          })}
        </FormGroup>
        <FormHelperText error={!!error}>{helperText}</FormHelperText>
      </FormControl>
    </FormWrapper>
  );
};

export default React.memo(FormCheckList);
