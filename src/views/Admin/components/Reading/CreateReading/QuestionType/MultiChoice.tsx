import React from "react";
import { DataAnswer } from "../../../../../../constants/questionType";
import InputCommon from "../../../../../../components/Input/index";
import { Box, InputAdornment, Stack, Typography } from "@mui/material";
import { Control } from "react-hook-form";

interface Props {
  control: Control<any>;
  disabled?: boolean;

  indexQuestion: number;
}

const MultiChoice = (props: Props) => {
  const { disabled, control, indexQuestion } = props;
  return (
    <div>
      {DataAnswer.map((item: any, indexAnswer: number) => {
        return (
          <div key={indexAnswer}>
            <InputCommon
              control={control}
              id="standard-basic"
              label={item.title}
              variant="standard"
              name={`questions[${indexQuestion}].options[${indexAnswer}]`}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {item.answer}
                  </InputAdornment>
                ),
              }}
              disabled={disabled}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MultiChoice;
