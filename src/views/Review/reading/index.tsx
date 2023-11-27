import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardExercise from "components/Card/CardExercise";
import CardLeft from "components/StepsWorkExercise/Step1/CardLeft";
import TOFFL from "views/TOFFL/index";
//
import { ieltsReadingDataDummy } from "api/ieltsResults";
import CardTotalPageExams from "components/Card/CardTotalPageExams";
import { useGetReadingResultByTestCode } from "hooks/review/useIeltsReview";
import { IELT_TEST } from "interfaces/testType";
import { isEmpty } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Form, Formik } from "formik";
import QuestionNumberList from "./components/QuestionNumberList";
import QuestionAnswer from "./components/QuestionAnswer";
import { makeStyles } from "@mui/styles";
import LoadingPage from "components/Loading";
import { useParams } from "react-router-dom";
//
import Header from "../Header/Header";
import Score from "./components/Score";
const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  exam: {
    display: "flex",
  },
}));

interface Props {
  data?: any;
}

const ReadingReview = (props: any) => {
  //! State
  const classes = useStyles();
  const { data } = props;

  const [questionSelected, setQuestionSelected] = useState<any>("1");
  const [groupSelected, setGroupSelected] = useState({
    part: 0,
    group: 0,
  });
  const [showQuestion, setShowQuestion] = useState("1");
  const [hightLightNumberPage, setHightLightNumberPage] = useState<any>("1");

  // useEffect(() => {
  //   setQuestions(data);
  // }, []);

  const onClickPage = (groupRenderSelected: any) => {
    setGroupSelected({ ...groupSelected, ...groupRenderSelected });
  };

  const onClickPart = (groupRenderSelected: any) => {
    setGroupSelected({ ...groupSelected, ...groupRenderSelected });
  };
  const onClickShowQuestion = (displayNumber: any) => {
    setShowQuestion(displayNumber);
  };
  const hightLightNumberPageClickQuestion = (displayNumber: any) => {
    setHightLightNumberPage(displayNumber);
  };

  const partRenderSelected = useMemo(() => {
    const questionsWithPageNumberTemp = data as any;
    if (!isEmpty(questionsWithPageNumberTemp)) {
      return questionsWithPageNumberTemp[groupSelected?.part];
    }

    return null;
  }, [data, groupSelected]);

  //! Render
  const container = {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  };
  const navLeft = {
    background: "#fff",
    p: "40px 16px",
    boxShadow: "rgba(0, 0, 0, 0.10) 0px 5px 15px",
  };
  const styleAddExercise = {
    height: "calc(100vh - 140px)",
  };
  return (
    <Formik initialValues={{}} onSubmit={() => console.log("hello")}>
      {(formik: any) => (
        <Form className={classes.form}>
          <Box sx={container}>
            <Header />
            <Box className={classes.exam}>
              <Box sx={navLeft}>
                <Score titleExam="Reading" />
                <QuestionNumberList
                  questionSelected={questionSelected}
                  onClickPart={onClickPart}
                  onClickPage={onClickPage}
                  questions={data}
                  test={IELT_TEST.READING}
                  setDisplayNumber={onClickShowQuestion}
                  hightLightNumberPage={hightLightNumberPage}
                  onClickPageNumber={hightLightNumberPageClickQuestion}
                />
              </Box>
              <Grid container sx={{ justifyContent: "space-between", p: "40px 20px", width: "calc(100vw - 200px)" }}>
                <CardExercise
                  content={<CardLeft dataChangePart={partRenderSelected} />}
                  width={5.9}
                  styleAdd={styleAddExercise}
                />
                <CardExercise
                  content={
                    <QuestionAnswer
                      onClickPage={onClickPage}
                      questionSelected={questionSelected}
                      partRenderSelected={partRenderSelected?.groups[groupSelected.group]}
                      showQuestion={showQuestion}
                      onHightLightNumberPage={hightLightNumberPageClickQuestion}
                      hightLightNumberPage={hightLightNumberPage}
                    />
                  }
                  width={5.9}
                  styleAdd={styleAddExercise}
                />
              </Grid>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

const ReadingReviewContainer = () => {
  const param = useParams();
  const { testCode }: any = param;
  const { data, isLoading } = useGetReadingResultByTestCode(testCode);

  if (isLoading) {
    return <LoadingPage />;
  }

  return <ReadingReview data={data?.data?.data?.reading} />;
};

export default ReadingReviewContainer;
