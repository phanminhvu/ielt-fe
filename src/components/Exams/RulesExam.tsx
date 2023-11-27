import React from "react";
//
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
//
import Text from "components/Typography/index";
//
import { useStepExam } from "../../provider/StepExamProvider";
import { TypeStepExamEnum } from "constants/enum";
import ButtonCommon from "components/Button/ButtonCommon";
// ! type
interface Data {
  typeExam: string;
  timeExam: string;
  instructionsToTest: any;
  informationForTest: any;
}

const RulesExam = ({ typeExam, timeExam, instructionsToTest, informationForTest }: Data) => {
  const { handler } = useStepExam();

  const card = {
    width: { xs: "90%", md: "90%", lg: "90%" },
    borderRadius: "16px",
    margin: "0 auto",
    boxShadow: "rgba(0, 0, 0, 0.30) 0px 5px 15px",
    padding: { xs: "24px 20px", md: "48px 50px 44px 50px" },
    // padding: "48px 50px 44px 50px",
    mt: "30px",
    overflowY: { xs: "", lg: "scroll" },
    height: { xs: "", lg: "calc(100vh - 70px)" },
  };
  const buttonSubmit = {
    width: { xs: "100%", md: "70%", lg: "50%" },
    background: "#111114",
    color: "#fff",
    maxWidth: "425px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    "&:hover": {
      background: "#111114",
    },
  };

  //! Render
  return (
    <Card sx={card}>
      <Box sx={{ width: { xs: "100%", sm: "90%", md: "660px" }, margin: "0 auto" }}>
        <Box sx={{ textAlign: "center", p: "0px 0 40px 0" }}>
          <Text.Title32bold>{typeExam}</Text.Title32bold>
          <Text.DescSmallCard sx={{ mt: "12px" }}>{timeExam}</Text.DescSmallCard>
        </Box>
        <Box sx={{ pb: "24px" }}>
          <Box sx={{ mb: "12px" }}>
            <Text.Sub20Bold sx={{ color: "#36373b" }}>Instructions To Test Takes</Text.Sub20Bold>
          </Box>
          {instructionsToTest}
        </Box>
        <Box>
          <Box sx={{ mb: "20px" }}>
            <Text.Sub20Bold sx={{ color: "#36373b" }}>Information For Test Takes</Text.Sub20Bold>
          </Box>

          {informationForTest}
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
        <ButtonCommon.ButtonFullBg
          sx={buttonSubmit}
          onClick={() => {
            handler?.setStep && handler.setStep(TypeStepExamEnum.STEP2);
          }}
        >
          start test
        </ButtonCommon.ButtonFullBg>
      </Box>
    </Card>
  );
};

export default RulesExam;
