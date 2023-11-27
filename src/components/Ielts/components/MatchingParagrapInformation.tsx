import React, { useEffect, useRef } from "react";
import ReactHtmlParser from "react-html-parser";
import { makeStyles } from "@mui/styles";
import { FastField, useFormikContext } from "formik";
import { TextField } from "components/Textfield";
import { QuestionItemI } from "../../../constants/typeData.types";
interface MatchingParagrapInformationI {
  questions: QuestionItemI[];
  displayNumber: number;
  onClickPage: (option: object) => void;
  question: QuestionItemI;
}
const useStyles = makeStyles((theme) => {
  return {
    question: {
      display: "flex",
      gap: 8,
      alignItems: "center",
    },
  };
});
const MatchingParagrapInformation = (props: MatchingParagrapInformationI) => {
  const { questions, question, displayNumber, onClickPage } = props;

  const inputRef = useRef<any>([]);
  useEffect(() => {
    inputRef.current[displayNumber]?.focus();
  }, [displayNumber]);
  const classes = useStyles();
  const { setFieldValue } = useFormikContext();

  const onClickQuestion = (questionIndex: number) => {
    let sectionRender: any = {};
    sectionRender.question = questionIndex;
    onClickPage && onClickPage(sectionRender);
  };

  return (
    <>
      {questions.map((question: QuestionItemI, questionIndex: number) => {
        const displayNumberT = question?.question?.displayNumber;

        const handleFocus = (displayNumber: number, questionIndex: number) => {
          setFieldValue(`answers[${displayNumber - 1}].questionId`, question.questionId || "");
          onClickPage && onClickPage({ question: questionIndex }); //!
        };
        return (
          <>
            <div key={question.questionId} className={classes.question} onClick={() => onClickQuestion(questionIndex)}>
              <strong style={{ minWidth: "24px" }}>{displayNumberT}.</strong>
              <p>{question.question.questionText}</p>
              <FastField
                // disabled={isView}
                size="small"
                name={`answers[${displayNumberT - 1}].studentAnswer`}
                onFocus={() => handleFocus(displayNumberT, questionIndex)}
                component={TextField}
                inputRef={(el: Event | any) => (inputRef.current[displayNumberT] = el)}
              />
            </div>
          </>
        );
      })}
    </>
  );
};

export default MatchingParagrapInformation;
