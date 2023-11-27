import React, { Fragment } from "react";

const InputField = (props: any) => {
  const {
    form,
    field,
    maxLength,
    placeholder,
    type,
    label,
    disabled,
    onChangeCustomize,
    onKeyDown,
    style,
    invalid,
    className,
    studentCode,
  } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  return (
    <Fragment>
      <label style={{ marginBottom: "5px" }} htmlFor={studentCode}>
        {props.lable}
      </label>
      <input
        {...field}
        style={style}
        className={`${className} border p-2`}
        onChange={onChangeCustomize || field.onChange}
        type={type}
        id={studentCode}
        maxLength={maxLength}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        invalid={invalid || (!!errors[name] && touched[name])}
        onKeyDown={onKeyDown}
      />
      {errors[name] && <div className="error">{errors[name]}</div>}
    </Fragment>
  );
};

InputField.defaultProps = {
  type: "text",
  tabIndex: "0",
  invalid: "false",
};

export default InputField;
