import { ADMIN_CONTEST_URL } from "../constants/api";
import httpServices from "./httpServices";

class userService {
  getListExamination(params: any = {}) {
    return httpServices.get(ADMIN_CONTEST_URL().GET_LIST_EXAMINATION, params);
  }

  getListExamGen(params: any = {}, id: any) {
    return httpServices.get(ADMIN_CONTEST_URL(id).GET_LIST_EXAM_GENERATE, params);
  }

  getListExamDetail(id: any) {
    return httpServices.get(ADMIN_CONTEST_URL(id).GET_EXAMINATION_DETAIL + id);
  }

  getListExamDetailGen(id: any, examId?: any) {
    return httpServices.get(ADMIN_CONTEST_URL(id).GET_LIS_EXAM_GENERATE_DETAIL + examId);
  }

  postCreateExamination(body: any) {
    return httpServices.post(ADMIN_CONTEST_URL().POST_CREATE_EXAMINATION, body);
  }
  deleteExamination(id: any) {
    return httpServices.delete(ADMIN_CONTEST_URL().DELETE_EXAMINATION + id);
  }
  putUpdateExamination(id: any, body: any) {
    return httpServices.put(ADMIN_CONTEST_URL().PUT_UPDATE_EXAMINATION + id, body);
  }

  getDataExportExcel(id: any) {
    return httpServices.get(ADMIN_CONTEST_URL(id).GET_DATA_EXPORT_EXCEL);
  }
}
export default new userService();
