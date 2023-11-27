import React from "react";
import { Box } from "@mui/material";
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
// !type
interface Props {
  children?: string;
  handleOpenModalHide?: () => void;
  addCss?: any;
}
const OptionButton = (props: Props) => {
  const { children, handleOpenModalHide, addCss } = props;

  const contianer = {
    ...themeCssSx.flexBox.flexJusAlign,
    backgroundColor: "#6aade4",
    padding: "4px 14px",
    borderRadius: "6px",
    fontSize: "14px",
    ...addCss,
  };
  return (
    <Box onClick={handleOpenModalHide} sx={contianer}>
      {children}
    </Box>
  );
};

export default OptionButton;
