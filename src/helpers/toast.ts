import { toast } from "react-toastify";

export const showSuccess = (msg = "", options = {}) => {
  toast.success(msg);
};

export const showError = (msg = "", options = {}) => {
  toast.error(msg);
};
