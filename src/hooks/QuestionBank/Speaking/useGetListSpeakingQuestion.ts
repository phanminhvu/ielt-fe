import { useCallback } from "react";
import { useEffect, useState } from "react";
import speakingService from "services/speakingService";

const useGetListSpeakingQuestion = (id: any) => {
  const [dataSpeaking, setDataSpeaking] = useState([]);
  // const [metaReading, setMetaReading] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const refetchQuestionGroup = useCallback(async () => {
    if (id) {
      try {
        const response = await speakingService.getListQuestionGroup(id);
        if (response.data.statusCode === 200) {
          setDataSpeaking(response?.data?.data || []);
          // setMetaReading(response?.data?.data?.paging || {});
        }
      } catch (error: any) {
        setError(error);
      }
    }
  }, [id, setError, setDataSpeaking, speakingService.getListQuestionGroup]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await speakingService.getListQuestionGroup(id);
        if (response.data.statusCode === 200) {
          setDataSpeaking(response?.data?.data || []);
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

  return [dataSpeaking, loading, error, refetchQuestionGroup];
};

export default useGetListSpeakingQuestion;
