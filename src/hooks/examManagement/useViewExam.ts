import MPartReading from "models/Reading/Part.model";
import { useEffect, useState } from "react";
import examServices from "services/examServices";

const useViewExam = (id: any) => {
  const [dataDetailExam, setDataDetailExam] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const refetchData = async () => {
    if (!id) return;
    try {
      const response = await examServices.getViewExam(id);

      if (response.data.statusCode === 200) {
        setDataDetailExam(response?.data?.data || {});
      }
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await examServices.getViewExam(id);
        if (response.data.statusCode === 200) {
          setDataDetailExam(response?.data?.data || {});
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

  return [dataDetailExam, loading, error, refetchData];
};

export default useViewExam;
