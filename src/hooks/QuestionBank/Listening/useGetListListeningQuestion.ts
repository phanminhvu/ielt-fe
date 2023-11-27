import { useCallback } from "react";
import { useEffect, useState } from "react";
import listeningService from "services/listeningService";

const useGetListListeningQuestion = (id: any) => {
  const [dataListening, setDataListening] = useState([]);
  // const [metaReading, setMetaReading] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const refetchQuestionGroup = useCallback(async () => {
    if (id) {
      try {
        const response = await listeningService.getListQuestionGroup(id);
        if (response.data.statusCode === 200) {
          setDataListening(response?.data?.data || []);
          // setMetaReading(response?.data?.data?.paging || {});
        }
      } catch (error: any) {
        setError(error);
      }
    }
  }, [id, setError, setDataListening, listeningService.getListQuestionGroup]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await listeningService.getListQuestionGroup(id);
        if (response.data.statusCode === 200) {
          setDataListening(response?.data?.data || []);
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

  return [dataListening, loading, error, refetchQuestionGroup];
};

export default useGetListListeningQuestion;
