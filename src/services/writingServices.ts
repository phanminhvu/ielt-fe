import { ADMIN_WRITING_URL } from "./../constants/api";
import httpServices from "./httpServices";

class writingServices {
  getListParts(params: any = {}) {
    return httpServices.get(ADMIN_WRITING_URL().GET_LIST_PARTS, params);
  }
  getListQuestion(params: any = {}) {
    return httpServices.get(ADMIN_WRITING_URL().GET_LIST_QUESTION, params);
  }
  postCreateQuestion(body: any) {
    return httpServices.post(ADMIN_WRITING_URL().POST_CREATE_PART, body);
  }
  getDetailQuestion(id: string | number) {
    return httpServices.get(ADMIN_WRITING_URL().GET_DETAIL_QUESTION + id);
  }
  patchUpdateQuestion(id: string | number, body: any) {
    return httpServices.patch(ADMIN_WRITING_URL().PATCH_UPDATE_QUESTION + id, body);
  }
  deleteQuestion(id: string | number) {
    return httpServices.delete(ADMIN_WRITING_URL().DELETE_QUESTION + id);
  }
}
export default new writingServices();
