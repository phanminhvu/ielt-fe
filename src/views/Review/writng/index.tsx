import React, { useEffect } from "react"; //
import Box from "@mui/material/Box";
import CardExercise from "components/Card/CardExercise";
import Grid from "@mui/material/Grid";
//
import { useState } from "react";
import { dataDummy, ieltsReadingDataDummy } from "api/ieltsResults";
import { isEmpty } from "lodash";
import { useMemo } from "react";
import Writing from "./components/Writing";
import TypeQuestions from "components/Card/TypeQuestions";
import QuestionNumberList from "./components/QuestionNumberList";
import { useGetWritingResultByTestCode } from "hooks/review/useIeltsReview";
import { makeStyles } from "@mui/styles";
import LoadingPage from "components/Loading";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import ContentRight from "./components/ContentRight";
import ModalImage from "../../../components/Modal/ModalImage";
import ModalRightAnswer from "./components/ModalRightAnswer";
import Score from "../reading/components/Score";
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
//

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

interface Props {
  data?: any;
}

const WritingReview = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const [isOpenAnswer, setIsModalAnswer] = useState(false);
  const [contentModal, setContentModal] = useState();
  const [indexData, setIndexData] = useState(0);

  //! State
  const classes = useStyles();
  const { data } = props;

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(data);
  }, []);

  const [groupSelected, setGroupSelected] = useState({
    part: 0,
    group: 0,
  });
  const setChangeData = (index: any) => {
    setIndexData(index);
  };

  const onClickPage = (groupRenderSelected: any) => {
    setGroupSelected({ ...groupSelected, ...groupRenderSelected });
  };

  const partRenderSelected = useMemo(() => {
    const questionsWithPageNumberTemp = questions as any;
    if (!isEmpty(questionsWithPageNumberTemp[indexData])) {
      return questionsWithPageNumberTemp[indexData];
    }

    return null;
  }, [questions, indexData]);
  //
  const { displayNumber, image, modelAnswer, organization, questionNumber, tips, usefulGrammarNVocab } =
    partRenderSelected?.question || {};
  //
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenAnswer = () => setIsModalAnswer(true);
  const handleCloseAnswer = () => setIsModalAnswer(false);
  //
  const handleSetContentModal = (content: any) => {
    setContentModal(content);
  };
  const container = {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  };
  const content = {};
  const navLeft = {
    background: "#fff",
    p: "40px 16px",
    boxShadow: "rgba(0, 0, 0, 0.10) 0px 5px 15px",
  };
  const styleAddExercise = {
    height: themeCssSx.heightExercise.review,
  };
  //! Render
  return (
    <div className={classes.root}>
      <Box sx={container}>
        <Header />
        <Box sx={content}>
          <Box>
            <Box sx={{ display: "flex", flex: 1 }}>
              <Box sx={navLeft}>
                <Score titleExam="Writing" />
                <QuestionNumberList onClickPage={onClickPage} questions={questions} setChangeData={setChangeData} />
              </Box>
              <Grid container sx={{ justifyContent: "space-between", p: "40px 20px", width: "calc(100vw - 200px)" }}>
                <CardExercise
                  styleAdd={styleAddExercise}
                  width={7}
                  content={<Writing partRenderSelected={partRenderSelected} groupSelected={indexData} />}
                />
                <ContentRight
                  apiContent={partRenderSelected}
                  handleOpen={handleOpen}
                  handleOpenAnswer={handleOpenAnswer}
                  handleSetContentModal={handleSetContentModal}
                />
              </Grid>
            </Box>
          </Box>
        </Box>
        {isOpenAnswer && (
          <ModalRightAnswer
            handleCloseAnswer={handleCloseAnswer}
            content={contentModal}
            question={partRenderSelected}
          />
        )}
        {open && <ModalImage image={image} handleClose={handleClose} />}
      </Box>
    </div>
  );
};

const WritingReviewContainer = () => {
  //   const testCode = useSelector((state: any) => state?.IeltsReducer?.ielts?.testCode);
  const param = useParams();
  const { testCode }: any = param;
  const { data, isLoading } = useGetWritingResultByTestCode(testCode);

  if (isLoading) {
    return <LoadingPage />;
  }

  return <WritingReview data={data?.data?.data?.writing} />;
};

export default WritingReviewContainer;
