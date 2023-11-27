import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import { makeStyles } from "@mui/styles";
import logoLeft from "assets/image/logo/logo-left.jpg";
import logoRight from "assets/image/logo/logo-right.jpg";
import React from "react";
const useStyles = makeStyles((theme) => {
  return {
    container: {
      ...theme.custom?.flexBox.flexBetweenCenter,
      position: "fixed",
      top: 0,
      right: 0,
      left: 0,
      height: "90px",
      padding: "50px",
    },
    headerRight: {
      ...theme.custom?.flexBox.flexBetweenCenter,
      // width: "60%",
    },
  };
});
const HeaderNew = () => {
  //! State
  const classes = useStyles();

  //! Render
  return (
    <>
      <div className={classes.container}>
        <div className="">
          <img style={{ width: "250px" }} src={logoRight} alt="" />
        </div>
        <div className="">
          <img style={{ width: "150px" }} src={logoLeft} alt="" />
        </div>
      </div>
    </>
  );
};

export default HeaderNew;
