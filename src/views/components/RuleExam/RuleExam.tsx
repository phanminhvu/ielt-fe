import React, { useEffect } from "react";
import { Box } from "@mui/system";
import ImgHelp from "assets/image/exam/help.png";
import HelpFooter from "../HelpFooter/HelpFooter";
import FooterSubmit from "../FooterSubmit/FooterSubmit";
//
import { makeStyles } from "@mui/styles";
import { warningDetailUser, textBtnSubmit, titleRulesDetailCandidates } from "../../../constants/constants";
import CommonStyles from "components/CommonStyles";
import { useStepExam } from "provider/StepExamProvider";
import { useGetExamInformation, useGetExamProgress } from "hooks/ielts/useIelts";
import cacheService from "services/cacheService";
import { useGetTestCode } from "hooks/ielts/useGetTestCodeHook";
// ! type
interface Props {
  stepRuleExam: {
    typeExam?: string;
    time?: string;
    informationsForCandidates?: React.ReactNode;
    intructionsToCandidates?: React.ReactNode;
  };
  nextStep?: string;
  prevStep?: any;
}

const useStyles = makeStyles((theme) => {
  return {
    container: {
      margin: "16px 10px",
      padding: "16px 10px",
      background: theme.custom?.background.exercises,
      boxShadow: theme.custom?.boxShadow.exercises,
      borderRadius: "6px",
    },
    textTime: {
      padding: "20px 0",
    },
    textTitle: {
      paddingBottom: "20px",
      fontWeight: 700,
    },
    textWarning: {
      ...theme.custom?.flexBox.flexJusCenter,
    },
  };
});

const RuleExam = (props: Props) => {
  //! State

  const {
    nextStep,
    prevStep,
    stepRuleExam: { typeExam, time, informationsForCandidates, intructionsToCandidates },
  } = props;
  const classes = useStyles();
  const { testCode } = useGetTestCode();
  const { data: examProgress } = useGetExamProgress({ testCode, skill: "listening" });

  //! Render
  return (
    <Box className={classes.container}>
      <CommonStyles.Typography variant="descMedium" className={classes.textTitle}>
        IELTS Academic {typeExam}{" "}
      </CommonStyles.Typography>
      <CommonStyles.Typography variant="descSmall" component="p" className={classes.textTime}>
        Time: {time}
      </CommonStyles.Typography>
      <CommonStyles.Typography variant="descMedium" component="p" className={classes.textTitle}>
        {titleRulesDetailCandidates.informationCandidates}
      </CommonStyles.Typography>
      {informationsForCandidates}
      <CommonStyles.Typography variant="descMedium" component="p" className={classes.textTitle} sx={{ mt: "18px" }}>
        {titleRulesDetailCandidates.intructionCandidates}
      </CommonStyles.Typography>
      {intructionsToCandidates}
      <Box className={classes.textWarning}>
        <HelpFooter textHelp={warningDetailUser.onStartTest} image={ImgHelp} />
      </Box>
      <FooterSubmit
        examProgress={examProgress?.data?.data?.timeRemain}
        textBtn={textBtnSubmit.startTest}
        nextStep={nextStep}
      />
    </Box>
  );
};

export default RuleExam;
