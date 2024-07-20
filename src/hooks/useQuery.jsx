import { useSearchParams } from 'react-router-dom';

const useQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleQuery = (queryKey, queryValue) => {
    setSearchParams((prevParams) => {
      prevParams.set(queryKey, queryValue);
      return prevParams;
    });
  };

  return {
    searchParams,
    onQuery: handleQuery,
  };
};

export default useQuery;
