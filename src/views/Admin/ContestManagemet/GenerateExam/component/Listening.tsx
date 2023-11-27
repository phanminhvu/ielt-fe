import { Button, makeStyles, Stack, Typography } from "@mui/material";
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
import NoteCompletion from "views/Ielts/listening/components/CardRender/NoteCompletion";
import MachingTypeListening from "views/Ielts/listening/components/CardRender/MachingTypeListening";
import { QuestionItemI } from "constants/typeData.types";

export interface Props {
  dataListening?: [];
}

const Listening = (props: Props) => {
  const { dataListening } = props;

  const renderQuestion = (group: any) => {
    const { questionType } = group;

    // if (questionType === QUESTION_TYPE.SUMMARY_COMPLETION) {
    //   return (
    //     <QuestionBox
    //       // onClickPage={onClickPage}
    //       displayNumber={1}
    //       questions={group?.questions}
    //       questionBox={group?.questionBox}
    //       isView
    //     />
    //   );
    // }

    if (
      questionType === QUESTION_TYPE.NOTE_COMPLETION ||
      questionType === QUESTION_TYPE.MULTIPLE_CHOICE_MULTIPLE_ANSWER ||
      questionType === QUESTION_TYPE.SHORT_ANSWER_QUESTION
    ) {
      return (
        <NoteCompletion
          displayNumber={1}
          questions={group?.questions}
          questionBox={group?.questionBox ?? ""}
          onClickPage={() => {}}
          isView={true}
        />
      );
    }

    if (questionType === QUESTION_TYPE.MATCHING_SENTENCE_ENDINGS) {
      return (
        <MachingTypeListening
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
      questionType === QUESTION_TYPE.FORM_COMPLETION ||
      questionType === QUESTION_TYPE.FLOW_CHART_COMPLETION ||
      questionType === QUESTION_TYPE.LABELLING_A_PLAN_MAP ||
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
    if (questionType === QUESTION_TYPE.MULTIPLE_CHOICE_1_ANSWER) {
      return <MultiChoice isView onClickPage={() => null} questions={group?.questions} />;
    }
  };

  return (
    <Formik initialValues={{}} onSubmit={() => console.log("hello")}>
      {(formik: any) => (
        <Form>
          <div>
            {dataListening?.map((el: any) => {
              console.log("el", el);

              return (
                <div className="listening">
                  <div className="listeningWrapper">
                    <Typography className="titlePart">
                      Part {el?.partNumber}: {el?.partTitle}
                    </Typography>
                    <AudioPlayer
                      preload="none"
                      style={{ borderRadius: "1rem", textAlign: "center", marginTop: 20, marginBottom: 20 }}
                      src={`${AUDIO_URL}/${el?.partAudio}`}
                      onPlay={(e) => console.log("onPlay")}
                      showJumpControls={false}
                      loop={false}
                      autoPlayAfterSrcChange={false}
                    />
                  </div>
                  <div className="listeningWrapper" style={{ marginLeft: "20px" }}>
                    {el?.groups?.map((group: any) => {
                      return (
                        <div>
                          {/* {group?.questionType === QUESTION_TYPE.NOTE_COMPLETION &&
                          group?.questionType === QUESTION_TYPE.SUMMARY_COMPLETION ? (
                            <div dangerouslySetInnerHTML={{ __html: group?.questionBox }} />
                          ) : (
                            <Typography className="titlePart">{group?.questionBox}</Typography>
                          )} */}
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

export default Listening;
