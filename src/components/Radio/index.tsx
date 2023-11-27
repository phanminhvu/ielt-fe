import { Field, FieldProps, FastField, FieldInputProps, FormikProps } from "formik";
import React from "react";
import { IconButton, InputAdornment, TextFieldProps } from "@mui/material";
import { Radio as RadioMui } from "@mui/material";

interface Props {
  form: FormikProps<any>;
  field: FieldInputProps<any>;
}

const Radio = (props: any) => {
  const { field, form, index, questionId, ...rest } = props;
  const { setFieldValue, values } = form;
  const { name, value, onChange } = field;
  const handleChange = (values: {}) => {
    // setFieldValue(name, "");
  };
  const handleClick = () => {
    setFieldValue(`answers[${index}].questionId`, questionId);
  };

  return (
    <div>
      <RadioMui size="small" onClick={handleClick} onChange={onChange} name={name} value={value} {...rest} />
    </div>
    // <R>index</div>
  );
};

export default Radio;
