import { Box } from "@mui/material";
import EndTest from "components/Exams/EndTest";
import { TypeStepExamEnum } from "constants/enum";
import { RouteBase } from "constants/routeUrl";
import { Form, Formik } from "formik";
import { useCheckTestCode } from "hooks/ielts/useCheckTestCodeHook";
import { useGetTestCode } from "hooks/ielts/useGetTestCodeHook";
import { useUpdateIeltsWriting } from "hooks/ielts/useIelts";
import { IELT_TEST } from "interfaces/testType";
import StepExamProvider, { useStepExam } from "provider/StepExamProvider";
import HandleQuestionProvider from "providers/HandleQuestionProvider";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Header from "views/Ielts/Header/Header";
import ModalHelpExam from "../../../components/Modal/ModalHelpExam";
import ModalHide from "../../../components/Modal/ModalHide";
import InformationForCandidates from "../../components/dataSteps/DataContentSpeaking/InformationForCandidates";
import IntructionsToCandidates from "../../components/dataSteps/DataContentSpeaking/IntructionsToCandidates";
import DetailUser from "../../components/DetailUser/DetailUser";
import RuleExam from "../../components/RuleExam/RuleExam";
import StepExamWriting from "./component/StepExamWriting";

export interface IeltsReadingProps {}

const containerSteps = {
  pt: "16px",
  background: "#dbe5f5",
  height: "100%",
};

const styleModal = {
  width: "770px",
  padding: "10px !important",
  // overflow: "hidden",
};

const initialsValues = {
  answers: [
    {
      questionId: "",
      studentAnswer: "",
    },
  ],
};
const stepRuleExam = {
  typeExam: "Writing",
  time: "1 hour",
  informationsForCandidates: <InformationForCandidates />,
  intructionsToCandidates: <IntructionsToCandidates />,
};

const IeltsWriting = (props: IeltsReadingProps) => {
  const [isOpenModalHelp, setIsOpenModalHelp] = React.useState(false);
  const [isOpenModalHide, setIsOpenModalHide] = React.useState(false);
  const history = useHistory();

  const { step } = useStepExam();
  const { testCode } = useGetTestCode();
  const { mutateAsync: updateIeltsWriting } = useUpdateIeltsWriting();

  const handleSubmit = async (values: any) => {
    await updateIeltsWriting(
      { values, testCode },
      {
        onSuccess: () => {
          history.push(RouteBase.IeltsSpeaking);
        },
      }
    );
  };

  //
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
  //
  useCheckTestCode(Number(testCode));

  return (
    <Formik
      initialValues={initialsValues}
      onSubmit={(values: any) => {
        handleSubmit(values);
      }}
    >
      {(formik: any) => (
        <Form>
          <Box sx={{ height: "100vh", overflow: "hidden" }}>
            {/* <Header
              handleOpenModalHelp={handleOpenModalHelp}
              handleOpenModalHide={handleOpenModalHide}
              numberStep={TypeStepExamEnum.STEP3}
              
            /> */}
            <Box sx={containerSteps}>
              {step === TypeStepExamEnum.STEP1 && <DetailUser />}
              {step === TypeStepExamEnum.STEP2 && (
                <RuleExam stepRuleExam={stepRuleExam} nextStep={TypeStepExamEnum.STEP3} />
              )}
              {step === TypeStepExamEnum.STEP3 && <StepExamWriting />}
              {step === TypeStepExamEnum.STEP4 && <EndTest test={IELT_TEST.WRITING} />}
            </Box>

            {isOpenModalHelp && (
              <ModalHelpExam open={isOpenModalHelp} styleModal={styleModal} handleCloseModal={handleCloseModalHelp} />
            )}
            {isOpenModalHide && (
              <ModalHide open={isOpenModalHide} styleModal={styleModal} handleCloseModal={handleCloseModalHide} />
            )}
          </Box>
        </Form>
      )}
    </Formik>
  );
};

const IeltsWritingRoot = () => {
  return (
    <HandleQuestionProvider>
      <StepExamProvider>
        <IeltsWriting />
      </StepExamProvider>
    </HandleQuestionProvider>
  );
};

export default IeltsWritingRoot;
