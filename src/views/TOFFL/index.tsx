import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ItemQuestion from "components/StepsWorkExercise/Step1/CardItem";
import TitleExam from "components/StepsWorkExercise/TitleExam/TitleExam";
import { QUESTION_TYPE } from "interfaces/ieltsQuestionType";
import { PartContentQuestionsI, QuestionItemI } from "../../constants/typeData.types";
import FormikDebug from "components/CommonStyles/FormikDebug";
// !type
interface PartRenderSlectedI {
  partRenderSelected: PartContentQuestionsI;
  onClickPage: (id: object) => void;
  showQuestion?: string;
  displayNumber: number;
}

const TOFFL = ({ partRenderSelected, onClickPage, showQuestion, displayNumber }: PartRenderSlectedI) => {
  const [expanded, setExpanded] = useState(showQuestion);
  //! Number
  const dataNumber = {
    from: "1",
    to: "6",
  };
  //
  const handleCollapse = (id: Event | any) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? id : false);
    onClickPage(id);
  };
  useEffect(() => {
    setExpanded(showQuestion);
  }, [showQuestion]);
  const renderPartValueGroup = (partRenderSelected: PartContentQuestionsI) => {
    const questionType = partRenderSelected?.questionType;
    if (
      questionType === QUESTION_TYPE.SUMMARY_COMPLETION ||
      questionType === QUESTION_TYPE.NOTE_COMPLETION ||
      questionType === QUESTION_TYPE.MULTIPLE_CHOICE_MULTIPLE_ANSWER ||
      questionType === QUESTION_TYPE.SHORT_ANSWER_QUESTION ||
      questionType === QUESTION_TYPE.FLOW_CHART_COMPLETION ||
      questionType === QUESTION_TYPE.LABELLING_A_DIAGRAM ||
      questionType === QUESTION_TYPE.TABLE_COMPLETION ||
      questionType === QUESTION_TYPE.DIAGRAM_LABELING ||
      questionType === QUESTION_TYPE.MATCHING_SENTENCE_ENDINGS ||
      questionType === QUESTION_TYPE.MATCHING_HEADINGS ||
      questionType === QUESTION_TYPE.MATCHING_PARAGRAPH_INFORMATION
    ) {
      return (
        <ItemQuestion
          image={partRenderSelected?.image}
          questionType={questionType}
          questionBox={partRenderSelected?.questionBox}
          question={partRenderSelected?.questions}
          answerList={partRenderSelected?.answerList}
          displayNumber={displayNumber}
          onClickPage={onClickPage}
        />
      );
    }
    return partRenderSelected?.questions?.map((question: QuestionItemI, questionIdx: number) => {
      return (
        <>
          <ItemQuestion
            key={question.questionId}
            question={question}
            questionIdx={questionIdx}
            questionType={questionType}
            expanded={expanded}
            onCollapse={handleCollapse}
            questionBox={partRenderSelected?.questionBox}
            displayNumber={displayNumber}
            onClickPage={onClickPage}
          />
        </>
      );
    });
  };

  //! Render
  return (
    <Box>
      <TitleExam title={partRenderSelected} />
      <Stack direction="column" spacing={1} sx={{ pb: "100px" }} className="exam">
        {renderPartValueGroup(partRenderSelected)}
      </Stack>
      {/* <FormikDebug /> */}
    </Box>
  );
};

export default TOFFL;
