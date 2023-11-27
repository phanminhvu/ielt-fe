import listeningService  from 'services/listeningService';
import { useEffect, useState } from "react";


const useGetQuestionType = () => {
  const [dataQuestionType, setDataQuestionType] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await listeningService.getListQuestionType();
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
