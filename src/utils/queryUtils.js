export const buildQueryString = (searchParams) => {
  const queries = [];

  searchParams.entries().forEach(([searchKey, searchValue]) => {
    queries.push(`${searchKey}=${searchValue}`);
  });

  return queries.length > 0 ? `?${queries.join('&')}` : '';
};
