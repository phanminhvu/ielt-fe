import React from "react";
import Box from "@mui/material/Box";
//
import ListIcon from "@mui/icons-material/List";
import ImageIcon from "@mui/icons-material/Image";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import { Stack } from "@mui/system";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import { themeCssSx } from "../../../../ThemeCssSx/ThemeCssSx";
const FooterExamResponsive = () => {
  const container = {
    background: "#fff",
    padding: "10px 0",
    position: "fixed",
    bottom: 0,
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.30) 0px 5px 15px",
    display: { xs: "block", lg: "none" },
  };
  const containerContent = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    margin: "0 auto",
  };
  const btn = {
    color: themeCssSx.color.desc.modal,
    fontSize: themeCssSx.fontSize.desc,
    fontWeight: 700,
  };
  const icon = {
    fontSize: "24px !important",
  };
  const btnNext = {
    background: "#333",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    color: "#fff",
    borderRadius: "12px",
  };
  return (
    <Box sx={container}>
      <Box sx={containerContent}>
        <Stack direction="row" spacing={{ xs: 0, md: 2 }} sx={{ flexWrap: "wrap" }}>
          <Button sx={btn} variant="text" startIcon={<ListIcon sx={icon} />}>
            Task 1
          </Button>
          <Button sx={btn} variant="text" startIcon={<ImageIcon sx={icon} />}>
            IMAGE
          </Button>
          <Button sx={btn} variant="text" startIcon={<StickyNote2Icon sx={icon} />}>
            TEXT
          </Button>
        </Stack>
        <Box sx={btnNext}>
          <KeyboardArrowRightIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default FooterExamResponsive;
