import { isArray } from "lodash";
class UserPart {
  _id: string;
  fullname: string;
  username: string;
  email: string;
  verified: boolean;
  userType: string;
  active: boolean;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: number;

  constructor(data: any) {
    this._id = data?.id;
    this.username = data?.username;
    this.fullname = data?.fullname;
    this.email = data?.email;
    this.verified = data?.verified;
    this.userType = data?.userType;
    this.active = data?.active;
    this.deleted = data?.deleted;
    this.createdAt = data?.createdAt;
    this.updatedAt = data?.updatedAt;
    this.__v = data?.__v;
  }

  static parseReadingListFromResponse(data: any) {
    if (isArray(data)) {
      return data.map((el) => new UserPart(el));
    }

    return [];
  }
}

export default UserPart;
