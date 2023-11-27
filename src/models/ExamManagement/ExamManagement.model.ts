import { isArray } from "lodash";
import moment from "moment";
class MExamManagement {
  _id?: string;
  userDetail?: {
    email?: string;
    fullname?: string;
  };
  userId?: string;
  answers?: any[];
  finishedDate?: string;
  isGrading?: boolean;
  speaking?: boolean;
  status?: string;

  dueDate?: string;

  createdAt?: string;
  updatedAt?: string;

  __v?: number;
  id?: string;

  constructor(data: any) {
    this._id = data?._id;
    this.userDetail = data?.userDetail;
    // this.userDetail.email = data?.email;
    // this.listening = data?.listening;
    // this.reading = data?.reading;
    // this.writing = data?.writing;
    this.speaking = data?.speaking;
    this.status = data?.status;
    this.dueDate = moment(data?.dueDate).format("YYYY-MM-DD HH:mm");
    this.createdAt = moment(data?.createdAt).format("YYYY-MM-DD HH:mm");
    this.updatedAt = moment(data?.updatedAt).format("YYYY-MM-DD HH:mm");
    this.__v = data?.__v;
    this.id = data?.id;
  }

  static parsePartListFromResponse(data: any) {
    if (isArray(data)) {
      return data.map((el) => new MExamManagement(el));
    }

    return [];
  }
}

export default MExamManagement;
