import { AUTH_URL } from "constants/api";
import httpServices from "services/httpServices";

const USER_LOCAL_STORAGE = "auth";
const USER_TYPE_LOCAL_STORAGE = "userType";
class AuthService {
  signUp(body: any) {
    return httpServices.post(AUTH_URL.SIGNUP, body);
  }

  verifyEmail(body: any, accessToken: any) {
    return httpServices.post(AUTH_URL.VERIFY_EMAIL, body, { headers: { Authorization: `Bearer ${accessToken}` } });
  }

  forgotPassword(body: any) {
    return httpServices.post(AUTH_URL.FORGOT_PASSWORD, body);
  }

  verifyCode(body: any) {
    return httpServices.post(AUTH_URL.VERIFY_CODE, body);
  }

  resetPassword(body: any) {
    return httpServices.post(AUTH_URL.RESET_PASSWORD, body);
  }

  resendCode(accessToken: any) {
    return httpServices.post(AUTH_URL.RESEND_CODE, {}, { headers: { Authorization: `Bearer ${accessToken}` } });
  }

  login(body = { email: "", password: "" }) {
    return httpServices.post(AUTH_URL.LOGIN, body);
  }
  studentLogin(body = { orderNumber: "", studentCode: "" }) {
    return httpServices.post(AUTH_URL.STUDENT_LOGIN, body);
  }

  logout(body = {}) {
    return httpServices.post(AUTH_URL.LOGOUT, body);
  }

  saveUserToLocalStorage(body = {}) {
    localStorage.setItem(USER_LOCAL_STORAGE, JSON.stringify(body));
  }

  saveUserTypeToLocalStorage(body = {}) {
    localStorage.setItem(USER_TYPE_LOCAL_STORAGE, JSON.stringify(body));
  }
  getInfoUser() {
    return httpServices.get(AUTH_URL.AUTH_INFORMATION);
  }
  getUserTypeFromLocalStorage() {
    const user = localStorage.getItem(USER_TYPE_LOCAL_STORAGE);
    if (!!user) {
      return JSON.parse(user);
    }
    return {};
  }

  getUserLocalStorage() {
    const user = localStorage.getItem(USER_LOCAL_STORAGE);

    if (!!user) {
      return JSON.parse(user);
    }
    return {};
  }

  clearUserLocalStorage() {
    localStorage.removeItem(USER_LOCAL_STORAGE);
    localStorage.removeItem(USER_TYPE_LOCAL_STORAGE);
  }
}

export default new AuthService();
