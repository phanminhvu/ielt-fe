import React from "react";
import Bg from "assets/image/speaking-exam/IST_icon_deactive.svg";
import { themeCssSx } from "../../../../ThemeCssSx/ThemeCssSx";
import RecordExam from "./RecordExam";
import Box from "@mui/material/Box";
import Text from "components/Typography/index";
const CardRight = () => {
  const contianer = {
    ...themeCssSx.flexBox.flexColCenter,
    height: "100%",
    justifyContent: "center",
  };
  const textLoading = {
    color: "red",
    mb: "20px",
  };
  return (
    <Box sx={contianer}>
      <Text.Sub20Bold sx={textLoading}>Recording...</Text.Sub20Bold>
      <div>
        <img src={Bg} alt="" />
      </div>
      <RecordExam />
    </Box>
  );
};

export default CardRight;
