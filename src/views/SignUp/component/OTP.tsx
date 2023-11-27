import { Box, Button, Modal, Typography } from "@mui/material";
import { RouteBase } from "constants/routeUrl";
import { Form } from "formik";
import { useEffect, useRef, useState } from "react";
import OtpInput from "react-otp-input";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import authServices from "services/authServices";
import "./styles.scss";
export interface Props {
  keycloakId?: String;
  userId?: String;
  back?: () => void;
  next?: () => void;

  openModal: any;

  onCloseModal: () => void;
}

const OTP = (props: Props) => {
  const { openModal, onCloseModal } = props;
  const history = useHistory();
  const [OTP, setOTP] = useState("");
  const [checked, setChecked] = useState(true);
  const [time, setTime] = useState<number>(120);
  const interval = useRef<any>(null);
  const [success, setSuccess] = useState(false);

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

  const onSubmit = async () => {
    const body = {
      verifyCode: OTP,
    };
    try {
      await authServices.verifyEmail(body, openModal.token).then((res) => {
        if (res.data?.statusCode === 200) {
          history.push(RouteBase.LoginEmail);
        }
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Modal open={openModal} onClose={onCloseModal}>
      <Box className="modalContainer">
        <Typography className="textCode">Verification code</Typography>
        <Form>
          {!success && (
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
          )}
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
            <Button variant="contained" onClick={onSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </Box>
    </Modal>
  );
};
export default OTP;
