import { Box, FormControl, FormControlLabel, RadioGroup, Stack } from "@mui/material";
import Radio from "components/Radio";
import { Field, useFormikContext } from "formik";
import ReactHtmlParser from "react-html-parser";
import Text from "components/Typography/index";
import { makeStyles } from "@mui/styles";
import { QuestionItemI } from "constants/typeData.types";
import { chooseAnswer } from "constants/constants";
// ! type
interface MultichoiceOneAnswerI {
  questions: QuestionItemI[];
  onClickPage: (options: object) => void;

  isView?: boolean;
}

const useStyles = makeStyles((theme) => {
  return {
    formAnswer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    itemAnswer: {
      width: "49%",
      marginBottom: "30px",
    },
    questionNumber: {
      marginRight: "5px",
      fontWeight: 700,
      color: theme.palette.text.primary,
    },
    title: {
      background: theme.custom?.background.questionItemMultichoose,
      padding: "10px 20px",
      marginBottom: "10px",
      borderRadius: "5px",
    },
    question: {
      color: theme.palette.text.primary,
    },
  };
});

const MultiChoice = ({ questions, onClickPage, isView = false }: MultichoiceOneAnswerI) => {
  const classes = useStyles();
  const { values }: any = useFormikContext();

  // !Fucntion
  const onClickQuestion = (questionIdx: number) => {
    onClickPage && onClickPage({ question: questionIdx });
  };

  // !Render
  return (
    <>
      <Box sx={{ mb: "20px" }}></Box>
      <Box className={classes.formAnswer}>
        {questions.map((question: QuestionItemI, questionIdx: number) => {
          return (
            <Box key={question.questionId} className={classes.itemAnswer} onClick={() => onClickQuestion(questionIdx)}>
              <Stack direction="row" className={classes.title}>
                <Text.DescSmall className={classes.questionNumber}>{question.question.displayNumber}.</Text.DescSmall>
                <Text.DescSmall className={classes.question}>
                  {ReactHtmlParser(question.question.questionText)}
                </Text.DescSmall>
              </Stack>

              <FormControl sx={{ padding: "0 20px" }}>
                {question?.question?.options.map((answerChoice: any, index: number) => {
                  const checkSortIndex = () => {
                    if (index === 0) {
                      return `${chooseAnswer.a}`;
                    }
                    if (index === 1) {
                      return `${chooseAnswer.b}`;
                    }
                    if (index === 2) {
                      return `${chooseAnswer.c}`;
                    }
                    if (index === 3) {
                      return `${chooseAnswer.d}`;
                    }
                    return;
                  };
                  const displayNumber = Number(question.question.displayNumber) -1 ;

                  return (
                    <RadioGroup
                      key={answerChoice._id}
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue=""
                      name="radio-buttons-group"
                      value={isView ? false : values?.answers[displayNumber]?.studentAnswer}
                    >
                      <FormControlLabel
                        disabled={isView}
                        key={answerChoice._id}
                        value={answerChoice.key}
                        label={`${checkSortIndex()}. ${answerChoice.text}`}
                        control={
                          <Field
                            questionId={question.question._id}
                            index={displayNumber}
                            component={Radio}
                            name={`answers[${displayNumber}].studentAnswer`}
                          />
                        }
                      />
                    </RadioGroup>
                  );
                })}
              </FormControl>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default MultiChoice;
