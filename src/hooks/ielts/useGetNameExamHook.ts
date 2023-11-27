import React, { useMemo } from "react";

const useGetNameExam = (name: string) => {
  const examName = useMemo(() => {
    return localStorage.getItem(name) || "";
  }, []);

  return { examName };
};

export default useGetNameExam;
