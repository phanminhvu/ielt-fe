import { isArray } from "lodash";
import moment from "moment";
class MAuth {
  _id?: string;
  username?: string;
  email?: string;
  fullname?: string;
  userType?: string;
  verified?: boolean;

  constructor(data: any) {
    this._id = data?._id;
    this.username = data?.username;
    this.email = data?.email;
    this.fullname = data?.fullname;
    this.userType = data?.userType;
    this.verified = data?.verified;
  }

  static parsePartListFromResponse(data: any) {
    if (isArray(data)) {
      return data.map((el) => new MAuth(el));
    }

    return [];
  }
}

export default MAuth;
