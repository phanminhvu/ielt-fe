import { ResponseGenerator } from "interfaces/ResponseGenerator";
import { QuestionUser, RequestListListening } from "interfaces/user";
import { ADMIN_STUDENT_URL, ADMIN_USER_URL } from "../constants/api";
import httpServices from "./httpServices";

class studentService {
  getListParts(params: RequestListListening): Promise<ResponseGenerator<QuestionUser[]>> {
    return httpServices.get(ADMIN_STUDENT_URL().GET_LIST_PARTS, params);
  }
  // getListParts(params: any) {
  //   return httpServices.get(ADMIN_STUDENT_URL().GET_LIST_PARTS, params);
  // }

  getPartDetail(id: any) {
    return httpServices.get(ADMIN_STUDENT_URL().GET_PART_DETAIL + id);
  }
  postCreatePart(body: any) {
    return httpServices.post(ADMIN_STUDENT_URL().POST_CREATE_PART, body);
  }

  deletePart(id: any) {
    return httpServices.delete(ADMIN_STUDENT_URL().DELETE_PART + id);
  }
  patchUpdatePart(id: any, body: any) {
    return httpServices.patch(ADMIN_STUDENT_URL().PATCH_UPDATE_PART + id, body);
  }
}
export default new studentService();
