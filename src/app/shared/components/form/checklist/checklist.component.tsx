import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import FormWrapper from "../wrapper/wrapper.component";
import CheckListProps from "./checklist.types";

const FormCheckList = (props: CheckListProps) => {
  const {
    name,
    checklistLabel,
    checklist,
    fullWidth = true,
    required = false,
    disableBottom = false,
    disableTop = false,
    control,
    setValue,
    trigger,
    ...rest
  } = props;

  const [selectedItems, setSelectedItems] = useState<any>([]);

  // handling selection manually
  const handleSelect = (value: any) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item: any) => item !== value);
      setSelectedItems(remaining);
    } else {
      setSelectedItems((previtems: any) => [...previtems, value]);
    }
  };

  // we are setting form value manually here
  useEffect(() => {
    setValue && setValue(name, selectedItems);
  }, [selectedItems, control]);

  return (
    <FormWrapper
      disableBottom={disableBottom}
      disableTop={disableTop}
      sx={{ width: "max-content" }}
    >
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => {
          return (
            <FormControl
              component="fieldset"
              variant="standard"
              required={required}
              fullWidth={fullWidth}
              error={name in formState?.errors ? true : false}
            >
              <FormLabel>{checklistLabel}</FormLabel>
              <FormGroup aria-label="position" row>
                {checklist.map((option: any) => {
                  return (
                    <FormControlLabel
                      label={option.label}
                      labelPlacement={option.labelPlacement}
                      disabled={option.disabled}
                      key={option.value}
                      control={
                        <Controller
                          name={name}
                          control={control}
                          render={({ field, fieldState, formState }) => {
                            return (
                              <Checkbox
                                {...field}
                                checked={selectedItems.includes(option.value)}
                                onChange={() => {
                                  handleSelect(option.value);
                                  // trigger();
                                }}
                                value={field.value}
                              />
                            );
                          }}
                        />
                      }
                    />
                  );
                })}
              </FormGroup>
              <FormHelperText error={name in formState?.errors ? true : false}>
                {name in formState?.errors
                  ? `${fieldState.error?.message + " "}`
                  : null}
              </FormHelperText>
            </FormControl>
          );
        }}
      />
    </FormWrapper>
  );
};

export default React.memo(FormCheckList);
