import initialState from './initialState';

const setSearch = (state, action) => {
  state.search = action.payload.search;
  state.isSearching = true;
};

const setTotalPages = (state, action) => {
  state.totalPages = action.payload.totalPages;
};

const setCurrentPage = (state, action) => {
  state.currentPage = action.payload.page;
};

const setSortBy = (state, action) => {
  state.sortBy = action.payload.option;
};

const resetState = () => initialState;

export {
  setSearch,
  setTotalPages,
  setCurrentPage,
  setSortBy,
  resetState,
};
