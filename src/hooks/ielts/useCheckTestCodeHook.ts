import { useHistory } from "react-router-dom";

export const useCheckTestCode = (testCode: number) => {
  if (!testCode) {
    return useHistory().push("/login");
  }
};
