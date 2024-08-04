const initialState = {
  search: '',
  currentPage: 1,
  totalPages: null,
  isSearching: false,
  sortBy: { normalized_name: 'Newest', name: 'newest' },
  sortByOptions: [
    { normalized_name: 'Newest', name: 'newest' },
    { normalized_name: 'Oldest', name: 'oldest' },
    { normalized_name: 'Most Commented', name: 'mostCommented' },
    { normalized_name: 'Least Commented', name: 'leastCommented' },
  ],
};

export default initialState;
