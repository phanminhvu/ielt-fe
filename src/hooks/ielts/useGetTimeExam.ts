export const useGetTimeExam = (exam: string) => {
  const timeExam = localStorage.getItem(exam) ?? "";
  return { timeExam };
};
