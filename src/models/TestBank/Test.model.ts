import { isArray } from "lodash";
import moment from "moment";
class MTest {
  _id?: string;
  skill?: string;
  examCode?: number;
  examName?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  id?: string;
  listeningDetail?: any[];

  readingDetail?: any[];

  constructor(data: any) {
    this._id = data?._id;
    this.skill = data?.skill;
    this.examCode = data?.examCode;
    this.examName = data?.examName;
    this.listeningDetail = data?.listeningDetail;
    this.readingDetail = data?.readingDetail;
    this.createdAt = moment(data?.createdAt).format("YYYY-MM-DD HH:mm");
    this.updatedAt = moment(data?.updatedAt).format("YYYY-MM-DD HH:mm");
    this.__v = data?.__v;
    this.id = data?.id;
  }

  static parsePartListFromResponse(data: any) {
    if (isArray(data)) {
      return data.map((el) => new MTest(el));
    }

    return [];
  }
}

export default MTest;
