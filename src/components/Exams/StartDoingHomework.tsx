//
import Box from "@mui/material/Box";
//
//
import Step2ExamContent from "components/Exams/components/Step2ExamContent/Step2ExamContent";
// import ButtonNumberPage from "components/Button/ButtonNumberPage";

interface Props {
  data?: any;
  test?: string;
}

const ExamTest = (props: Props) => {
  const { data, ...rest } = props;

  return (
    <Box>
      <Step2ExamContent />
    </Box>
  );
};

export default ExamTest;
