import { useEffect, useState } from 'react';
import sendHttpRequest from '../services/sendHttpRequest';

const useFetch = (fetchCallback) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetLoadingAndSuccessState = () => {
    setIsLoading(true);
    setIsSuccess(false);
  };

  useEffect(() => {
    const controller = new AbortController();
    resetLoadingAndSuccessState();

    const fetchData = async () => {
      try {
        const fetchedData = await sendHttpRequest(
          {
            ...fetchCallback(),
            signal: controller.signal,
          },
        );
        setData(fetchedData);
        setIsSuccess(true);
      } catch (fetchError) {
        setError(fetchError);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [fetchCallback]);

  return {
    data,
    error,
    isLoading,
    isSuccess,
  };
};

export default useFetch;
