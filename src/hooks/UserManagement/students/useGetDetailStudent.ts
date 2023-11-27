import UserPart from "models/Reading/UserPart";
import { useEffect, useState } from "react";
import userService from "services/userService";

const useGetDetailStudent = (id: any) => {
  const [dataPartDetail, setDataPartDetail] = useState<UserPart[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const refetchData = async () => {
    if (!id) return;
    try {
      const response = await userService.getPartDetail(id);

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
        const response = await userService.getPartDetail(id);
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

export default useGetDetailStudent;
