import React from "react";
import { ROOT_ORIGINAL_URL } from "constants/api";
import ReactAudioPlayer from "react-audio-player";
import { Box } from "@mui/system";
import Text from "../../../../components/Typography/index";
interface Props {
  dataAudio?: any;
}
const AnswerAudio = (props: Props) => {
  const { dataAudio } = props;
  const correctAnser = {
    color: "#000000",
    mb: "20px",
  };
  return (
    <div>
      <Box sx={{ mb: "20px" }}>
        <ReactAudioPlayer src={`${ROOT_ORIGINAL_URL}/${dataAudio?.studentAnswerAudio}`} controls />
      </Box>
      <Box>
        <Text.Sub20Bold sx={correctAnser}>Correct Answer</Text.Sub20Bold>
        <ReactAudioPlayer src={`${ROOT_ORIGINAL_URL}/${dataAudio?.question?.modelAnswerAudio}`} controls />
      </Box>
    </div>
  );
};

export default AnswerAudio;
