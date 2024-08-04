const initialState = {
  search: '',
  currentPage: 1,
  totalPages: null,
  isSearching: false,
  sortBy: { normalized_name: 'Newest', name: 'newest' },
  sortByOptions: [
    { normalized_name: 'Newest', name: 'newest' },
    { normalized_name: 'Oldest', name: 'oldest' },
    { normalized_name: 'Most viewed', name: 'mostViewed' },
    { normalized_name: 'Least viewed', name: 'leastViewed' },
    { normalized_name: 'Most commented', name: 'mostCommented' },
    { normalized_name: 'Least commented', name: 'leastCommented' },
  ],
};

export default initialState;
