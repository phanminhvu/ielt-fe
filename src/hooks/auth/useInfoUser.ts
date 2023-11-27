import authService from "services/authServices";
import { useEffect, useState } from "react";
import MAuth from "models/Auth";

const useInfoUser = () => {
  const [userDetail, setUserDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authService.getInfoUser();

        if (response.data.statusCode === 200) {
          setUserDetail(response.data.data.userType || []);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return [userDetail, loading, error];
};

export default useInfoUser;
