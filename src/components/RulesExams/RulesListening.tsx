import React, { Fragment } from "react";
import RulesExam from "components/Exams/RulesExam";
import Text from "components/Typography/index";

const RulesListening = () => {
  //! State
  const typeExam = "IELTS ACADEMY LISTENING";
  const timeExam = "you will have 30 minutes to do the Reading test";
  //
  const li = {
    mb: "6px",
  };

  const InstructionsToTest = () => {
    return (
      <ul>
        <li>
          <Text.DescSmallCard sx={li}>Answer all the questions </Text.DescSmallCard>
        </li>
        <li>
          <Text.DescSmallCard sx={li}>You can change your answer at any time during the test </Text.DescSmallCard>
        </li>
      </ul>
    );
  };

  const InformationForTest = () => {
    return (
      <ul>
        <li>
          <Text.DescSmallCard sx={li}>There are 40 questions in this test</Text.DescSmallCard>
        </li>
        <li>
          <Text.DescSmallCard sx={li}>Each questions carries one mark </Text.DescSmallCard>
        </li>
        <li>
          <Text.DescSmallCard sx={li}>There are four parts to the test</Text.DescSmallCard>
        </li>
        <li>
          <Text.DescSmallCard sx={li}>You will hear each part onece</Text.DescSmallCard>
        </li>
        <li>
          <Text.DescSmallCard sx={li}>
            For each part of the test there will be time foe you to look through the questions and time for you to check
            your answers
          </Text.DescSmallCard>
        </li>
        <li>
          <Text.DescSmallCard sx={li}>
            You can prepare a piece of paper and a pencil to take notes during this test
          </Text.DescSmallCard>
        </li>
      </ul>
    );
  };

  return (
    <Fragment>
      <RulesExam
        typeExam={typeExam}
        timeExam={timeExam}
        instructionsToTest={<InstructionsToTest />}
        informationForTest={<InformationForTest />}
      />
    </Fragment>
  );
};

export default RulesListening;
