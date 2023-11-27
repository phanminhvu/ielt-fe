import React from "react";
//
import { Box, Stack } from "@mui/system";

import ButtonCommon from "components/Button/ButtonCommon";
import { themeCssSx } from "../../../ThemeCssSx/ThemeCssSx";
//
import { TypeStepExamEnum } from "constants/enum";
import { useStepExam } from "../../../provider/StepExamProvider";
import { useFormikContext } from "formik";
import cacheService from "services/cacheService";
import { useGetExamInformation, useGetExamProgress } from "hooks/ielts/useIelts";
import { showError } from "helpers/toast";
import { useGetTestCode } from "hooks/ielts/useGetTestCodeHook";
import { RouteBase } from "constants/routeUrl";
import { useHistory } from "react-router-dom";
// !type
interface Props {
  textBtn?: string;
  nextStep?: any;
  examProgress?: any;
}
const containerBtn = {
  ...themeCssSx.flexBox.flexBetWeen,
  mt: "15px",
};
const btn = {
  color: "#1e415b",
  fonnSize: "15.4px",
  fontWeight: 700,
  margin: "0 auto 16px!important",
  padding: "6px 16px",
  background: "transparent",
  textShadow: "0 1px 1px #fff",
  boxShadow: "0 1px 1px rgb(0 0 0 / 50%)",
  borderRadius: "5px",
  border: "none",
  "&:hover": {
    color: "#1e415b",
    border: "none",
    background: "none",
    boxShadow: "0 1px 1px rgb(0 0 0 / 50%)",
  },
};
const FooterSubmit = (props: Props) => {
  const { textBtn, nextStep, examProgress } = props;
  const history = useHistory();
  const { handler, step } = useStepExam();
  const { data, refetch } = useGetExamInformation();

  const canStart = data?.data?.data?.canStart;
  const onStartExam = () => {
    checkTimeStart();

    if (step === TypeStepExamEnum.STEP3) {
      refetch();
      if (canStart) {
        handler?.setStep && handler.setStep(nextStep);
        if (examProgress === 1000) {
          history.push(RouteBase.IeltsReading);
        }
        // cacheService.cache("step", nextStep);
      }
      if (!canStart) {
        showError("Exam have not started yet");
      }
    } else {
      handler?.setStep && handler.setStep(nextStep);
      cacheService.cache("step", nextStep);
    }
  };
  const checkTimeStart = () => {
    //Lưu lại time bắt đầu kiểm tra và thời gian kết thúc
    let timeDoingExamString = localStorage.getItem("TimeDoingExam");
    if (timeDoingExamString) {
      let timeDoingExam = JSON.parse(timeDoingExamString);
      let date = new Date();
      if (date > new Date(timeDoingExam.End)) {
        localStorage.removeItem("highlightState");
        localStorage.removeItem("TimeDoingExam");
        checkTimeStart();
      }
    } else {
      let timeNow = Date.now();
      let timeStartExam = new Date(timeNow);
      let timeEndExam = new Date(timeNow + examProgress);
      localStorage.setItem("TimeDoingExam", JSON.stringify({ Start: timeStartExam, End: timeEndExam }));
    }
  };

  return (
    <>
      <Box sx={containerBtn}>
        <ButtonCommon.ButtonOutline onClick={onStartExam} sx={btn}>
          {textBtn}
        </ButtonCommon.ButtonOutline>
      </Box>
    </>
  );
};

export default FooterSubmit;
