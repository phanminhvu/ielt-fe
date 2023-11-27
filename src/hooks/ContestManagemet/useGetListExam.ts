import { PAGE_SIZE } from "constants/constants";
import MExam from "models/ContestManagemet/Exam.model";
import MPagination from "models/Pagination.model";
import { useEffect, useState } from "react";
import contestService from "services/contestService";

const useGetListExam = (id: any) => {
  const [dataExam, setDataExam] = useState<MExam[]>([]);
  const [index, setIndex] = useState<number>(0);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await contestService.getListExamGen(params, id);

        if (response.data.statusCode === 200) {
          const { page, pageSize } = params;

          const list = MExam.parsePartListFromResponse(response?.data?.data?.data || []).map(
            (el: any, index: number) => ({
              ...el,
              stt: pageSize * (page - 1) + index + 1,
            })
          );

          setDataExam(list);
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
    setParams({ pageSize, page: 1 });
  };

  return [dataExam, loading, error, refetchDataTable, metaPart, onPageChange, onPageSizeChange];
};

export default useGetListExam;
