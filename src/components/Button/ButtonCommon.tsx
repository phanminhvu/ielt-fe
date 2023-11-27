import React from "react";
import { TypographyProps } from "@mui/system";

//
import Button from "@mui/material/Button";
// !type
export interface Props extends TypographyProps {
  children: React.ReactNode;
  sx?: object;
  className?: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  onChange?: React.FormEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const ButtonFullBg = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <Button style={{ padding: "12px 16px" }} component="button" variant="contained" {...rest}>
      {props.children}
    </Button>
  );
};
const ButtonOutline = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <Button component="button" variant="outlined" {...rest}>
      {props.children}
    </Button>
  );
};
//
const ButtonNumber = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <Button component="button" variant="contained" {...rest}>
      {props.children}
    </Button>
  );
};
const ButtonCommon = {
  ButtonFullBg,
  ButtonOutline,
  ButtonNumber,
};
export default ButtonCommon;
