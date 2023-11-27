import MPartReading from "models/Reading/Part.model";
import { useEffect, useState } from "react";
import speakingService from "services/speakingService";

const useGetPartDetail = (id: any) => {
  const [dataPartDetail, setDataPartDetail] = useState<MPartReading>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const refetchData = async () => {
    if (!id) return;
    try {
      const response = await speakingService.getPartDetail(id);

      if (response.data.statusCode === 200) {
        setDataPartDetail(response?.data?.data || {});
      }
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await speakingService.getPartDetail(id);
        if (response.data.statusCode === 200) {
          setDataPartDetail(response?.data?.data || {});
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

  return [dataPartDetail, loading, error, refetchData];
};

export default useGetPartDetail;
