import { POST_UPLOAD_AUDIO } from "../constants/api";
import httpServices from "./httpServices";

class audioService {
  postAudioListening(body: any) {
    return httpServices.post(POST_UPLOAD_AUDIO, body);
  }
}
export default new audioService();
