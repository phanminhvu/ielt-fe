import React from "react";
//
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//
import CardInformationData from "components/Card/CardInformationData";
const InformationData = () => {
  const points = {
    stats: "+12.4",
    type: "POINTS",
    content: "TestGlider users improved 12.4 points on average in 1 month.",
  };
  const users = {
    stats: "2,500,410",
    type: "USERS",
    content: "As of July 2022, 2,500,410 users from 202 countries are using TestGlider.",
  };
  const questions = {
    stats: "900+",
    type: "QUESTIONS",
    content: "900+ questions of TOEFL practice material to improve your score.",
  };
  return (
    <Grid container sx={{ p: "100px 0", justifyContent: "space-around" }}>
      <CardInformationData data={points} />
      <CardInformationData data={users} />
      <CardInformationData data={questions} />
    </Grid>
  );
};

export default InformationData;
