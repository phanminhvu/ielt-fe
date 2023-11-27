import React, { useEffect } from "react";
//
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
// ! type

interface Props {
  content?: React.ReactNode;
  width?: number;
  className?: string;
  styleAdd?: { height: string };
}

const CardExercise = ({ content, width, className, styleAdd }: Props) => {
  const card = {
    p: "24px 32px",
    overflowY: { xs: "hidden", lg: "scroll" },
    mb: { xs: "40px", lg: "0" },
    background: themeCssSx.backgroundExam.content,
    border: "1px solid #ccc",
    borderRadius: "6px",
    boxShadow: "0 0.0714em 0.214em rgb(0 0 0 / 25%)",
    height: { xs: "100%", lg: `${styleAdd?.height}` },
  };
  return (
    <Grid item xs={12} sm={12} md={12} lg={width}>
      <Card sx={{ ...card }} className={className}>
        {content}
      </Card>
    </Grid>
  );
};

export default CardExercise;
