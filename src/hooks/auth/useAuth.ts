import { showSuccess } from "./../../helpers/toast";
import { getErrorMsg } from "./../../helpers/index";
import { showError } from "helpers/toast";
import { useMutation } from "react-query";
import authService from "services/authServices";

export const useSignUp = () => {
  return useMutation(authService.signUp, {
    onError: (error) => showError(getErrorMsg(error)),
    onSuccess: (response: any) => showSuccess(response?.data?.message),
  });
};

export const useLogin = () => {
  return useMutation(authService.login, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};
export const studentLogin = () => {
  return useMutation(authService.studentLogin, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};

export const useLogout = () => {
  return useMutation(authService.logout);
};
