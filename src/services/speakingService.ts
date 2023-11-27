import { ADMIN_SPEAKING_URL, GET_LIST_LEVELS } from "./../constants/api";
import httpServices from "./httpServices";

class speakingService {
  postCreateQuestionGroupSpeaking(body: any) {
    return httpServices.post(ADMIN_SPEAKING_URL().POST_LIST_SPEAKING_QUESTIONS, body);
  }
  getListParts(params: any = {}) {
    return httpServices.get(ADMIN_SPEAKING_URL().GET_LIST_PARTS, params);
  }
  getPartDetail(id: any) {
    return httpServices.get(ADMIN_SPEAKING_URL().GET_PART_DETAIL + id);
  }
  postCreatePart(body: any) {
    return httpServices.post(ADMIN_SPEAKING_URL().POST_CREATE_PART, body);
  }
  getListLevels() {
    return httpServices.get(GET_LIST_LEVELS);
  }
  getListQuestionType() {
    return httpServices.get(ADMIN_SPEAKING_URL().GET_LIST_QUESTION_TYPE);
  }

  deletePart(id: any) {
    return httpServices.delete(ADMIN_SPEAKING_URL().DELETE_PART + id);
  }
  patchUpdatePart(id: any, body: any) {
    return httpServices.patch(ADMIN_SPEAKING_URL().PATCH_UPDATE_PART + id, body);
  }
  getListQuestionGroup(id: any) {
    return httpServices.get(ADMIN_SPEAKING_URL(id).GET_LIST_QUESTION_GROUP);
  }
  getDetailQuestionGroup(id: any) {
    return httpServices.get(ADMIN_SPEAKING_URL(id).GET_DETAIL_QUESTION_GROUP + id);
  }
  deleteQuestionGroup(id: any) {
    return httpServices.delete(ADMIN_SPEAKING_URL().DELETE_QUESTION_GROUP + id);
  }
  patchUpdateQuestionGroup(id: any, body: any) {
    return httpServices.patch(ADMIN_SPEAKING_URL().PATCH_UPDATE_QUESTION_GROUP + id, body);
  }
}
export default new speakingService();
