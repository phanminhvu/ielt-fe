import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
const Header = () => {
  const header = {
    height: "64px",
    background: "#36373b",
    padding: "0 28px",
    display: "flex",
    alignItems: "center",
  };
  const btn = {
    fontSize: "16px",
    fontWeight: 700,
    letterSpacing: "2px",
    border: "1px solid #fff",
    padding: "5px 30px",
    color: "#fff",
  };
  const history = useHistory();
  const goback = () => {
    history.push("/ielts/scores");
  };
  return (
    <Box sx={header}>
      <Button onClick={goback} variant="text" sx={btn}>
        Exit
      </Button>
    </Box>
  );
};

export default Header;
