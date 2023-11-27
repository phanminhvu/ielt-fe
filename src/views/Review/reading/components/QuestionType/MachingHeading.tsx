import { makeStyles } from "@mui/styles";
import Text from "components/Typography";
import { useFormikContext } from "formik";
import { divide } from "lodash";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import AnserwerBox from "../AnserwerBox";
import ExplanationBox from "../ExplanationBox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    gap: 16,
    cursor: "pointer",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  explanation: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: 16,
    gap: 16,
  },
  questionText: {
    display: "flex",
    flex: 1,
  },
  answerList: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: 16,
  },
  answer: {
    display: "flex",
    gap: 16,
  },
}));
type Props = {
  data?: any;
  answerList: any;
};

const MachingHeading = (props: Props) => {
  // !State
  const classes = useStyles();
  const { data, answerList } = props;

  // !Function

  return (
    <div className={classes.container}>
      <div className={classes.answerList}>{ReactHtmlParser(answerList)}</div>
      {data.map((question: any) => (
        <Answer data={question} />
      ))}
    </div>
  );
};

const Answer = (props: any) => {
  const { data } = props;
  // !State
  const classes = useStyles();
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // !Function

  const handleShowExplanation = () => setShowExplanation(!showExplanation);

  return (
    <div className={classes.root} onClick={handleShowExplanation}>
      <div className={classes.answer}>
        <div className={classes.questionText}>{ReactHtmlParser(data?.question?.questionText)}</div>
        <AnserwerBox>{data?.question?.answer}</AnserwerBox>
      </div>
      {showExplanation && (
        <ExplanationBox
          correctAnswer={data?.question?.answer}
          studenAnswer={data?.studentAnswer}
          explanation={data?.question?.explanationText}
        />
      )}
    </div>
  );
};
export default MachingHeading;
