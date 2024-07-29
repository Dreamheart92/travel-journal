const sentHttpRequest = async (url, settings) => {
  try {
    const response = await fetch(url, settings);

    if (response.status === 204) {
      return response;
    }

    const result = await response.json();

    if (result.success) {
      return result;
    }

    throw result;
  } catch (error) {
    if (typeof error.success !== 'undefined') {
      throw error;
    }
    throw new Error('Something went wrong. Please try again.');
  }
};

export default sentHttpRequest;
