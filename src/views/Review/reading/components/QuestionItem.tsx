import { QUESTION_TYPE } from "interfaces/ieltsQuestionType";
import { useFormikContext } from "formik";
import MatchingType from "./QuestionType/MachingType";
import QuestionBox from "./QuestionType/QuestionBox";
import MachingHeading from "./QuestionType/MachingHeading";
import FlowChart from "./QuestionType/FlowChart";
import SentenceCompletetion from "./QuestionType/SentenceCompletetion";
import IdentifyInformationType from "./QuestionType/IdentifyInformationType";

//
interface PropsQuestionItem {
  expanded?: any;
  questionBox?: any;
  question?: any;
  idShowQuestion?: any;
  onHightLightNumberPage?: (displayNumber: string) => void;

  // onCollapse: (id: any) => (e: any, expanded: any) => void;
  onCollapse?: any;
  questionType?: string;
  image?: string;
  answerList?: string;
  hightLightNumberPage?: any;
}
const QuestionItem = ({
  question = [],
  expanded,
  onCollapse,
  questionType,
  questionBox,
  image,
  onHightLightNumberPage,
  answerList,
  hightLightNumberPage,
  ...remainProps
}: PropsQuestionItem) => {
  const renderQuestion = (data: any) => {
    if (questionType === QUESTION_TYPE.MATCHING_SENTENCE_ENDINGS) {
      return <MatchingType questionBox={questionBox} data={data} numberPage={hightLightNumberPage} />;
    }
    if (questionType === QUESTION_TYPE.SUMMARY_COMPLETION) {
      return <QuestionBox question={question} questionBox={questionBox} />;
    }
    if (questionType === QUESTION_TYPE.NOTE_COMPLETION) {
      return <QuestionBox question={question} questionBox={questionBox} />;
    }
    if (questionType === QUESTION_TYPE.MATCHING_HEADINGS) {
      return <MachingHeading answerList={answerList} data={data} />;
    }
    if (questionType === QUESTION_TYPE.FLOW_CHART_COMPLETION || questionType === QUESTION_TYPE.LABELLING_A_DIAGRAM) {
      return <FlowChart question={question} image={image} />;
    }
    if (questionType === QUESTION_TYPE.SENTENCE_COMPLETION) {
      return <SentenceCompletetion question={question} data={data} />;
    }
    if (
      questionType === QUESTION_TYPE.IDENTIFYING_INFORMATION ||
      questionType === QUESTION_TYPE.MULTIPLE_CHOICE_1_ANSWER ||
      questionType === QUESTION_TYPE.IDENTIFYING_VIEWS_CLAIMS
    ) {
      return (
        <>
          {question?.question?.displayNumber === hightLightNumberPage && (
            <IdentifyInformationType
              questionType={questionType}
              QUESTION_TYPE={QUESTION_TYPE}
              question={question}
              expanded={expanded}
              onCollapse={onCollapse}
              onHightLightNumberPage={onHightLightNumberPage}
            />
          )}
        </>
      );
    }
  };

  return <>{renderQuestion(question)}</>;
};
export default QuestionItem;
//
