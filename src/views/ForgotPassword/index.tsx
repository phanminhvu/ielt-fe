import { Box, Button, Card, Typography } from "@mui/material";
import InputField from "components/CustomField/InputField";
import Text from "components/Typography";
import { FastField, Form, Formik } from "formik";
import "./styles.scss";
import * as yup from "yup";
import { validateLine } from "constants/constants";
import Regexs from "constants/Regexs";
import authServices from "services/authServices";
import { useState } from "react";
import OTP from "./component/OTP";
import { toast } from "react-toastify";
import { isEmpty } from "lodash";

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

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim(validateLine.trim)
    .required(validateLine.required)
    .strict(true)
    .matches(Regexs.email, "Email invalid")
    .default(""),
});

const ForgotPassword = () => {
  const [openModal, setOpenModal] = useState({});
  const onSubmit = async (values: any) => {
    const body = {
      email: values.email,
    };
    try {
      await authServices.forgotPassword(body).then((res) => {
        if (res?.data?.statusCode === 200) {
          toast.success("Check mail to change password");
          setOpenModal({ email: values?.email });
        }
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.message, {
        autoClose: 3000,
      });
    }
  };
  return (
    <Formik initialValues={{ email: "" }} onSubmit={onSubmit} validationSchema={validationSchema}>
      {(propsFormik) => {
        return (
          <Form>
            <Box className="containerBox">
              <Card className="cardContainer">
                <Text.Sub20Bold className="textTitle">Forgot password?</Text.Sub20Bold>
                <Typography className="content">
                  Enter your TestGlider login email and we'll send you a link to reset your password.
                </Typography>
                <FastField
                  style={input}
                  component={InputField}
                  placeholder="Please enter your email"
                  {...propsFormik.getFieldProps("email")}
                />
                <Button className="buttonEmail" variant="contained" type="submit">
                  SEND EMAIL
                </Button>
                {!isEmpty(openModal) && <OTP openModal={openModal} onCloseModal={() => setOpenModal({})} />}
              </Card>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ForgotPassword;
