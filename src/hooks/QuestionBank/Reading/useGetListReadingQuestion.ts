import { useCallback } from "react";
import { useEffect, useState } from "react";
import ReadingService from "services/ReadingService";

const useGetListReadingQuestion = (id: any) => {
  const [dataReading, setDataReading] = useState([]);
  // const [metaReading, setMetaReading] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const refetchQuestionGroup = useCallback(async () => {
    if (id) {
      try {
        const response = await ReadingService.getListQuestionGroup(id);
        if (response.data.statusCode === 200) {
          setDataReading(response?.data?.data || []);
          // setMetaReading(response?.data?.data?.paging || {});
        }
      } catch (error: any) {
        setError(error);
      }
    }
  }, [id, setError, setDataReading, ReadingService.getListQuestionGroup]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ReadingService.getListQuestionGroup(id);
        if (response.data.statusCode === 200) {
          setDataReading(response?.data?.data || []);
          // setMetaReading(response?.data?.data?.paging || {});
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


  return [dataReading, loading, error, refetchQuestionGroup];
};

export default useGetListReadingQuestion;
