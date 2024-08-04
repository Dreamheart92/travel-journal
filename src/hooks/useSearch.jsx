import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from '../store/search/selectors';
import { searchActions } from '../store/search';

const useSearch = () => {
  const dispatch = useDispatch();

  const {
    search,
    currentPage,
    totalPages,
    isSearching,
    sortByOptions,
    sortBy,
  } = useSelector(selectSearch);

  const handleSearch = (searchValue) => {
    dispatch(searchActions.setSearch({ search: searchValue }));
  };

  const handleSortBy = (option) => {
    dispatch(searchActions.setSortBy({ option }));
  };

  const handleResetState = () => {
    dispatch(searchActions.resetState());
  };

  return {
    search,
    currentPage,
    totalPages,
    isSearching,
    onSearch: handleSearch,
    resetSearch: handleResetState,
  };
};

export default useSearch;
