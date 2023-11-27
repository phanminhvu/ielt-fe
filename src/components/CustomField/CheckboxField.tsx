import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { ChangeEvent } from "react";
interface Checkbox {
  value?: string;
  label?: string;
  checked?: boolean;
  handleChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  disabled?: boolean;
}

const CheckboxField = (props: Checkbox) => {
  const { label, value, checked, handleChange, disabled } = props;
  return (
    <FormControlLabel
      label={label}
      control={<Checkbox value={value} checked={checked} onChange={handleChange} disabled={disabled} />}
    />
  );
};
export default CheckboxField;
