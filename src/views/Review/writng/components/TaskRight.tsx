import React from "react";
//
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ImageIcon from "@mui/icons-material/Image";
//
import Text from "components/Typography/index";
import Button from "@mui/material/Button";
import { themeCssSx } from "../../../../ThemeCssSx/ThemeCssSx";
// ! type
interface Props {
  questionNumber?: number;
  handleOpen?: any;
}
const container = {
  padding: "20px 32px 44px 32px",
  border: "1px solid #ccc",
  borderRadius: "16px",
};
const title = {
  color: themeCssSx.color.title,
  fontWeight: 700,
};
const containerTitle = {
  justifyContent: "space-between",
  alignItems: "center",
  mb: "20px",
};
const titleRight = {
  color: themeCssSx.color.desc.modal,
};
const TaskRight = ({ questionNumber, handleOpen }: Props) => {
  return (
    <Box sx={container}>
      <Stack direction="row" sx={containerTitle}>
        <Text.Desc16 sx={title}>Task {questionNumber}</Text.Desc16>
        <Button onClick={() => handleOpen()} sx={titleRight} endIcon={<ImageIcon />}>
          TASK IMAGE
        </Button>
      </Stack>
      <Text.Desc16 sx={{ mb: "25px" }}>
        The chart below shows the current percentages of world land cover by type.
      </Text.Desc16>
      <Text.Desc16>
        Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
      </Text.Desc16>
    </Box>
  );
};

export default TaskRight;
