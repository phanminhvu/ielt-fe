import React, { useState, useMemo } from "react";
interface HandleQuestionI {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const HandleQuestionContext = React.createContext<HandleQuestionI | null>(null);

export const useHandleQuestion = () => React.useContext(HandleQuestionContext);

const HandleQuestionProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState(1);

  const value = useMemo(() => {
    return {
      page: page,
      setPage: setPage,
    };
  }, [page, setPage]);

  return <HandleQuestionContext.Provider value={value}>{children}</HandleQuestionContext.Provider>;
};

export default HandleQuestionProvider;
