import { makeStyles } from "@mui/styles";
import Text from "components/Typography";
import React from "react";
import ReactHtmlParser from "react-html-parser";

const useStyles = makeStyles((theme) => ({
  explanation: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: 16,
    gap: 16,
    marginTop: "20px",
  },
}));
type Props = {
  correctAnswer: string;
  studenAnswer: string;
  explanation: any;
};

const ExplanationBox = (props: Props) => {
  // !State
  const classes = useStyles();
  const { correctAnswer, studenAnswer, explanation } = props;
  const textAnswer = {
    color: "#000000",
    fontWeight: 500,
  };
  const explain = {
    marginTop: "30px",
  };
  return (
    <div className={classes.explanation}>
      <div>
        <Text.Desc16 sx={textAnswer}>{`Correct Answer : ${correctAnswer}`}</Text.Desc16>
        <Text.Desc16 sx={textAnswer}>{`Your Selection : ${studenAnswer}`}</Text.Desc16>
      </div>

      <div style={explain}>
        <Text.CardTitle>Explanation</Text.CardTitle>
        {ReactHtmlParser(explanation)}
      </div>
    </div>
  );
};

export default ExplanationBox;
