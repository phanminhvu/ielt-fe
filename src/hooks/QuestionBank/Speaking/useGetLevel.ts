import { useEffect, useState } from "react";
import ReadingService from "services/ReadingService";

const useGetLevels = () => {
  const [dataLevel, setDataLevel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ReadingService.getListLevels();
        if (response.data.statusCode === 200) {
          setDataLevel(response.data.data.map((el: any) => ({ label: el, value: el })));
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return [dataLevel, loading, error];
};

export default useGetLevels;
