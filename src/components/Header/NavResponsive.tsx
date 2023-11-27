import React from "react";
import Box from "@mui/material/Box";
//
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Typography from "@mui/material/Typography";
import ButtonRoute from "./Components/ButtonRoute";
// !type
interface Props {
  handleCloseNavResponsive: any;
}

const NavResponsive = ({ handleCloseNavResponsive }: Props) => {
  const container = {
    background: "rgba(0,0,0,0.2)",
    position: "fixed",
    top: 0,
    height: "100vh",
    width: "100vw",
    zIndex: 999,
  };
  const containerContent = {
    background: "#fff",
    width: "280px",
    height: "100%",
    padding: "50px 24px",
  };

  const contentHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: "50px",
    cursor: "pointer",
  };
  const examItem = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: "30px",
    cursor: "pointer",
  };
  const line = {
    height: "1px",
    width: "100%",
    background: "#ccc",
    mb: "20px",
  };
  const onHandleCloseNavResponsive = () => {
    handleCloseNavResponsive();
  };
  const stopPropagation = (event: any) => {
    event.stopPropagation();
  };
  return (
    <Box onClick={onHandleCloseNavResponsive} sx={container}>
      <Box onClick={stopPropagation} sx={containerContent}>
        <Box sx={contentHeader}>
          <ArrowBackIosIcon />
          <Typography variant="body1" color="initial">
            LOGO
          </Typography>
        </Box>
        <Box sx={examItem}>
          <Typography variant="body1" color="initial">
            ILETS
          </Typography>
          <KeyboardArrowDownIcon />
        </Box>
        <Box sx={examItem}>
          <Typography variant="body1" color="initial">
            TOEFL
          </Typography>
          <KeyboardArrowDownIcon />
        </Box>
        <Box sx={line}></Box>
        <ButtonRoute>Pricing</ButtonRoute>
        <ButtonRoute>Community</ButtonRoute>
        <ButtonRoute>User Reviews</ButtonRoute>
      </Box>
    </Box>
  );
};

export default NavResponsive;
