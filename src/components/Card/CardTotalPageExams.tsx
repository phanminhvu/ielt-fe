import { useState, useEffect } from "react";
//
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//
import { makeStyles } from "@mui/styles";
import { useFormikContext } from "formik";
//
import NextQuestion from "assets/image/exam/next-exercise.png";
import PrevQuestion from "assets/image/exam/prev-exercise.png";
import { useCheckRenderQuestion } from "hooks/ielts/useCheckRenderQuestion";
import CacheService from "services/cacheService";
import classnames from "classnames";

interface CardTotalPageExamsI {
  questions?: any;
  onClickPage?: any;
  setDisplayNumber?: any;
  groupSelected?: any;
  part?: any;
  group?: any;
  question?: any;
  displayNumber: number;
}

const useStyles = makeStyles((theme) => {
  return {
    eachItem: {
      display: "flex",
      marginRight: "2px",
      [theme.breakpoints.down("xl")]: {
        marginTop: "2px",
      },
    },
    eachQuestion: {
      background: "#000",
      color: "#fff",
      width: "23px",
      height: "23px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
      borderRadius: "2px",
    },
    sliderVolum: {
      marginTop: "10px",
      color: "#f5f5f5 !important",
    },
    box: {
      boxShadow: theme.custom?.boxShadow.card,
      width: "80%",
      display: "block",
      borderRadius: "8px 8px 0 0",
      border: "1px solid #fff",
      background: theme.custom?.background.exercises,
    },
    totalPage: {
      display: "flex",
      width: "100%",
      position: "fixed",
      bottom: 0,
      margin: "0 15px",
      [theme.breakpoints.down("xl")]: {
        alignItems: "center",
        padding: "0 20px 0 0",
      },
    },
    containerTotalPage: {
      ...theme.custom?.flexBox.flexBetweenCenter,
      padding: "5px 10px",
    },
    nextPage: {
      ...theme.custom?.flexBox.flexCenterCenter,
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      transform: "rotate(180deg)",
      cursor: "pointer",
      boxShadow: theme.custom?.boxShadow.nextPage,
    },
    containerNextPage: {
      display: "flex",
      justifyContent: "flex-end",
      width: "13%",
    },
  };
});

const CardTotalPageExams = ({
  questions,
  onClickPage,
  setDisplayNumber,
  groupSelected,
  part,
  group,
  question,
  displayNumber,
}: CardTotalPageExamsI) => {
  const { values }: any = useFormikContext();

  const [inReviewListQuestions, setInReviewListQuestions] = useState<number[]>(
    CacheService.getDataCache()?.inReviewList || []
  );
  const classes = useStyles();

  const { handleSubmit } = useFormikContext();
  const { checkBackRenderQuestion, checkNextPartRender } = useCheckRenderQuestion({
    question,
    part,
    group,
    questions,
    groupSelected,
    handleSubmit,
  });

  useEffect(() => {
    CacheService.cache("inReviewList", inReviewListQuestions);
  }, [inReviewListQuestions]);
  //! State

  const handleCheckBox = (event: any) => {
    setInReviewListQuestions((prev: number[]) => {
      if (inReviewListQuestions.includes(displayNumber)) {
        const index = inReviewListQuestions.findIndex((i) => i === displayNumber);
        return inReviewListQuestions.slice(0, index).concat(inReviewListQuestions.slice(index + 1));
      }
      return inReviewListQuestions.concat(displayNumber);
    });
  };

  const onClickNextQuestion = () => {
    const sectionRender = checkNextPartRender();
    setDisplayNumber(displayNumber);
    onClickPage(sectionRender);
  };

  const onClickBackQuestion = () => {
    const sectionRender = checkBackRenderQuestion();
    onClickPage(sectionRender);
    setDisplayNumber(displayNumber);
  };

  const handleClickQuestion = (partIndex: number, groupIndex: number, questionIndex: number) => {
    const sectionRender: any = {};
    sectionRender.part = partIndex;
    sectionRender.group = groupIndex;
    sectionRender.question = questionIndex;

    onClickPage(sectionRender);
  };

  const renderPartValues = (partValues: any, partIndex: number) => {
    return partValues?.groups?.map((group: any, groupIndex: number) => {
      return group.questions.map((question: any, questionIndex: number) => {
        const add = Number(question.question.displayNumber) - 1;

        const highLightPage = () => {
          if (displayNumber == question.question.displayNumber) {
            return "high-light-page";
          }
          return classes.eachQuestion;
        };

        const didExerciseActive = () => {
          if (values?.answers[`${add}`]?.studentAnswer) {
            return "did-exercise";
          }
        };
        return (
          <>
            <Box
              key={question.id}
              className={classnames(
                highLightPage(),
                inReviewListQuestions.includes(question.question.displayNumber) ? "show-page-review" : "hide-review",
                `${didExerciseActive()}-abc`
              )}
              onClick={() => handleClickQuestion(partIndex, groupIndex, questionIndex)}
            >
              <span className={didExerciseActive()}>{question.question.displayNumber}</span>
            </Box>
          </>
        );
      });
    });
  };
  //! Effect

  //! Render
  return (
    <>
      <Box className={classes.totalPage}>
        <Box>
          <FormControlLabel
            value=""
            disabled={!Boolean(values?.answers?.[displayNumber - 1]?.studentAnswer)}
            control={<Checkbox checked={inReviewListQuestions.includes(displayNumber)} onChange={handleCheckBox} />}
            label="Review"
          />
        </Box>
        <Box className={classes.box}>
          <Box className={classes.containerTotalPage}>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {questions?.map((group: any, index: number) => {
                return (
                  <>
                    <div key={group.partNumber} className={classes.eachItem}>
                      <Stack direction="row" spacing={0.2} className="part-item">
                        {renderPartValues(group, index)}
                      </Stack>
                    </div>
                  </>
                );
              })}

              <Box sx={{ width: { md: "20%" } }}></Box>
            </Box>
          </Box>
        </Box>
        <Stack direction="row" spacing={2} className={classes.containerNextPage}>
          <Box className={classes.nextPage} onClick={onClickBackQuestion}>
            <img src={NextQuestion} alt="" />
          </Box>
          <Box className={classes.nextPage} onClick={onClickNextQuestion}>
            <img src={PrevQuestion} alt="" />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default CardTotalPageExams;
