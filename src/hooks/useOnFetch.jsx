import { useState } from 'react';

const useOnFetch = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetch = async (fetchCallback) => {
    setIsLoading(true);

    try {
      const fetchedData = await fetchCallback;
      setData(fetchedData);
    } catch (fetchError) {
      setError(fetchError);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    error,
    isLoading,
    fetch,
  };
};

export default useOnFetch;
