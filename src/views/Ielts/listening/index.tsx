import { ROLE, TypeExam, TypeStepExamEnum } from "constants/enum";
import StepExamProvider, { useStepExam } from "provider/StepExamProvider";
import React, { useCallback, useMemo } from "react";
import ExamTest from "./components/ExamTest";
import { Box } from "@mui/material";
import { Form, Formik } from "formik";
import { useUpdateIeltsListeningTest } from "hooks/ielts/useIelts";
import { Redirect, useHistory } from "react-router-dom";
import Header from "views/Ielts/Header/Header";
import DetailUser from "../../components/DetailUser/DetailUser";
import RuleExam from "../../components/RuleExam/RuleExam";
import HandleQuestionProvider from "providers/HandleQuestionProvider";
import InformationForCandidatesListening from "views/components/dataSteps/DataContentListening/InformationForCandidates";
import IntructionsToCandidatesListening from "views/components/dataSteps/DataContentListening/IntructionsToCandidates";
import EndTest from "../../../components/Exams/EndTest";
import ModalHelpExam from "../../../components/Modal/ModalHelpExam";
import ModalHide from "../../../components/Modal/ModalHide";
import { IELT_TEST } from "../../../interfaces/testType";
import TestHeadPhoneAbc from "./components/TestHeadPhoneAbc";
import { rulesdetailExam } from "../../../constants/constants";
import { makeStyles } from "@mui/styles";
import { getErrorMsg } from "helpers";
import { showError } from "helpers/toast";
import { useConfirmCloseBrowser } from "hooks/ielts/useCloseTagConfirmHook";
import cacheService from "services/cacheService";
import { GetAuthSelector } from "redux/selectors";
import { RouteBase } from "constants/routeUrl";

const stepRuleExam = {
  typeExam: rulesdetailExam.listening.title,
  time: rulesdetailExam.listening.timeExam,
  informationsForCandidates: <InformationForCandidatesListening />,
  intructionsToCandidates: <IntructionsToCandidatesListening />,
};

const styleModal = {
  width: "770px",
  padding: "10px !important",
};
// !type
export interface IeltsListeningProps {}

const IeltsListening = (props: IeltsListeningProps) => {
  //! State

  const [isOpenModalHelp, setIsOpenModalHelp] = React.useState(false);
  const [isOpenModalHide, setIsOpenModalHide] = React.useState(false);
  const [changeValueVolum, setChangeValueVolum] = React.useState<number>(0.5);

  const { step } = useStepExam();
  const { mutateAsync: updateIeltsListening, isLoading } = useUpdateIeltsListeningTest();
  const dataCache = cacheService.getDataCache();
  const auth = GetAuthSelector();
  const { userType } = auth;
  const genInitialValue = useMemo(() => {
    let value = {
      questionId: "",
      studentAnswer: "",
    };

    let answers = [];
    for (let i = 0; i < 40; i++) {
      answers.push(value);
    }
    return { answers };
  }, []);

  const initialValues: any = useMemo(() => {
    const dataCache = cacheService.getDataCache();
    const { answers } = dataCache;
    return answers ? answers : genInitialValue;
  }, []);

  //! Function

  const handleSubmitForm = useCallback(async (values: any) => {
    const testCode = localStorage.getItem("testCode");
    const answers = values.answers.filter((el: any) => {
      return el.questionId && el.studentAnswer;
    });
    const body = { values: { answers }, testCode };
    try {
      await updateIeltsListening(body);
    } catch (err) {
      showError(getErrorMsg(err));
    }
  }, []);

  const handleOpenModalHelp = useCallback(() => {
    setIsOpenModalHelp(true);
  }, []);
  const handleCloseModalHelp = () => {
    setIsOpenModalHelp(false);
  };
  //
  const handleOpenModalHide = useCallback(() => {
    setIsOpenModalHide(true);
  }, []);
  const handleCloseModalHide = () => {
    setIsOpenModalHide(false);
  };

  useConfirmCloseBrowser();
  //
  const handleChangeValueVolum = (value: number) => {
    if (value === 100) {
      return setChangeValueVolum(1);
    }
    setChangeValueVolum(Number(`0.${value}`));
  };

  //! css
  const useStyles = makeStyles((theme) => {
    const heightHeaderLogo = theme.custom?.heightHeaderLogo ?? 80;
    const heightHeaderExam = theme.custom?.heightHeaderExamListening ?? 80;
    const paddingTopStep123 =  heightHeaderExam - 17;
    const paddingTopExam =   heightHeaderExam + 16;

    const handlePaddingTop = () => {
      if (step === TypeStepExamEnum.STEP1 || step === TypeStepExamEnum.STEP2 || step === TypeStepExamEnum.STEP3) {
        return paddingTopStep123;
      }
      if (step === TypeStepExamEnum.STEP4) {
        return paddingTopExam;
      }
    };
    return {
      container: {
        height: "100vh",
        overflow: "hidden",
        paddingTop: `${handlePaddingTop()}px`,
        background: theme.custom?.background.exam,
        [theme.breakpoints.down("lg")]: {
          overflow: "unset",
          height: "100%",
        },
      },
      containerSteps: {
        height: "100%",
      },
    };
  });
  const classes = useStyles();

  //! Render

  if (userType === ROLE.ADMIN || userType === ROLE.SUPER_ADMIN || userType === ROLE.TEACHER) {
    return <Redirect to={RouteBase.Listening} />;
  }

  return (
    <Formik initialValues={initialValues} enableReinitialize onSubmit={(values) => handleSubmitForm(values)}>
      {(formik) => {
        return (
          <Form>
            <Header
              handleOpenModalHelp={handleOpenModalHelp}
              handleOpenModalHide={handleOpenModalHide}
              numberStep={TypeStepExamEnum.STEP4}
              handleChangeValueVolum={handleChangeValueVolum}
              typeExam={TypeExam.LISTENING}
            />
            <Box className={classes.container}>
              <Box className={classes.containerSteps}>
                {step === TypeStepExamEnum.STEP1 && <DetailUser />}
                {step === TypeStepExamEnum.STEP2 && <TestHeadPhoneAbc valueVolum={changeValueVolum} />}
                {step === TypeStepExamEnum.STEP3 && (
                  <RuleExam
                    stepRuleExam={stepRuleExam}
                    prevStep={TypeStepExamEnum.STEP2}
                    nextStep={TypeStepExamEnum.STEP4}
                  />
                )}
                {step === TypeStepExamEnum.STEP4 && (
                  <ExamTest valueVolum={changeValueVolum} prevStep={TypeStepExamEnum.STEP3} />
                )}
                {step === TypeStepExamEnum.STEP5 && <EndTest test={IELT_TEST.LISTENING} />}
              </Box>
            </Box>
            {isOpenModalHelp && (
              <ModalHelpExam
                open={isOpenModalHelp}
                styleModal={styleModal}
                handleCloseModal={handleCloseModalHelp}
                typeExam={TypeExam.LISTENING}
              />
            )}
            {isOpenModalHide && (
              <ModalHide open={isOpenModalHide} styleModal={styleModal} handleCloseModal={handleCloseModalHide} />
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

const IeltsListeningRoot = () => {
  return (
    <HandleQuestionProvider>
      <StepExamProvider>
        <IeltsListening />
      </StepExamProvider>
    </HandleQuestionProvider>
  );
};

export default IeltsListeningRoot;
