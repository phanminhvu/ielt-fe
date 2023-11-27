import { useSelector } from "react-redux";
import { IELTS_URL } from "constants/api";
import httpServices from "services/httpServices";
import queryString from "query-string";

class IeltsService {
  createIeltsTestCode(body = {}) {
    return httpServices.post(IELTS_URL().TEST_CODE, { ...body });
  }
  getIeltsListening(testCode: any) {
    return httpServices.get(`${IELTS_URL().LISTENING}/${testCode}/listening`);
  }
  createIeltsListening(body = {}) {
    return httpServices;
  }
  getIeltsReading(testCode: any) {
    return httpServices.get(IELTS_URL(testCode).READING);
  }

  getIeltsWritting(testCode: any) {
    return httpServices.get(IELTS_URL(testCode).WRITTING);
  }

  updateIeltsWriting(data: any) {
    const { values, testCode } = data;
    return httpServices.patch(IELTS_URL(testCode).SUBMIT_WRITING_TEST, values);
  }

  updateIeltsReading(data: any) {
    const { values, testCode } = data;
    return httpServices.patch(IELTS_URL(testCode).SUBMIT_READING_TEST, values);
  }
  updateIeltsListening(data: any) {
    const { values, testCode } = data;
    return httpServices.patch(IELTS_URL(testCode).SUBMIT_LISTENING_TEST, values);
  }
  updateIeltsSpeaking(data: any) {
    const { values, testCode } = data;
    return httpServices.patch(IELTS_URL(testCode).SUBMIT_SPEAKING_TEST, values);
  }
  getIeltsSpeaking(testCode: any) {
    return httpServices.get(IELTS_URL(testCode).SPEAKING);
  }
  getIeltsTestResult(query: { page: number; skill: string; pageSize: number }) {
    const { page = 1, skill, pageSize = 5 } = query;
    return httpServices.get(`${IELTS_URL().RESULT}?page=${page}&pageSize=${pageSize}&skill=${skill}`);
  }

  finishIeltsReading(testCode: any) {
    return httpServices.post(IELTS_URL(testCode).FINISH_READING_TEST);
  }
  finishIeltsWriting(testCode: any) {
    return httpServices.post(IELTS_URL(testCode).FINISH_WRITING_TEST);
  }
  finishIeltsListening(testCode: any) {
    return httpServices.post(IELTS_URL(testCode).FINISH_LISTENING_TEST);
  }
  finishIeltsSkill({ testCode, skill }: any) {
    return httpServices.post(`${IELTS_URL().FINISH_IELTS_EXAM}/${testCode}/${skill}/finish`);
  }
  finishIeltsSpeaking(testCode: any) {
    return httpServices.post(IELTS_URL(testCode).FINISH_SPEAKING_TEST);
  }
  finishIeltsTest({ testCode }: any) {
    return httpServices.post(IELTS_URL(testCode).FINISH_IELTS_TEST);
  }

  uploadAudioSpeaking({ testCode, questionId, body }: { testCode: any; questionId: string; body: any }) {
    return httpServices.patch(IELTS_URL(testCode, questionId).UPLOAD_AUDIO_SPEAKING, body);
  }

  getIeltsExaminatios(queries: any) {
    return httpServices.get(`${IELTS_URL().GET_EXAMINATIONS}?${queryString.stringify(queries)}`);
  }

  saveExamToLocalStorage({ skill, exam }: any) {
    localStorage.setItem(skill, exam);
  }

  getExamInformation() {
    return httpServices.get(IELTS_URL().EXAM_INFORMATION);
  }

  getExamProgress({ testCode, skill }: any) {
    return httpServices.get(`${IELTS_URL().EXAM_PROGRESS}/${testCode}/${skill}/progress`);
  }

  updateExamProgress({ testCode, skill, body }: any) {
    return httpServices.patch(`${IELTS_URL().EXAM_PROGRESS}/${testCode}/${skill}/progress`, body);
  }

  // updateIeltExamination(body:any){
  //   return httpServices.
  // }
}

export default new IeltsService();
