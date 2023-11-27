import { IELTS_URL } from "constants/api";
import httpServices from "services/httpServices";
import { useQuery } from "react-query";
class IeltsReviewService {
  getReadingResultByTestCode(testCode: number) {
    return httpServices.get(IELTS_URL(testCode).REVIEW_READING);
  }
  getWritingResultByTestCode(testCode: number) {
    return httpServices.get(IELTS_URL(testCode).REVIEW_WRITING);
  }
  getListeningResultByTestCode(testCode: number) {
    return httpServices.get(IELTS_URL(testCode).REVIEW_LISTENING);
  }
  getSpeakingResultByTestCode(testCode: number) {
    return httpServices.get(IELTS_URL(testCode).REVIEW_SPEAKING);
  }
}

export default new IeltsReviewService();
