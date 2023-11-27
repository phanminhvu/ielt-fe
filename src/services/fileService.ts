import { POST_FILE_EXCEL } from "constants/api";
import httpServices from "./httpServices";

class audioService {
  postFileExcel(body: any) {
    return httpServices.post(POST_FILE_EXCEL, body);
  }
}
export default new audioService();
