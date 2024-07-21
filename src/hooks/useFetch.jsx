import { useEffect, useState } from 'react';
import sendHttpRequest from '../services/sendHttpRequest';

const useFetch = (fetchSettings) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetLoadingAndSuccessState = () => {
    setIsLoading(true);
    setIsSuccess(false);
  };

  useEffect(() => {
    resetLoadingAndSuccessState();

    const controller = new AbortController();
    const { url, settings = {} } = fetchSettings();
    settings.signal = controller.signal;

    (async () => {
      try {
        const fetchedData = await sendHttpRequest(url, settings);
        setData(fetchedData);
        setIsSuccess(true);
      } catch (fetchError) {
        setError(fetchError);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [fetchSettings]);

  return {
    data,
    error,
    isLoading,
    isSuccess,
  };
};

export default useFetch;
