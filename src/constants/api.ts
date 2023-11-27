import { useSelector } from "react-redux";
import { IeltsReducer } from "./../redux/creators/modules/ielts";
export const GET_TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
export const ROOT_ORIGINAL_URL = process.env.REACT_APP_API_URL;
export const ROOT_URL = `${process.env.REACT_APP_API_URL}/api/v1`;

export const BASE_URL = "http://103.226.250.81:8688/api/v1";

// export const POST_LIST_PARTS = `/question-parts?sort=createdAt%3ADESC&skill=${skill}`;

export const GET_LIST_LEVELS = `${ROOT_URL}/configs/question-levels`;
export const POST_UPLOAD_AUDIO = `${ROOT_URL}/upload/single`;

export const POST_FILE_EXCEL = `${ROOT_URL}/examinations/import-excel`;
export const AUTH_URL = {
  AUTH_INFORMATION: `${ROOT_URL}/auth/me`,
  SIGNUP: `${ROOT_URL}/auth/signup`,
  LOGIN: `${ROOT_URL}/auth/signin`,
  STUDENT_LOGIN: `${ROOT_URL}/auth/student/signin`,
  LOGOUT: `${ROOT_URL}/auth/logout`,
  SIGNUP_EMAIL: `${ROOT_URL}/auth/signup`,
  //Social
  LOGIN_SOCIAL: `${ROOT_URL}/auth/signin/social`,
  RESEND_CODE: `${ROOT_URL}/auth/signup/resend-code`,
  VERIFY_EMAIL: `${ROOT_URL}/auth/signup/verify-email`,

  FORGOT_PASSWORD: `${ROOT_URL}/auth/forgot-password`,
  VERIFY_CODE: `${ROOT_URL}/auth/forgot-password/verify-code`,

  RESET_PASSWORD: `${ROOT_URL}/auth/reset-password`,
};

export const IELTS_URL = (testCode?: any, questionId?: string) => {
  return {
    IELTS: `${ROOT_URL}/ielts`,
    LISTENING: `${ROOT_URL}/tests`,
    READING: `${ROOT_URL}/tests/${testCode?.meta}/reading`,
    WRITTING: `${ROOT_URL}/tests/${testCode?.meta}/writing`,
    SPEAKING: `${ROOT_URL}/tests/${testCode?.meta}/speaking`,
    TEST_CODE: `${ROOT_URL}/tests/prepare`,
    SUBMIT_READING_TEST: `${ROOT_URL}/tests/${testCode}`,
    SUBMIT_WRITING_TEST: `${ROOT_URL}/tests/${testCode}`,
    SUBMIT_LISTENING_TEST: `${ROOT_URL}/tests/${testCode}`,
    SUBMIT_SPEAKING_TEST: `${ROOT_URL}/tests/${testCode}`,
    FINISH_READING_TEST: `${ROOT_URL}/tests/${testCode}/finish`,
    FINISH_IELTS_TEST: `${ROOT_URL}/tests/${testCode}/finish`,
    FINISH_WRITING_TEST: `${ROOT_URL}/tests/${testCode}/finish`,
    FINISH_LISTENING_TEST: `${ROOT_URL}/tests/${testCode}/finish`,
    FINISH_SPEAKING_TEST: `${ROOT_URL}/tests/${testCode}/finish`,
    RESULT: `${ROOT_URL}/tests/results`,
    REVIEW_READING: `${ROOT_URL}/tests/${testCode}/reading/result`,
    REVIEW_WRITING: `${ROOT_URL}/tests/${testCode}/writing/result`,
    REVIEW_LISTENING: `${ROOT_URL}/tests/${testCode}/listening/result`,
    REVIEW_SPEAKING: `${ROOT_URL}/tests/${testCode}/speaking/result`,
    UPLOAD_AUDIO_SPEAKING: `${ROOT_URL}/tests/${testCode}/${questionId}/audio-answer`,
    GET_EXAMINATIONS: `${ROOT_URL}/examinations`,
    FINISH_IELTS_EXAM: `${ROOT_URL}/tests`,
    START_TEST: `${ROOT_URL}`,
    EXAM_INFORMATION: `${ROOT_URL}/tests/examination`,
    EXAM_PROGRESS: `${ROOT_URL}/tests`,
  };
};

export const ADMIN_READING_URL = (id?: string | number) => {
  return {
    GET_LIST_PARTS: `${ROOT_URL}/question-parts?sort=createdAt%3ADESC&skill=READING`,
    GET_PART_DETAIL: `${ROOT_URL}/question-parts/`,
    DELETE_PART: `${ROOT_URL}/question-parts/`,
    GET_LIST_QUESTION_GROUP: `${ROOT_URL}/question-parts/${id}/groups`,
    PATCH_UPDATE_PART: `${ROOT_URL}/question-parts/reading/`,
    DELETE_QUESTION_GROUP: `${ROOT_URL}/question-groups/`,
    PATCH_UPDATE_QUESTION_GROUP: `${ROOT_URL}/question-groups/reading/`,
    GET_DETAIL_QUESTION_GROUP: `${ROOT_URL}/question-groups/reading/`,
    GET_LIST_READING_QUESTIONS: `${ROOT_URL}/question-groups?sort=createdAt%3ADESC&skill=READING`,
    GET_LIST_QUESTION_TYPE: `${ROOT_URL}/configs/question-types?skill=READING`,
    POST_LIST_READING_QUESTIONS: `${ROOT_URL}/question-groups/reading`,
    POST_CREATE_PART: `${ROOT_URL}/question-parts/reading`,
  };
};

export const ADMIN_WRITING_URL = (id?: string | number) => {
  return {
    GET_LIST_PARTS: `${ROOT_URL}/question-parts?sort=createdAt%3ADESC&skill=WRITING`,
    POST_CREATE_PART: `${ROOT_URL}/questions/writing`,
    GET_LIST_QUESTION: `${ROOT_URL}/questions?sort=createdAt%3ADESC&skill=WRITING`,
    GET_DETAIL_QUESTION: `${ROOT_URL}/questions/`,
    PATCH_UPDATE_QUESTION: `${ROOT_URL}/questions/writing/`,
    DELETE_QUESTION: `${ROOT_URL}/questions/`,
  };
};
export const ADMIN_LISTENING_URL = (id?: string | number) => {
  return {
    GET_LIST_PARTS: `${ROOT_URL}/question-parts?sort=createdAt%3ADESC&skill=LISTENING`,
    GET_PART_DETAIL: `${ROOT_URL}/question-parts/`,
    DELETE_PART: `${ROOT_URL}/question-parts/`,
    GET_LIST_QUESTION_GROUP: `${ROOT_URL}/question-parts/${id}/groups`,
    PATCH_UPDATE_PART: `${ROOT_URL}/question-parts/listening/`,
    DELETE_QUESTION_GROUP: `${ROOT_URL}/question-groups/`,
    PATCH_UPDATE_QUESTION_GROUP: `${ROOT_URL}/question-groups/listening/`,
    GET_DETAIL_QUESTION_GROUP: `${ROOT_URL}/question-groups/listening/`,
    POST_LIST_LISTENING_QUESTIONS: `${ROOT_URL}/question-groups/listening`,
    POST_CREATE_PART: `${ROOT_URL}/question-parts/listening`,
    GET_LIST_QUESTION_TYPE: `${ROOT_URL}/configs/question-types?skill=LISTENING`,
  };
};
export const ADMIN_SPEAKING_URL = (id?: string | number) => {
  return {
    GET_LIST_PARTS: `${ROOT_URL}/question-parts?sort=createdAt%3ADESC&skill=SPEAKING`,
    GET_PART_DETAIL: `${ROOT_URL}/question-parts/`,
    DELETE_PART: `${ROOT_URL}/question-parts/speaking/`,
    GET_LIST_QUESTION_GROUP: `${ROOT_URL}/question-parts/${id}/groups`,
    PATCH_UPDATE_PART: `${ROOT_URL}/question-parts/speaking/`,
    DELETE_QUESTION_GROUP: `${ROOT_URL}/question-groups/`,
    PATCH_UPDATE_QUESTION_GROUP: `${ROOT_URL}/question-groups/speaking/`,
    GET_DETAIL_QUESTION_GROUP: `${ROOT_URL}/question-groups/speaking/`,
    POST_LIST_SPEAKING_QUESTIONS: `${ROOT_URL}/question-groups/speaking`,
    POST_CREATE_PART: `${ROOT_URL}/question-parts/speaking`,
    GET_LIST_QUESTION_TYPE: `${ROOT_URL}/configs/question-types?skill=SPEAKING`,
  };
};
export const ADMIN_USER_URL = (id?: string | number) => {
  return {
    GET_LIST_PARTS: `${ROOT_URL}/users?sort=createdAt%3ADESC`,
    GET_PART_DETAIL: `${ROOT_URL}/users/`,
    POST_CREATE_PART: `${ROOT_URL}/users/`,
    PATCH_UPDATE_PART: `${ROOT_URL}/users/`,
    DELETE_PART: `${ROOT_URL}/users/`,
  };
};
export const ADMIN_STUDENT_URL = (id?: string | number) => {
  return {
    GET_LIST_PARTS: `${ROOT_URL}/students?sort=createdAt%3ADESC`,
    GET_PART_DETAIL: `${ROOT_URL}/students/`,
    POST_CREATE_PART: `${ROOT_URL}/students`,
    PATCH_UPDATE_PART: `${ROOT_URL}/students/`,
    DELETE_PART: `${ROOT_URL}/students/`,
  };
};

export const ADMIN_CONTEST_URL = (id?: string | number) => {
  return {
    GET_LIST_EXAMINATION: `${ROOT_URL}/examinations/list?sort=createdAt%3ADESC`,
    GET_EXAMINATION_DETAIL: `${ROOT_URL}/examinations/`,
    PUT_UPDATE_EXAMINATION: `${ROOT_URL}/examinations/`,
    DELETE_EXAMINATION: `${ROOT_URL}/examinations/`,
    POST_CREATE_EXAMINATION: `${ROOT_URL}/examinations`,
    GET_LIST_EXAM_GENERATE: `${ROOT_URL}/examinations/${id}/exams`,
    GET_LIS_EXAM_GENERATE_DETAIL: `${ROOT_URL}/examinations/${id}/exams/`,
    GET_DATA_EXPORT_EXCEL: `${ROOT_URL}/examinations/${id}/export-result`,
  };
};

export const ADMIN_ACCOUNT_URL = (id?: string | number) => {
  return {
    GET_LIST_ACCOUNT: `${ROOT_URL}/users?sort=createdAt%3ADESC`,
    GET_ACCOUNT_DETAIL: `${ROOT_URL}/users/`,
    PATCH_UPDATE_ACCOUNT: `${ROOT_URL}/users/`,
    DELETE_ACCOUNT: `${ROOT_URL}/users/`,
    POST_CREATE_ACCOUNT: `${ROOT_URL}/users`,
  };
};
export const EXAM_MANAGEMENT_URL = (id?: string) => {
  return {
    GET_LIST_VIEW_EXAM: `${ROOT_URL}/test-grades/`,
    GET_LIST_TEST_GRADE: `${ROOT_URL}/test-grades?sort=createdAt%3ADESC?`,
    PATCH_TEST_GRADE: `${ROOT_URL}/test-grades/`,
  };
};

export const TEST_URL = (id?: string) => {
  return {
    GET_LIST_TEST: `${ROOT_URL}/exams`,
    GET_TEST_DETAIL: `${ROOT_URL}/exams/`,
    POST_CREATE_TEST: `${ROOT_URL}/exams`,
    PUT_UPDATE_TEST: `${ROOT_URL}/exams/`,
    DELETE_TEST: `${ROOT_URL}/exams/`,
    GENERATE_EXAM: `${ROOT_URL}/examinations/${id}/generate-exam`,
    GET_DATA_EXPORT_EXCEL: `${ROOT_URL}/tests/${id}/export-result`,
  };
};
