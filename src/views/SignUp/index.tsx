//
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useGoogleLogin } from "@react-oauth/google";
import ImgApple from "assets/image/login/apple.svg";
import ImgEmail from "assets/image/login/email.svg";
import ImgFacebook from "assets/image/login/facebook.svg";
import ImgGoogle from "assets/image/login/google.svg";
import { SocialProvider } from "constants/constants";
import { RouteBase } from "constants/routeUrl";
import { useLogin } from "hooks/auth/useAuth";
import useSagaCreators from "hooks/useSagaCreators";
import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { GetAuthSelector } from "redux/selectors/auth";
import CardView from "views/Login/components/CardView";
import Footer from "views/Login/components/Footer";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

//
import ItemSocial from "views/Login/components/ItemSocial";
//
import Title from "views/Login/components/Title";
import socialServices from "services/socialServices";
import { authActions } from "redux/creators/modules/auth";
import { toast } from "react-toastify";
import { useGetLocation } from "provider/LocationProvider";
import SignUpEmail from "./component/SignUpEmail";
//
const SignUp = (props: any) => {
  const { dispatch } = useSagaCreators();
  const auth = GetAuthSelector();
  const { isLogin } = auth;
  const { initialPathName } = useGetLocation();

  const container = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  //
  const dataGoogle = {
    title: "Sign up with Google",
    img: ImgGoogle,
    bg: "#4285f4",
    color: "#fff",
  };
  const dataFacebook = {
    title: "Sign up with Facebook",
    img: ImgFacebook,
    bg: "#fff",
    color: "#5b5c61",
  };
  const dataApple = {
    title: "Sign up with Apple",
    img: ImgApple,
    bg: "#fff",
    color: "#5b5c61",
  };
  const dataEmail = {
    title: "Sign up with Email",
    img: ImgEmail,
    bg: "#fff",
    color: "#5b5c61",
  };
  //
  const content = {
    desc: "Already have an account?",
    title: "Login",
  };

  const loginSocial = async (res: any, provider: any) => {
    try {
      const body = {
        token: res,
        provider: provider,
      };
      const responseSocial = await socialServices.loginSocial(body);

      if (responseSocial?.data?.data?.data?.access_token) {
        dispatch(authActions.saveInfoUser, { token: responseSocial?.data?.data?.data?.access_token, userType: "user" });
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message, {
        autoClose: 3000,
      });
    }
  };

  const signUp = useGoogleLogin({
    flow: "implicit",
    onSuccess: (tokenResponse: any) => {
      loginSocial(tokenResponse.access_token, SocialProvider.GOOGLE);
    },
  });

  const handleLoginFacebook = async (res: any) => {
    loginSocial(res.accessToken, SocialProvider.FACEBOOK);
  };

  const showFB = () => {
    return (
      <FacebookLogin
        appId="794031728446764"
        autoLoad={false}
        fields="name,email,picture"
        scope="email"
        callback={handleLoginFacebook}
        icon="fa-facebook"
        render={(renderProps) => <ItemSocial data={dataFacebook} onClick={renderProps.onClick} />}
      />
    );
  };
  if (isLogin) {
    return <Redirect to={initialPathName} />;
  }
  return (
    <Box sx={container}>
      <SignUpEmail />
    </Box>
  );
};
export default SignUp;
