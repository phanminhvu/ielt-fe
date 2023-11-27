import { EXAM_MANAGEMENT_URL } from "constants/api";
import httpServices from "services/httpServices";
class ExamServices {
  getListTestGrade(params: any) {
    return httpServices.get(EXAM_MANAGEMENT_URL().GET_LIST_TEST_GRADE, params);
  }
  getViewExam(id: any) {
    return httpServices.get(EXAM_MANAGEMENT_URL().GET_LIST_VIEW_EXAM + id);
  }

  patchMark(id: any, body: any) {
    return httpServices.patch(EXAM_MANAGEMENT_URL().PATCH_TEST_GRADE + id, body);
  }
}

export default new ExamServices();
