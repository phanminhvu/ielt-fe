import { getErrorMsg } from "./../../helpers/index";
import { showError } from "helpers/toast";
import { useQuery } from "react-query";
import IeltsReviewService from "services/IeltsReviewService";
export const useGetReadingResultByTestCode = (testCode: number) => {
  return useQuery("get reading results by test code", () => IeltsReviewService.getReadingResultByTestCode(testCode), {
    onError: (err) => showError(getErrorMsg(err)),
  });
};
export const useGetWritingResultByTestCode = (testCode: number) => {
  return useQuery("get writing results by test code", () => IeltsReviewService.getWritingResultByTestCode(testCode), {
    onError: (err) => showError(getErrorMsg(err)),
  });
};
export const useGetListeningResultByTestCode = (testCode: number) => {
  return useQuery("get reading results by test code", () => IeltsReviewService.getListeningResultByTestCode(testCode), {
    onError: (err) => showError(getErrorMsg(err)),
  });
};
export const useGetSpeakingResultByTestCode = (testCode: number) => {
  return useQuery("get reading results by test code", () => IeltsReviewService.getSpeakingResultByTestCode(testCode), {
    onError: (err) => showError(getErrorMsg(err)),
  });
};
