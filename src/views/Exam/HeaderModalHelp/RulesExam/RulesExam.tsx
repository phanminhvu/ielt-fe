import React from "react";
import IntructionsToCandidates from "views/components/dataSteps/DataContentReading/IntructionsToCandidates";
import InformationForCandidates from "views/components/dataSteps/DataContentReading/InformationForCandidates";

import Text from "components/Typography/index";
import { Box } from "@mui/material";
import { TypeExam } from "constants/enum";
import IntructionsToCandidatesListening from "views/components/dataSteps/DataContentListening/IntructionsToCandidates";
import InformationForCandidatesListening from "views/components/dataSteps/DataContentListening/InformationForCandidates";
import { makeStyles } from "@mui/styles";
// ! type
interface RulesExamI {
  typeExam?: string;
}

const useStyles = makeStyles((theme) => {
  return {
    container: {
      margin: "25px 0 50px 0",
    },
    textTitle: {
      fontWeight: 700,
    },
  };
});

const styleListRule = {
  marginLeft: "16px !important",
};
const styleListRuleListening = {
  marginLeft: "16px !important",
  padding: "16px 0",
};
const RulesExam = (props: RulesExamI) => {
  // !State
  const { typeExam } = props;
  const classes = useStyles();

  // ! Render
  return (
    <>
      <Box className={classes.container}>
        <Text.DescMedium className={classes.textTitle}>INSTRUCTIONS TO CANDIDATES</Text.DescMedium>
        {TypeExam.READING === typeExam && <IntructionsToCandidates styleListRule={styleListRule} />}
        {TypeExam.LISTENING === typeExam && <IntructionsToCandidatesListening styleListRule={styleListRuleListening} />}

        <Text.DescMedium className={classes.textTitle}>INFORMATION FOR CANDIDATES</Text.DescMedium>
        {TypeExam.READING === typeExam && <InformationForCandidates styleListRule={styleListRule} />}
        {TypeExam.LISTENING === typeExam && (
          <InformationForCandidatesListening styleListRule={styleListRuleListening} />
        )}
      </Box>
    </>
  );
};

export default RulesExam;
