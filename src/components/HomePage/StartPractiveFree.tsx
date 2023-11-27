import React from "react";
import { Link } from "react-router-dom";
//
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//
import Text from "components/Typography/index";
import ButtonCommon from "components/Button/ButtonCommon";

const StartPractiveFree = () => {
  const containerDad = {
    background: "#114AC6",
    p: "100px 0",
  };
  return (
    <Box sx={containerDad}>
      <div className="container">
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={9}>
            <Text.TitleIntroPage sx={{ color: "#fff" }}>Get your first score for free!</Text.TitleIntroPage>
            <Text.DescSmall sx={{ color: "#fff", fontSize: "12px" }}>
              Sign up to try free TestGlider graded tests. No payment needed.
            </Text.DescSmall>
          </Grid>
          <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            <Link to="/">
              <ButtonCommon.ButtonFullBg
                sx={{
                  background: "#fff",
                  color: "#114AC6",
                  mt: { xs: "30px", md: "0" },
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                }}
              >
                START TRIAL
              </ButtonCommon.ButtonFullBg>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default StartPractiveFree;
