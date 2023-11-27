import { useEffect, useState } from "react";
import ReadingService from "services/ReadingService";

const useGetQuestionType = () => {
  const [dataQuestionType, setDataQuestionType] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ReadingService.getListQuestionType();
        if (response.data.statusCode === 200) {
          setDataQuestionType(response?.data?.data || []);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return [dataQuestionType, loading, error];
};

export default useGetQuestionType;
