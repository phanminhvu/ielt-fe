import { Search } from "@mui/icons-material";
import { useContext, createContext, useRef, useMemo } from "react";

const LocationContext = createContext<{ initialPathName: string }>({ initialPathName: window.location.pathname });

interface LocationProviderI {
  children: React.ReactNode;
}

export const useGetLocation = () => useContext(LocationContext);

const LocationProvider = (props: LocationProviderI) => {
  const pathname = useRef(window.location.pathname);
  const search = useRef(window.location.search);

  //* initialPathName -> get first pathname that user input on url
  const valueMemo = useMemo(
    () => ({
      initialPathName: pathname.current + search.current,
    }),
    []
  );

  return <LocationContext.Provider value={valueMemo}>{props.children}</LocationContext.Provider>;
};

export default LocationProvider;
