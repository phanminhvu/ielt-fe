import React from "react";
import ReactHtmlParser from "react-html-parser";
import Handlebars from "handlebars";
import { FastField, useFormikContext } from "formik";
import { Box } from "@mui/material";
import StudentAnswer from "./StudentAnswer";
import Text from "components/Typography/index";

type Props = {
  questionBox?: any;
  data?: any;
};

const NoteCompletion = (props: Props) => {
  const { questionBox, data } = props;
  const { values, handleChange }: any = useFormikContext();

  Handlebars.registerHelper("blank", function (blankId: any) {
    const studentAnswer = data[blankId]?.studentAnswer ? data[blankId]?.studentAnswer : "";

    return new Handlebars.SafeString(
      `
        <input
            
            id="input-${blankId}"
            type="text"
            onChange="handleTest()"
            value='${studentAnswer}'
          />
        `
    );
  });

  const test: any = Handlebars.compile(questionBox);
  const yourAnswer = {
    mt: "30px",
    color: "#000000",
  };
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: test() }} onInput={handleChange} />
      <Text.Sub20Bold sx={yourAnswer}>Correct answer</Text.Sub20Bold>
      <Box sx={{ mt: "20px", display: "flex", flexWrap: "wrap" }}>
        {data.map((answer: any, index: any) => {
          return (
            <StudentAnswer
              key={index}
              answer={answer?.question?.answer}
              numberOrder={answer?.question?.displayNumber}
            />
          );
        })}
      </Box>
    </>
  );
};

export default NoteCompletion;
