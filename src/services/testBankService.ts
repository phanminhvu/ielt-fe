import { EXAM_MANAGEMENT_URL, TEST_URL } from "constants/api";
import httpServices from "services/httpServices";
class TestService {
  getListTest(params: any) {
    return httpServices.get(TEST_URL().GET_LIST_TEST, params);
  }
  getTestDetail(id: any) {
    return httpServices.get(TEST_URL().GET_TEST_DETAIL + id);
  }

  postCreateTest(body: any) {
    return httpServices.post(TEST_URL().POST_CREATE_TEST, body);
  }

  putUpdateTest(id: any, body: any) {
    return httpServices.put(TEST_URL().PUT_UPDATE_TEST + id, body);
  }

  deleteTest(id: any) {
    return httpServices.delete(TEST_URL().DELETE_TEST + id);
  }

  generateExam(id: any, body: any) {
    return httpServices.post(TEST_URL(id).GENERATE_EXAM, body);
  }
  getDataExportExcel(id: any) {
    return httpServices.get(TEST_URL(id).GET_DATA_EXPORT_EXCEL);
  }
}

export default new TestService();
