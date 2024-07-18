import { useEffect, useState } from 'react';

const useFetch = (fetchFunction) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchFunction();
        setData(fetchedData);
      } catch (fetchError) {
        setError(fetchError);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading,
  };
};

export default useFetch;
