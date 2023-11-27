//
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ieltsReadingDataDummy } from "api/ieltsResults";
import CardExercise from "components/Card/CardExercise";
import CardLeft from "components/StepsWorkExercise/Step1/CardLeft";
import TOFFL from "views/TOFFL/index";
//
import { makeStyles } from "@mui/styles";
import CardTotalPageExams from "components/Card/CardTotalPageExams";
import LoadingPage from "components/Loading";
import { useFormikContext } from "formik";
import { useConfirmCloseBrowser } from "hooks/ielts/useCloseTagConfirmHook";
import { useGetTestCode } from "hooks/ielts/useGetTestCodeHook";
import { useIeltsReading, useUpdateExamProgress } from "hooks/ielts/useIelts";
import { isEmpty } from "lodash";
import { useEffect, useMemo, useState } from "react";
import cacheService from "services/cacheService";
import FooterExamResponsive from "./FooterExamResponsive";
//
// interface Props {
//   data?: AllQuestionsDataI[];
// }
const useStyles = makeStyles((theme) => {
  return {
    typeQuestion: {
      margin: "0 15px",
    },
    containerDad: {
      position: "relative",
    },
    containerContent: {
      padding: "0 15px",
      paddingTop: "15px",
    },
    containerExercises: {
      justifyContent: "space-between",
      display: "flex",
    },
  };
});
const Step2ExamContent = (props: any) => {
  //! State
  const { data } = props;
  const [questions, setQuestions] = useState(data);
  const [text, setText] = useState("");
  const [groupSelected, setGroupSelected] = useState({
    part: 0,
    group: 0,
    question: 0,
  });
  const [showQuestion, setShowQuestion] = useState("1");
  const part = data;
  const group = data[groupSelected.part]?.groups;
  const questionData = data[groupSelected.part]?.groups[groupSelected.group]?.questions || [];
  const displayNumber = questionData[groupSelected.question]?.question?.displayNumber;
  const { values, setFieldValue, handleSubmit } = useFormikContext();
  const { mutateAsync: updateExamProgress } = useUpdateExamProgress();
  const { testCode } = useGetTestCode();
  const cache = cacheService.getDataCache();

  let inputIndex = 0;
  useEffect(() => {
    data.map((part: any) => {
      return part.groups.map((group: any) => {
        return group.questions.map((question: any, index: number) => {
          inputIndex++;
          setFieldValue(`answers[${inputIndex - 1}].studentAnswer`, question.studentAnswer ?? "");
        });
      });
    });
  }, []);

  useEffect(() => {
    handleSubmit();
  }, [displayNumber]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const cache = cacheService.getDataCache();
  //     const body = {
  //       timeRemain: cache.LEFT_TIME,
  //       // timeRemain: 60000,
  //     };
  //     const saveExamProgress = async () => {
  //       await updateExamProgress({ testCode, skill: "reading", body });
  //     };
  //     saveExamProgress();
  //   }, 6000);
  //   return () => clearInterval(interval);
  // }, []);

  const onClickPage = (groupRenderSelected: object) => {
    setGroupSelected({ ...groupSelected, ...groupRenderSelected });
  };

  const onClickShowQuestion = (displayNumber: string | any) => {
    setShowQuestion(displayNumber);
  };

  const partRenderSelected = useMemo(() => {
    const questionsWithPageNumberTemp = (questions as any) || [];
    if (!isEmpty(questionsWithPageNumberTemp[groupSelected?.part])) {
      return questionsWithPageNumberTemp[groupSelected?.part];
    }

    return null;
  }, [ieltsReadingDataDummy, groupSelected]);
  //
  const styleAddExercise = {
    height: "calc(100vh - 210px)",
  };
  const classes = useStyles();
  //! Render
  return (
    <>
      {/* <Box className={classes.typeQuestion}>
        <TypeQuestions content={questionType}></TypeQuestions>
      </Box> */}
      <Box className={classes.containerDad}>
        <Box className={classes.containerContent}>
          <Grid container className={classes.containerExercises}>
            <CardExercise
              content={<CardLeft dataChangePart={partRenderSelected} />}
              width={5.9}
              styleAdd={styleAddExercise}
            />

            <CardExercise
              content={
                <TOFFL
                  onClickPage={onClickPage}
                  partRenderSelected={group[groupSelected.group]}
                  showQuestion={showQuestion}
                  displayNumber={displayNumber}
                />
              }
              width={6}
              styleAdd={styleAddExercise}
            />
          </Grid>
        </Box>

        <CardTotalPageExams
          onClickPage={onClickPage}
          questions={questions}
          setDisplayNumber={onClickShowQuestion}
          groupSelected={groupSelected}
          part={part}
          group={group}
          question={questionData}
          displayNumber={displayNumber}
        />
        {/* <FooterExamResponsive /> */}
      </Box>
    </>
  );
};

const IeltsReadingContainer = () => {
  const { testCode } = useGetTestCode();
  const { data, isLoading } = useIeltsReading(testCode);
  useConfirmCloseBrowser();

  if (isLoading) {
    return <LoadingPage />;
  }

  return <Step2ExamContent data={data?.data?.data} />;
};

export default IeltsReadingContainer;
