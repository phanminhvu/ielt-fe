import { isArray } from "lodash";
import moment from "moment";
class MPartReading {
  _id?: string;
  skill?: string;
  level?: string;
  passageTitle?: string;

  partNumber?: number;
  passageText?: any;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  id?: string;

  constructor(data: any) {
    this._id = data?._id;
    this.skill = data?.skill;
    this.level = data?.level;
    this.passageTitle = data?.passageTitle;
    this.passageText = data?.passageText;
    this.deleted = data?.deleted;
    this.partNumber = data?.partNumber;
    this.createdAt = moment(data?.createdAt).format("YYYY-MM-DD HH:mm");
    this.updatedAt = moment(data?.updatedAt).format("YYYY-MM-DD HH:mm");
    this.__v = data?.__v;
    this.id = data?.id;
  }

  static parsePartListFromResponse(data: any) {
    if (isArray(data)) {
      return data.map((el) => new MPartReading(el));
    }

    return [];
  }
}

export default MPartReading;
