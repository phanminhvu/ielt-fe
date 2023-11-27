export interface Option {
  key: string;
  text: string;
  _id: string;
}
export interface contentQuestionItemI {
  blankNumber?: number;
  displayNumber: string | any;
  options: Option[];
  questionText: string;
  _id: string;
}
export interface QuestionItemI {
  question: contentQuestionItemI;
  questionId: string;
  studentAnswer: string;
}

export interface PartContentQuestionsI {
  directionText: string;
  groupNumber: number;
  image: string;
  questionBox?: string;
  questionType: string;
  answerList?: any;
  _id: string;
  questions: QuestionItemI[];
}

export interface AllQuestionsDataI {
  groups: PartContentQuestionsI[];
  partAudio: string;
  partNumber: number;
  _id: string;
}

export interface FormikI {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
  values: any;
}
// handleChange: {
//   (e: ChangeEvent<any>): void;
//   <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
//     ? void
//     : (e: string | ChangeEvent<any>) => void;
// };
