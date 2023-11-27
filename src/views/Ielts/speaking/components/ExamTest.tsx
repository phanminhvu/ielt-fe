import Grid from "@mui/material/Grid";
import CardExercise from "components/Card/CardExercise";
import LoadingPage from "components/Loading";
import { useIeltsSpeaking, useUploadAudioSpeaking } from "hooks/ielts/useIelts";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CardPage from "./CardPage";
//
import { makeStyles } from "@mui/styles";
import SpeakingImageActive from "assets/image/speaking-exam/teach_illustration_active.svg";
import SpeakingImageDeactive from "assets/image/speaking-exam/teach_illustration_deactive.svg";
import { ROOT_ORIGINAL_URL } from "constants/api";
import { TypeStepExamEnum } from "constants/enum";
import useRecorder from "hooks/audio/useAudioHook";
import { part } from "interfaces/recorder";
import { useStepExam } from "provider/StepExamProvider";
import ReactAudioPlayer from "react-audio-player";
import RecordExam from "./RecordExam";
import { useHistory } from "react-router-dom";
import { useGetTestCode } from "hooks/ielts/useGetTestCodeHook";
import { useFormikContext } from "formik";

type Props = {
  data: any;
  testCode: number;
};

const useStyles = makeStyles((theme) => ({
  audioContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "space-between",
    padding: "0 15px",
  },
  cardExercies: {
    display: "flex",
    justifyContent: "center",
    alignItems: "centr",
  },
}));

const ExamTest = (props: Props) => {
  // !State
  const classes = useStyles();
  const { data, testCode } = props;
  const speakingDatas = data?.data?.data || [];
  const [groupSelected, setGroupSelected] = React.useState({
    part: 0,
    group: 0,
    question: 0,
  });
  const { handler } = useStepExam();
  const { handleSubmit } = useFormikContext();
  const { mutateAsync: uploadAudioSpeaking, isLoading: uploadAudioLoading } = useUploadAudioSpeaking();
  let [audioURL, isRecording, startRecording, stopRecording]: any = useRecorder();

  let partsLength = speakingDatas.length - 1 || 0;
  let groupsLength = speakingDatas[groupSelected.part]?.groups?.length - 1 || 0;
  let questionsLength = speakingDatas[groupSelected.part]?.groups[groupSelected.group]?.questions?.length - 1 || 0;
  let audioPath =
    speakingDatas[groupSelected.part]?.groups[groupSelected.group]?.questions[groupSelected.question]?.question
      .questionAudio;
  let displayNumber =
    speakingDatas[groupSelected.part]?.groups[groupSelected.group]?.questions[groupSelected.question]?.question
      .displayNumber;

  // !Function

  // -----Audio------
  const onEndedAudio = () => {
    onStartRecorder();
  };
  const stop = () => {
    stopRecording();
  };

  // -----Recorder-------

  const onStartRecorder = () => {
    startRecording();
  };

  useEffect(() => {
    if (groupSelected.part === part.part1) {
      const timeout = setTimeout(() => {
        stop();
      }, 20000);
      return () => clearTimeout(timeout);
    }
    if (groupSelected.part === part.part2) {
      const timeout = setTimeout(() => {
        stop();
      }, 60000);
      return () => clearTimeout(timeout);
    }
    if (groupSelected.part === part.part3) {
      const timeout = setTimeout(() => {
        stop();
      }, 30000);
      return () => clearTimeout(timeout);
    }
  }, [onStartRecorder]);

  const uploadVideo = async () => {
    const questionId =
      speakingDatas[groupSelected.part]?.groups[groupSelected.group]?.questions[groupSelected.question].questionId;

    const formData = new FormData();
    formData.append("userAudioAnswer", audioURL, "recording.wav");

    await uploadAudioSpeaking(
      { testCode, questionId, body: formData },
      {
        onSuccess: () => {
          if (groupSelected.question < questionsLength) {
            setGroupSelected({ ...groupSelected, question: groupSelected.question + 1 });
            return;
          }
          if (groupSelected.group < groupsLength) {
            setGroupSelected({ ...groupSelected, group: groupSelected.group + 1, question: 0 });
            return;
          }
          if (groupSelected.part < partsLength) {
            setGroupSelected({ ...groupSelected, part: groupSelected.part + 1, group: 0, question: 0 });
            return;
          } else {
            // handler?.setStep && handler.setStep(TypeStepExamEnum.STEP5);
            handleSubmit();
            return;
          }
        },
      }
    );
  };

  useEffect(() => {
    audioURL && uploadVideo();
  }, [audioURL]);

  // !Render
  if (uploadAudioLoading) {
    return <LoadingPage />;
  }
  const styleAddExercise = {
    height: "calc(100vh - 200px)",
  };
  return (
    <div>
      <Grid container className={classes.container}>
        <CardExercise
          styleAdd={styleAddExercise}
          width={5.9}
          className={classes.cardExercies}
          content={
            <div className={classes.audioContent}>
              <ReactAudioPlayer
                onEnded={onEndedAudio}
                src={`${ROOT_ORIGINAL_URL}/${audioPath}`}
                style={{ display: "none" }}
                autoPlay
                controls
              />
              <div>
                {isRecording ? (
                  <img src={SpeakingImageDeactive} alt="speaking image" />
                ) : (
                  <img src={SpeakingImageActive} alt="speaking image" />
                )}
              </div>
            </div>
          }
        />
        <CardExercise
          styleAdd={styleAddExercise}
          className={classes.cardExercies}
          width={5.9}
          content={<RecordExam partAnswering={groupSelected.part} isRecording={isRecording} />}
        />
      </Grid>
      <CardPage displayNumber={displayNumber} questions={speakingDatas} />
    </div>
  );
};

const IeltsSpeakingContainer = () => {
  const { testCode } = useGetTestCode();
  const { data, isLoading } = useIeltsSpeaking(testCode);

  if (isLoading) {
    return <LoadingPage />;
  }

  return <ExamTest testCode={Number(testCode)} data={data} />;
};

export default IeltsSpeakingContainer;
