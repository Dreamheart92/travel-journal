const updateDestinationCount = (state, action) => {
  const { destinationId, isAdding } = action.payload;

  const destinationIndex = state.destinations.findIndex((destination) => String(destination._id) === String(destinationId));
  const { count } = state.destinations[destinationIndex];

  state.destinations[destinationIndex] = {
    ...state.destinations[destinationIndex],
    count: isAdding ? count + 1 : count - 1,
  };
};

export { updateDestinationCount };
