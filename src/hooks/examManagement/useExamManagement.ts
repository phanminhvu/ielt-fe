import { PAGE_SIZE } from "constants/constants";
import MPagination from "models/Pagination.model";
import { useEffect, useState } from "react";
import examServices from "services/examServices";

const useExamManagement = (skill?: any, isGrade?: any) => {
  const [dataExam, setDataExam] = useState<any[]>([]);
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
    code : null as any,
    name : ''
  });

  const refetchDataTable = async () => {
    setParams({
      page: 1,
      pageSize: 100,
      name : '',
      code : null as any,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await examServices.getListTestGrade(params);

        if (response.data.statusCode === 200) {
          // const parts = MExamManagement.parsePartListFromResponse(response?.data?.data?.data || []);
          setDataExam(response?.data?.data?.data || []);
          setMetaPart(MPagination.parsePaginationFromResponse(response?.data?.data?.paging));
        }
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
    setParams({ ...params, pageSize, page: 1 });
  };

  const onFilterCode = (code: number) => {
    // @ts-ignore
    setParams({ ...params, page: 1, code, name : '' });
  };

  const onFilterName = (name: string) => {
    // @ts-ignore
    setParams({ ...params, page: 1 ,
      name , code : null });
  };

  return [dataExam, loading, error, refetchDataTable, metaPart, onPageChange, onPageSizeChange, onFilterName, onFilterCode];
};

export default useExamManagement;
