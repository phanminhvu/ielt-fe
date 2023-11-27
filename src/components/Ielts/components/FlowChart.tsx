import React, { useEffect, useRef } from "react";
import { TextField } from "components/Textfield";
import { FastField, useFormikContext } from "formik";
import { makeStyles } from "@mui/styles";
import { ROOT_ORIGINAL_URL } from "constants/api";
import { QuestionItemI } from "../../../constants/typeData.types";
import { Object } from "lodash";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    gap: 16,
  },
  answer: {
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
    width: "60%",
  },
}));
type Props = {
  image?: string;
  question?: QuestionItemI[];
  onClickPage?: (options: object) => void;
  displayNumber: number;
  isView?: boolean;
};

const FlowChart = (props: Props) => {
  //! State
  const classes = useStyles();
  const { image, question, onClickPage, displayNumber, isView } = props;
  const { setFieldValue } = useFormikContext();
  const inputRef = useRef<any>([]);

  const onClickQuestion = (questionIndx: number) => {
    let sectionRender: any = {};
    sectionRender.question = questionIndx;
    onClickPage && onClickPage(sectionRender);
  };

  useEffect(() => {
    inputRef?.current[displayNumber]?.focus();
  }, [displayNumber]);

  //! Render
  return (
    <div className={classes.container}>
      <img className={classes.img} src={`${ROOT_ORIGINAL_URL}/${image}`} alt="flow chart" />
      <div className={classes.answerBox}>
        {question?.map((answer: QuestionItemI, questionIndx: number) => {
          const handleFocus = (id: string, index: number, questionIndx: number) => {
            setFieldValue(`answers[${index}].questionId`, id);
            onClickPage && onClickPage({ question: questionIndx }); //!
          };

          const displayNumberT = answer?.question?.displayNumber;
          return (
            <div key={answer.questionId} className={classes.answer} onClick={() => onClickQuestion(questionIndx)}>
              <span>
                <strong>{`${answer?.question?.displayNumber}.`}</strong>
              </span>
              <FastField
                disabled={isView}
                inputRef={(el: Event | any) => (inputRef.current[displayNumberT] = el)}
                onFocus={() =>
                  handleFocus(answer?.questionId, Number(answer?.question?.displayNumber) - 1, questionIndx)
                }
                component={TextField}
                name={`answers[${Number(answer?.question?.displayNumber) - 1}].studentAnswer`}
                className="input-answer"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlowChart;
