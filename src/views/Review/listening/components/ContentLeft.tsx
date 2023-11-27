import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { ROOT_ORIGINAL_URL } from "constants/api";
import { Box } from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import { decode } from "html-entities";

//
// ! type
interface Props {
  partRenderSelected?: any;
  audio?: any;
}
const renderHtml = {
  mt: "30px",
};
const ContentLeft = ({ partRenderSelected, audio }: Props) => {
  return (
    <div>
      <Box sx={{ mb: "20px" }}>
        <ReactAudioPlayer src={`${ROOT_ORIGINAL_URL}/${audio}`} autoPlay controls />
        <Box sx={renderHtml} dangerouslySetInnerHTML={{ __html: decode(partRenderSelected?.script) || "" }}></Box>
      </Box>
    </div>
  );
};

export default ContentLeft;
