import { ADMIN_ACCOUNT_URL } from "../constants/api";
import httpServices from "./httpServices";

class userService {
  getListAccount(params: any = {}) {
    return httpServices.get(ADMIN_ACCOUNT_URL().GET_LIST_ACCOUNT, params);
  }

  getAccountDetail(id: any) {
    return httpServices.get(ADMIN_ACCOUNT_URL(id).GET_ACCOUNT_DETAIL + id);
  }

  postCreateAccount(body: any) {
    return httpServices.post(ADMIN_ACCOUNT_URL().POST_CREATE_ACCOUNT, body);
  }
  deleteAccount(id: any) {
    return httpServices.delete(ADMIN_ACCOUNT_URL().DELETE_ACCOUNT + id);
  }
  patchUpdateAccount(id: any, body: any) {
    return httpServices.patch(ADMIN_ACCOUNT_URL().PATCH_UPDATE_ACCOUNT + id, body);
  }
}
export default new userService();
