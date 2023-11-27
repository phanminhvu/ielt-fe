import { makeStyles, Typography } from "@mui/material";
import "./styles.scss";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { AUDIO_URL } from "constants/constants";
import { QUESTION_TYPE } from "interfaces/ieltsQuestionType";
import QuestionBox from "components/Ielts/components/QuestionBox";
import MatchingType from "components/Ielts/components/MachingType";
import MachingHeading from "components/Ielts/components/MachingHeading";
import FlowChart from "components/Ielts/components/FlowChart";
import SentenceCompletetion from "components/Ielts/components/SentenceCompletetion";
import IdentifyInformationType from "components/Ielts/components/IdentifyInformationType";
import ReactHtmlParser from "react-html-parser";
import { Form, Formik } from "formik";
import MultiChoice from "views/Ielts/listening/components/CardRender/MultiChoice";
import MachingTypeListening from "views/Ielts/listening/components/CardRender/MachingTypeListening";
import { QuestionItemI } from "constants/typeData.types";
import NoteCompletion from "views/Ielts/listening/components/CardRender/NoteCompletion";
import MatchingParagrapInformation from "components/Ielts/components/MatchingParagrapInformation";

export interface Props {
  dataReading?: [];
}

const Reading = (props: Props) => {
  const { dataReading } = props;
  const renderQuestion = (group: any) => {
    const { questionType } = group;

    if (questionType === QUESTION_TYPE.MATCHING_SENTENCE_ENDINGS) {
      return (
        <MatchingType
          directionText={group?.directionText}
          answerList={group?.answerList}
          questionBox={group?.questionBox ?? ""}
          questions={group?.questions}
          onClickPage={() => null}
          displayNumber={1}
          isView={true}
        />
      );
    }

    if (
      questionType === QUESTION_TYPE.NOTE_COMPLETION ||
      questionType === QUESTION_TYPE.SUMMARY_COMPLETION ||
      questionType === QUESTION_TYPE.MULTIPLE_CHOICE_MULTIPLE_ANSWER ||
      questionType === QUESTION_TYPE.SHORT_ANSWER_QUESTION
    ) {
      return (
        <QuestionBox
          onClickPage={() => null}
          displayNumber={1}
          questions={group?.questions}
          questionBox={group?.questionBox ?? ""}
          isView={true}
        />
      );
    }
    if (questionType === QUESTION_TYPE.MATCHING_HEADINGS) {
      return (
        <MachingHeading
          questions={group?.questions}
          answerList={group?.answerList}
          onClickPage={() => {}}
          displayNumber={1}
          isView={true}
        />
      );
    }
    if (
      questionType === QUESTION_TYPE.FLOW_CHART_COMPLETION ||
      questionType === QUESTION_TYPE.DIAGRAM_LABELING ||
      questionType === QUESTION_TYPE.TABLE_COMPLETION
    ) {
      return (
        <FlowChart
          onClickPage={() => null}
          question={group.questions}
          image={group?.image}
          displayNumber={1}
          isView={true}
        />
      );
    }
    if (questionType === QUESTION_TYPE.SENTENCE_COMPLETION) {
      return group?.questions.map((question: QuestionItemI) => {
        return (
          <>
            <SentenceCompletetion
              key={question.questionId}
              onClickPage={() => null}
              displayNumber={1}
              questionItem={question}
              isView={true}
            />
          </>
        );
      });
    }
    if (
      questionType === QUESTION_TYPE.IDENTIFYING_INFORMATION ||
      questionType === QUESTION_TYPE.MULTIPLE_CHOICE_1_ANSWER ||
      questionType === QUESTION_TYPE.IDENTIFYING_VIEWS_CLAIMS
    ) {
      return group?.questions?.map((question: QuestionItemI, questionIdx: number) => {
        return (
          <div key={question?.questionId}>
            <IdentifyInformationType
              directionText={group?.directionText}
              questionType={questionType}
              QUESTION_TYPE={QUESTION_TYPE}
              question={question}
              displayNumber={1}
              questionIdx={questionIdx}
              onClickPage={() => null}
              isView={true}
            />
          </div>
        );
      });
    }
  };

  return (
    <Formik initialValues={{}} onSubmit={() => console.log("hello")}>
      {(formik: any) => (
        <Form>
          <div>
            {dataReading?.map((el: any) => {
              return (
                <div className="listening">
                  <div className="listeningWrapper">
                    <Typography className="titlePart">
                      Part {el?.partNumber}: {el?.passageTitle}
                    </Typography>
                    <div dangerouslySetInnerHTML={{ __html: el?.passageText }} />
                  </div>
                  <div className="listeningWrapper" style={{ marginLeft: "20px" }}>
                    {el?.groups?.map((group: any) => {
                      return (
                        <div>
                          {ReactHtmlParser(group?.directionText ?? "")}
                          {renderQuestion(group)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Reading;
