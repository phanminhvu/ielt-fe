import React from "react";
//
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// ! type

interface Data {
  reverse?: any;
  left: any;
  right: any;
  bg?: {
    background: string;
  };
}

const CardStep = ({ reverse, right, left, bg }: Data) => {
  return (
    <Box sx={{ p: "100px 0", background: bg?.background }}>
      <div className="container">
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={8} lg={5} sx={{ pr: "50px", order: reverse ? 3 : 1 }}>
            {left}
          </Grid>
          <Grid
            item
            xs={12}
            md={10}
            lg={7}
            sx={{
              order: 2,
              ml: {
                xs: "",
                md: "120px",
                lg: "0",
              },
              marginTop: { xs: "30px", md: "50px", lg: "0" },
            }}
          >
            {right}
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default CardStep;
