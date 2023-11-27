import React from "react";
//
import Button from "@mui/material/Button";
import { themeCssSx } from "../../../ThemeCssSx/ThemeCssSx";
import Box from "@mui/material/Box";
interface Props {
  children?: React.ReactNode;
}

const btn = {
  color: themeCssSx.color.desc.modal,
  fontSize: themeCssSx.fontSize.desc,
  fontWeight: 700,
  cursor: "pointer",
  padding: "10px 0",
  "&:hover": {
    background: "none",
  },
};
const ButtonRoute = (props: Props) => {
  return <Box sx={btn}>{props.children}</Box>;
};

export default ButtonRoute;
