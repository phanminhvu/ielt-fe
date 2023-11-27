import React from "react";
import { Box } from "@mui/material";
import Title from "../Title/Title";
import TextDesc from "../TextDesc/TextDesc";
import OptionButton from "../../../OptionButton/OptionButton";
import ButtonHelp from "../../../../components/ButtonHelp/ButtonHelp";
//
// ! image
import DemoNumberUser from "assets/image/exam/test-help/demo-number-user.png";
import TimeReading from "assets/image/exam/test-help/time-reading.png";
import DemoNavigate from "assets/image/exam/test-help/navigate.png";
import DemoNext from "assets/image/exam/next-exercise.png";
import DemoPrev from "assets/image/exam/prev-exercise.png";
import DemoReview from "assets/image/exam/test-help/demo-review.png";
import DemoSmallNavigate from "assets/image/exam/test-help/demo-small-navigate.png";
import DemoBigNavigate from "assets/image/exam/test-help/demo-big-navigate.png";
import DemoHightLightAnswer from "assets/image/exam/test-help/demo-hight-light-page.png";
import HightLightQuestion from "assets/image/exam/test-help/review-question.png";
import DemoDidAnswer from "assets/image/exam/test-help/demo-did-exercise.png";
import DemoAnswerReview from "assets/image/exam/test-help/demo-review-question.png";
import DemoNotAnswer from "assets/image/exam/test-help/demo-not-answer.png";
import DemoNote from "assets/image/exam/test-help/demo-note.png";
import DemoNoteHighLight from "assets/image/exam/test-help/demp-note-hight-light.png";
import DemoNoteDidHighLight from "assets/image/exam/test-help/demo-note-did-high-light.png";
import DemoCloseNote from "assets/image/exam/test-help/demo-close-note.png";
import DemoDescNote from "assets/image/exam/test-help/demo-desc-note.png";
import DemoDescNoteClear from "assets/image/exam/test-help/demo-clear-note.png";

import DemocNoteClear from "assets/image/exam/test-help/demo-select-clear-note.png";
import DemoNoteClearAll from "assets/image/exam/test-help/demo-select-clear-all-note.png";

const dataTableImage = [
  {
    id: 1,
    image: DemoNext,
    desc: "Click to go to the next question.",
  },
  {
    id: 2,
    image: DemoPrev,
    desc: "Click to go to the previous question.",
  },
  {
    id: 3,
    image: DemoReview,
    desc: "Click if you want to look at this question again later. The question number in the navigation bar will turn into a circle.",
  },
  {
    id: 4,
    image: DemoHightLightAnswer,
    desc: "The blue highlighting shows the question you are looking at.",
  },
  {
    id: 5,
    image: DemoDidAnswer,
    desc: "The underlining shows that you have answered this question.",
  },
  {
    id: 6,
    image: DemoAnswerReview,
    desc: "The circle shows that you want to look at this question again (marked for review).",
  },
  {
    id: 7,
    image: DemoNotAnswer,
    desc: "The black highlighting shows that you have not answered the question.",
  },
];
const HelpReading = () => {
  const trCss = {
    padding: "10px",
  };
  const titleAdd = {
    margin: "40px 0 20px 0",
  };
  return (
    <>
      <Title>At the top of the screen you can see:</Title>
      <img src={DemoNumberUser} alt="" />
      <TextDesc>Your name and candidate number.</TextDesc>
      <img src={TimeReading} alt="" />
      <TextDesc>
        A clock, which tells you how much time you have left. When you hover over the time you can see the seconds.
      </TextDesc>
      <table style={{ margin: "20px 0" }}>
        <tr>
          <td style={trCss}>
            <ButtonHelp />
          </td>
          <td>
            <TextDesc>Click to view the help.</TextDesc>
          </td>
        </tr>
        <tr>
          <td style={trCss}>
            <OptionButton>Help</OptionButton>
          </td>
          <td>
            <TextDesc>Click to hide the screen content temporarily.</TextDesc>
          </td>
        </tr>
      </table>
      <Title>Navigation</Title>
      <TextDesc>At the bottom of the screen you can see the navigation bar</TextDesc>
      <img src={DemoNavigate} alt="" />
      <TextDesc>Click on a number to go to that question.</TextDesc>
      <table>
        {dataTableImage.map((item) => {
          return (
            <tr key={item.id}>
              <td style={{ textAlign: "center" }}>
                <img src={item.image} alt="" />
              </td>
              <td style={{ fontSize: "12px", verticalAlign: "middle" }}>{item.desc}</td>
            </tr>
          );
        })}
      </table>
      <Title>Highlighting</Title>
      <TextDesc>To highlight something in the test:</TextDesc>
      <Title>Select the text you want to highlight using the mouse. </Title>
      <Title>Right click over the text. </Title>
      <img src={DemoNote} alt="" />
      <table>
        <tr>
          <td>
            <img src={DemoNoteHighLight} alt="" />
          </td>
          <td style={{ verticalAlign: "middle", fontSize: "12px", paddingLeft: "20px" }}>
            Click to highlight the text you have selected.
          </td>
        </tr>
        <tr>
          <td>
            <img src={DemoNoteDidHighLight} alt="" />
          </td>
          <td style={{ verticalAlign: "middle", fontSize: "12px", paddingLeft: "20px" }}>
            Click to highlight the text you have selected and to add notes about what you have highlighted.
          </td>
        </tr>
      </table>
      <Title>Notes</Title>
      <TextDesc>
        To close the notes click on X in the top right. To view the notes right-click on the highlighted text (anything
        you write in Notes will be deleted at the end of the test).
      </TextDesc>
      <img src={DemoCloseNote} alt="" />
      <TextDesc>
        You can locate those areas of highlighted text containing notes by hovering over each highlighted text. If a
        small orange box appears the highlighted text contains notes.
      </TextDesc>
      <img src={DemoDescNote} alt="" />
      {/* <TextDesc>To clear your highlighting right click on the highlighted text.</TextDesc>
      <img src={DemoDescNoteClear} alt="" /> */}
      <table>
        <tr>
          <td>
            <img src={DemocNoteClear} alt="" />
          </td>
          <td style={{ verticalAlign: "middle", fontSize: "12px", paddingLeft: "20px" }}>
            Click to clear the highlighting. This will also clear any notes you have made.
          </td>
        </tr>
        <tr>
          <td>
            <img src={DemoNoteClearAll} alt="" />
          </td>
          <td style={{ verticalAlign: "middle", fontSize: "12px", paddingLeft: "20px" }}>
            Click to clear all highlighting including notes.
          </td>
        </tr>
      </table>
      <Title addCss={titleAdd}>Scrolling</Title>
      <TextDesc>For longer texts, you may need to scroll to see all of the test.</TextDesc>
    </>
  );
};

export default HelpReading;
