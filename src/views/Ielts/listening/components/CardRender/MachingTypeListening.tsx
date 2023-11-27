import { makeStyles } from "@mui/styles";
import { TextField } from "components/Textfield";
import { FastField, useFormikContext } from "formik";
import { useEffect, useRef } from "react";
import ReactHtmlParser from "react-html-parser";
import { QuestionItemI } from "constants/typeData.types";
interface MatchingSentenceEndingI {
  questions: QuestionItemI[];
  questionBox: string;
  answerList: string;
  onClickPage?: (options: object) => void;
  displayNumber: number;
  isView?: boolean;
  disabled?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    gap: 8,
    flexDirection: "column",
  },
  questionBox: {
    border: `1px solid ${theme.custom?.border.primary}`,
    borderRadius: "5px",
    padding: 8,
  },
  question: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
}));

const MachingTypeListening = (props: MatchingSentenceEndingI) => {
  // !Style
  const classes = useStyles();
  const { questions, answerList, onClickPage, displayNumber, isView = false } = props;
  const inputRef = useRef<any>([]);

  useEffect(() => {
    inputRef?.current[displayNumber]?.focus();
  }, [displayNumber]);

  const { setFieldValue } = useFormikContext();

  const onClickQuestion = (questionIndex: number) => {
    let sectionRender: any = {};
    sectionRender.question = questionIndex;
    onClickPage && onClickPage(sectionRender);
  };

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        {questions?.map((question: QuestionItemI, questionIndex: number) => {
          const index = Number(question?.question?.displayNumber) - 1;
          const handleFocus = (index: number) => {
            setFieldValue(`answers[${index}].questionId`, question.questionId || "");
          };
          return (
            <div className={classes.question} key={question.questionId} onClick={() => onClickQuestion(questionIndex)}>
              <div>
                <strong>{`${question?.question?.displayNumber}.`}</strong>
              </div>
              {ReactHtmlParser(question?.question?.questionText)}
              <FastField
                disabled={isView}
                inputRef={(el: Event | any) => (inputRef.current[index + 1] = el)}
                onFocus={() => handleFocus(index)}
                component={TextField}
                name={`answers[${index}].studentAnswer`}
                size="small"
              />
            </div>
          );
        })}
      </div>
      {isView ? "" : <div className={classes.questionBox}>{ReactHtmlParser(answerList)}</div>}
    </div>
  );
};

export default MachingTypeListening;
