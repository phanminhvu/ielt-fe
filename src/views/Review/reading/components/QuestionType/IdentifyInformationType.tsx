import React from "react";
import {
  Box,
  Stack,
  FormControl,
  RadioGroup,
  FormControlLabel,
  AccordionDetails,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import Text from "components/Typography/index";
import ReactHtmlParser from "react-html-parser";
import { Field, useFormikContext } from "formik";
import Radio from "components/Radio";
import { TRUE } from "sass";
import { ClassNames } from "@emotion/react";
import { makeStyles } from "@mui/styles";
//
import ExplanationBox from "../ExplanationBox";
import { AnswerBoolean } from "../../../../../constants/enum";
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
import { theme } from "../../../../../theme/index";
const useStyles = makeStyles((theme) => ({
  answer: {
    display: "flex",
    gap: 16,
    alignItems: "center",
  },
  key: {
    padding: 8,
    display: "flex",
    justifyContent: "center",
  },
}));

type Props = {
  question: any;
  questionType: any;
  expanded?: any;
  onCollapse?: any;
  QUESTION_TYPE?: any;
  idShowQuestion?: any;
  onHightLightNumberPage?: any;
  hightLightNumberPage?: any;
};
const roundedCheck = {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  border: "1px solid #ccc",
};
const IdentifyInformationType = (props: Props) => {
  const [showExplainBoolean, setShowExplainBoolean] = React.useState();
  const classes = useStyles();

  const {
    question,
    questionType,
    expanded,
    onCollapse,
    QUESTION_TYPE,
    idShowQuestion,
    onHightLightNumberPage,
    hightLightNumberPage,
  } = props;
  const displayNumber = Number(question.question.displayNumber) - 1;
  const { values }: any = useFormikContext();

  const handleClickHightLightPage = () => {
    onHightLightNumberPage(question.question.displayNumber);
  };
  const ShowTypeBooleanAnswer = () => {
    setShowExplainBoolean(question.question.answer);
  };
  const hightLightTrueAnswer = () => {
    if (question.question.answer === AnswerBoolean.TRUE) {
      return { background: themeCssSx.colorAnswer.correctAnswer };
    }
    if (question.studentAnswer === "true") {
      return { background: themeCssSx.colorAnswer.inCorrectAnswer };
    }
  };
  const hightLightFalseAnswer = () => {
    if (question.question.answer === AnswerBoolean.FALSE) {
      return { background: themeCssSx.colorAnswer.correctAnswer };
    }
    if (question.studentAnswer === "false") {
      return { background: themeCssSx.colorAnswer.inCorrectAnswer };
    }
  };
  const hightLightNotGIVENAnswer = () => {
    if (question.question.answer === AnswerBoolean.NOTGIVEN) {
      return { background: themeCssSx.colorAnswer.correctAnswer };
    }
    if (question.studentAnswer === "not_given") {
      return { background: themeCssSx.colorAnswer.inCorrectAnswer };
    }
  };
  const textAnswer = () => {
    if (question?.studentAnswer?.toUpperCase() === question?.question?.answer) {
      return { color: themeCssSx.colorAnswer.correctAnswer };
    } else {
      return { color: themeCssSx.colorAnswer.inCorrectAnswer };
    }
  };
  return (
    <>
      <Box>
        <Text.Sub20Bold sx={textAnswer()}>Question {question.question.displayNumber}</Text.Sub20Bold>
      </Box>
      <Accordion
        sx={{ boxShadow: "none" }}
        className="accordion-title"
        expanded={expanded == question.question.displayNumber ?? "1"}
        onChange={onCollapse(question.question.displayNumber)}
        onClick={handleClickHightLightPage}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", background: "#f7f9fb", borderRadius: "10px !important" }}
        >
          {/* <Text.DescSmall sx={{ fontWeight: "bold" }}>{question?.id}</Text.DescSmall> */}

          <AccordionSummary
            className="accordion-title"
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ display: "flex", p: "0 10px" }}
          >
            {/* <Text.DescSmall sx={{ mr: "5px" }}>{question.question.displayNumber}.</Text.DescSmall> */}
            <Text.DescSmall>{ReactHtmlParser(question.question.questionText)}</Text.DescSmall>
          </AccordionSummary>
        </Stack>

        <AccordionDetails>
          <Stack direction="column" spacing={2}>
            {question.question.options.map((answer: any) => {
              const showYourAnswer = () => {
                return question.studentAnswer === answer.key ? { background: "red", color: "#fff" } : {};
              };
              return (
                <>
                  <div key={answer._id} className={classes.answer}>
                    <Box
                      className={classes.key}
                      style={{
                        background: question.question.answer === answer.key ? "#4bc82c" : "",
                        color: question.question.answer === answer.key ? "#fff" : "",
                        borderRadius: "3px",
                        width: "40px",
                      }}
                      sx={showYourAnswer()}
                    >{`${answer.key}.`}</Box>
                    <div>{answer.text}</div>
                  </div>
                </>
              );
            })}
            {questionType === QUESTION_TYPE.MULTIPLE_CHOICE_1_ANSWER && (
              <ExplanationBox
                correctAnswer={question?.question?.answer}
                studenAnswer={question?.studentAnswer}
                explanation={question?.question?.explanationText}
              />
            )}
          </Stack>
        </AccordionDetails>

        {(QUESTION_TYPE.IDENTIFYING_INFORMATION === questionType ||
          questionType === QUESTION_TYPE.IDENTIFYING_VIEWS_CLAIMS) && (
          <AccordionDetails>
            <Stack spacing={2}>
              <>
                <Stack direction="row" spacing={2} onClick={ShowTypeBooleanAnswer}>
                  <Box style={hightLightTrueAnswer()} sx={roundedCheck}></Box>
                  <Box>TRUE</Box>
                </Stack>
              </>
              <>
                <Stack direction="row" spacing={2} onClick={ShowTypeBooleanAnswer}>
                  <Box style={hightLightFalseAnswer()} sx={roundedCheck}></Box>
                  <Box>FALSE</Box>
                </Stack>
              </>
              <>
                <Stack direction="row" spacing={2} onClick={ShowTypeBooleanAnswer}>
                  <Box style={hightLightNotGIVENAnswer()} sx={roundedCheck}></Box>
                  <Box>NOT GIVEN</Box>
                </Stack>
              </>
            </Stack>

            <ExplanationBox
              correctAnswer={question?.question?.answer}
              studenAnswer={question?.studentAnswer}
              explanation={question?.question?.explanationText}
            />
          </AccordionDetails>
        )}
      </Accordion>
    </>
  );
};

export default IdentifyInformationType;
