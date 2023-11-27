import { AUTH_URL } from "constants/api";
import httpServices from "services/httpServices";

class SocialServices {
  loginSocial(body: any) {
    return httpServices.post(AUTH_URL.LOGIN_SOCIAL, body);
  }
}

export default new SocialServices();
