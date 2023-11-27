import { makeStyles } from "@mui/styles";
import logoBottom from "assets/image/logo/logo-duca.png";
const useStyles = makeStyles((theme) => {
  return {
    container: {
      ...theme.custom?.flexBox.flexBetweenCenter,
      position: "fixed",
      bottom: 0,
      right: 0,
      left: 0,
      height: "90px",
      padding: "100px 60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    headerRight: {
      ...theme.custom?.flexBox.flexBetweenCenter,
      // width: "60%",
    },
  };
});
const FooterNew = () => {
  //! State
  const classes = useStyles();

  //! Render
  return (
    <>
      <div className={classes.container}>
        <div className="">
          <img style={{ width: "125px", height: "60px" }} src={logoBottom} alt="" />
        </div>
      </div>
    </>
  );
};

export default FooterNew;
