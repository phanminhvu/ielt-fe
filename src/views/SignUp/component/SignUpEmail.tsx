import { CheckBox } from "@mui/icons-material";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Box, Card, Typography } from "@mui/material";
import InputField from "components/CustomField/InputField";
import Text from "components/Typography";
import { FastField, Form, Formik } from "formik";
import React from "react";
import "./styles.scss";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ItemSocial from "views/Login/components/ItemSocial";
import ImgGoogle from "assets/image/login/google.svg";
import { Stack } from "@mui/system";
import * as yup from "yup";
import { SocialProvider, validateLine } from "constants/constants";
import Regexs from "constants/Regexs";
import { isEmpty } from "lodash";
import authServices from "services/authServices";
import { toast } from "react-toastify";
import OTP from "./OTP";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import socialServices from "services/socialServices";
import useSagaCreators from "hooks/useSagaCreators";
import { authActions } from "redux/creators/modules/auth";

const input = {
  width: "100%",
  borderRadius: "12px 12px 0px 0px",
  backgroundColor: "rgb(247, 249, 251)",
  padding: "8px 0px 12px 16px",
  border: "1px solid #e3f2fd",
  borderBottom: "1px solid rgb(138, 140, 145)",
  height: "3rem",
  marginTop: "30px",
};

const dataGoogle = {
  title: "Sign up with Google",
  img: ImgGoogle,
  bg: "#4285f4",
  color: "#fff",
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim(validateLine.trim)
    .required(validateLine.required)
    .strict(true)
    .matches(Regexs.email, "Email invalid")
    .default(""),
  password: yup
    .string()
    .trim(validateLine.trim)
    .strict(true)
    .min(8, "Password must be longer than 8 characters")
    .max(255, "Mật khẩu không được chứa quá 255 ký tự")
    .matches(Regexs.password, validateLine.regexPassword)
    .required(validateLine.required)
    .default(""),
  rePassword: yup
    .string()
    .trim(validateLine.trim)
    .strict(true)
    .oneOf([yup.ref("password"), null], "Your passwords do not match")
    .default(""),
});

const SignUpEmail = () => {
  const [loading, setLoading] = useState(false);

  const { dispatch } = useSagaCreators();
  const [openModal, setOpenModal] = useState({});
  const renderOrView = () => {
    return (
      <div className="lineContainer">
        <div className="line"></div>
        <Typography sx={{ margin: "0px 8px 0px 8px", color: "#B8BCC0", fontSize: "12px", fontWeight: "bold" }}>
          OR
        </Typography>
        <div className="line"></div>
      </div>
    );
  };

  const footer = () => {
    return (
      <Stack direction="row">
        <Box sx={{ fontSize: "12px", color: "#b8bcc0", textAlign: "center", fontWeight: 400, marginTop: "20px" }}>
          By signing up, you acknowledge that you have read and agree to TestGlider’s
          <a
            style={{ color: "#114ac6", margin: " 0 5px", fontWeight: 500 }}
            href="https://docs.google.com/document/d/e/2PACX-1vStVJ3W5A5nxHutiTiPtzRnWeSfFWm5nxeBvHX0bpJhlSl7TYxy0Zmx9ZGQAei-HYyTukwI23KZFOid/pub"
          >
            Terms of Use
          </a>
          and
          <a
            style={{ color: "#114ac6", margin: "5px", fontWeight: 500 }}
            href="https://docs.google.com/document/d/e/2PACX-1vRS-iSwxMz7FaD1YVxV9bZru3VX1_w1U-cPXSNqo4g2-NzSEBpBLJCxx4Fqaoi03b0HPN9b-9K3OTcf/pub"
          >
            Privacy Policy
          </a>
        </Box>
      </Stack>
    );
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    const body = {
      email: data.email,
      password: data.password,
    };
    await authServices
      .signUp(body)
      .then((res) => {
        if (res.data.statusCode === 200) {
          toast.success("Sign up success. Check mail to verify!");
          setOpenModal({ token: res?.data?.data?.access_token });
          setLoading(false);
        } else {
          toast.error("Sign up failed");
        }
      })
      .catch((err: any) =>
        toast.error(err?.response?.data?.message, {
          autoClose: 3000,
        })
      )
      .finally(() => setLoading(false));
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

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit} validationSchema={validationSchema}>
      {(propsFormik) => {
        return (
          <Form>
            <Box className="containerBox">
              <Card className="cardContainer">
                <Text.Sub20Bold className="textSignUp">Sign up</Text.Sub20Bold>
                <Typography className="content">
                  We'll send you a verification email. Remember to check your email to activate your account.
                </Typography>
                <FastField
                  style={input}
                  component={InputField}
                  placeholder="Please enter your email"
                  {...propsFormik.getFieldProps("email")}
                />
                <FastField
                  style={input}
                  component={InputField}
                  type="password"
                  placeholder="Please enter your password"
                  {...propsFormik.getFieldProps("password")}
                />
                {!propsFormik.errors.password && isEmpty(propsFormik.values.password) && (
                  <Typography className="textPassword">
                    Please include at least 1 alphabetical letter & 1 number
                  </Typography>
                )}
                <FastField
                  style={input}
                  component={InputField}
                  type="password"
                  placeholder="Please enter your password"
                  {...propsFormik.getFieldProps("rePassword")}
                />

                <Button className="buttonEmail" variant="contained" type="submit">
                  SEND EMAIL
                </Button>
                <FormGroup>
                  <FormControlLabel
                    sx={{ justifyContent: "center", marginTop: "16px" }}
                    control={
                      <Checkbox
                        icon={<CircleOutlinedIcon />}
                        checkedIcon={<CheckCircleIcon style={{ color: "#104ac6" }} />}
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 20,
                            borderRadius: 20,
                          },
                          padding: 0,
                        }}
                      />
                    }
                    label={<Typography className="textPassword">I want regular updates (Optional)</Typography>}
                  />
                </FormGroup>
                {renderOrView()}
                <Typography className="content" sx={{ textAlign: "center", marginBottom: "20px" }}>
                  Skip verification with Google
                </Typography>
                <ItemSocial data={dataGoogle} onClick={signUp} />
                {footer()}
              </Card>
              {!isEmpty(openModal) && <OTP openModal={openModal} onCloseModal={() => setOpenModal(false)} />}
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpEmail;
