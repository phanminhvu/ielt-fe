import { makeStyles } from "@mui/styles";
import { FastField, useFormikContext } from "formik";
import React, { Fragment, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { TextField } from "components/Textfield";
import AnserwerBox from "../AnserwerBox";
import { Typography } from "@mui/material";
import ExplanationBox from "../ExplanationBox";
//
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
import Text from "components/Typography/index";
import { Box } from "@mui/system";
type Props = {
  data: any;
  questionBox: string;
  numberPage: any;
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    gap: 8,
    flexDirection: "column",
  },
  questionBox: {
    // border: "1px solid #ccc",
    borderRadius: "5px",
  },
  question: {
    display: "flex",
    gap: 8,
    flex: 1,
    cursor: "pointer",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  answerBox: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  answer: {
    maxHeight: "70px",
    display: "flex",
    gap: 16,
  },
  explanation: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: 16,
    gap: 16,
  },
}));

const MachingType = (props: Props) => {
  // !Style
  const classes = useStyles();
  const { data, questionBox, numberPage } = props;

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        {data?.map((question: any) => {
          return (
            <>
              {question?.question?.displayNumber === numberPage && (
                <Answer question={question} numberPage={numberPage} />
              )}
            </>
          );
        })}
      </div>
      <div className={classes.questionBox}>{ReactHtmlParser(questionBox)}</div>
    </div>
  );
};

const Answer = ({ question, numberPage }: any) => {
  // !State

  const classes = useStyles();

  // !Function
  //

  //
  const textAnswer = () => {
    if (question.studentAnswer === question.question.answer) {
      return { color: themeCssSx.colorAnswer.correctAnswer };
    } else {
      return { color: themeCssSx.colorAnswer.inCorrectAnswer };
    }
  };
  return (
    <>
      <Text.Sub20Bold sx={textAnswer()}>Question {question.question.displayNumber}</Text.Sub20Bold>

      <div className={classes.answerBox}>
        <div className={classes.question} key={question._id}>
          <Box
            sx={{
              p: "10px 20px",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              width: "100%",
              borderRadius: "8px",
              background: themeCssSx.bgQuestion.title,
            }}
          >
            <div className={classes.question}>{ReactHtmlParser(question?.question?.questionText)}</div>
            <div className={classes.answer}>
              <AnserwerBox>{question?.question?.answer}</AnserwerBox>
            </div>
          </Box>
        </div>
      </div>

      <ExplanationBox
        correctAnswer={question?.question?.answer}
        studenAnswer={question?.studentAnswer}
        explanation={question?.question?.explanationText}
      />
    </>
  );
};

export default MachingType;
