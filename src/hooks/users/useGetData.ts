import { TypeExamEnum } from "constants/enum";
import { useState, useEffect } from "react";
import httpServices from "services/httpServices";

const useGetData = (panelId: TypeExamEnum) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);

  //! Function
  const limit = 5;
  const pageCount = Math.ceil(total / 5);

  useEffect(() => {
    const fetchData = async () => {
      let endpoint = "users";
      // if (panelId === TypeExamEnum.READING) {
      //   endpoint = "posts";
      // }

      try {
        setLoading(true);
        const res = await httpServices.get(
          `https://jsonplaceholder.typicode.com/${endpoint}?_page=${page}&_limit=${limit}`
        );
        const total = Number(res.headers["x-total-count"]);
        setData(res.data);
        setTotal(total);
        setLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, [panelId, page]);

  const handleNextPage = () => setPage(page + 1);

  const handleBackPage = () => setPage(page - 1);

  const handleChangePage = (page: number) => setPage(page);

  return {
    data,
    total,
    page,
    pageCount,
    isLoading,
    handleNextPage,
    handleBackPage,
    handleChangePage,
  };
};

export default useGetData;
