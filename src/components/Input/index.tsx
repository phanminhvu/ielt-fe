import styled from "@emotion/styled";
import { FormControl, FormHelperText } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";
import TextField from "@mui/material/TextField";
import { createStyles, makeStyles, withStyles } from "@mui/styles";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";

interface Props<T extends FieldValues> extends Omit<TextFieldProps, "name"> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  labelColor?: string;
  variant?: "standard" | "filled" | "outlined";
  width?: number;
  InputProps?: any;
  id?: string;
}

const ErrorText = styled(FormHelperText)`
  color: red !important;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiFormHelperText-root.Mui-error": {
      color: "blue !important",
    },
  },
}));

const helperTextStyles = makeStyles((theme) => ({
  root: {
    color: "black",
  },
  error: {
    "&.MuiFormHelperText-root.Mui-error": {
      color: "white",
    },
  },
}));

const inputStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "white",
    borderRadius: 4,
  },
}));

const InputCommon = <T extends FieldValues>(props: Props<T>) => {
  const { id, control, name, label, variant, required, labelColor, width, InputProps, ...rest } = props;
  const classes = useStyles();
  const helperTestClasses = helperTextStyles();

  return (
    <div style={{ width: width || "100%" }} className={classes.root}>
      <Controller
        render={({ field, fieldState: { error } }) => (
          <FormControl fullWidth>
            <TextField
              variant={variant}
              id={id}
              fullWidth
              error={Boolean(error)}
              helperText={error?.message && <ErrorText>{error?.message && error.message}</ErrorText>}
              FormHelperTextProps={{ classes: helperTestClasses }}
              hiddenLabel
              label={label}
              InputProps={InputProps}
              InputLabelProps={{ shrink: true }}
              // onChange={onChange}
              // ref={ref}
              {...field}
              {...rest}
            />
          </FormControl>
        )}
        name={name}
        control={control}
      />
    </div>
  );
};

export default InputCommon;
