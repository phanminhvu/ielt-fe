import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { ROOT_ORIGINAL_URL } from "constants/api";
import { Box } from "@mui/system";
// ! type
interface Props {
  question?: any;
}
const QuestionItem = (props: Props) => {
  const { question } = props;
  return (
    <div>
      <Box sx={{ mb: "20px", mt: "50px" }}>
        <ReactAudioPlayer src={`${ROOT_ORIGINAL_URL}/${question.question.questionAudio}`} autoPlay controls />
      </Box>
    </div>
  );
};

export default QuestionItem;
