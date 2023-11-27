import { useState, useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
//
import { makeStyles } from "@mui/styles";
import { useFormikContext } from "formik";
import { IELT_TEST } from "interfaces/testType";
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
//
import ImgHideTotalPage from "assets/image/exam/hide-total-page.png";
import PrevQuestion from "assets/image/exam/next-exercise.png";
import NextQuestion from "assets/image/exam/prev-exercise.png";
import { useHandleQuestion } from "../../../../providers/HandleQuestionProvider";
//
const box = {
  boxShadow: "rgba(0, 0, 0, 0.30) 0px 5px 15px",
  width: "80%",
  display: { xs: "none", lg: "block" },
  borderRadius: "8px 8px 0 0",
  border: "1px solid #fff",
  background: themeCssSx.backgroundExam.content,
};
const TotalPage = {
  display: "flex",
  width: "100%",
  position: "fixed",
  bottom: { xs: "0", lg: "0px" },
  margin: "0 15px",
};
const containerTotalPage = {
  ...themeCssSx.flexBox.flexBetweenCenter,
  p: "5px 10px",
};
const useStyles = makeStyles((theme) => {
  return {
    eachItem: {
      display: "flex",
    },
    eachQuestion: {
      background: "#000",
      color: "#fff",
      width: "23px",
      height: "23px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
      borderRadius: "2px",
    },
  };
});
const nextPage = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  transform: "rotate(180deg)",
  cursor: "pointer",
  boxShadow:
    "rgba(0, 0, 0, 0.03) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.03) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.03) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.02) 0px 2px 1px, rgba(0, 0, 0, 0.01) 0px 4px 2px, rgba(0, 0, 0, 0.01) 0px 8px 4px, rgba(0, 0, 0, 0.01) 0px 16px 8px, rgba(0, 0, 0, 0.01) 0px 32px 16px",
};

const containerNextPage = {
  display: "flex",
  justifyContent: "flex-end",
  width: "13%",
};

//! Type
interface Props {
  questions?: any;
}
//
const CardPageWriting = (props: Props) => {
  //! State
  const { questions } = props;
  const { handleSubmit } = useFormikContext();
  //
  const handleQuestion = useHandleQuestion();
  const classes = useStyles();
  const { values }: any = useFormikContext();
  const page = handleQuestion?.page || 1;
  const setPage = handleQuestion?.setPage;

  const [checkedReview, setCheckedReview] = useState(false);

  const canNextPage = page < questions.length + 1;
  const canBackPage = page > 1;

  //! Effect

  //! Function
  const handleCheckBox = (event: any) => {
    setCheckedReview(event.target.checked);
  };

  const hideReview = () => {
    setCheckedReview(false);
  };

  const onClickNextQuestion = () => {
    if (page === questions.length) {
      handleSubmit();
    }
    if (!canNextPage) {
      return;
    }

    setPage && setPage(page + 1);
  };

  const onClicBackQuestion = () => {
    if (!canBackPage) {
      return;
    }

    setPage && setPage(page - 1);
  };

  //! Render
  const renderPartValues = (question: any, index: any) => {
    const displayNumber = Number(question.question.displayNumber);

    const handleClickQuestion = () => {
      setPage && setPage(index + 1);
      hideReview();
    };

    const add = displayNumber - 1;
    //
    const classNameEachQuestion = () => {
      if (page === displayNumber) {
        return "high-light-page";
      }

      return classes.eachQuestion;
    };

    //
    const classNameCompleted = () => {
      if (values?.answers[`${add}`]?.studentAnswer) {
        return "did-exercise";
      }
    }; //

    return (
      <>
        <Box
          key={question.id}
          className={`${classNameEachQuestion()} ${`${classNameCompleted()}-abc`} ${
            page === displayNumber && checkedReview ? "show-page-review" : "hide-review"
          }`}
          onClick={handleClickQuestion}
        >
          <span className={classNameCompleted()}>{question.question.displayNumber}</span>
        </Box>
      </>
    );
  };

  return (
    <>
      <Box className="quang-test" sx={TotalPage}>
        <Box>
          <FormControlLabel
            value=""
            control={<Checkbox checked={checkedReview} onChange={handleCheckBox} />}
            label="Review"
          />
        </Box>
        <Box sx={box}>
          <Box sx={containerTotalPage}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0 2px" }}>
              {questions?.map((question: any, index: number) => {
                return (
                  <>
                    <div key={question.partNumber} className={classes.eachItem}>
                      <Stack direction="row" spacing={0.2} className="part-item">
                        {renderPartValues(question, index)}
                      </Stack>
                    </div>
                  </>
                );
              })}

              <Box sx={{ width: { md: "20%" } }}></Box>
            </Box>
            <img src={ImgHideTotalPage} alt="" />
          </Box>
        </Box>
        <Stack direction="row" spacing={2} sx={containerNextPage}>
          <Box sx={nextPage}>
            <img src={PrevQuestion} alt="" onClick={onClicBackQuestion} />
          </Box>
          <Box sx={nextPage}>
            <img src={NextQuestion} alt="" onClick={onClickNextQuestion} />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default CardPageWriting;
