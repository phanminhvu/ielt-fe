import React from "react";
import { Grid, Box, Stack } from "@mui/material";
import TitleRight from "./TitleRight";
import TaskRight from "./TaskRight";
import ContentOption from "./ContentOption";
//
// ! type
interface Props {
  apiContent?: any;
  handleOpen?: any;
  handleOpenAnswer?: any;
  handleSetContentModal?: any;
  question?: any;
}
const ContentRight = ({ apiContent, handleOpen, handleOpenAnswer, handleSetContentModal, question }: Props) => {
  const { displayNumber, image, modelAnswer, organization, questionNumber, tips, usefulGrammarNVocab, text } =
    apiContent?.question || {};
  const container = {
    overflowY: { xs: "", lg: "scroll" },
    height: { xs: "", lg: "calc(100vh - 143px)" },
    position: "relative",
  };

  // !Function

  // !Render
  return (
    <Grid item lg={4.8} sx={container}>
      <Stack direction="column" spacing={2} sx={{ pb: "80px" }}>
        <TitleRight>Band Score</TitleRight>
        <TaskRight questionNumber={displayNumber} handleOpen={handleOpen} />
        <ContentOption
          handleOpenAnswer={handleOpenAnswer}
          event={handleSetContentModal}
          contentRender={apiContent?.question?.text}
        >
          Feedback
        </ContentOption>
        <ContentOption
          handleOpenAnswer={handleOpenAnswer}
          event={handleSetContentModal}
          contentRender={apiContent?.question?.modelAnswer}
        >
          Model Answer
        </ContentOption>
        <ContentOption
          handleOpenAnswer={handleOpenAnswer}
          event={handleSetContentModal}
          contentRender={apiContent?.question?.organization}
        >
          Organisation
        </ContentOption>
        <ContentOption
          handleOpenAnswer={handleOpenAnswer}
          event={handleSetContentModal}
          contentRender={apiContent?.question?.usefulGrammarNVocab}
        >
          Useful Grammar & Vocabulary
        </ContentOption>
        <ContentOption
          handleOpenAnswer={handleOpenAnswer}
          event={handleSetContentModal}
          contentRender={apiContent?.question?.tips}
        >
          Tips
        </ContentOption>
      </Stack>
    </Grid>
  );
};

export default ContentRight;
