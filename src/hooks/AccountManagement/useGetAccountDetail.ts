import { useEffect, useState } from "react";
import accountService from "../../services/accountService";

const useGetAccountDetail = (id?: any) => {
  const [accountDetail, setAccountDetail] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const refetchData = async () => {
    if (!id) return;
    try {
      const response = await accountService.getAccountDetail(id);

      if (response.data.statusCode === 200) {
        setAccountDetail(response?.data?.data || {});
      }
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await accountService.getAccountDetail(id);
        if (response.data.statusCode === 200) {
          setAccountDetail(response?.data?.data || {});
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

  return [accountDetail, loading, error, refetchData];
};

export default useGetAccountDetail;
