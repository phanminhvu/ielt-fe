import React from "react";
//
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//
import ButtonNumberPage from "components/Button/ButtonNumberPage";
// ! type
interface Data {
  part: string;
  listNumber: {
    id: number;
    question?: string;
    choosea?: string;
    chooseb?: string;
    choosec?: string;
    choosed?: string;
    typeAnswer?: string;
  }[];
}

const CardNumberPage = ({ part, listNumber }: Data) => {
  return (
    <Stack direction="row" spacing={3} sx={{ alignItems: "center", mr: "20px", mb: "10px" }}>
      <Typography sx={{ fontWeight: "bold" }}>{part}</Typography>
      <Box sx={{ display: "flex" }}>
        {listNumber?.map((item) => {
          return <ButtonNumberPage key={item.id}>{item.id}</ButtonNumberPage>;
        })}
      </Box>
    </Stack>
  );
};

export default CardNumberPage;
