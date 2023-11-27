import { isArray } from "lodash";
import moment from "moment";
class AccountManagement {
  _id?: string;
  email?: string;
  password?: string;
  fullname?: string;
  username?: string;
  userType?: string;
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  id?: string;

  constructor(data: any) {
    this._id = data?._id;
    this.username = data?.username;
    this.email = data?.email;
    this.password = data?.password;
    this.fullname = data?.fullname;
    this.userType = data?.userType;
    this.active = data?.active;
    this.createdAt = moment(data?.createdAt).format("YYYY-MM-DD HH:mm");
    this.updatedAt = moment(data?.updatedAt).format("YYYY-MM-DD HH:mm");
    this.__v = data?.__v;
    this.id = data?.id || data?._id;
  }

  static parsePartListFromResponse(data: any) {
    if (isArray(data)) {
      return data.map((el) => new AccountManagement(el));
    }

    return [];
  }
}

export default AccountManagement;
