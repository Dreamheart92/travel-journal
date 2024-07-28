const sentHttpRequest = async (url, settings) => {
  try {
    const response = await fetch(url, settings);

    if (response.status === 404) {
      throw response;
    }

    if (response.status === 204) {
      return response;
    }

    const result = await response.json();

    if (result.success) {
      return result;
    }

    throw result;
  } catch (error) {
    throw error;
  }
};

export default sentHttpRequest;
