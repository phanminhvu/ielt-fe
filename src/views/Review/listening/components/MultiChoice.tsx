import { Box } from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import Text from "../../../../components/Typography/index";
import { themeCssSx } from "../../../../ThemeCssSx/ThemeCssSx";
// ! type
interface Props {
  dataQuestions?: any;
}
const formAnswer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
};
const itemAnswer = {};
const questionNumber = {
  mr: "5px",
  fontWeight: 700,
};
const container = {
  mb: "20px",
};
const question = {
  display: "flex",
  background: "#f7f9fb",
  padding: "10px 20px",
  mb: "10px",
  borderRadius: "5px",
};
const displayNumber = {
  mr: "5px",
  color: themeCssSx.color.title,
};
const itemNawer = {
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
};
const textAnswer = {
  ml: "5px",
};
const hightLightAnswerCss = {
  background: themeCssSx.colorAnswer.correctAnswer,
  color: "#fff",
  borderRadius: "5px",
};
const studentAnswerCss = {
  background: themeCssSx.colorAnswer.yourAnswer,
  color: "#fff",
  borderRadius: "5px",
};
const MultiChoice = ({ dataQuestions }: Props) => {
  return (
    <>
      <Box className="" sx={container}>
        <Box sx={question}>
          <Text.DescSmall sx={displayNumber}>{dataQuestions.question.displayNumber}.</Text.DescSmall>
          <Text.DescSmall>{ReactHtmlParser(dataQuestions.question.questionText)}</Text.DescSmall>
        </Box>
        {dataQuestions.question.options.map((answer: any) => {
          let style: any = { color: "inherit" };

          const studentAnswer = dataQuestions.studentAnswer;
          if (studentAnswer === answer?.key) {
            style = { ...studentAnswerCss };
          }
          if (dataQuestions?.question?.answer === answer?.key) {
            style = { ...hightLightAnswerCss };
          }
          return (
            <>
              <Box sx={itemNawer}>
                <Box sx={style} style={{ padding: "5px 10px" }}>
                  {answer.key}.
                </Box>
                <Text.DescSmall sx={textAnswer}>{answer.text}</Text.DescSmall>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default MultiChoice;
