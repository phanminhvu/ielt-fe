import React from "react";
//
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
//
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CountDownItem from "./CountDownItem";
import Countdown from "react-countdown";
import { TypeExam } from "constants/enum";
interface Props {
  timeExam?: any;
  handleSubmitWhenEndedTime?: () => void;
  typeExam: string;
}
const CountDown = (props: Props) => {
  const { timeExam, handleSubmitWhenEndedTime, typeExam } = props;
  const Countdown = {
    color: "#FEE49B",
    fontWeight: 700,
  };
  return (
    <Stack direction="row" spacing={1} sx={Countdown}>
      <AccessAlarmIcon />
      <CountDownItem typeExam={typeExam} handleSubmitWhenEndedTime={handleSubmitWhenEndedTime} />
      <Typography
        sx={{
          color: "#FEE49B",
          fontWeight: 700,
        }}
      >
        left
      </Typography>
    </Stack>
  );
};

export default React.memo(CountDown);
