import { PAGE_SIZE } from "constants/constants";
import MPagination from "models/Pagination.model";
import MQuestionWriting from "models/Writing/Question.model";
import { useEffect, useState } from "react";
import writingServices from "services/writingServices";

const useGetQuestion = () => {
  const [dataQuestion, setDataQuestion] = useState<MQuestionWriting[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [metaPart, setMetaPart] = useState<MPagination>({
    page: 0,
    pageSize: PAGE_SIZE[0],
    totalRow: 0,
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
        const response = await writingServices.getListQuestion(params);
        if (response.data.statusCode === 200) {
          const parts = MQuestionWriting.parsePartListFromResponse(response?.data?.data?.data || []);
          setDataQuestion(parts);
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

  return [dataQuestion, loading, error, refetchDataTable, metaPart, onPageChange, onPageSizeChange];
};

export default useGetQuestion;
