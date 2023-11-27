import { makeStyles } from "@mui/styles";
import Text from "components/Typography";
import React from "react";
import { ROOT_ORIGINAL_URL } from "constants/api";
import ReactAudioPlayer from "react-audio-player";
import AnswerAudio from "./AnswerAudio";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  audio: {
    display: "flex",
    justifyContent: "center",
  },
}));
type Props = {
  audios: any;
  numberQuestion?: any;
};

const MyAnswers = (props: Props) => {
  // !State
  const classes = useStyles();

  const { audios, numberQuestion } = props;
  return (
    <div className={classes.container}>
      <Text.SubTitle>My Answer</Text.SubTitle>
      {audios?.questions?.map((audio: any) => {
        return <>{numberQuestion === audio.question.displayNumber && <AnswerAudio dataAudio={audio} />}</>;
      })}
    </div>
  );
};

export default MyAnswers;
