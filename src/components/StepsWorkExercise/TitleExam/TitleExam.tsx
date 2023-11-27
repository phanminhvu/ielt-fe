import React from "react";
//
import Text from "components/Typography/index";
import ReactHtmlParser from "react-html-parser";
import { makeStyles } from "@mui/styles";
import CommonStyles from "components/CommonStyles";
import { PartContentQuestionsI } from "../../../constants/typeData.types";
const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    gap: 16,
  },
}));

// !type
interface TitleExamI {
  title?: PartContentQuestionsI;
}

const TitleExam = ({ title }: TitleExamI) => {
  // !State
  const classes = useStyles();

  const groupStartNumber = title?.questions[0]?.question?.displayNumber;

  const groupEndNumber = title?.questions[title.questions.length - 1]?.question?.displayNumber;
  return (
    <>
      <div className={classes.title}>
        <Text.Desc16
          sx={{ fontSize: "18px !important", fontWeight: "bold", mb: "20px", display: "block" }}
        >{`Question ${groupStartNumber} - ${groupEndNumber}`}</Text.Desc16>
      </div>

      <CommonStyles.Typography component="p" variant="desc16" sx={{ mb: "20px" }}>
        {ReactHtmlParser(title?.directionText ?? "")}
      </CommonStyles.Typography>
    </>
  );
};

export default TitleExam;
