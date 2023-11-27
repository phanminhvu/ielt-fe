import cacheService from "services/cacheService";
import { getErrorMsg } from "./../../helpers/index";
import { showError, showSuccess } from "helpers/toast";
import { useQuery, useMutation } from "react-query";
import ieltsService from "services/ieltsService";

export const useIeltsTestCode = () => {
  return useMutation(ieltsService.createIeltsTestCode, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};
export const useIeltsListening = (testCode: any) => {
  return useQuery("get ielts listening data", () => ieltsService.getIeltsListening(testCode), {
    onError: (error) => showError(getErrorMsg(error)),
    // meta: testCode,
  });
};

export const useIeltsWritting = (testCode: any) => {
  return useQuery("get ielts writting data", ieltsService.getIeltsWritting, {
    onError: (error) => showError(getErrorMsg(error)),
    meta: testCode,
  });
};

export const useIeltsSpeaking = (testCode: any) => {
  return useQuery("get ielts speaking data", ieltsService.getIeltsSpeaking, {
    onError: (error) => showError(getErrorMsg(error)),
    meta: testCode,
  });
};
export const useIeltsResult = (query: any) => {
  return useQuery(["get ielts results", query], () => ieltsService.getIeltsTestResult(query), {
    onError: (error) => showError(getErrorMsg(error)),
  });
};

export const useIeltsReading = (testCode: any) => {
  return useQuery("get ielts readding data", ieltsService.getIeltsReading, {
    onError: (error) => showError(getErrorMsg(error)),
    onSuccess: () => {
      cacheService.cache("skill", "READING");
    },
    meta: testCode,
  });
};
export const useUpdateIeltsWriting = () => {
  return useMutation(ieltsService.updateIeltsWriting, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};

export const useUpdateIeltsReadingTest = () => {
  return useMutation(ieltsService.updateIeltsReading, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};
export const useUpdateIeltsListeningTest = () => {
  return useMutation(ieltsService.updateIeltsListening, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};
export const useUpdateIeltsSpeakingTest = () => {
  return useMutation(ieltsService.updateIeltsSpeaking, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};

export const useFinishIeltsWritingTest = () => {
  return useMutation(ieltsService.finishIeltsWriting, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};

export const useFinishIeltsReadingTest = () => {
  return useMutation(ieltsService.finishIeltsReading, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};
export const useFinishIeltsListeningTest = () => {
  return useMutation(ieltsService.finishIeltsListening, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};
export const useFinishIeltsSpeakingTest = () => {
  return useMutation(ieltsService.finishIeltsSpeaking, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};
export const useFinishIeltsTest = () => {
  return useMutation(ieltsService.finishIeltsTest, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};

export const useUploadAudioSpeaking = () => {
  return useMutation(ieltsService.uploadAudioSpeaking, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};

export const useGetExamination = (queries: any) => {
  return useQuery(["get examinations", queries], () => ieltsService.getIeltsExaminatios(queries), {
    onError: (error) => showError(getErrorMsg(error)),
  });
};
export const useFinishIeltsSkill = () => {
  return useMutation(ieltsService.finishIeltsSkill, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};

export const useGetExamInformation = () => {
  return useQuery("get exam information", ieltsService.getExamInformation, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};

export const useGetExamProgress = ({ testCode, skill }: any) => {
  return useQuery("get exam progress", () => ieltsService.getExamProgress({ testCode, skill }), {
    onError: (error) => showError(getErrorMsg(error)),
  });
};

export const useUpdateExamProgress = () => {
  return useMutation(ieltsService.updateExamProgress);
};
