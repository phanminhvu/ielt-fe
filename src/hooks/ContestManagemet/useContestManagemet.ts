import { PAGE_SIZE } from "constants/constants";
import MContestManagemet from "models/ContestManagemet/ContestManagemet.model";
import MPagination from "models/Pagination.model";
import { useEffect, useState } from "react";
import contestService from "services/contestService";

const useContestManagemet = () => {
  const [dataContest, setDataContest] = useState<MContestManagemet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [metaPart, setMetaPart] = useState<MPagination>({
    page: 0,
    pageSize: 100,
    totalRow: 0,
  });
  const [params, setParams] = useState({
    page: 1,
    pageSize: 100,
  });

  const refetchDataTable = async () => {
    setParams({
      page: 1,
      pageSize: 100,
    });
  };

  const fetchData = async () => {
    try {
      const response = await contestService.getListExamination(params);

      if (response.data.statusCode === 200) {
        const parts = MContestManagemet.parsePartListFromResponse(response?.data?.data?.data || []);
        setDataContest(parts);
        setMetaPart(MPagination.parsePaginationFromResponse(response?.data?.data?.paging));
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [params]);

  const refresh = () => {
    fetchData();
  };

  const onPageChange = (page: number) => {
    setParams({ ...params, page });
  };
  const onPageSizeChange = (pageSize: number) => {
    setParams({ pageSize, page: 1 });
  };

  return [dataContest, loading, error, refetchDataTable, metaPart, onPageChange, onPageSizeChange, refresh];
};

export default useContestManagemet;
