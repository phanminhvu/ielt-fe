export const useGetExamValueFromLocalStorage = () => {
  const examValue: any = localStorage.getItem("answers");
  let parseExamValue = "";
  if (examValue) {
    parseExamValue = JSON.parse(examValue);
  }

  return { examValues: parseExamValue };
};
