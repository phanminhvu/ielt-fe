import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { makeStyles } from "@mui/styles";

import { RouteBase } from "constants/routeUrl";
import { useGetLocation } from "provider/LocationProvider";
import { Redirect } from "react-router-dom";
import { GetAuthSelector } from "redux/selectors";
import cacheService from "services/cacheService";
import HeaderExam from "../Ielts/Header/HeaderExam";
import CardView from "./components/CardView";
import FormLogin from "./components/FormLogin";
import Title from "./components/Title";

//
import bgLogin from "assets/image/login/bg-login.jpg";
import FooterNew from "../../components/Footer/FooterNew";
import HeaderNew from "../../components/Header/HeaderNew";
import HeaderOdin from "../../components/Header/HeaderOdin";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: "100vw",
      height: "100vh",
      ...theme.custom?.flexBox.flexCenterCenter,
      // background: `url(${bgLogin})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    footer: {
      ...theme.custom?.flexBox.flexCenterCenter,
      position: "fixed",
      bottom: 0,
      right: 0,
      left: 0,
      height: "140px",
      p: "20px 20px",
    },
  };
});
const LoginPage = () => {
  // ! State
  const classes = useStyles();
  const auth = GetAuthSelector();
  const location = useGetLocation();
  const { isLogin } = auth;

  if (isLogin) {
    const dataCache = cacheService.getDataCache();
    const testCode = localStorage.getItem("testCode");
    const { skill } = dataCache;
    if (skill === "READING") {
      return <Redirect to={RouteBase.IeltsReading} />;
    }
    return <Redirect to={RouteBase.IeltsListening} />;
  }

  //! Render
  return (
    <Box className={classes.container}>
      <HeaderNew />
      <CardView>
        <Title>Login to exam</Title>
        <Stack direction="column" spacing={2} sx={{ mb: "16px" }}>
          <FormLogin />
        </Stack>
      </CardView>
      <FooterNew />
    </Box>
  );
};

export default LoginPage;
