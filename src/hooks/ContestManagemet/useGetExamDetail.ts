import { useEffect, useState } from "react";
import contestService from "services/contestService";
import MContestManagemet from "models/ContestManagemet/ContestManagemet.model";
import MExam from "models/ContestManagemet/Exam.model";

const useGetExamDetail = (id?: any, examId?: any) => {
  const [examDetail, setExamDetail] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const refetchData = async () => {
    if (!examId) return;
    try {
      const response = await contestService.getListExamDetailGen(id, examId);

      if (response.data.statusCode === 200) {
        setExamDetail(response?.data?.data || {});
      }
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await contestService.getListExamDetailGen(id, examId);
        if (response.data.statusCode === 200) {
          setExamDetail(response?.data?.data || {});
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    if (examId) {
      fetchData();
    }
  }, [examId]);

  return [examDetail, loading, error, refetchData];
};

export default useGetExamDetail;
