import React, { useEffect, useRef } from "react";
import ReactHtmlParser from "react-html-parser";
import { makeStyles } from "@mui/styles";
import { FastField, useFormikContext } from "formik";
import { TextField } from "components/Textfield";
import { QuestionItemI } from "../../../constants/typeData.types";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    gap: 16,
    flexDirection: "column",
  },
  question: {
    display: "flex",
    gap: 16,
    alignItems: "center",
  },
  questionBox: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  answerList: {
    border: `1px solid ${theme.custom?.border.primary}`,
    borderRadius: "5px",
    padding: 16,
  },
}));
interface MachingHeadingI {
  answerList: string;
  questions: QuestionItemI[];
  onClickPage?: (option: object) => void;
  displayNumber: number;
  isView?: boolean;
}

const MachingHeading = (props: MachingHeadingI) => {
  // !State
  const classes = useStyles();
  const { answerList, questions, onClickPage, displayNumber, isView = false } = props;
  const inputRef = useRef<any>([]);
  const { setFieldValue } = useFormikContext();
  const onClickQuestion = (questionIndex: number) => {
    let sectionRender: any = {};
    sectionRender.question = questionIndex;
    onClickPage && onClickPage(sectionRender);
  };

  useEffect(() => {
    inputRef.current[displayNumber]?.focus();
  }, [displayNumber]);

  return (
    <div className={classes.root}>
      <div className={classes.questionBox}>
        {questions.map((question: QuestionItemI, questionIndex: number): any => {
          const displayNumberT = question?.question?.displayNumber;
          const handleFocus = (displayNumber: number, questionIndex: number) => {
            setFieldValue(`answers[${displayNumber - 1}].questionId`, question.questionId || "");
            onClickPage && onClickPage({ question: questionIndex });
          };
          return (
            <div key={question.questionId} className={classes.question} onClick={() => onClickQuestion(questionIndex)}>
              <strong style={{ minWidth: "24px" }}>{ReactHtmlParser(question?.question?.displayNumber)}</strong>
              <div style={{ minWidth: "24px" }}>{ReactHtmlParser(question?.question?.questionText)}</div>
              <FastField
                disabled={isView}
                size="small"
                name={`answers[${displayNumberT - 1}].studentAnswer`}
                onFocus={() => handleFocus(displayNumberT, questionIndex)}
                component={TextField}
                inputRef={(el: any) => (inputRef.current[displayNumberT] = el)}
              />
            </div>
          );
        })}
      </div>

      <div className={classes.answerList}>{ReactHtmlParser(answerList)}</div>
    </div>
  );
};

export default MachingHeading;
