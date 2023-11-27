import { isArray } from "lodash";
import moment from "moment";
class MQuestionWriting {
  questionText: string;
  title: string;
  image: string;
  analysisType: string;
  questionType: string;
  tips: string;

  questionPartNumber?: number;
  usefulGrammarNVocab: string;
  ideaSuggestion: string;
  organization: string;
  modelAnswer: string;
  _id?: string;
  skill?: string;
  level?: string;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  id?: string;

  constructor(data: any) {
    this._id = data?._id;
    this.skill = data?.skill;
    this.level = data?.level;
    this.deleted = data?.deleted;
    this.createdAt = moment(data?.createdAt).format("YYYY-MM-DD HH:mm");
    this.updatedAt = moment(data?.updatedAt).format("YYYY-MM-DD HH:mm");
    this.questionPartNumber = data?.questionPartNumber;
    this.__v = data?.__v;
    this.id = data?.id;
    this.analysisType = data?.analysisType;
    this.ideaSuggestion = data?.ideaSuggestion;
    this.modelAnswer = data?.modelAnswer;
    this.organization = data?.organization;
    this.questionType = data?.questionType;
    this.questionText = data?.questionText;
    this.usefulGrammarNVocab = data?.usefulGrammarNVocab;
    this.image = data?.image;
    this.tips = data?.tips;
    this.title = data?.title;
  }

  static parsePartListFromResponse(data: any) {
    if (isArray(data)) {
      return data.map((el) => new MQuestionWriting(el));
    }

    return [];
  }
}

export default MQuestionWriting;
