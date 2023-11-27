import React from "react";
import Title from "views/Exam/HeaderModalHelp/TestHelp/Title/Title";
import TextDesc from "../HeaderModalHelp/TestHelp/TextDesc/TextDesc";
// ! image
import multichoice from "assets/image/exam/task-help/type-answer-multichoice.png";
import multichoiceCheckBox from "assets/image/exam/task-help/type-answer-multichoice-check-box.png";
import gapFill from "assets/image/exam/task-help/gap-fill.png";
import matching from "assets/image/exam/task-help/matching.png";
import matchingSelect from "assets/image/exam/task-help/matching-select.png";
import drapAndDrop from "assets/image/exam/task-help/drag-and-drop.png";
import drapAndDropSelect from "assets/image/exam/task-help/drap-and-drop-select.png";

import { Box } from "@mui/system";

const TaskHelp = () => {
  const container = {
    overflowY: "scroll",
    maxHeight: "420px",
  };
  const titleAdd = {
    margin: "30px 0 20px 0",
  };
  return (
    <Box sx={container}>
      <TextDesc>
        To choose a question either click on the question number at the bottom of the screen or click on the question.
      </TextDesc>
      <Title addCss={titleAdd}>Multiple choice questions in an accordion</Title>
      <TextDesc>Choose your question by clicking on it.</TextDesc>
      <img src={multichoice} alt="" />
      <TextDesc>Click on the answer you think is right.</TextDesc>
      <TextDesc>If you change your mind, click on a different answer.</TextDesc>
      <TextDesc>If you want to leave the question unanswered, click on your answer again.</TextDesc>
      <Title addCss={titleAdd}>Multiple choice questions where there is more than one answer</Title>
      <TextDesc>
        Some questions may ask you to select two or three options. Please make sure you read the instructions and
        questions carefully.
      </TextDesc>
      <img src={multichoiceCheckBox} alt="" />
      <TextDesc>Click on the answers you think are right.</TextDesc>
      <TextDesc>If you change your mind, click on a different answer.</TextDesc>
      <TextDesc>If you want to leave the question unanswered, click on your answer again.</TextDesc>
      <Title addCss={titleAdd}>Gap fill questions</Title>
      <TextDesc>
        To answer a question, click in the gap and write your answer. Some questions may ask you to write your answer in
        a table, flow-chart or diagram.
      </TextDesc>
      <img src={gapFill} alt="" />
      <Title addCss={titleAdd}>Matching questions using a table</Title>
      <TextDesc>
        To select a question, click on the question number in the table. The column will become shaded.
      </TextDesc>
      <img src={matching} alt="" />
      <TextDesc>Select the correct option by clicking on a space in the table. A tick will appear.</TextDesc>
      <img src={matchingSelect} alt="" />
      <TextDesc>If you want to change your answer, click on another space.</TextDesc>
      <TextDesc>If you want to leave the question unanswered, click on the space again.</TextDesc>
      <Title addCss={titleAdd}>Drag and drop questions</Title>
      <img src={drapAndDrop} alt="" style={{ width: "95%" }} />
      <TextDesc>To answer a question, click on the answer and move it into the gap.</TextDesc>
      <img src={drapAndDropSelect} alt="" style={{ width: "95%" }} />
      <TextDesc>If you want to change your answer, move another answer into the gap.</TextDesc>
      <TextDesc>If you want to leave the question unanswered, move the answer back.</TextDesc>
      <TextDesc>Don't forget! You may need to scroll to see all the Reading text and all the questions.</TextDesc>
    </Box>
  );
};

export default TaskHelp;
