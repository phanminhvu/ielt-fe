import React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Text from "components/Typography/index";
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
//
const container = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mb: "20px",
};
const contianerRight = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
};
const signBoxTrue = {
  width: "16px",
  height: "16px",
  borderRadius: "2px",
  background: themeCssSx.colorAnswer.correctAnswer,
};
const signBoxYour = {
  width: "16px",
  height: "16px",
  borderRadius: "2px",
  background: themeCssSx.colorAnswer.inCorrectAnswer,
};
const yourAnswer = {
  float: "right",
  mt: "5px",
  display: "flex",
  alignItems: "center",
};
const yourAnswerBox = {
  width: "50px",
  height: "12px",
  background: themeCssSx.colorAnswer.yourAnswer,
  border: "1px solid #ccc",
};
const Sign = () => {
  return (
    <Box sx={container}>
      <Box>Identifying Information</Box>
      <Box>
        <Stack sx={contianerRight} direction="row" spacing={2}>
          <Stack direction="row" spacing={1}>
            <Box sx={signBoxTrue}></Box>
            <Text.DescSmall>Correct Answer</Text.DescSmall>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Box sx={signBoxYour}></Box>
            <Text.DescSmall>Incorrect Answer</Text.DescSmall>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1} sx={yourAnswer}>
          <Box sx={yourAnswerBox}></Box>
          <Text.DescSmall>Your Selection</Text.DescSmall>
        </Stack>
      </Box>
    </Box>
  );
};

export default Sign;
