import React, { useState, useEffect } from "react";
//
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
//
import { useFormContext } from "react-hook-form";
import { useFormikContext } from "formik";
//
import ImgHideTotalPage from "assets/image/exam/hide-total-page.png";
import NextQuestion from "assets/image/exam/next-exercise.png";
import PrevQuestion from "assets/image/exam/prev-exercise.png";
//
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//
import { makeStyles } from "@mui/styles";
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
// !type
interface Props {
  questions?: any;
  displayNumber?: any;
}

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

const containerNextPage = {
  display: "flex",
  justifyContent: "flex-end",
  width: "13%",
};
const CardPage = (props: Props) => {
  const { questions, displayNumber } = props;
  const classes = useStyles();

  let questionIndex = 0;
  const renderPartValues = (partValues: any) => {
    return partValues?.groups?.map((partGroup: any) => {
      return partGroup.questions.map((item: any) => {
        questionIndex++;
        let hightLight = {};
        if (displayNumber >= questionIndex) {
          hightLight = { background: "#4C80F1" };
        }
        return (
          <>
            <Box className={classes.eachQuestion} style={hightLight} key={item.id}>
              <span>{item.question.displayNumber}</span>
            </Box>
          </>
        );
      });
    });
  };
  return (
    <>
      <Box className="quang-test" sx={TotalPage}>
        <Box>
          <FormControlLabel value="" control={<Checkbox />} label="Review" />
        </Box>
        <Box sx={box}>
          <Box sx={containerTotalPage}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0px 2px" }}>
              {questions?.map((group: any) => {
                return (
                  <>
                    <div key={group.partNumber} className={classes.eachItem}>
                      <Stack direction="row" spacing={0.2} className="part-item">
                        {renderPartValues(group)}
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
            <img src={NextQuestion} alt="" />
          </Box>
          <Box sx={nextPage}>
            <img src={PrevQuestion} alt="" />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default CardPage;
