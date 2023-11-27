import React from "react";
//
import Box from "@mui/material/Box";
import Text from "components/Typography/index";
// ! type
interface Data {
  data: {
    title: string;
    desc: string;
    fontSize?: string;
    colorTitle?: string;
    colorDesc?: string;
  };
}

const TitleSection = ({ data }: Data) => {
  // ! State

  // ! Render
  return (
    <Box sx={{ textAlign: "center" }}>
      <Text.Title sx={{ pb: "5px", color: data.colorTitle, fontSize: data.fontSize }}>{data.title}</Text.Title>
      <Text.DescNormal sx={{ color: data.colorDesc, fontWeight: "medium" }}>{data.desc}</Text.DescNormal>
    </Box>
  );
};

export default TitleSection;
