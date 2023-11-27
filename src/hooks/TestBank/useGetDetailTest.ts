import MPartReading from "models/Reading/Part.model";
import MTest from "models/TestBank/Test.model";
import { useEffect, useState } from "react";
import testBankService from "services/testBankService";

const useGetDetailTest = (id: any) => {
  const [dataTestDetail, setDataTestDetail] = useState<MTest>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const refetchData = async () => {
    if (!id) return;
    try {
      const response = await testBankService.getTestDetail(id);

      if (response.data.statusCode === 200) {
        setDataTestDetail(response?.data?.data || {});
      }
    } catch (error: any) {
      setError(error);
    }
  };

  const convertListening = dataTestDetail?.listeningDetail?.map((el: any) => ({
    label: el?.partTitle,
    value: el?._id,
  }));

  const convertReading = dataTestDetail?.readingDetail?.map((el: any) => ({
    label: el?.passageTitle,
    value: el?._id,
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await testBankService.getTestDetail(id);
        if (response.data.statusCode === 200) {
          setDataTestDetail(response?.data?.data || {});
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

  return [dataTestDetail, convertListening, convertReading, loading, error, refetchData];
};

export default useGetDetailTest;
