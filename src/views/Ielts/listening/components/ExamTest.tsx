import { Box } from "@mui/system";
import { themeCssSx } from "ThemeCssSx/ThemeCssSx";
import CardExercise from "components/Card/CardExercise";
import FormikDebug from "components/CommonStyles/FormikDebug";
import LoadingPage from "components/Loading";
import { ROOT_ORIGINAL_URL } from "constants/api";
import { RouteBase } from "constants/routeUrl";
import { useFormikContext } from "formik";
import { getErrorMsg } from "helpers";
import { showError } from "helpers/toast";
import { useGetTestCode } from "hooks/ielts/useGetTestCodeHook";
import { useGetExamProgress, useUpdateExamProgress } from "hooks/ielts/useIelts";
import useSagaCreators from "hooks/useSagaCreators";
import { isEmpty } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { authActions } from "redux/creators/modules/auth";
import cacheService from "services/cacheService";
import ieltsService from "services/ieltsService";
import { AllQuestionsDataI } from "../../../../constants/typeData.types";
import CardPage from "./CardPage";
import ContentQuestion from "./ContentQuestion";

interface AllQuestionsDataPropsI {
  data: AllQuestionsDataI[];
  valueVolum?: number;
  prevStep?: any;
  examProgress: any;
}
interface ExamTest {
  valueVolum: number;
  prevStep: any;
}

const ExamTest = (props: AllQuestionsDataPropsI) => {
  //! State
  const { data, valueVolum, prevStep, examProgress } = props;
  // console.log("data", data);

  const { mutateAsync: updateExamProgress } = useUpdateExamProgress();
  const audioData = data || [];
  const audioInitialIndex = examProgress?.currentPart ? examProgress?.currentPart : 0;
  const { testCode } = useGetTestCode();
  const [idxAudioPlaying, setIdxAudioPlaying] = React.useState(audioInitialIndex);
  const { values, handleSubmit, setFieldValue } = useFormikContext();

  const [groupSelected, setGroupSelected] = React.useState({
    part: 0,
    group: 0,
    question: 0,
  });
  const [showQuestion, setShowQuestion] = useState("1");

  const part = data;
  const group = audioData[groupSelected.part]?.groups;

  const questionData = audioData[groupSelected.part]?.groups[groupSelected.group]?.questions || [];
  const displayNumber = questionData[groupSelected.question]?.question?.displayNumber;

  let inputIndex = 0;
  useEffect(() => {
    data.map((part: any) => {
      return part.groups.map((group: any) => {
        return group.questions.map((question: any) => {
          inputIndex++;
          setFieldValue(`answers[${inputIndex - 1}].studentAnswer`, question.studentAnswer ?? "");
        });
      });
    });
  }, []);

  //
  useEffect(() => {
    cacheService.cache("idxAudioPlaying", idxAudioPlaying);
  }, [values, idxAudioPlaying]);

  useEffect(() => {
    handleSubmit();
  }, [displayNumber]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const audio: any = document.getElementById("audio");
  //     const cache = cacheService.getDataCache();
  //     const body = {
  //       currentPart: idxAudioPlaying,
  //       audioPlayedTime: audio?.currentTime,
  //       timeRemain: cache.LEFT_TIME,
  //       // timeRemain: 60000,
  //     };
  //     const saveExamProgress = async () => {
  //       await updateExamProgress({ testCode, skill: "listening", body });
  //     };
  //     saveExamProgress();
  //   }, 20000);
  //   return () => clearInterval(interval);
  // }, [idxAudioPlaying]);

  const onClickPage = (groupRenderSelected: any) => {
    setGroupSelected({ ...groupSelected, ...groupRenderSelected });
  };
  const onClickShowQuestion = (displayNumber: any) => {
    setShowQuestion(displayNumber);
  };

  const partRenderSelected = useMemo(() => {
    if (!isEmpty(audioData[groupSelected?.part])) {
      return audioData[groupSelected?.part];
    }

    return { groups: [], partAudio: "" };
  }, [groupSelected]);

  //! Function
  const onEachAudioEnded = () => {
    if (idxAudioPlaying === audioData.length - 1) {
      return;
    }

    setIdxAudioPlaying(idxAudioPlaying + 1);
  };

  useEffect(() => {
    const audio: any = document.getElementById("audio");
    examProgress?.audioPlayedTime ? (audio.currentTime = examProgress?.audioPlayedTime) : (audio.currentTime = 0);
    const setAudioCurrentTime = () => {
      cacheService.cache("audio_current_time", audio.currentTime);
    };

    window.addEventListener("beforeunload", setAudioCurrentTime);

    return () => window.removeEventListener("beforeunload", setAudioCurrentTime);
  }, []);

  //! Render
  const container = {
    margin: "0 15px",
  };
  const styleHeight = {
    height: themeCssSx.heightExercise.examTest,
  };
  return (
    <>
      <Box sx={container}>
        {/* <TypeQuestions content={questionType} /> */}
        <div>
          <ReactAudioPlayer
            src={`${ROOT_ORIGINAL_URL}/${audioData[idxAudioPlaying]?.partAudio}`}
            autoPlay
            controls
            style={{ display: "none" }}
            onEnded={onEachAudioEnded}
            volume={valueVolum}
            id="audio"
          />
        </div>
        <Box>
          <CardExercise
            content={
              <ContentQuestion
                partTypeQuestions={partRenderSelected.groups[groupSelected.group]}
                audio={partRenderSelected.partAudio}
                displayNumber={displayNumber}
                onClickPage={onClickPage}
              />
            }
            styleAdd={styleHeight}
          />
        </Box>
      </Box>
      <CardPage
        onClickPage={onClickPage}
        questions={audioData}
        setDisplayNumber={onClickShowQuestion}
        groupSelected={groupSelected}
        part={part}
        group={group}
        question={questionData}
        displayNumber={displayNumber}
      />
    </>
  );
};

const IeltsListeningContainer = ({ valueVolum, prevStep }: ExamTest) => {
  const { dispatch } = useSagaCreators();
  const history = useHistory();

  const testCode = useMemo(() => {
    return localStorage.getItem("testCode");
  }, []);
  const { data: examProgress, isLoading: examProgressLoading } = useGetExamProgress({ testCode, skill: "listening" });
  const examDataProgress = examProgress?.data?.data;
  const { data, isLoading } = useQuery("get ielts listening data", () => ieltsService.getIeltsListening(testCode), {
    onSuccess: () => {
      cacheService.cache("skill", "LISTENING");
    },
    onError: (error) => {
      showError(getErrorMsg(error));

      localStorage.removeItem("testCode");
      setTimeout(() => {
        dispatch(authActions.logout);
      }, 6000);
    },
  });

  useEffect(() => {
    if (examDataProgress?.timeRemain === 1000) {
      history.push(RouteBase.IeltsReading);
    }
  }, []);

  if (isLoading || examProgressLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <ExamTest valueVolum={valueVolum} examProgress={examDataProgress} prevStep={prevStep} data={data?.data.data} />
      {/* <FormikDebug /> */}
    </>
  );
};

export default IeltsListeningContainer;
