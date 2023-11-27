import React, { useState } from "react";
//
import Box from "@mui/material/Box";
import TitleSection from "components/TitleSection/TitleSection";
import Card from "components/HomePage/ChoosePlan/Card";
//
import Text from "components/Typography/index";
import { Link } from "react-router-dom";

//
const ChoosePlan = () => {
  // ! State

  //
  const titleSection = {
    title: "Choose the best plan for you",
    desc: "Join the 2,500,000+ students currently studying with TestGlider",
  };
  // ! Render

  return (
    <Box sx={{ p: "100px 0" }}>
      <TitleSection data={titleSection} />
      <Card />

      <Link to="/">
        <Box sx={{ width: "fit-content", margin: "0 auto" }}>
          <Text.Sub20Bold
            className="learn-feature"
            sx={{
              color: "#114AC6",
              marginTop: "40px !important",
              position: "relative",
            }}
          >
            Learn more about our features
          </Text.Sub20Bold>
          <Box sx={{ height: "2px", background: "#114AC6", mt: "-5px" }}></Box>
        </Box>
      </Link>
    </Box>
  );
};

export default ChoosePlan;
