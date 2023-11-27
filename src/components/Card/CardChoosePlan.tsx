import React from "react";
//
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
//
// ! type
interface Data {
  header: React.ReactNode;
  headerNoSale?: React.ReactNode;
  isShowSale?: boolean;
  desc: React.ReactNode;
  discounted?: React.ReactNode;
  footer?: React.ReactNode;

  className?: string;
}
import ButtonBuyNow from "components/Button/ButtonBuyNow";
const CardChoosePlan = ({ header, headerNoSale, desc, discounted, isShowSale, className, footer }: Data) => {
  // ! State

  // ! Function
  const card = {
    p: "25px 20px",
    position: "relative",
  };
  const cardChoosePlanItem = {
    m: { xs: "0", md: "0 15px", lg: "0 25px 0 25px" },
    mt: { xs: "50px", lg: "0" },
    maxWidth: "400px !important",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 15px",
    borderRadius: "16px",
  };
  // ! Render

  return (
    <Grid item className={className} xs={12} md={5.5} lg={3.6} sx={cardChoosePlanItem}>
      <Box sx={card}>
        <Box sx={{ minHeight: "150px" }}>{isShowSale ? header : headerNoSale}</Box>
        <Box sx={{ m: "16px 0" }}>
          <ButtonBuyNow>Buy now</ButtonBuyNow>
        </Box>
        <Box>{desc}</Box>
        <Box>{discounted}</Box>
      </Box>
      {footer}
    </Grid>
  );
};

export default CardChoosePlan;
