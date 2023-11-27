import React, { Fragment } from "react";
import RulesExam from "components/Exams/RulesExam";
import Text from "components/Typography/index";

const RuleSpeaking = () => {
  //! State
  const typeExam = "IELTS Academic Speaking";
  const timeExam = "You will have 15 minutes to do the Speaking test.";
  //
  const li = {
    mb: "6px",
  };

  const styles = {
    mb: "6px",
    fontWeight: "bold",
  };

  const InstructionsToTest = () => {
    return (
      <ul>
        <li>
          <Text.DescSmallCard sx={li}>Answer all the questions </Text.DescSmallCard>
        </li>
        <li>
          <Text.DescSmallCard sx={li}>
            Make sure to answer the most you can within the given time limit.
          </Text.DescSmallCard>
        </li>
        <li>
          <Text.DescSmallCard sx={styles}>Before you start:</Text.DescSmallCard>
          <ul>
            <Text.DescSmallCard>
              • For accurate grading, make sure you are in an environment that is similar to an IELTS testing centre.
              Your score might be affected if the audio includes any sound other than the voice of the speaker.
            </Text.DescSmallCard>
          </ul>
        </li>
        <li>
          <Text.DescSmallCard sx={styles}>
            To see if you are ready to take the test, check out the following:
          </Text.DescSmallCard>
          <ul>• I have allowed access to the microphone on my browser.</ul>
          <ul>• I have a fully functional microphone with no issues in audio quality.</ul>
          <ul>
            • I made sure no external factors could potentially affect the quality of my recording (dog barking, traffic
            noises, people talking, etc.)
          </ul>
        </li>
      </ul>
    );
  };

  const InformationForTest = () => {
    return (
      <ul>
        <li>
          <Text.DescSmallCard sx={li}>
            There are 3 parts in this test. You will be asked to answer 19 - 22 questions total.
          </Text.DescSmallCard>
        </li>
        <li>
          <Text.DescSmallCard sx={li}>
            You can prepare a piece of paper and a pencil to use during Part 2 of this test. Please remember that you
            are not allowed to use the paper and pencil in Parts 1 and 3.
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

export default RuleSpeaking;
