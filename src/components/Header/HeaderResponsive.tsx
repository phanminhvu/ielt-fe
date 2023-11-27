import React from "react";
//
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
// !type
interface Props {
  handleShowNavResponsive: () => void;
}
const HeaderResponsive = ({ handleShowNavResponsive }: Props) => {
  const container = {
    borderBottom: "1px solid #ccc",
    display: { xs: "flex", lg: "none" },
    alignItems: "center",
    padding: "0 28px",
    height: "80px",
  };
  const icon = {
    fontSize: "40px",
    cursor: "pointer",
  };
  const onHandleShowNavResponsive = () => {
    handleShowNavResponsive();
  };
  return (
    <Box sx={container}>
      <MenuIcon onClick={onHandleShowNavResponsive} sx={icon} />
    </Box>
  );
};

export default HeaderResponsive;
