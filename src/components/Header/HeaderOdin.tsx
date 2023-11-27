import React from "react";
import { makeStyles } from "@mui/styles";
import logoOdin from "assets/image/logo/odin-logo-line.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
const useStyles = makeStyles((theme) => {
  return {
    container: {
      ...theme.custom?.flexBox.flexBetweenCenter,
      position: "fixed",
      top: 0,
      right: 0,
      left: 0,
      height: "90px",
      padding: "20px 20px",
      background: "#1b5e20",
    },
    headerRight: {
      ...theme.custom?.flexBox.flexBetweenCenter,
      // width: "60%",
    },
    homePage: {
      display: "flex",
      listStyleType: "none",
      fontWeight: 700,
    },
    contact: {
      display: "flex",
    },
    pageLink: {
      padding: "0 12px",
      color: theme.palette.primary.contrastText,
      position: "relative",
      "&::before": {
        position: "absolute",
        left: 0,
        height: "20px",
        width: "1px",
        display: "block",
        background: "#fff",
      },
    },
    contactItem: {
      color: theme.palette.primary.contrastText,
      fontSize: "14px",
      fontWeight: 700,
      padding: "0 10px",
      ...theme.custom?.flexBox.flexCenterCenter,
    },
  };
});
const HeaderOdin = () => {
  //! State
  const classes = useStyles();

  //! Render
  return (
    <>
      <div className={classes.container}>
        <div className="">
          <img style={{ width: "250px" }} src={logoOdin} alt="" />
        </div>
        <div className={classes.headerRight}>
          <ul className={classes.homePage}>
            <li>
              <a className={classes.pageLink} href="">
                Giới thiệu
              </a>
            </li>
            <li>
              <a className={classes.pageLink} href="">
                Các khóa học
              </a>
            </li>
            <li>
              <a className={classes.pageLink} href="">
                Đăng kí
              </a>
            </li>
            <li>
              <a className={classes.pageLink} href="">
                Cơ sở
              </a>
            </li>
            <li>
              <a className={classes.pageLink} href="">
                Tin tức
              </a>
            </li>
            <li>
              <a className={classes.pageLink} href="">
                Tuyển dụng
              </a>
            </li>
          </ul>
          <div className={classes.contact}>
            <div className={classes.contactItem}>
              <AccessTimeIcon sx={{ mr: "5px" }} />
              <p>08:00 - 21:30</p>
            </div>
            <div className={classes.contactItem}>
              <PhoneIcon />
              <p>1900 588803</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOdin;
