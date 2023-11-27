import { useState } from "react";
//
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
//
//
import { makeStyles } from "@mui/styles";

interface QuestionNumberListI {
  questions: any;
  onClickPage: (id: string) => void;
  setChangeData?: any;
}

const box = {
  width: "200px",
  height: "100vh",
};

const useStyles = makeStyles((theme) => {
  return {
    eachItem: {
      display: "flex",
      paddingBottom: "10px",
    },

    eachQuestion: {
      background: "#333",
      color: "#fff",
      width: "24px",
      height: "24px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
      gap: 5,
    },
  };
});

const QuestionNumberList = ({ questions, onClickPage, setChangeData }: QuestionNumberListI) => {
  const [highlightPage, setHighlightPage] = useState("1");
  //! State
  const classes = useStyles();
  const renderPartValues = (question: any, partIndex: number) => {
    let sectionRender: any = {};
    const onclickPage = () => {
      setHighlightPage(question?.question?.displayNumber);
      setChangeData(Number(question?.question?.displayNumber) - 1);
    };
    const highLightPageEvent = () => {
      if (highlightPage == question?.question?.displayNumber) {
        return { background: "#4C80F1 !important", borderRadius: "50%" };
      }
    };
    return (
      <>
        <Box className={classes.eachQuestion} sx={highLightPageEvent()} onClick={onclickPage}>
          <span>{question?.question?.displayNumber}</span>
        </Box>
      </>
    );
  };

  //! Effect

  //! Render
  return (
    <Box sx={box}>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          <Box sx={{ width: { display: "flex", flexWrap: "wrap", gap: 8 } }}>
            {questions?.map((question: any, index: number) => {
              return <>{renderPartValues(question, index)}</>;
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionNumberList;
