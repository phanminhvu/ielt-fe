import MPagination from "models/Pagination.model";
import { useEffect, useState } from "react";
import AccountManagement from "../../models/AccountManagemet/AccountManagemet.model";
import accountService from "../../services/accountService";

const useAccountManagement = () => {
  const [dataAccount, setDataAccount] = useState<AccountManagement[]>([]);
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
      const response = await accountService.getListAccount(params);

      if (response.data.statusCode === 200) {
        const parts = AccountManagement.parsePartListFromResponse(response?.data?.data?.data || []);
        setDataAccount(parts);
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

  const onFilterUserName = (userName: string) => {
    // @ts-ignore
    setParams({ ...params, page: 1, username: userName, email: "" } as any);
  };

  const onFilterEmail = (email: string) => {
    // @ts-ignore
    setParams({ ...params, page: 1, email: email, userName: "" } as any);
  };

  return [
    dataAccount,
    loading,
    error,
    refetchDataTable,
    metaPart,
    onPageChange,
    onPageSizeChange,
    onFilterUserName,
    onFilterEmail,
  ];
};

export default useAccountManagement;
