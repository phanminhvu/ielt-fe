import React, { useState, useEffect } from "react";
//
import { ieltsApi } from "api/ieltsResults";
//
import Text from "components/Typography/index";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

//
import ItemQuestion from "../Step1/CardItem";
import TitleExam from "components/StepsWorkExercise/TitleExam/TitleExam";
// !type

const Step3 = () => {
  const [data, setData] = useState<any>([]);
  const fetch = async () => {
    const response = await ieltsApi.getIeltReadingResult();
    setData(response.data);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <Box>
      <TitleExam />
      <Stack direction="column" spacing={1} sx={{ pb: "100px" }}></Stack>
    </Box>
  );
};

export default Step3;
