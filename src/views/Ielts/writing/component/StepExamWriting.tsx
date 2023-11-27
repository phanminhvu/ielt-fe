import CardLeft from "components/StepsWorkExercise/Step1/CardLeft";
import React, { useState, useMemo } from "react";
import CardExercise from "../../../../components/Card/CardExercise";
import Grid from "@mui/material/Grid";
import { isEmpty } from "lodash";
import Writing from "./Writing";
import { Box } from "@mui/system";
import CardPageWriting from "./CardPageWriting";
import { useHandleQuestion } from "../../../../providers/HandleQuestionProvider";
import { useGetTestCode } from "hooks/ielts/useGetTestCodeHook";
import { useIeltsWritting } from "hooks/ielts/useIelts";
import LoadingPage from "components/Loading";
import TypeQuestions from "../../../../components/Card/TypeQuestions";

// !type
interface Props {
  data?: any;
  test?: string;
}
const StepExamWriting = (props: Props) => {
  //! State
  const handlerQuestion = useHandleQuestion();
  const page = handlerQuestion?.page || 1;
  const { data, test } = props;

  const contentPart = "Sample Academic Reading Multiple Choice (one answer)";
  const container = {
    padding: "0 20px",
  };

  //
  const partRenderSelected = useMemo(() => {
    const questionsWithPageNumberTemp = (data as any) || [];
    if (!isEmpty(questionsWithPageNumberTemp[page - 1])) {
      return questionsWithPageNumberTemp[page - 1];
    }

    return null;
  }, [page]);
  const styleAddExercise = {
    height: "calc(100vh - 250px)",
  };
  //! Render
  return (
    <Box sx={container}>
      <Box sx={{ mb: "15px" }}>
        <TypeQuestions content={contentPart} />
      </Box>
      <Grid container>
        <CardExercise
          content={<CardLeft dataChangePart={partRenderSelected} />}
          width={6}
          styleAdd={styleAddExercise}
        />
        <CardExercise
          content={<Writing questionId={partRenderSelected?.questionId} groupSelected={page - 1} />}
          width={6}
          styleAdd={styleAddExercise}
        />
      </Grid>

      <CardPageWriting questions={data} />
    </Box>
  );
};

const WritingExamContainer = () => {
  const { testCode } = useGetTestCode();
  const { data, isLoading } = useIeltsWritting(testCode);
  const WritingData = data?.data?.data || [];

  if (isLoading) {
    return <LoadingPage />;
  }

  return <StepExamWriting data={WritingData} />;
};

export default WritingExamContainer;
