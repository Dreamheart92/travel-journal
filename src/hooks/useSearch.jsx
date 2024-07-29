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
  } = useSelector(selectSearch);

  const handleSearch = (searchValue) => {
    dispatch(searchActions.setSearch({ search: searchValue }));
  };

  return {
    search,
    currentPage,
    totalPages,
    isSearching,
    onSearch: handleSearch,
  };
};

export default useSearch;
