import { isArray } from "lodash";
import moment from "moment";
class MContestManagemet {
  _id?: string;
  name?: string;
  active?: boolean;
  userIds?: string[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  id?: string;
  canStart?: boolean;
  constructor(data: any) {
    this._id = data?._id;
    this.name = data?.name;
    this.active = data?.active;
    this.userIds = data?.userIds;
    this.createdAt = moment(data?.createdAt).format("YYYY-MM-DD HH:mm");
    this.updatedAt = moment(data?.updatedAt).format("YYYY-MM-DD HH:mm");
    this.__v = data?.__v;
    this.id = data?.id;
    this.canStart = data?.canStart;
  }

  static parsePartListFromResponse(data: any) {
    if (isArray(data)) {
      return data.map((el) => new MContestManagemet(el));
    }

    return [];
  }
}

export default MContestManagemet;
