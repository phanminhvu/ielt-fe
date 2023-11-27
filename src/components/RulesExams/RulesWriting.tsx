import React, { Fragment } from "react";
import RulesExam from "components/Exams/RulesExam";
import Text from "components/Typography/index";

const RulesWriting = () => {
  //! State
  const typeExam = "IELTS ACADEMY WRITING";
  const timeExam = "you will have 30 minutes to do the Reading test";
  //
  const li = {
    mb: "6px",
  };

  const InstructionsToTest = () => {
    return (
      <ul>
        <li>
          <Text.DescSmallCard sx={li}>Answer both parts </Text.DescSmallCard>
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
          <Text.DescSmallCard sx={li}>There are twos parts in this test</Text.DescSmallCard>
        </li>
        <li>
          <Text.DescSmallCard sx={li}>
            Part 2 contributes twice as much as Part 1 to the writing score
          </Text.DescSmallCard>
        </li>
        <li>
          <Text.DescSmallCard sx={li}>
            The test clock will show you when there are 10 minnutes and 5 minutes remaining
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

export default RulesWriting;
