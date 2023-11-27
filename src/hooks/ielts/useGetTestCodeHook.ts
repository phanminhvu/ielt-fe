import { useMemo } from "react";
export const useGetTestCode = () => {
  const testCode = useMemo(() => {
    return localStorage.getItem("testCode") || "";
  }, []);

  return { testCode };
};
