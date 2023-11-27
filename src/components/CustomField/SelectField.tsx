import styled from "@emotion/styled";
import { Autocomplete, FormControl, FormHelperText, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Control, Controller, FieldPath, FieldValues, SetFieldValue } from "react-hook-form";

interface IitemSelect {
  label: string;
  value: string | number | boolean;
}

interface Props<T extends FieldValues> {
  control: Control<T>;
  setValue: SetFieldValue<T>;
  name: FieldPath<T>;
  label?: string;
  labelColor?: string;
  variant?: "standard" | "filled" | "outlined";
  required?: boolean;
  onChangeExtra?: (data: IitemSelect | null) => void;
  options: IitemSelect[];
  style?: any;
  disabled?: boolean;
}

const ErrorText = styled(FormHelperText)`
  color: red;
  margin-left: 0;
`;

const SelectField = <T extends FieldValues>(props: Props<T>) => {
  const {
    control,
    setValue,
    name,
    label,
    required,
    variant,
    labelColor,
    options,
    onChangeExtra,
    style,
    disabled,
    ...res
  } = props;

  return (
    <Controller
      render={({ field, fieldState: { error } }) => {
        return (
          <FormControl fullWidth>
            <Autocomplete
              value={options.find((item) => item.value === field.value) || { label: "", value: "" }}
              disablePortal
              id="combo-box-demo"
              onChange={(e, item) => {
                setValue(field?.name, item?.value);
                onChangeExtra && onChangeExtra(item);
              }}
              renderInput={(params) => {
                return <TextField {...params} label={label} fullWidth variant={variant} />;
              }}
              options={options}
              disableClearable={!field?.value}
              style={style}
              disabled={disabled}
              {...res}
            />
            {error?.message && <ErrorText>{error?.message && error.message}</ErrorText>}
          </FormControl>
        );
      }}
      name={name}
      control={control}
    />
  );
};

export default SelectField;
