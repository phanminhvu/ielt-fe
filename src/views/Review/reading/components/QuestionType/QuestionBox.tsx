import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import Handlebars from "handlebars";
import { FastField } from "formik";
import AnserwerBox from "../AnserwerBox";
import { makeStyles } from "@mui/styles";
import ExplanationBox from "../ExplanationBox";
import Text from "components/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  answer: {
    display: "flex",
    gap: 16,
    cursor: "pointer",
  },
  answerBox: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  explanationBox: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
}));

type Props = {
  questionBox: any;
  question?: any;
};

const QuestionBox = (props: Props) => {
  // !State
  const classes = useStyles();
  const { questionBox, question } = props;
  Handlebars.registerHelper("blank", function (blankId: any) {
    const studenAnswer = question[blankId]?.studentAnswer ? question[blankId]?.studentAnswer : "";
    return new Handlebars.SafeString(
      `<input name='answers' value='${studenAnswer}'  id="input-${blankId}" type="text" value="" maxlength="30">`
    );
  });

  const test: any = Handlebars.compile(questionBox);
  return (
    <div className={classes.root}>
      <div dangerouslySetInnerHTML={{ __html: test() }} />
      <Text.CardTitle>Correct Answer</Text.CardTitle>
      <div className={classes.answerBox}>
        {question?.map((answer: any) => (
          <Answer key={answer.questionId} answer={answer} />
        ))}
      </div>
    </div>
  );
};

const Answer = ({ answer }: any) => {
  // !State
  const classes = useStyles();
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // !Function

  const handleShowExplanation = () => setShowExplanation(!showExplanation);
  return (
    <div className={classes.explanationBox}>
      <div className={classes.answer} onClick={handleShowExplanation}>
        <div>{answer.question.displayNumber}</div>
        <AnserwerBox>{answer.question.answer}</AnserwerBox>
      </div>
      {showExplanation && (
        <ExplanationBox
          correctAnswer={answer?.question?.answer}
          studenAnswer={answer?.studentAnswer}
          explanation={answer?.question?.explanationText}
        />
      )}
    </div>
  );
};

export default QuestionBox;
