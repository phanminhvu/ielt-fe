import { Box, Button, Modal, Typography } from "@mui/material";
import InputField from "components/CustomField/InputField";
import { RouteBase } from "constants/routeUrl";
import { FastField, Form, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import OtpInput from "react-otp-input";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import authServices from "services/authServices";
import "./styles.scss";
import * as yup from "yup";
import { validateLine } from "constants/constants";
import Regexs from "constants/Regexs";

export interface Props {
  back?: () => void;
  next?: () => void;

  openModal: any;

  onCloseModal: () => void;
}

const validationSchema = yup.object().shape({
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

const OTP = (props: Props) => {
  const { openModal, onCloseModal } = props;

  const history = useHistory();
  const [OTP, setOTP] = useState("");

  const [time, setTime] = useState<number>(120);
  const [resetToken, setResetToken] = useState("");
  const [success, setSuccess] = useState(false);
  const interval = useRef<any>(null);

  useEffect(() => {
    countDown();
  }, []);

  const countDown = () => {
    interval.current = setInterval(() => {
      setTime((time) => {
        if (time <= 1) {
          clearInterval(interval.current);
          return 0;
        }
        return time - 1;
      });
    }, 1000);
  };
  useEffect(() => {
    return () => {
      interval.current && clearInterval(interval.current);
    };
  }, []);

  const reSend = () => {
    authServices.resendCode(openModal.token).then((response) => {
      if (response?.data?.statusCode === 200) {
        setTime(120);
        countDown();
      }
    });
  };

  const onVerify = async () => {
    const body = {
      email: openModal?.email,
      verifyCode: OTP,
    };
    try {
      await authServices.verifyCode(body).then((res) => {
        if (res.data?.statusCode === 200) {
          setResetToken(res?.data?.data?.resetToken);
          setSuccess(true);
        }
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const onSubmit = async (values: any) => {
    try {
      const body = {
        resetToken: resetToken,
        password: values.password,
      };
      await authServices.resetPassword(body).then((res) => {
        if (res?.data?.statusCode === 200) {
          toast.success("Change password success");
          history.push(RouteBase.LoginEmail);
        }
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.message, {
        autoClose: 3000,
      });
    }
  };

  return (
    <Modal open={openModal} onClose={onCloseModal}>
      <Box className="modalContainer">
        {!success ? (
          <Form>
            <Typography className="textCode">Verification code</Typography>
            <OtpInput
              value={OTP}
              onChange={(otp: any) => setOTP(otp)}
              numInputs={6}
              containerStyle={{ justifyContent: "space-between" }}
              inputStyle={{
                width: 48,
                height: 48,
                border: "1px solid #C7C9D9",
                borderRadius: 8,
              }}
            />
            <Typography className="textOTP">
              {`Didn't receive OTP?${time ? ` Please enter OTP after ${time}s` : ""}`}
              <br />
              {time ? (
                ""
              ) : (
                <Typography className="textOTP" style={{ cursor: "grab" }} onClick={reSend}>
                  Resend OTP
                </Typography>
              )}
            </Typography>
            <div className="text-center my-2">
              <Button variant="contained" onClick={onVerify}>
                Submit
              </Button>
            </div>
          </Form>
        ) : (
          <Formik
            initialValues={{ password: "", rePassword: "" }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(propsFormik) => {
              return (
                <Form>
                  <Typography className="textCode">Change new password</Typography>
                  <FastField
                    type="password"
                    style={input}
                    component={InputField}
                    placeholder="Please enter your password"
                    {...propsFormik.getFieldProps("password")}
                  />
                  <FastField
                    type="password"
                    style={input}
                    component={InputField}
                    placeholder="Please enter your password again"
                    {...propsFormik.getFieldProps("rePassword")}
                  />
                  <div className="text-center my-2">
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        )}
      </Box>
    </Modal>
  );
};
export default OTP;
