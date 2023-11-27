import React, { useState, useEffect } from "react";
//
import { ieltsApi } from "api/ieltsResults";
//
import Text from "components/Typography/index";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

//
import ItemQuestion from "./CardItem";
import TitleExam from "components/StepsWorkExercise/TitleExam/TitleExam";
// !type

const Step1 = () => {
  const [data, setData] = useState<any>([]);
  const fetch = async () => {
    const response = await ieltsApi.getIeltReadingResult();
    setData(response.data);
  };
  useEffect(() => {
    fetch();
  }, []);
  const dataNumber = {
    from: 1,
    to: 3,
  };
  return (
    <Box>
      <TitleExam />
      <Stack direction="column" spacing={1} sx={{ pb: "100px" }}>
        {/* {data?.part1?.map((item: any) => {
          return <ItemQuestion key={item.id} question={item} />;
        })} */}
      </Stack>
    </Box>
  );
};

export default Step1;
