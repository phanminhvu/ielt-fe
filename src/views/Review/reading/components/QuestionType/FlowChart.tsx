import React, { useState } from "react";
import { TextField } from "components/Textfield";
import { FastField, useFormikContext } from "formik";
import { makeStyles } from "@mui/styles";
import { ROOT_ORIGINAL_URL, ROOT_URL } from "constants/api";
import AnserwerBox from "../AnserwerBox";
import Text from "components/Typography";
import { Typography } from "@mui/material";
import { boolean } from "yup";
import ExplanationBox from "../ExplanationBox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  answer: {
    display: "flex",
    gap: 8,
    alignItems: "center",
    cursor: "pointer",
  },
  answerBox: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  displayNumber: {
    minWidth: 20,
  },
  img: {
    width: "100%",
  },
}));
type Props = {
  image?: string;
  question?: any;
};

const FlowChart = (props: Props) => {
  const classes = useStyles();
  const { image, question } = props;
  return (
    <div>
      <img className={classes.img} src={`${ROOT_ORIGINAL_URL}/${image}`} alt="flow chart" />
      <div className={classes.answerBox}>
        {question?.map((answer: any) => {
          return <Answer answer={answer} />;
        })}
      </div>
    </div>
  );
};

const Answer = (props: any) => {
  // !State
  const classes = useStyles();
  const { answer } = props;
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const handleShowExplanation = () => setShowExplanation(!showExplanation);

  return (
    <div className={classes.root}>
      <div className={classes.answer} onClick={handleShowExplanation}>
        <div className={classes.displayNumber}>
          <strong>{answer?.question?.displayNumber}</strong>
        </div>
        <AnserwerBox>{answer.question.answer}</AnserwerBox>
      </div>
      {showExplanation && (
        <ExplanationBox
          correctAnswer={answer.question.answer}
          studenAnswer={answer?.studenAnswer}
          explanation={answer.question?.explanationText}
        />
      )}
    </div>
  );
};

export default FlowChart;
