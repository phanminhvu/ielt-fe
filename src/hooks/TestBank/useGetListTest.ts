import { PAGE_SIZE } from "constants/constants";
import MPagination from "models/Pagination.model";
import MTest from "models/TestBank/Test.model";
import { useEffect, useState } from "react";
import testBankService from "services/testBankService";

const useGetListTest = () => {
  const [dataTest, setDataTest] = useState<MTest[]>([]);
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
        const response = await testBankService.getListTest(params);
        if (response.data.statusCode === 200) {
          const test = MTest.parsePartListFromResponse(response?.data?.data?.data || []);

          setDataTest(test);
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

  return [dataTest, loading, error, refetchDataTable, metaPart, onPageChange, onPageSizeChange];
};

export default useGetListTest;
