import { useHistory } from "react-router-dom";
import queryString from "query-string";

const useGetQuerystring = () => {
  const history = useHistory();

  const locationSearch = history?.location?.search || "";

  return queryString.parse(locationSearch);
};

export default useGetQuerystring;
