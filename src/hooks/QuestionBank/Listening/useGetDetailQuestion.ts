import MPartReading from "models/Reading/Part.model";
import { useEffect, useState } from "react";
import listeningService  from 'services/listeningService';

const useGetDetailQuestion = (id: any) => {
  const [dataQuestionDetail, setDataQuestionDetail] = useState<MPartReading>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const refetchData = async () => {
    if (!id) return;
    try {
      const response = await listeningService.getDetailQuestionGroup(id);

      if (response.data.statusCode === 200) {
        setDataQuestionDetail(response?.data?.data || {});
      }
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await listeningService.getDetailQuestionGroup(id);
        if (response.data.statusCode === 200) {
          setDataQuestionDetail(response?.data?.data || {});
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  return [dataQuestionDetail, loading, error, refetchData];
};

export default useGetDetailQuestion;
