import { isArray } from "lodash";
import moment from "moment";
class MExam {
  _id?: string;
  examination?: string;
  active?: boolean;
  userIds?: string[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  id?: string;

  stt?: string;

  constructor(data: any) {
    this._id = data?._id;
    this.examination = data?.examination;
    this.active = data?.active;
    this.userIds = data?.userIds;
    this.createdAt = moment(data?.createdAt).format("YYYY-MM-DD HH:mm");
    this.updatedAt = moment(data?.updatedAt).format("YYYY-MM-DD HH:mm");
    this.__v = data?.__v;
    this.id = data?.id;
  }

  static parsePartListFromResponse(data: any) {
    if (isArray(data)) {
      return data.map((el) => new MExam(el));
    }

    return [];
  }
}

export default MExam;
