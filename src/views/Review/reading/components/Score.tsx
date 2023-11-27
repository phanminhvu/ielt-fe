import React from "react";
import Box from "@mui/material/Box";
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
import Text from "components/Typography/index";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// ! type
interface Props {
  titleExam?: any;
  score?: number;
}
const scoreBox = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#e8eaed",
  fontSize: "14px",
  color: themeCssSx.color.title,
  height: "36px",
  mb: "20px",
  borderRadius: "6px",
};
const container = {
  mb: "30px",
};
const title = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: themeCssSx.color.title,
};
const titleText = {
  fontWeight: 700,
};
const Score = ({ titleExam, score }: Props) => {
  return (
    <Box sx={container}>
      <Box sx={scoreBox}>{`Score ${score}/9`}</Box>
      <Box sx={title}>
        <Text.DescSmall sx={titleText}>{titleExam}</Text.DescSmall>
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  );
};

export default Score;
