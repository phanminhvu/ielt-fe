import { useFormikContext } from "formik";

import { TimeExamLeft } from "constants/enum";
import React, { useEffect, useState, useRef } from "react";
import Countdown from "react-countdown";
import cacheService from "services/cacheService";
import { useGetTestCode } from "hooks/ielts/useGetTestCodeHook";
import { useGetExamProgress } from "hooks/ielts/useIelts";
import LoadingPage from "components/Loading";

interface Data {
  minutes: any;
  seconds: any;
  completed: any;
}
interface Props {
  handleSubmitWhenEndedTime?: () => void;
  typeExam: string;
}
function CountDownItem({ handleSubmitWhenEndedTime, typeExam }: Props) {
  const Completionist = () => <span>You are good to go!</span>;
  const { testCode } = useGetTestCode();
  const { data, isLoading } = useGetExamProgress({ testCode, skill: typeExam.toLowerCase() });

  let timeExam = data?.data?.data?.timeRemain || 60000;

  const countdownRef: any = useRef(null);

  useEffect(() => {
    cacheService.cache(TimeExamLeft.LEFT_TIME, timeExam);
  }, []);

  // Renderer callback with condition
  const renderer = ({ minutes, seconds, completed }: Data) => {
    if (completed) {
      // Render a completed state
      handleSubmitWhenEndedTime && handleSubmitWhenEndedTime();
      return <Completionist />;
    }

    cacheService.cache(TimeExamLeft.LEFT_TIME, countdownRef?.current?.state?.timeDelta?.total);
    if ((minutes === 9 && seconds >= 55 && seconds <= 59) || (minutes === 4 && seconds >= 55 && seconds <= 59)) {
      return (
        <span className="change-color">
          {minutes}:{String(seconds).padStart(2, "0")}
        </span>
      );
    }
    // Render a countdown
    return (
      <span style={{ color: "#FEE49B" }}>
        {minutes}:{String(seconds).padStart(2, "0")}
      </span>
    );
  };
  if (isLoading) {
    <LoadingPage />;
  }

  return (
    <div className="App">
      <Countdown date={Date.now() + timeExam} ref={countdownRef} renderer={renderer} />
    </div>
  );
}

export default React.memo(CountDownItem);
