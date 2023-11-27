import React from "react";
import { Box } from "@mui/system";
import Text from "../../../components/Typography/index";
import ImgHelp from "assets/image/exam/test-help/help-exam.png";
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
// !type
interface Props {
  style?: object;
  handleOpenModalHelp?: () => void;
}
const ButtonHelp = (props: Props) => {
  const { style, handleOpenModalHelp } = props;
  const contianer = {
    ...themeCssSx.flexBox.flexJusAlign,
    backgroundColor: "#6aade4",
    padding: "4px 14px",
    borderRadius: "6px",
    ...style,
  };
  return (
    <Box sx={contianer} onClick={handleOpenModalHelp}>
      <Text.DescSmall sx={{ mr: "5px" }}>Help</Text.DescSmall>
      <img src={ImgHelp} alt="" />
    </Box>
  );
};

export default ButtonHelp;
