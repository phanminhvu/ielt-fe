import React from "react";
import NoteCompletion from "./NoteCompletion";
import { QUESTION_TYPE } from "interfaces/ieltsQuestionType";
import SentenceCompletetion from "../../../../components/Ielts/components/SentenceCompletetion";
import MultiChoice from "./MultiChoice";
import Sign from "../../reading/components/Sign";
import FlowChart from "./FlowChart";
//
interface Props {
  partRenderSelected?: any;
  displayNumber?: any;
}
const ContentRight = ({ partRenderSelected, displayNumber }: Props) => {
  const questionType = partRenderSelected?.questionType;

  const renderPartValueGroup = (partRenderSelected: any, displayNumber: any) => {
    if (questionType === QUESTION_TYPE.NOTE_COMPLETION) {
      return <NoteCompletion questionBox={partRenderSelected?.questionBox} data={partRenderSelected?.questions} />;
    }
    if (questionType === QUESTION_TYPE.SENTENCE_COMPLETION) {
      // return <SentenceCompletetion questionItem={partRenderSelected} />;
    }
    if (questionType === QUESTION_TYPE.LABELLING_A_PLAN_MAP) {
      return <FlowChart image={partRenderSelected?.image} question={partRenderSelected?.questions} />;
    }
    if (questionType === QUESTION_TYPE.MULTIPLE_CHOICE_1_ANSWER) {
      return (
        <>
          {partRenderSelected?.questions?.map((item: any) => {
            const check = item.question.displayNumber === displayNumber;
            return (
              <>
                <MultiChoice dataQuestions={item} />
              </>
            );
          })}
        </>
      );
    }
  };
  return (
    <>
      <Sign />
      <div>{renderPartValueGroup(partRenderSelected, displayNumber)}</div>
    </>
  );
};

export default ContentRight;
