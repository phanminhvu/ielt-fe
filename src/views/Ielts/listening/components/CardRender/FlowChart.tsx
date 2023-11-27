import React, { useEffect, useRef } from "react";
import { TextField } from "components/Textfield";
import { FastField, useFormikContext } from "formik";
import { makeStyles } from "@mui/styles";
import { ROOT_ORIGINAL_URL } from "constants/api";
import { QuestionItemI } from "../../../../../constants/typeData.types";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    gap: 30,
  },
  question: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  answerBox: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  img: {
    width: "100%",
  },
  imgBox: {
    width: "60%",
  },
  inputAnswer: {
    "& .css-reo2el": {
      border: `1px solid ${theme.custom?.border.second}`,
    },
  },
}));
interface FlowChartI {
  image: string;
  questions: QuestionItemI[];
  onClickPage?: (options: object) => void;
  displayNumber: number;
}

const FlowChart = (props: FlowChartI) => {
  const classes = useStyles();
  const { image, questions, onClickPage, displayNumber } = props;

  const { setFieldValue } = useFormikContext();
  const inputRef = useRef<any>([]);

  const handleFocus = (id: string, index: number, questionIndx: number) => {
    setFieldValue(`answers[${index}].questionId`, id);
    onClickPage && onClickPage({ question: questionIndx });
  };
  const onClickQuestion = (questionIndx: number) => {
    let sectionRender: any = {};

    sectionRender.question = questionIndx;
    onClickPage && onClickPage(sectionRender);
  };

  useEffect(() => {
    inputRef?.current[displayNumber]?.focus();
  }, [displayNumber]);

  return (
    <div className={classes.container}>
      <div className={classes.imgBox}>
        <img className={classes.img} src={`${ROOT_ORIGINAL_URL}/${image}`} alt="flow chart" />
      </div>
      <div className={classes.answerBox}>
        {questions.map((question: QuestionItemI, questionIndx: number) => {
          const displayNumberT = question?.question?.displayNumber;
          const saveStudentAnswer = question.studentAnswer ?? "test student answer";
          return (
            <div key={question.questionId} className={classes.question} onClick={() => onClickQuestion(questionIndx)}>
              <strong style={{ minWidth: "20px" }}>{`${question?.question?.displayNumber}.`}</strong>
              <FastField
                inputRef={(el: Event | any) => (inputRef.current[displayNumberT] = el)}
                onFocus={() =>
                  handleFocus(question?.questionId, Number(question?.question?.displayNumber) - 1, questionIndx)
                }
                component={TextField}
                name={`answers[${Number(question?.question?.displayNumber) - 1}].studentAnswer`}
                saveStudentAnswer={saveStudentAnswer}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlowChart;
