import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardExercise from "components/Card/CardExercise";
import React from "react"; //
//
import { makeStyles } from "@mui/styles";
import LoadingPage from "components/Loading";
import { useGetSpeakingResultByTestCode } from "hooks/review/useIeltsReview";
import { isEmpty } from "lodash";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ModalImage from "../../../components/Modal/ModalImage";
import Header from "../Header/Header";
import Score from "../reading/components/Score";
import ContentRight from "../writng/components/ContentRight";
import ModalRightAnswer from "../writng/components/ModalRightAnswer";
import QuestionNumberList from "../listening/components/QuestionNumberList";
import Writing from "../writng/components/Writing";
import MyAnswers from "./components/MyAnswers";
import ModelAnswer from "./components/ModelAnswer";
import ListNumberQuestion from "./components/ListNumberQuestion";
//

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

interface Props {
  dataSpeaking?: any;
}

const SpeakingReview = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [isOpenAnswer, setIsModalAnswer] = useState(false);
  const [contentModal, setContentModal] = useState();
  const [numberQuestion, setNumberQuestion] = useState("1");
  //! State
  const classes = useStyles();
  const { dataSpeaking } = props;

  const [groupSelected, setGroupSelected] = useState({
    part: 0,
    group: 0,
  });
  const onClickPage = (groupRenderSelected: any) => {
    setGroupSelected({ ...groupSelected, ...groupRenderSelected });
  };
  const handleDisplayNumber = (displayNumber: any) => {
    setNumberQuestion(displayNumber);
  };

  const partRenderSelected = useMemo(() => {
    const questionsWithPageNumberTemp = dataSpeaking?.speaking || [];
    if (!isEmpty(questionsWithPageNumberTemp[groupSelected?.part])) {
      return questionsWithPageNumberTemp[groupSelected?.part];
    }

    return null;
  }, [dataSpeaking, groupSelected]);
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
  //! Render
  return (
    <div className={classes.root}>
      <Box sx={container}>
        <Header />
        <Box sx={content}>
          <Box>
            <Box sx={{ display: "flex", flex: 1 }}>
              <Box sx={navLeft}>
                <Score score={dataSpeaking.score.speaking} titleExam="Speaking" />
                <ListNumberQuestion
                  onClickPage={onClickPage}
                  questions={dataSpeaking?.speaking}
                  handleDisplayNumber={handleDisplayNumber}
                />
              </Box>
              <Grid container sx={{ justifyContent: "space-between", p: "40px 20px", width: "calc(100vw - 200px)" }}>
                <CardExercise
                  width={7}
                  content={
                    <MyAnswers
                      audios={partRenderSelected?.groups[groupSelected.group]}
                      numberQuestion={numberQuestion}
                    />
                  }
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
          <ModalRightAnswer handleCloseAnswer={handleCloseAnswer} content={contentModal}>
            <ModelAnswer />
          </ModalRightAnswer>
        )}
        {/* chua co ham */}
        {open && <ModalImage image={image} handleClose={handleClose} />}
      </Box>
    </div>
  );
};

const SpeakingReviewContainer = () => {
  const param = useParams();
  const { testCode }: any = param;
  const { data, isLoading } = useGetSpeakingResultByTestCode(testCode);

  if (isLoading) {
    return <LoadingPage />;
  }

  return <SpeakingReview dataSpeaking={data?.data?.data} />;
};

export default SpeakingReviewContainer;
