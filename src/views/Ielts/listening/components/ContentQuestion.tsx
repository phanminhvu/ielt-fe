import NoteCompletion from "./CardRender/NoteCompletion";
import { QUESTION_TYPE } from "interfaces/ieltsQuestionType";
import MultiChoice from "./CardRender/MultiChoice";
import TitleExam from "components/StepsWorkExercise/TitleExam/TitleExam";
import FlowChart from "./CardRender/FlowChart";
import SentenceCompletetion from "components/Ielts/components/SentenceCompletetion";
import MachingTypeListening from "./CardRender/MachingTypeListening";
import MachingHeading from "../../../../components/Ielts/components/MachingHeading";
import MatchingType from "components/Ielts/components/MachingType";
import { useNoted } from "hooks/ielts/useNoted";
import { useHightLightText } from "hooks/ielts/useHighlightText";
import CommonStyles from "components/CommonStyles";
import { useClearHighlight } from "hooks/ielts/useClearHighlight";
import { PartContentQuestionsI, QuestionItemI } from "constants/typeData.types";
import { useRightClick } from "hooks/ielts/useRightClick";
import { useCallback, useMemo } from "react";
// ! type
interface PartRenderSlectedI {
  partTypeQuestions: PartContentQuestionsI;
  audio?: string;
  displayNumber: number;
  onClickPage: (options: object) => void;
}
const ContentQuestion = ({ partTypeQuestions, audio, displayNumber, onClickPage }: PartRenderSlectedI) => {
  const questionType = partTypeQuestions?.questionType;
  // !Hook
  const { isAction, position, toggleAction, className, selectioned } = useRightClick();
  const { clearAll, clearMarkItem } = useClearHighlight({ className });
  const { onChangeInput, onClickNote, isNoted, noted, toggleNote } = useNoted({ toggleAction, className });
  const { onHighlightText, restoreHighlightState } = useHightLightText();
  restoreHighlightState();
  const highlightText = (e: React.MouseEvent<HTMLElement>) => {
    toggleAction();
    e.stopPropagation();
    e.preventDefault();
    onHighlightText(selectioned);
  };

  const renderPartValueGroup = (partTypeQuestions: PartContentQuestionsI) => {
    if (questionType === QUESTION_TYPE.MATCHING_SENTENCE_ENDINGS) {
      return (
        <MatchingType
          answerList={partTypeQuestions?.answerList ?? ""}
          questionBox={partTypeQuestions?.questionBox ?? ""}
          questions={partTypeQuestions.questions}
          onClickPage={onClickPage}
          displayNumber={displayNumber}
        />
      );
    }

    if (
      questionType === QUESTION_TYPE.NOTE_COMPLETION ||
      questionType === QUESTION_TYPE.MULTIPLE_CHOICE_MULTIPLE_ANSWER ||
      questionType === QUESTION_TYPE.SHORT_ANSWER_QUESTION
    ) {
      return (
        <NoteCompletion
          displayNumber={displayNumber}
          questions={partTypeQuestions.questions}
          questionBox={partTypeQuestions.questionBox ?? ""}
          onClickPage={onClickPage}
        />
      );
    }

    if (questionType === QUESTION_TYPE.MATCHING_HEADINGS) {
      return (
        <MachingHeading
          questions={partTypeQuestions.questions}
          answerList={partTypeQuestions.answerList}
          onClickPage={onClickPage}
          displayNumber={displayNumber}
        />
      );
    }

    if (
      questionType === QUESTION_TYPE.FLOW_CHART_COMPLETION ||
      questionType === QUESTION_TYPE.LABELLING_A_DIAGRAM ||
      questionType === QUESTION_TYPE.LABELLING_A_PLAN_MAP ||
      questionType === QUESTION_TYPE.FORM_COMPLETION ||
      questionType === QUESTION_TYPE.DIAGRAM_LABELING ||
      questionType === QUESTION_TYPE.TABLE_COMPLETION
    ) {
      return (
        <FlowChart
          onClickPage={onClickPage}
          questions={partTypeQuestions.questions}
          displayNumber={displayNumber}
          image={partTypeQuestions.image}
        />
      );
    }

    if (questionType === QUESTION_TYPE.SENTENCE_COMPLETION) {
      return partTypeQuestions?.questions.map((question: QuestionItemI) => {
        return (
          <SentenceCompletetion
            key={question.questionId}
            onClickPage={onClickPage}
            displayNumber={displayNumber}
            questionItem={question}
          />
        );
      });
    }

    if (
      questionType === QUESTION_TYPE.MULTIPLE_CHOICE_1_ANSWER ||
      questionType === QUESTION_TYPE.IDENTIFYING_INFORMATION ||
      questionType === QUESTION_TYPE.IDENTIFYING_VIEWS_CLAIMS
    ) {
      return <MultiChoice onClickPage={onClickPage} questions={partTypeQuestions?.questions} />;
    }

    return null;
  };

  return (
    <>
      <TitleExam title={partTypeQuestions} />

      <div className="exam">
        {renderPartValueGroup(partTypeQuestions)}
        {isAction && (
          <CommonStyles.HightLightDialog
            clearAll={clearAll}
            onCloseAction={toggleAction}
            onClickNote={onClickNote}
            position={position}
            clearMarkItem={clearMarkItem}
            highlightText={highlightText}
          />
        )}
        {isNoted && (
          <CommonStyles.Note
            onCloseNote={toggleNote}
            noted={noted}
            position={position}
            onChangeTextNote={onChangeInput}
            className={className}
          />
        )}
      </div>
    </>
  );
};

export default ContentQuestion;
