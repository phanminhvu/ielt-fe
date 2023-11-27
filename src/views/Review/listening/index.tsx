import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardExercise from "components/Card/CardExercise";
import CardLeft from "components/StepsWorkExercise/Step1/CardLeft";
import TOFFL from "views/TOFFL/index";
//
import { ieltsReadingDataDummy } from "api/ieltsResults";
import CardTotalPageExams from "components/Card/CardTotalPageExams";
import { useGetListeningResultByTestCode } from "hooks/review/useIeltsReview";
import { IELT_TEST } from "interfaces/testType";
import { isEmpty } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { makeStyles } from "@mui/styles";
import LoadingPage from "components/Loading";
import { useParams } from "react-router-dom";
//
import Header from "../Header/Header";
// import Score from "./components/Score";
import QuestionNumberList from "./components/QuestionNumberList";
import Score from "../reading/components/Score";
import ContentRight from "./components/ContentRight";
import ContentLeft from "./components/ContentLeft";
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

const ListeningReview = (props: Props) => {
  //! State
  const [displayNumber, setDisplayNumber] = useState<any>();

  const classes = useStyles();
  const { data } = props;

  const [questionSelected, setQuestionSelected] = useState<any>("1");
  const [groupSelected, setGroupSelected] = useState({
    part: 0,
    group: 0,
  });

  const onClickPage = (groupRenderSelected: any) => {
    setGroupSelected({ ...groupSelected, ...groupRenderSelected });
  };
  const displayNumberOnclickPage = (displayNumber: any) => {
    setDisplayNumber(displayNumber);
  };

  const partRenderSelected = useMemo(() => {
    const questionsWithPageNumberTemp = data as any;
    if (!isEmpty(questionsWithPageNumberTemp)) {
      return questionsWithPageNumberTemp[groupSelected?.part];
    }

    return null;
  }, [data, groupSelected]);

  //

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
                <Score titleExam="Listening" />
                <QuestionNumberList
                  questions={data}
                  onClickPage={onClickPage}
                  displayNumberOnclickPage={displayNumberOnclickPage}
                />
              </Box>
              <Grid container sx={{ justifyContent: "space-between", p: "40px 20px", width: "calc(100vw - 200px)" }}>
                <CardExercise
                  width={5.9}
                  content={
                    <ContentLeft
                      partRenderSelected={partRenderSelected?.groups[groupSelected.group]}
                      audio={partRenderSelected?.partAudio}
                    />
                  }
                  styleAdd={styleAddExercise}
                />
                <CardExercise
                  styleAdd={styleAddExercise}
                  width={5.9}
                  content={
                    <ContentRight
                      partRenderSelected={partRenderSelected?.groups[groupSelected.group]}
                      displayNumber={displayNumber}
                    />
                  }
                />
              </Grid>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
//
const ListeningReviewContainer = () => {
  const param = useParams();
  const { testCode }: any = param;
  const { data, isLoading } = useGetListeningResultByTestCode(testCode);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <>
      <ListeningReview data={data?.data?.data?.listening} />
    </>
  );
};

export default ListeningReviewContainer;
