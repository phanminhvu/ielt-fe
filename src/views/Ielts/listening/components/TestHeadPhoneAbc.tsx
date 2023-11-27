import React from "react";
import Title from "views/components/Title/Title";
import ImgHeadPhone from "assets/image/exam/head-phone.png";
import ImgHelpError from "assets/image/exam/help-error.png";
import Text from "../../../../components/Typography/index";
import Button from "@mui/material/Button";
import HelpFooter from "../../../components/HelpFooter/HelpFooter";
import FooterSubmit from "../../../components/FooterSubmit/FooterSubmit";
import { TypeStepExamEnum } from "constants/enum";
import Container from "../../../components/Container/Container";
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
import Box from "@mui/material/Box";
import ReactAudioPlayer from "react-audio-player";
// @ts-ignore
import audio from "assets/audio/testSound/test-listening.mp3";
import { makeStyles } from "@mui/styles";
import { warningDetailUser, textBtnSubmit, textHeaderModal, testHeadPhone } from "../../../../constants/constants";
import CommonStyles from "components/CommonStyles";

//! type
interface TestHeadPhoneI {
  valueVolum?: number;
}
const useStyles = makeStyles((theme) => {
  return {
    containerTest: {
      ...theme.custom?.flexBox.flexJusCenter,
      paddingTop: "60px",
    },
    btn: {
      color: `${theme.custom?.text.btnSubmit} !important`,
      fonnSize: "15.4px",
      fontWeight: 700,
      margin: "0 auto 16px!important",
      padding: "6px 16px !important",
      background: "unset !important",
      textShadow: "0 1px 1px #fff !important",
      boxShadow: `${theme.custom?.boxShadow.btnSubmit} !important`,
      borderRadius: "5px",
      border: "none",
      "&:hover": {
        color: `${theme.custom?.text.btnSubmit} !important`,
        border: "none",
        background: "unset !important",
        boxShadow: theme.custom?.boxShadow.btnSubmit,
      },
    },
  };
});
//
const TestHeadPhoneAbc = (props: TestHeadPhoneI) => {
  const { valueVolum } = props;
  const [testSound, setTestSound] = React.useState(false);

  const classes = useStyles();

  const boxBtn = {
    ...themeCssSx.flexBox.flexJusCenter,
  };
  const nextStep = TypeStepExamEnum.STEP3;
  const handleTestSound = () => {
    if (testSound === false) {
      setTestSound(true);
    } else {
      setTestSound(false);
    }
  };
  return (
    <Box className={classes.containerTest}>
      {testSound && <ReactAudioPlayer volume={valueVolum} src={audio} autoPlay controls style={{ display: "none" }} />}
      <div className="">
        <Title image={ImgHeadPhone} text={textHeaderModal.testSound} />
        <Container>
          <CommonStyles.Typography component="p" variant="desc16" sx={{ mb: "15px" }}>
            {testHeadPhone.putHeadPhone}
          </CommonStyles.Typography>
          <Box sx={boxBtn}>
            <CommonStyles.Button onClick={handleTestSound} className={classes.btn}>
              {testSound === false && <>{testHeadPhone.play}</>} {testSound === true && <>{testHeadPhone.stop}</>}
            </CommonStyles.Button>
          </Box>
          <HelpFooter textHelp={warningDetailUser.checkInformation} image={ImgHelpError} />
          <FooterSubmit textBtn={textBtnSubmit.continue} nextStep={nextStep} />
        </Container>
      </div>
    </Box>
  );
};

export default TestHeadPhoneAbc;
