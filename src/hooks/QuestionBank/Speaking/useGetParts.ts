import { PAGE_SIZE } from "constants/constants";
import { QuestionListening } from "interfaces/listening";
import MPagination from "models/Litstening/Pagination.model";
import { useEffect, useState } from "react";
import speakingService from "services/speakingService";

const useGetParts = () => {
  const [data, setData] = useState<QuestionListening[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [meta, setMeta] = useState<MPagination>({
    page: 0,
    pageSize: PAGE_SIZE[0],
    total: 0,
  });

  const [params, setParams] = useState({
    page: 1,
    pageSize: PAGE_SIZE[0],
  });

  const refetchDataTable = async () => {
    setParams({
      page: 1,
      pageSize: PAGE_SIZE[0],
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await speakingService.getListParts(params);
        const dataRes = response?.data?.data?.data || [];
        const metaRes = response?.data?.data?.paging || {};
        setData(dataRes);
        setMeta(metaRes);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  const onPageChange = (page: number) => {
    setParams({ ...params, page });
  };
  const onPageSizeChange = (pageSize: number) => {
    setParams({ pageSize, page: 1 });
  };

  return { data, loading, error, refetchDataTable, meta, onPageChange, onPageSizeChange };
};

export default useGetParts;
