import React from "react";
import { Link } from "react-router-dom";
//
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
//
import Text from "components/Typography/index";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer: React.FC = (props) => {
  const footer = {
    background: "#0B2283",
    p: "80px 0",
  };
  const font12 = {
    fontSize: "12px",
  };
  const introductionItem1 = {
    display: "flex",
    flexDirection: "column",
    marginLeft: { xs: "0", lg: "auto" },
    width: { xs: "100%", lg: "65%" },
  };
  const introductionItem = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    width: { xs: "100%", md: "65%", lg: "65%" },
  };
  const introductionItem3 = {
    display: "flex",
    flexDirection: "column",
    marginLeft: { xs: "auto", lg: "auto" },
    width: { xs: "100%", md: "42%", lg: "65%" },
  };
  return (
    <Box sx={footer} className="footer">
      <div className="container">
        <Grid container sx={{ mb: { xs: "80px", lg: "0" } }}>
          <Grid item xs={12} md={0} lg={6}></Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grid container>
              <Grid item xs={4} md={4}>
                <Box sx={introductionItem1}>
                  <Text.DescSmallCard sx={{ color: "#E4EDFE", fontWeight: "bold" }}>Product</Text.DescSmallCard>
                  <Link to="/">
                    <Text.Desc14medium sx={{ color: "#D6E3FE", pt: "16px" }}>Practice</Text.Desc14medium>
                  </Link>
                  <Link to="/">
                    <Text.Desc14medium sx={{ color: "#D6E3FE", pt: "16px" }}>Scores & Review</Text.Desc14medium>
                  </Link>
                  <Link to="/">
                    <Text.Desc14medium sx={{ color: "#D6E3FE", pt: "16px" }}>Analysis</Text.Desc14medium>
                  </Link>
                  <Link to="/">
                    <Text.Desc14medium sx={{ color: "#D6E3FE", pt: "16px" }}>Pricing</Text.Desc14medium>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={4} md={4}>
                <Box sx={introductionItem}>
                  <Text.DescSmallCard sx={{ color: "#E4EDFE", fontWeight: "bold" }}>Company</Text.DescSmallCard>
                  <Link to="/">
                    <Text.Desc14medium sx={{ color: "#D6E3FE", pt: "16px" }}>About us</Text.Desc14medium>
                  </Link>
                  <Link to="/">
                    <Text.Desc14medium sx={{ color: "#D6E3FE", pt: "16px" }}>FAQ</Text.Desc14medium>
                  </Link>
                  <Link to="/">
                    <Text.Desc14medium sx={{ color: "#D6E3FE", pt: "16px" }}>Contact us</Text.Desc14medium>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={4} md={4}>
                <Box sx={introductionItem3}>
                  <Text.DescSmallCard sx={{ color: "#E4EDFE", fontWeight: "bold" }}>Follow Us</Text.DescSmallCard>
                  <a href="">
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", pt: "16px" }}>
                      <FacebookIcon sx={{ color: "#D6E3FE" }} />
                      <Text.Desc14medium sx={{ color: "#D6E3FE" }}>FAQ</Text.Desc14medium>
                    </Stack>
                  </a>
                  <a href="">
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", pt: "16px" }}>
                      <YouTubeIcon sx={{ color: "#D6E3FE" }} />
                      <Text.Desc14medium sx={{ color: "#D6E3FE" }}>YouTube</Text.Desc14medium>
                    </Stack>
                  </a>
                  <a href="">
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", pt: "16px" }}>
                      <InstagramIcon sx={{ color: "#D6E3FE" }} />
                      <Text.Desc14medium sx={{ color: "#D6E3FE" }}>Instagram</Text.Desc14medium>
                    </Stack>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <Text.Desc16 sx={{ color: "#fff", fontWeight: "bold", pb: "20px" }}>Databank Inc.</Text.Desc16>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <a href="">
              <Text.DescSmall sx={{ color: "#F7F9FB" }}>Terms of Use</Text.DescSmall>
            </a>
            <Box sx={{ width: "1px", height: "25px", background: "#1565c0", opacity: "0.5" }}></Box>
            <a href="">
              <Text.DescSmall sx={{ color: "#F7F9FB" }}>Privacy Policy</Text.DescSmall>
            </a>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: "15px", mb: "32px", display: { xs: "block", md: "flex" } }}>
            <Box
              sx={{
                color: "#E8EAED",
                width: { xs: "100%", sm: "100%", md: "50%", lg: "65%", fontSize: "12px", lineHeight: "1.8" },
                mb: { xs: "20px", md: "0" },
              }}
            >
              <Text.DescSmall sx={{ ...font12, color: "#0B2283" }}>s</Text.DescSmall>
              <Text.DescSmall sx={font12}>All trademarks are the property of their respective owners.</Text.DescSmall>
              <Text.DescSmall sx={font12}>
                TOEFL® is a registered trademark of Educational Testing Service (ETS). This product is not endorsed or
                approved by ETS.
              </Text.DescSmall>
              <Text.DescSmall sx={font12}>
                IELTS™ is a registered trademark of University of Cambridge ESOL, the British Council, and IDP Education
                Australia.
              </Text.DescSmall>
            </Box>
            <Box
              sx={{
                color: "#E8EAED",
                width: { xs: "100%", sm: "100%", md: "50%", lg: "35%", lineHeight: "1.8" },
                textAlign: { xs: "left", md: "right" },
                ml: { xs: "0 !important", md: "16px" },
              }}
            >
              <Text.DescSmall sx={font12}>Business Registration Number 725-81-01484</Text.DescSmall>
              <Text.DescSmall sx={font12}>Online Merchant Registration Number 2022-서울서초-0108</Text.DescSmall>
              <Text.DescSmall sx={font12}>398, Seocho-daero, Seocho-gu, Seoul, South Korea</Text.DescSmall>
              <Text.DescSmall sx={font12}>CEO Dahoon Song</Text.DescSmall>
            </Box>
          </Stack>
          <Box sx={{ width: "100%", height: "1px", background: "#E4EDFE", mb: "12px" }}></Box>
        </Box>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Text.DescSmall sx={{ color: "#C1D5FF", textAlign: { xs: "center", lg: "unset" } }}>
              © 2021. Databank Inc. All rights reserved. Customer support: support@data-bank.ai
            </Text.DescSmall>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: { xs: "center", md: "flex-end" }, mt: { xs: "20px", md: "0" } }}
            >
              <Text.DescSmall sx={{ color: "#C1D5FF", cursor: "pointer" }}>English</Text.DescSmall>
              <Box sx={{ width: "1px", height: "20px", background: "#1565c0", opacity: "0.5" }}></Box>
              <Text.DescSmall sx={{ color: "#C1D5FF", cursor: "pointer" }}>한국어</Text.DescSmall>
              <Box sx={{ width: "1px", height: "20px", background: "#1565c0", opacity: "0.5" }}></Box>
              <Text.DescSmall sx={{ color: "#C1D5FF", cursor: "pointer" }}>Español</Text.DescSmall>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Footer;
