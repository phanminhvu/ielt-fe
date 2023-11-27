import React, { useCallback, useMemo } from "react";
//
import { Box, Stack } from "@mui/material";
import CountDown from "components/Countdown/CountDown";
//
import { TypeStepExamEnum } from "constants/enum";
import { useStepExam } from "provider/StepExamProvider";
//
import { makeStyles } from "@mui/styles";
import NumberUser from "assets/image/exam/number-user.png";
import { TypeExam } from "constants/enum";
import { RouteBase } from "constants/routeUrl";
import { useFormikContext } from "formik";
import { useFinishIeltsSkill, useGetExamInformation, useUpdateExamProgress } from "hooks/ielts/useIelts";
import { useHistory } from "react-router-dom";
import authServices from "services/authServices";
import cacheService from "services/cacheService";
import HeaderOdin from "../../../components/Header/HeaderOdin";
import Volum from "../../../components/Volum/Volum";
import OptionButton from "../../Exam/OptionButton/OptionButton";
import ButtonHelp from "../../components/ButtonHelp/ButtonHelp";

// ! type
interface HeaderExamI {
  handleOpenModalHelp?: () => void;
  handleOpenModalHide?: () => void;
  numberStep?: string;
  handleSubmitWhenEndedTime?: () => void;
  handleChangeValueVolum?: (value: any) => void;
  typeExam: string;
}

const useStyles = makeStyles((theme) => {
  return {
    header: {
      padding: "10px 0px",
      background: "#36373b",
      zIndex: 999,
      width: "100%",
      // marginTop: "80px",
      position: "fixed",
    },
    headerContent: {
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "5px 20px",
      minHeight: "40px",
    },
    imgUser: {
      width: "18px",
      height: "18px",
    },
    textUser: {
      color: "#fff",
      fontSize: "14px",
    },
    containerUser: {
      ...theme.custom?.flexBox.flexJusCenter,
    },
    help: {
      ...theme.custom?.flexBox.flexCenterCenter,
    },
  };
});

const btnHelp = {
  cursor: "pointer",
};
const optionBtn = {
  cursor: "pointer",
};

const Header = ({
  handleOpenModalHelp,
  handleOpenModalHide,
  numberStep,
  handleChangeValueVolum,
  typeExam,
}: HeaderExamI) => {
  //! State
  const testCode = localStorage.getItem("testCode");
  const { step, handler } = useStepExam();
  const { handleSubmit } = useFormikContext();
  const classes = useStyles();
  const history = useHistory();
  const { mutateAsync: updateIeltsSkillFinish } = useFinishIeltsSkill();
  const { mutateAsync: updateExamProgress } = useUpdateExamProgress();
  const { data } = useGetExamInformation();
  const student: any = useMemo(() => {
    const { student } = authServices.getUserLocalStorage();
    return student;
  }, []);

  const handleSubmitWhenEndedTime = useCallback(async () => {
    const testCode = localStorage.getItem("testCode");
    handleSubmit();
    await updateIeltsSkillFinish({ testCode, skill: typeExam?.toLocaleLowerCase() }).then(async () => {
      cacheService.clearCacheData();
      if (typeExam === "LISTENING") {
        history.push(RouteBase.IeltsReading);
      }
      if (typeExam === "READING") {
        handler?.setStep && handler.setStep(TypeStepExamEnum.STEP4);
      }
    });
    const body = { timeRemain: 1000 };
    await updateExamProgress({ testCode, skill: typeExam?.toLocaleLowerCase(), body });
  }, [handleSubmit]);

  //! Render
  return (
    <Box>
      {/*<HeaderOdin />*/}
      <Box className={classes.header}>
        <Box className={classes.headerContent}>
          {(step === TypeStepExamEnum.STEP2 || step === TypeStepExamEnum.STEP3 || step === TypeStepExamEnum.STEP4) && (
            <Stack direction="row" spacing={1} className={classes.containerUser}>
              <img className={classes.imgUser} src={NumberUser} alt="" />
              <p className={classes.textUser}>{student?.studentCode}</p>
            </Stack>
          )}

          {step === numberStep && (
            <CountDown typeExam={typeExam} handleSubmitWhenEndedTime={handleSubmitWhenEndedTime} />
          )}
          <div className="flex">
            {typeExam === TypeExam.LISTENING &&
              (step === TypeStepExamEnum.STEP2 || step === TypeStepExamEnum.STEP4) && (
                <Volum handleChangeValueVolum={handleChangeValueVolum} />
              )}
            {step === numberStep && (
              <Stack direction="row" spacing={1} className={classes.help}>
                <ButtonHelp handleOpenModalHelp={handleOpenModalHelp} style={btnHelp} />
                <OptionButton handleOpenModalHide={handleOpenModalHide} addCss={optionBtn}>
                  Hide
                </OptionButton>
                {data?.data?.data?.isSubmit && (
                  <OptionButton handleOpenModalHide={handleSubmitWhenEndedTime} addCss={optionBtn}>
                    Submit
                  </OptionButton>
                )}
              </Stack>
            )}
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Header);
