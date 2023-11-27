import { makeStyles } from "@mui/styles";
import { TextField } from "components/Textfield";
import { FastField, useFormikContext } from "formik";
import { useEffect, useRef } from "react";
import ReactHtmlParser from "react-html-parser";
import { QuestionItemI } from "../../../constants/typeData.types";
interface MatchSentenceEndingI {
  questions: QuestionItemI[];
  questionBox: string;
  answerList: string;
  onClickPage?: (options: object) => void;
  displayNumber: number;
  isView?: boolean;
  disabled?: boolean;
  getTextEachPart?: (text: string) => void;
  passageTextWithHighlightTexted?: string;
  onScannerText?: (data: string) => void;
  directionText?: string;
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

const MachingType = (props: MatchSentenceEndingI) => {
  // !Style
  const classes = useStyles();
  const {
    questions,
    answerList,
    onClickPage,
    displayNumber,
    isView = false,
    getTextEachPart,
    passageTextWithHighlightTexted,
    onScannerText,
    directionText,
  } = props;

  const inputRef = useRef<any>([]);
  useEffect(() => {
    inputRef?.current[displayNumber]?.focus();
  }, [displayNumber]);

  useEffect(() => {
    getTextEachPart && getTextEachPart(answerList);
  }, []);

  const { setFieldValue } = useFormikContext();

  const onClickQuestion = (questionIndex: number) => {
    let sectionRender: any = {};
    sectionRender.question = questionIndex;
    onClickPage && onClickPage(sectionRender);
  };

  return (
    <div className={classes.container}>
      {/* <div>{ReactHtmlParser(directionText ?? "")}</div> */}
      <div className={classes.root}>
        {questions?.map((question: any, questionIndex: number) => {
          const index = Number(question?.question?.displayNumber) - 1;
          const handleFocus = (index: number, questionIndex: number) => {
            setFieldValue(`answers[${index}].questionId`, question?.questionId || "");
            let sectionRender: any = {};
            sectionRender.question = questionIndex;
            onClickPage && onClickPage(sectionRender);
          };
          return (
            <div className={classes.question} key={question._id} onClick={() => onClickQuestion(questionIndex)}>
              <div>
                <strong>{`${question?.question?.displayNumber}.`}</strong>
              </div>
              {ReactHtmlParser(question?.question?.questionText)}
              <FastField
                disabled={isView}
                inputRef={(el: any) => (inputRef.current[index + 1] = el)}
                onFocus={() => handleFocus(index, questionIndex)}
                component={TextField}
                name={`answers[${index}].studentAnswer`}
                size="small"
              />
            </div>
          );
        })}
      </div>
      <div className={classes.questionBox}>
        <div
          onClick={(data: any) => {
            onScannerText && onScannerText(data);
          }}
          dangerouslySetInnerHTML={{ __html: passageTextWithHighlightTexted || answerList }}
        />
      </div>
    </div>
  );
};

export default MachingType;
