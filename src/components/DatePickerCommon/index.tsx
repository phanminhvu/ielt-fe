import styled from "@emotion/styled";
import { FormHelperText } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { Dispatch, SetStateAction } from "react";
import { Control, Controller, FieldPath, FieldValues, useForm } from "react-hook-form";

interface Props<T extends FieldValues> extends Omit<TextFieldProps | any, "name"> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  labelColor?: string;
  variant?: "standard" | "filled" | "outlined";
  width?: number;
  value?: Date | null;
  onChange?: (value: any) => void;
}

const ErrorText = styled(FormHelperText)`
  color: red;
  margin-left: 0;
`;
const DatePickerCommon = <T extends FieldValues>(props: Props<T>) => {
  const { control, name, label, variant, required, labelColor, width, disabled, onChange, ...rest } = props;
  const [value, setValue] = React.useState<Date | null>(new Date());
  const errors = control?._formState?.errors?.[name];
  return (
    <div className="mt-5">
      <Controller
        render={({ fieldState: { error } }) => (
          <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                renderInput={(params) => {
                  return <TextField {...params} label={label} fullWidth variant={variant} />;
                }}
                openTo="year"
                views={["year", "month", "day"]}
                value={value}
                onChange={(newValue: any) => {
                  onChange && onChange(newValue);
                  setValue(newValue);
                }}
                disabled={disabled}
              />
            </LocalizationProvider>
            {error?.message && <ErrorText>{error?.message && error.message}</ErrorText>}
          </>
        )}
        name={name}
        control={control}
      />
    </div>
  );
};

export default DatePickerCommon;
